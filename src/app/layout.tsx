import { Manrope } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildRootMetadata, rootViewport } from "@/lib/seo";
import "./globals.css";

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
    <html lang="en" className={`${body.variable} h-full`}>
      <body className="min-h-full antialiased" suppressHydrationWarning>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
