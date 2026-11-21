# yosefabdoh.com

Personal CV and portfolio of Yousef Abdo, full-stack developer in Cairo. One page in English and
Arabic (right to left), with screens from real projects and a printable CV.

## Stack

Vue 3, Pinia, Vite, Tailwind CSS 4 (reset only; components use scoped CSS), self-hosted Signika and
Noto Kufi Arabic. Deployed on Vercel.

## Content

- All copy lives in `src/locales/en.ts` and `src/locales/ar.ts` (same shape, checked by a test).
- Project screenshots are in `public/work/`, each as a 2000px and a 1000px WebP. The Ayma ERP and
  GiftSniper screens were captured from the real frontends running locally on synthetic demo data.
- The CV PDFs in `public/` are printed from the page itself (see the `@media print` rules). After
  editing content, rebuild, run `npm run preview`, and print the page to A4 in English and Arabic
  to refresh `Yousef-Abdo-CV.pdf` and `Yousef-Abdo-CV-ar.pdf`.

## Scripts

```sh
npm install
npm run dev        # local server
npm run build      # type-check and production build
npm run test:unit  # Vitest
npm run lint       # oxlint + ESLint
```
