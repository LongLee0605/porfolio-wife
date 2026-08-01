import { Cormorant_Garamond, Manrope } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildRootMetadata, rootViewport } from "@/lib/seo";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = buildRootMetadata();
export const viewport = rootViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased" suppressHydrationWarning>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
