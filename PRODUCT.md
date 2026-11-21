# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring managers, technical leads and recruiters deciding whether to interview Yousef Abdo
for a developer role. They arrive from a CV, LinkedIn or a GitHub link, usually on a laptop,
sometimes on a phone, and give the page a minute or two. Their job: confirm what he builds,
see proof that it is real, check the work history, and find a way to contact him.

Secondary: Arabic-speaking employers in Egypt and the Gulf, who read the same page in Arabic (RTL).

## Product Purpose

A personal CV and portfolio at yosefabdoh.com. Success is an employer contacting him or
downloading the CV after seeing real screens from his own projects.

## Positioning

A Cairo-based full-stack developer who builds bilingual (Arabic/English, RTL/LTR) business
software end to end, from a .NET 10 + PostgreSQL API to a React 19 interface, plus Python
automation, and who also brings years of hands-on IT support and systems administration
across Egypt, Saudi Arabia and Yemen.

## Operating Context

Evidence comes from his GitHub repositories:

- Ayma ERP (private repo AccountingSaaS-master): multi-tenant accounting/ERP for the Saudi
  market. .NET 10, EF Core, PostgreSQL, FluentValidation, Serilog; React 19, TypeScript,
  TanStack Query/Table, Zod, i18next, Tailwind 4; Vitest, Playwright, xUnit; Docker.
  60 API controllers, ~830 backend test cases, ~100 frontend test files, 18 modules,
  ZATCA e-invoicing work (hash chain, clearance, payload builder) in progress.
- GiftSniper (private repo): Python asyncio + Telethon (MTProto) bot that buys Telegram
  resale gifts under price rules, up to 32 sessions with a shared PostgreSQL lease, SQLite
  history, an authenticated Arabic dashboard in vanilla JS; ~490 tests.
- ServiceBaseye (public repo, live at servicebaseye.com): company website for Service Base
  for Logistics & Construction, Yemen. HTML/CSS/JS.
- ProjectPortal and CarsShop (public, 2019): ASP.NET Web Forms + C# student projects.

Screenshots of Ayma and GiftSniper are captured from the real frontends running locally
against clearly synthetic demo data; no customer or account data is shown.

## Capabilities and Constraints

- Vue 3 + Vite + Tailwind 4 single page, deployed on Vercel. Pinia store holds language.
- Bilingual EN/AR with full RTL; all copy lives in `src/locales/translations.ts`.
- Private repos are described, never linked; public repos are linked.
- No invented testimonials, employers, metrics or titles. Work history, education, awards,
  references and volunteering come from the existing site.

## Brand Commitments

Name as written on the site: Yousef Abdo (يوسف عبده). Domain yosefabdoh.com,
GitHub yosefabdoh. Contact: contact@yosefabdoh.com, github.com/yosefabdoh,
linkedin.com/in/yosefabdoh. The owner asked that the page read as built by a person,
not generated: no template look.
