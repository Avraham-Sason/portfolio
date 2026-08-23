# AGENTS.md

Working notes for AI agents in this repository. Keep it current when the stack, deploy path, or verification changes.

## Project Snapshot

- Personal portfolio site for Avraham Sason. Static, no backend, no database, no authentication.
- Next.js 16 App Router, React 19, TypeScript, Tailwind v4, shadcn/ui primitives, Framer Motion and GSAP for animation.
- Package manager is pnpm; [pnpm-lock.yaml](pnpm-lock.yaml) is the lockfile.
- Live at https://avrahahm-sason-portfolio.vercel.app

## Commands

```bash
pnpm dev         # next dev
pnpm build       # next build
pnpm start       # next start, serves the build
pnpm typecheck   # tsc --noEmit — the only static gate this project has
```

## Deploy

Vercel's git integration builds this repository directly. There is no CI, no workflow file, and no deploy script in the repo.

**A push to `main` is a production deploy.** It reaches the live site within about a minute, with no review step in front of it. A push to any other branch produces a preview deployment instead, which is the safe way to see a build before it is public. Roll back from the Vercel dashboard, or revert the commit and push again.

## Verification

`pnpm typecheck` before every push. It matters more here than the command suggests: [next.config.ts](next.config.ts) sets `ignoreBuildErrors`, so Vercel builds and publishes a type-broken tree without complaining. Nothing else will catch it.

`pnpm build` reproduces what Vercel does and is worth running for changes to layout, metadata, or routing. It is memory-hungry — on the VPS run it over SSH rather than inside a dashboard session, whose cgroup is capped at 4 GB shared with the API.

There are no tests. Visual changes need a browser.

## Notes

- [next.config.ts](next.config.ts) sets `images.unoptimized`, so `sharp` is never used and pnpm skipping its build script is expected.
- No environment variable is required. `NEXT_PUBLIC_SITE_URL` is optional and only overrides the canonical URL in [app/layout.tsx](app/layout.tsx), which otherwise falls back to `VERCEL_URL`.
- [components/ui/](components/ui) holds only the shadcn primitives this site actually uses. Do not add the full set back — an unused primitive with a missing import is what broke `typecheck` before it existed as a command.
- `develop` exists but has diverged from `main` and is not deployed. Work from `main`.
