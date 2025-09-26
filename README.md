# Kechita Next.js Full Site (Production-ready)

This project is a full-featured Next.js + Tailwind site scaffold built to match the Kechita "super site" specification.
Run `scripts/fetch_images.sh` to download curated images into `public/images/` before building locally if you want images bundled.


# CI and Tests

- Run unit/smoke tests: `npm run test`
- Run Playwright E2E locally: `npx playwright test` (requires Playwright install)
- Lighthouse CI: runs in GitHub Actions (`.github/workflows/lhci.yml`) and uploads reports to temporary public storage.
