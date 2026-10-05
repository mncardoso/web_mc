import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const runtime = 'nodejs';

/** Share card — local `public/og.png`, served at `/og`. */
export async function GET() {
  const file = path.join(process.cwd(), 'public', 'og.png');
  const body = await readFile(file);
  return new Response(body, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
