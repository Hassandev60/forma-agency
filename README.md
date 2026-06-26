# Forma Agency

**A modern digital agency website built from the ground up with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.**

---

## What Is This Project?

Forma Agency is a fully responsive, production-ready **digital agency website** — a single-page web presence that helps creative agencies, design studios, freelancers, and consultancies establish their identity online and convert visitors into clients.

The project takes design inspiration from the popular **Forma agency template** (known from the Bootstrap ecosystem) and reconstructs it entirely using a **modern React-based stack** — replacing the jQuery-dependent, Bootstrap-compiled original with a type-safe, component-driven, server-rendered Next.js application.

---

## The Problem It Solves

### For Digital Agencies and Freelancers

Most small-to-medium agencies and freelance developers face a real paradox: **their website is supposed to sell their technical skills, but they don't have time to build a good one from scratch.** The alternatives they usually reach for have painful trade-offs:

- **Static HTML templates** (Bootstrap, Tailwind CDN) — fast to set up, but not maintainable. They become a mess of global scripts, inline styles, and spaghetti HTML the moment anyone tries to customize them. No component reuse, no type safety, no hot reload, no image optimization.

- **WordPress / Webflow / Squarespace** — drag-and-drop convenience at the cost of performance, customization limits, monthly fees, lock-in, and the awkwardness of an agency using no-code tools to represent themselves.

- **DIY from scratch** — gives full control, but months of work just to get a homepage live. Most agencies don't have that runway.

- **Generic Next.js starters** — good scaffolding, but no real design. They ship with placeholder content and no real sections, leaving developers to build everything from layout to copywriting alone.

**The gap: there was no clean, modern, component-based agency website starter that was both beautifully designed and built on the kind of stack a serious developer would actually want to work with.**

### For Developers Learning Next.js App Router

The Next.js App Router (introduced in Next.js 13 and now the default) represents a fundamental shift in how React apps are built — with Server Components, nested layouts, and file-based routing replacing the old Pages Router entirely. Most tutorials still teach the old way.

Forma Agency serves as a **real-world reference project** for the App Router: a complete website that uses `layout.tsx`, `page.tsx`, and the `/app` directory properly — not just a counter or todo app, but something with a genuine UI, sections, and a reason to exist.

---

## Why This Project Was Built

### Reason 1 — Modernize a Popular Design Pattern

The "Forma" agency website design is widely recognized and used in the Bootstrap community. It has pre-built sections for hero banners, services, portfolios, testimonials, and contact forms — the exact pages every agency needs. But the Bootstrap version comes with a fundamental problem: **it's built on a 2015-era frontend architecture.**

Bootstrap's grid is float/flexbox-based. Customization means editing raw SCSS or overriding global CSS. JavaScript is jQuery. There's no component model, no TypeScript, no build optimization, no lazy loading, no server rendering. For an agency that wants to claim technical credibility, shipping a jQuery website in 2025 is a credibility gap.

This project's goal was to take that proven design and rebuild it **the right way** — with the actual tools a modern React developer would use, making it maintainable, extensible, and fast by default.

### Reason 2 — Next.js 16 + React 19 as the Right Foundation

The choice of **Next.js 16** and **React 19** (the bleeding-edge versions at time of build) was intentional:

**Next.js App Router** (`/app` directory) gives the project:
- **Server Components by default** — pages load fast because most rendering happens on the server, and only interactive parts ship JavaScript to the browser.
- **Nested layouts** — the navbar and footer defined once in `layout.tsx` wrap every page without re-rendering on navigation, which is how real websites should work.
- **Built-in image optimization** — `next/image` automatically handles WebP conversion, lazy loading, and responsive sizes without any configuration.
- **Font optimization** — `next/font` loads the Geist typeface inline, eliminating layout shift and removing the external Google Fonts request that adds latency.
- **File-based routing** — adding a new page is just creating a folder with a `page.tsx`. No router config, no imports to update.

**React 19** brings concurrent rendering by default, which means smoother interactions and better performance on scroll-heavy pages like this one.

**TypeScript 5** means every component prop is typed, every section's data structure is explicit, and refactoring doesn't break silently.

### Reason 3 — Tailwind CSS v4 Over Bootstrap

