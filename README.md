# Dhrupesh Brahmbhatt, portfolio

Live: https://dhrupeshbrahmbhatt.github.io/portfolio/

Single-page portfolio: backend engineering, forward deployed with aviation operations. Next.js 16 (App Router), static export, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Edit content

Everything the page says lives in `content/profile.ts` (work entries, projects, skills, contact). The page, the structured data (`lib/jsonld.ts`) and the agent files (`/llms.txt`, `/llms-full.txt`, built by `lib/llms.ts`) all read from it, so edit it once. Bump `UPDATED` in `lib/jsonld.ts` when content changes.

## Commands

```bash
npm run dev     # http://localhost:3000/portfolio
npm run build   # static export to out/
npm run lint
```

## Notes

- `basePath` is `/portfolio` (next.config.ts) because Pages serves the repo under that path; `lib/site.ts` mirrors it for plain links to files in `public/`.
- Fonts are self-hosted variable woff2 files in `app/fonts` (Bodoni Moda, Hanken Grotesk; SIL Open Font License).
- The signature intro (`components/SignatureIntro.tsx`) uses outlines generated once from Herr Von Muellerhoff (OFL) into `content/signature.ts`. It is pure CSS, plays on every load, and is skipped on click, key press, or reduced motion.
- Google Analytics loads with `lazyOnload`, after the page is idle.
- Design system: `DESIGN.md`. Product facts: `PRODUCT.md`.
