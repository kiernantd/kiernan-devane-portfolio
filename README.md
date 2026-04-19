# kiernan-devane-portfolio

Personal portfolio for **Kiernan Devane** — a Next.js 16 + React 19 + TypeScript + Tailwind site with an editorial-technical aesthetic.

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Requirements:** Node.js ≥ 20.9 (same as `create-next-app`'s default in Next.js 16).

---

## Project structure

```
kiernan-devane/
├── app/
│   ├── layout.tsx        # Root layout — loads IBM Plex fonts via next/font
│   ├── page.tsx          # Composes the sections; server component
│   └── globals.css       # Tailwind directives + grain texture
├── components/
│   ├── nav.tsx
│   ├── hero.tsx          # "use client" (copy-to-clipboard state)
│   ├── about.tsx
│   ├── work.tsx
│   ├── project-card.tsx  # Hover via Tailwind group-hover, no JS needed
│   ├── stack.tsx
│   ├── contact.tsx
│   ├── footer.tsx
│   └── ui/
│       ├── container.tsx
│       ├── fade-in.tsx   # "use client" — only hook component in the app
│       └── section-marker.tsx
├── lib/
│   └── data.ts           # Typed content: projects, stack, about facts, links
├── public/               # Drop resume.pdf and static assets here
├── tailwind.config.ts    # Design tokens (colors, fonts, keyframes)
├── tsconfig.json         # strict: true, @/* path alias
├── next.config.mjs
└── package.json
```

### Why it's split this way

- **`app/page.tsx` is a server component.** It imports everything else. Only `Hero` and `FadeIn` are client components — everything else renders on the server.
- **`FadeIn` is the single place we reach for React hooks.** It wraps anything that should animate in on scroll via `IntersectionObserver`. Sections stay as server components and simply nest `<FadeIn>` around their content.
- **Hover states use Tailwind `group` / `group-hover`**, not `useState`. That keeps `ProjectCard` and `Nav` on the server and avoids hydration cost.
- **All content lives in `lib/data.ts`** with TypeScript types. Adding a new project = adding an object to the `projects` array.

---

## Customizing

**Add a project.** Open `lib/data.ts` and append to `projects`:

```ts
{
  id: "P04",
  title: "Your new project",
  year: "2026",
  role: "Role · What you did",
  blurb: "One paragraph. Keep it honest and specific.",
  stack: ["TypeScript", "Postgres"],
  command: null,   // or a shell command to show in a terminal pill
  href: null,      // or an external URL
}
```

**Change colors.** Edit `tailwind.config.ts`:

```ts
colors: {
  paper: "#0E0E0C",   // background
  ink: "#F5EFE4",     // text
  accent: "#FF6B35",  // single highlight color
}
```

**Swap fonts.** In `app/layout.tsx`, replace the `IBM_Plex_Serif` / `IBM_Plex_Mono` imports with any other `next/font/google` pair. Keep the `variable` names (`--font-serif`, `--font-mono`) so Tailwind's `font-serif` / `font-mono` classes continue to work.

**Update contact info.** Edit `contactLinks` and `aboutFacts` in `lib/data.ts`.

**Add your résumé.** Drop the PDF at `public/resume.pdf`. The link in `lib/data.ts` already points to `/resume.pdf`.

---

## Deploy to Vercel

The fastest path from local to a live URL:

```bash
# Option A: CLI
npm i -g vercel
vercel

# Option B: Git
# 1. Push this repo to GitHub
# 2. Import it at https://vercel.com/new
# 3. Accept defaults — Vercel detects Next.js automatically
```

For a custom domain (e.g. `kierandevane.dev`), buy it, add it in the Vercel dashboard under Project → Settings → Domains, and point the DNS as Vercel instructs.

---

## Notes on tech choices

- **Next.js 16 App Router + Turbopack.** Default since Next 16; zero config needed.
- **React 19.** Required by Next 16. No legacy APIs in use.
- **`next/font/google`.** Self-hosts IBM Plex at build time — zero runtime font fetches, no layout shift, no `@import` in CSS.
- **Tailwind 3.4.** Custom theme in `tailwind.config.ts`. No runtime CSS-in-JS.
- **`lucide-react`.** Icon set — tree-shakes to only the icons actually imported.

---

## Scripts

```bash
npm run dev     # Turbopack dev server at :3000
npm run build   # Production build
npm run start   # Serve the production build
npm run lint    # ESLint
```
