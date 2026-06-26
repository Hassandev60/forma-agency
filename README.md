# Forma Agency — Creative Agency Website

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- PostgreSQL (via `pg` package)
- Server Actions (contact form)

## Setup

### 1. Install dependencies
```bash
npx create-next-app@latest forma-agency --typescript --tailwind --app
cd forma-agency
npm install framer-motion pg
npm install -D @types/pg
```

### 2. Environment variables
Create `.env.local`:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/forma_agency
```

### 3. Database setup
Run this SQL to create the contacts table:
```sql
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  company VARCHAR(100),
  service VARCHAR(100),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 4. Folder structure
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                  ← Home
│   ├── work/page.tsx
│   ├── services/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Work.tsx
│       ├── About.tsx
│       ├── Testimonials.tsx
│       └── Stats.tsx
├── lib/
│   └── db.ts
└── actions/
    └── contact.ts
```

### 5. Run dev server
```bash
npm run dev
```