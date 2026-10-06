# Miguel Cardoso — presence wave

Personal site for Japan relocation: Three.js terrain, ghost telemetry, and a shared cursor minimap.

## Stack

- **Frontend:** Next.js App Router + React 19 + Three.js
- **Presence:** Upstash Redis in production, in-memory locally (`POST/GET /api/presence`)
- **Tests:** Vitest

## Theme & language

- **Theme / language switches** live in the top nav (EN · 日本語, sun/moon)
- Preferences persist in `localStorage` and apply before paint (no flash)
- Copy lives in `src/i18n/messages.ts`
- Colors in `globals.css`:
  - **KEY** (fixed): `--ink`, `--paper`, `--cyan`, `--grad-start`, `--grad-end`
  - **BASIC** (mode): `--bg`, `--text`, `--panel`, `--line`, …

## Layout

```
src/
  app/                 # routes + /api/presence (+ icon/favicon)
  components/
    wave/              # Three.js background
    hud/               # ghost telemetry
    presence/          # minimap
    work/              # project cards / case studies
  features/presence/   # client hooks + types
  server/presence/     # memory + Redis stores
  data/                # profile, nav, projects, skills
```

## Assets

- **Project media + CVs:** S3 via `src/lib/assets.ts` (`ASSET_BASE`)
- **Logo / OG / favicon / app icons:** in-repo (`public/logo.svg`, `public/og.png`, `src/app/favicon.ico`, `src/app/icon.png`, `src/app/apple-icon.png`)

## Routes

| Path | Content |
|------|---------|
| `/` | Home |
| `/work` | Work index |
| `/work/[slug]` | Case study |
| `/about` | About + Japan facts |
| `/contact` | Contact |
| `/design` | Design work (linked from About) |
| `/japan` | Redirect → `/about#japan` |

## Scripts

```bash
pnpm i
pnpm dev      # http://localhost:3000
pnpm test
pnpm build
```

## Deploy (Netlify)

Site: [miguel-cardoso.com](https://miguel-cardoso.com) → Netlify project `miguel-cardoso`.

```bash
pnpm i
pnpm build
# or: netlify deploy --prod   # after `netlify link`
```

`netlify.toml` pins Node 22 + `@netlify/plugin-nextjs`. Domain/SSL already on that project.

## Presence (hosting)

Local `pnpm dev` always uses memory (even if Upstash keys are in `.env`).

Production **must** have Upstash on the Netlify site or multi-visitor minimap cannot sync (each function isolate has its own Map — you only see yourself):

1. Free Redis at [Upstash](https://console.upstash.com)
2. Netlify → Site configuration → Environment variables (Functions / production):
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
3. Redeploy, then confirm `GET /api/presence` returns header `X-Presence-Backend: redis`

Optional: `PRESENCE_REDIS=1` to force Redis while developing.

Optional analytics / errors:

- `NEXT_PUBLIC_UMAMI_WEBSITE_ID` (+ optional `NEXT_PUBLIC_UMAMI_SCRIPT_URL`)
- `NEXT_PUBLIC_ERROR_WEBHOOK`
