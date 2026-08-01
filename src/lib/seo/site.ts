import { profile } from "@/content/profile";

/** ISO date for sitemap lastmod — bump when portfolio content changes. */
export const CONTENT_UPDATED_AT = "2026-08-01";

export const siteConfig = {
  name: profile.name,
  shortName: profile.shortName,
  firstName: profile.firstName,
  lastName: profile.lastName,
  username: profile.username,
  title: `${profile.name} | HR Executive & Talent Acquisition`,
  description:
    "Van Thien Doan Trang — HR Executive in Ho Chi Minh City specializing in full-cycle recruitment, HR operations, employee relations, and people experience.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vanthiendoantrang.vercel.app").replace(
    /\/$/,
    "",
  ),
  locale: "en_US",
  language: "en",
  keywords: [
    profile.name,
    profile.shortName,
    "HR Executive Vietnam",
    "Talent Acquisition Ho Chi Minh City",
    "Human Resources Executive",
    ...profile.focusAreas,
    "UEH Human Resource Management",
    "Gleads VietNam HR",
    "BBCIncorp HR",
    "KMS Technology Talent Acquisition",
  ],
  images: {
    portrait: "/images/trang-portrait-2x.webp",
    portraitFallback: "/images/trang-portrait-2x.jpg",
    og: "/images/og-portrait.jpg",
    width: 1364,
    height: 2048,
    ogWidth: 1200,
    ogHeight: 630,
    alt: `${profile.name} — HR Executive portrait`,
  },
  icons: {
    svg: "/icons/mark.svg",
    favicon16: "/icons/favicon-16.png",
    favicon32: "/icons/favicon-32.png",
    apple: "/icons/apple-touch-icon.png",
    icon192: "/icons/icon-192.png",
    icon512: "/icons/icon-512.png",
    maskable: "/icons/icon-512-maskable.png",
  },
} as const;

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}
