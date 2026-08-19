# DataNova Labz — Portfolio Website

Modern, professional portfolio website for **DataNova Labz**, a software and
data engineering team. Built with Next.js (App Router), TypeScript, and
Tailwind CSS v4. Single-page layout with dark tech theme.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/               App Router entry (layout, page, global styles)
  components/        One component per page section
  data/              Content files — edit these to change site content
```

## Where to update content

| What                       | File                                   |
| -------------------------- | -------------------------------------- |
| Project details            | `src/data/projects.ts`                 |
| Dashboard gallery          | `src/data/dashboards.ts`               |
| Services / Why us / Tech   | `src/components/Services.tsx`, etc.    |
| Email & LinkedIn links     | `src/components/Contact.tsx`, `Footer.tsx` |

### Adding a new project

Append an entry to the `projects` array in `src/data/projects.ts` — no
component changes are needed. The detail view follows a fixed structure
(Project Overview → The Problem → What We Built → The Outcome → Technologies
Used → Architecture). Each project supports:

- `title`, `category`, `overview`
- `problem` (string)
- `solution` (blocks with optional `heading`, `text`, `items`)
- `outcome` (array of strings)
- `tech` (array of tags)
- `flow` (nodes for the architecture diagram visual)
- `callout` (optional highlighted note)
- `image` (optional screenshot path)

### Adding real dashboard screenshots

In `src/data/dashboards.ts`, set the `image` field to the image path (e.g.
`/dashboards/finance-overview.png`, placed in `public/`) and update `name`.
Cards without an `image` show a placeholder chart visual.

## Content notes

- The contact form is a placeholder UI — connect it to an email service or
  CRM backend in `src/components/ContactForm.tsx`.
- `datanovalabz@gmail.com` and the LinkedIn URL in `Contact.tsx` / `Footer.tsx`
  are the current contact details — update them if they change.
