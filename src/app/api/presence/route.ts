import { NextResponse } from 'next/server';

import type { PresenceUpdate } from '@/features/presence/types';
import { allowRequest } from '@/server/presence/rateLimit';
import { getPresenceStore } from '@/server/presence/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const WINDOW_MS = 1_000;
const POST_LIMIT = 12;
const GET_LIMIT = 8;

function clientKey(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'unknown';
  return request.headers.get('x-real-ip') ?? 'unknown';
}

function rateLimited(request: Request, limit: number) {
  const key = `${request.method}:${clientKey(request)}`;
  if (allowRequest(key, limit, WINDOW_MS)) return null;
  return NextResponse.json({ error: 'rate_limited' }, { status: 429 });
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
  const limited = rateLimited(request, POST_LIMIT);
  if (limited) return limited;

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

  await getPresenceStore().upsert(update);
  return NextResponse.json({ ok: true });
}

export async function GET(request: Request) {
  const limited = rateLimited(request, GET_LIMIT);
  if (limited) return limited;

  const { searchParams } = new URL(request.url);
  const exclude = searchParams.get('exclude') ?? undefined;
  const snapshot = await getPresenceStore().snapshot(exclude);

  return NextResponse.json(snapshot, {
    headers: { 'Cache-Control': 'no-store' },
  });
}
