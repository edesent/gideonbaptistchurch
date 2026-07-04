# Gideon Baptist Church Website

Live church website. Pushes to `main` deploy automatically to production — every commit goes live within a couple of minutes.

## Conventions for editors (human or AI)

- Next.js App Router + Tailwind CSS. Pages live in `src/app/`, reusable sections in `src/components/`.
- Keep the existing look: cream background, brown/gold/burgundy palette, serif headings. Match nearby code style when editing.
- Photos and videos live in `public/` and are referenced by path (e.g. `/pastors.png`).
- No AI-generated or stock-looking imagery — real church photos only.

## How to edit Upcoming Events (most common edit)

Events are a simple list in **`src/data/events.ts`** — no Google Sheet, no database. Each event is one block:

```ts
{
  title: "Event Name",           // bold heading on the card
  time: "6:00 PM",               // gold time line under the title
  description: "A sentence or two about the event.",
  month: "AUG",                  // top of the date badge ("AUG" or "SUN")
  day: "24",                     // middle of the badge ("24" or "Every")
  label: "2026",                 // bottom of the badge ("2026" or "Week")
  accent: true,                  // true = burgundy badge for special events, false = brown
},
```

Add, remove, or reorder blocks in the `events` list; the homepage shows them in the same order. The two recurring weekly services (Sunday and Wednesday) should normally stay at the top.

## Where other content lives

| Content | File |
| --- | --- |
| Homepage section order | `src/app/page.tsx` |
| Hero headline & video | `src/components/Hero.tsx` |
| Service times | `src/components/Services.tsx` |
| Contact info / address | `src/components/Contact.tsx` and `src/components/Footer.tsx` |
| Pastor page | `src/app/pastor/page.tsx` |
| Our History | `src/app/history/page.tsx` |
| Statement of Faith | `src/app/statement-of-faith/page.tsx` |
| Give Online (Tithe.ly embed) | `src/app/give/page.tsx` |
| Sermon videos (YouTube) | `src/lib/youtube.ts` + `src/components/VideoGrid.tsx` |

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). Run `npm run build` before pushing if you changed anything beyond text.
