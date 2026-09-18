import { profile } from "@/content/profile";

export const CONTENT_UPDATED_AT = "2026-09-18";

export const siteConfig = {
  name: profile.name,
  shortName: profile.shortName,
  firstName: profile.firstName,
  lastName: profile.lastName,
  username: profile.username,
  title: `${profile.name} | HR Executive & Talent Acquisition`,
  description:
    "Van Thien Doan Trang — HR Executive in Ho Chi Minh City specializing in full-cycle recruitment, compensation & benefits, L&D, employee engagement, and HR operations.",
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
    "Compensation and Benefits Vietnam",
    "Human Resources Executive",
    ...profile.focusAreas,
    "UEH Human Resource Management",
    "IMCD HR",
    "Gleads VietNam HR",
    "BBCIncorp HR",
    "KMS Technology Talent Acquisition",
  ],
  images: {
    portrait: "/images/portrait.png",
    og: "/images/og.jpg",
    width: 1024,
    height: 1024,
    ogWidth: 1200,
    ogHeight: 630,
    alt: `${profile.name} — HR Executive portrait`,
  },
  icons: {
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