Bootstrap 5 is a complete design system — grids, components, utilities, JS plugins, all in one package. That's convenient but it comes with real downsides: large CSS bundle (even after purging), opinionated class names that fight back when you go off-template, and a constraint on design freedom.

**Tailwind CSS v4** was chosen because:
- Every style is **utility-first and purposeful** — no unused CSS ships to production.
- It works directly in TSX without switching to SCSS files, keeping design and structure co-located.
- The v4 release drops the JavaScript config file entirely, replacing it with a CSS-native approach that integrates directly with PostCSS — faster builds, simpler setup.
- Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) make the fully-responsive layout readable and explicit rather than hidden inside Bootstrap's grid columns.

### Reason 4 — A Portfolio-Quality Reference for Real Projects

The project was built to demonstrate professional full-stack frontend engineering:

- Clean App Router architecture that follows Next.js conventions strictly.
- TypeScript throughout — no `any`, no implicit types.
- Component-based thinking applied to a marketing website — each section (Hero, Services, Portfolio, Testimonials, Contact) lives in its own file with its own scope.
- Deployment-ready for Vercel with zero configuration, demonstrating the full path from code to live URL.

It's the kind of project that doubles as a **portfolio piece for the developer** and a **usable product for a client** — not a tutorial toy, but something real.

---

## Tech Stack

| Technology | Version | Why |
|---|---|---|
| **Next.js** | 16.2.9 | App Router, SSR, image and font optimization |
| **React** | 19.2.4 | Concurrent rendering, Server Components |
| **React DOM** | 19.2.4 | Browser rendering layer |
| **TypeScript** | ^5 | Type safety across all components |
| **Tailwind CSS** | ^4 | Utility-first styling, zero unused CSS |
| **@tailwindcss/postcss** | ^4 | Integrates Tailwind into the PostCSS pipeline |
| **ESLint** | ^9 | Code quality and Next.js-specific linting rules |

---

## Project Architecture

```
forma-agency/
│
├── app/                        # Next.js App Router root
│   ├── layout.tsx              # Root shell — fonts, metadata, navbar, footer
│   ├── page.tsx                # Home page — assembles all sections
│   └── globals.css             # Tailwind v4 base + global resets
│
├── public/                     # Static assets served at root URL
│   └── (images, icons, fonts)
│
├── next.config.ts              # Next.js config (image domains, env vars)
├── postcss.config.mjs          # PostCSS pipeline (Tailwind v4)
├── tsconfig.json               # TypeScript strict config + path aliases
├── eslint.config.mjs           # ESLint flat config (Next.js rules)
└── package.json                # Dependencies and scripts
```

### How the App Router Structure Works

`layout.tsx` is the **persistent shell**. It renders once and never re-mounts between navigations. It holds the global font loading (`next/font/google` with Geist), the `<html>` and `<body>` tags, metadata defaults, and any top-level UI like a navigation bar. This means the navbar doesn't flash or reload when users click links — it's always present.

`page.tsx` at the root (`/`) is the **home page**. It imports and assembles all the website's sections in order — Hero, About, Services, Portfolio, Testimonials, Contact — composing them into a single-page layout. Adding new pages (e.g. a blog at `/blog`) is as simple as creating `app/blog/page.tsx`.

`globals.css` uses **Tailwind v4's CSS-native syntax** (`@import "tailwindcss"` rather than the old `@tailwind base/components/utilities` directives), reflecting the major architecture change in Tailwind v4.

---

## What the Website Contains

A typical agency website built with this project includes these sections:

**Navigation** — sticky header with agency logo and links to each section, collapses to a hamburger menu on mobile.

**Hero** — full-screen banner with headline, subheadline, a clear call-to-action button ("Get In Touch" / "View Our Work"), and a background image or gradient that establishes the agency's visual identity on first impression.

**About** — a section introducing the agency's story, values, team size, and what makes it different. Often includes a supporting image and a short list of core strengths.

**Services** — a card-based grid showcasing what the agency offers (e.g. Web Design, Branding, SEO, Motion Graphics, Development). Each card has an icon, title, and one-line description.

**Portfolio** — a filterable gallery of case studies and past work. Each project card shows a thumbnail, project name, and category. Clicking opens a detail view.

**Testimonials** — quotes from real (or placeholder) clients, presented in a carousel or grid format with name, company, and avatar.

**Contact** — a form with fields for name, email, subject, and message, plus the agency's physical address, phone number, and social media links.

