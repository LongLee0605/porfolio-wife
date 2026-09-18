# Van Thien Doan Trang — Portfolio

Next.js portfolio for HR Executive **Van Thien Doan Trang**, with App Router and SEO metadata.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion

## Structure

```text
src/
  app/           # routes, globals, icons
  components/
    ui/          # FadeIn, TypeWriter, BackToTop, AvatarBgAnimation
    layout/      # Sidebar, Footer, PortfolioShell
    sections/    # Overview, Experience, Expertise, Skills, Contact
    seo/         # JsonLd
  content/       # profile data
  lib/seo/       # site config, metadata, JSON-LD
public/
  images/        # portrait.png, og.jpg
  icons/         # favicon + PWA icons (from portrait)
```

## Getting started

```bash
npm install
npm run generate:assets
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Regenerate favicons / OG from the portrait:

```bash
npm run generate:assets
```

## SEO

Set your production URL in `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Includes title/description metadata, Open Graph & Twitter images, JSON-LD (`Person` + `ProfilePage`), `robots.txt`, and `sitemap.xml`.

## Content

Edit [`src/content/profile.ts`](src/content/profile.ts) to update CV copy in one place.
