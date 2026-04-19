# kiernan-devane-portfolio

Personal site for **Kiernan Devane** — early-career software engineer, University of Pittsburgh CS '25.

→ **Live:** [kiernan-devane-portfolio.vercel.app](https://kiernan-devane-portfolio.vercel.app) _(update this after first deploy)_

---

## Stack

- **Next.js 16** with the App Router and React Server Components
- **React 19** and **TypeScript** in strict mode
- **Tailwind CSS** with design tokens defined in `tailwind.config.ts`
- **IBM Plex Serif + Mono** loaded via `next/font/google` (self-hosted, zero layout shift)
- **lucide-react** for icons
- **Vercel** for hosting and CI/CD

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Requires Node.js ≥ 20.9.

Useful scripts:

```bash
npm run dev     # Turbopack dev server with Fast Refresh
npm run build   # Production build
npm run start   # Serve the production build
npm run lint    # ESLint
```

---

## Project structure

```
.
├── app/
│   ├── layout.tsx        # Root layout; loads IBM Plex via next/font
│   ├── page.tsx          # Server component; composes sections
│   └── globals.css       # Tailwind directives + film-grain overlay
├── components/
│   ├── nav.tsx           # Server
│   ├── hero.tsx          # Client — copy-to-clipboard state
│   ├── about.tsx         # Server
│   ├── work.tsx          # Server
│   ├── project-card.tsx  # Server — hover via Tailwind group-hover
│   ├── stack.tsx         # Server
│   ├── contact.tsx       # Server
│   ├── footer.tsx        # Server
│   └── ui/
│       ├── container.tsx
│       ├── fade-in.tsx   # Client — IntersectionObserver
│       └── section-marker.tsx
├── lib/
│   └── data.ts           # Typed content source
└── public/
    └── resume.pdf        # Drop the résumé PDF here
```

### Why this structure

All site content lives in `lib/data.ts` as typed arrays. Adding a project means
appending an object; the TypeScript compiler catches typos.

Every section renders on the server. Only two files carry `"use client"`:
`ui/fade-in.tsx` (needs `IntersectionObserver`) and `hero.tsx` (has clipboard
state). Hover states are handled via Tailwind's `group` / `group-hover`
pattern instead of React state, so cards like `ProjectCard` stay on the server.

Design tokens — colors, fonts, animations — live in `tailwind.config.ts`.
Colors are referenced by name (`paper`, `ink`, `accent`) throughout the app,
so a theme change is a three-line edit.

---

## Customizing

**Add a project.** Append to `projects` in `lib/data.ts`:

```ts
{
  id: "P05",
  title: "Your project",
  year: "2026",
  role: "What you did · Where",
  blurb: "One paragraph. Specific, honest, readable.",
  stack: ["TypeScript", "Postgres"],
  command: null,   // or a shell command to show inline
  href: null,      // or an external URL
}
```

**Change the theme.** Edit `tailwind.config.ts`:

```ts
colors: {
  paper: "#0E0E0C",   // background
  ink: "#F5EFE4",     // text
  accent: "#FF6B35",  // the one highlight color
}
```

**Swap fonts.** Replace the `IBM_Plex_Serif` / `IBM_Plex_Mono` imports in
`app/layout.tsx` with any other `next/font/google` pair. Keep the variable
names (`--font-serif`, `--font-mono`) so Tailwind's `font-serif` / `font-mono`
classes continue to resolve.

**Update contact or about.** Edit `contactLinks` and `aboutFacts` in
`lib/data.ts`.

**Add the résumé.** Drop the PDF at `public/resume.pdf`. The download link is
already wired up.

---

## Deploy

Connected to Vercel and deployed from `main` — every push to `main` triggers
a production deploy, every push to another branch gets a preview URL.

To deploy a fresh clone:

```bash
# CLI
npm i -g vercel
vercel

# or at vercel.com/new, import the GitHub repo; Vercel auto-detects Next.js
```

---

## Credits

Design and code by Kiernan Devane.
Film-grain texture is a classic SVG `feTurbulence` trick. Icons from Lucide.
Typography is IBM's Plex family (Apache 2.0).