**Footer** — copyright line, quick navigation links, and social icons.

---

## Getting Started

### Prerequisites

- Node.js **v18+** (v20 LTS recommended)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Hassandev60/forma-agency.git
cd forma-agency

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads automatically as you edit files.

---

## Available Scripts

| Script | Command | What It Does |
|---|---|---|
| Development | `npm run dev` | Local server with hot reload at port 3000 |
| Build | `npm run build` | Optimized production build (SSR + static export) |
| Start | `npm run start` | Runs the production build locally |
| Lint | `npm run lint` | ESLint check across all TypeScript files |

---

## Customization Guide

### Changing the Agency Name and Brand

1. Open `app/layout.tsx` — update the `metadata` object with your agency name, description, and favicon path.
2. Replace the logo in `public/` with your own SVG or PNG.
3. Update color tokens in `globals.css` — Tailwind v4 uses CSS custom properties (`--color-primary`, etc.) that you can override globally.

### Adding a New Section

1. Create a new component file, e.g. `app/components/TeamSection.tsx`.
2. Write your section as a standard React Server Component (no `"use client"` needed unless the section has interactivity).
3. Import and place it in `app/page.tsx` at the right position.

### Adding a New Page

1. Create a new folder and `page.tsx`, e.g. `app/about/page.tsx`.
2. That's it. Next.js automatically makes it available at `/about`.
3. Add a `<Link href="/about">` in your navbar.

### Connecting a Contact Form Backend

The contact form is currently frontend-only (static HTML). To make it functional:
- Use **Next.js Route Handlers**: create `app/api/contact/route.ts` to handle `POST` requests.
- Send email via **Nodemailer**, **Resend**, or **SendGrid**.
- Or use a no-code service like **Web3Forms**, **Formspree**, or **EmailJS** that accepts form submissions without a backend.

---

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub, then:
# 1. Go to https://vercel.com/new
# 2. Import the forma-agency repository
# 3. Click Deploy — done
```

Vercel auto-detects Next.js, sets the correct build command (`next build`), and deploys in under a minute. Every push to `main` triggers an automatic redeploy.

### Self-Hosting

```bash
npm run build    # Creates .next/ directory with the production build
npm run start    # Starts the Node.js server on port 3000
```

Use a reverse proxy (nginx, Caddy) to serve it behind a custom domain with TLS.

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## Design Decisions and Trade-offs

| Decision | Why |
|---|---|
| Next.js App Router over Pages Router | Future-proof, Server Components by default, better performance |
| React 19 | Concurrent rendering, latest features, stays current with ecosystem |
| Tailwind v4 over Bootstrap 5 | Zero unused CSS, utility-first fits component model better, no jQuery |
| TypeScript strict mode | Catches bugs at compile time, better DX in team environments |
| No third-party animation library | Keeps bundle small; CSS transitions handle 90% of needs |
| No state management library | A marketing site has no global state; local component state is sufficient |
| Geist font via next/font | Eliminates CLS (layout shift), removes external font request latency |

---

## Roadmap and Possible Extensions

- [ ] Add dark mode with `next-themes`
- [ ] Add animation with Framer Motion for scroll-triggered reveals
- [ ] Connect contact form to Resend or Web3Forms
- [ ] Add a Blog section with MDX-based posts
- [ ] Add a CMS integration (Sanity.io or Contentlayer) for editable content
- [ ] Add i18n with `next-intl` for multilingual agencies
- [ ] Add Google Analytics or Plausible for traffic tracking
- [ ] Lighthouse score optimization pass (Core Web Vitals target: all green)

---

## Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature-name`
3. Make your changes and run lint: `npm run lint`
4. Commit: `git commit -m "feat: describe what you added"`
5. Push and open a Pull Request against `main`

---

## License

Private repository. All rights reserved by [Hassandev60](https://github.com/Hassandev60).

---

## Resources

- [Next.js 16 App Router Docs](https://nextjs.org/docs/app)
- [React 19 Release Notes](https://react.dev/blog/2024/12/05/react-19)
- [Tailwind CSS v4 Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide)
- [TypeScript 5 Handbook](https://www.typescriptlang.org/docs/)
- [Vercel Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying)
- [Forma Design Reference (BootstrapMade)](https://bootstrapmade.com/forma-bootstrap-agency-template/)
