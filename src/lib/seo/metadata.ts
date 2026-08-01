import type { Metadata, Viewport } from "next";
import { absoluteUrl, siteConfig } from "@/lib/seo/site";

export function buildRootMetadata(): Metadata {
  const ogImage = {
    url: absoluteUrl(siteConfig.images.og),
    width: siteConfig.images.ogWidth,
    height: siteConfig.images.ogHeight,
    alt: siteConfig.images.alt,
    type: "image/jpeg" as const,
  };

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: siteConfig.shortName,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: "/",
    },
    icons: {
      icon: [
        { url: siteConfig.icons.svg, type: "image/svg+xml" },
        { url: siteConfig.icons.favicon16, sizes: "16x16", type: "image/png" },
        { url: siteConfig.icons.favicon32, sizes: "32x32", type: "image/png" },
        { url: siteConfig.icons.icon192, sizes: "192x192", type: "image/png" },
        { url: siteConfig.icons.icon512, sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: siteConfig.icons.apple, sizes: "180x180", type: "image/png" }],
      shortcut: siteConfig.icons.favicon32,
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
      type: "profile",
      locale: siteConfig.locale,
      url: siteConfig.url,
      siteName: `${siteConfig.name} Portfolio`,
      title: siteConfig.title,
      description: siteConfig.description,
      firstName: siteConfig.firstName,
      lastName: siteConfig.lastName,
      username: siteConfig.username,
      images: [
        ogImage,
        {
          url: absoluteUrl(siteConfig.images.portraitFallback),
          width: siteConfig.images.width,
          height: siteConfig.images.height,
          alt: siteConfig.images.alt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "portfolio",
    classification: "Human Resources Portfolio",
    other: {
      "profile:first_name": siteConfig.firstName,
      "profile:last_name": siteConfig.lastName,
      "profile:username": siteConfig.username,
    },
  };
}

export const rootViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#9e1d2e" },
    { media: "(prefers-color-scheme: dark)", color: "#2a0f14" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};
