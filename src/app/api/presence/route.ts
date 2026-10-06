import { NextResponse } from 'next/server';

import type { PresenceUpdate } from '@/features/presence/types';
import { allowRequest } from '@/server/presence/rateLimit';
import { classifyPresenceStoreError } from '@/server/presence/redisStore';
import {
  getPresenceBackend,
  getPresenceStore,
} from '@/server/presence/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const WINDOW_MS = 1_000;
/** Per session — clients publish ~4/s; keep headroom without shared-IP collapse. */
const POST_PER_ID = 10;
/** Coarse IP cap against spam (Netlify / offices share one IP). */
const POST_PER_IP = 120;
const GET_PER_IP = 60;

function clientKey(request: Request): string {
  const nf = request.headers.get('x-nf-client-connection-ip');
  if (nf) return nf.trim();
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'unknown';
  return request.headers.get('x-real-ip') ?? 'unknown';
}

function rateLimited(key: string, limit: number) {
  if (allowRequest(key, limit, WINDOW_MS)) return null;
  return NextResponse.json({ error: 'rate_limited' }, { status: 429 });
}

function presenceHeaders(): HeadersInit {
  return {
    'Cache-Control': 'no-store',
    'X-Presence-Backend': getPresenceBackend(),
  };
}

function storeUnavailable(error: unknown) {
  const reason = classifyPresenceStoreError(error);
  console.error('[presence] store failed', reason, error);
  return NextResponse.json(
    { error: 'store_unavailable', reason },
    { status: 503, headers: presenceHeaders() },
  );
}

function parseUpdate(body: unknown): PresenceUpdate | null {
  if (!body || typeof body !== 'object') return null;
  const { id, x, y } = body as Record<string, unknown>;
  if (typeof id !== 'string' || typeof x !== 'number' || typeof y !== 'number') {
    return null;
  }
  return { id, x, y };
}

/** POST: publish cursor. GET: snapshot (?exclude=sessionId). */
export async function POST(request: Request) {
  const ipBlock = rateLimited(`POST:ip:${clientKey(request)}`, POST_PER_IP);
  if (ipBlock) return ipBlock;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const update = parseUpdate(body);
  if (!update) {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 });
  }

  const idBlock = rateLimited(`POST:id:${update.id}`, POST_PER_ID);
  if (idBlock) return idBlock;

  try {
    await getPresenceStore().upsert(update);
  } catch (error) {
    return storeUnavailable(error);
  }

  return NextResponse.json({ ok: true }, { headers: presenceHeaders() });
}

export async function GET(request: Request) {
  const limited = rateLimited(`GET:ip:${clientKey(request)}`, GET_PER_IP);
  if (limited) return limited;

  const { searchParams } = new URL(request.url);
  const exclude = searchParams.get('exclude') ?? undefined;

  try {
    const snapshot = await getPresenceStore().snapshot(exclude);
    return NextResponse.json(snapshot, { headers: presenceHeaders() });
  } catch (error) {
    return storeUnavailable(error);
  }
}
