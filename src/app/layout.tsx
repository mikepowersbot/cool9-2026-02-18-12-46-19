import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://cool9.com"),
  title: "cool9",
  description: "Build amazing things with cool9.",
  keywords: ["cool9", "next.js", "react", "web development"],
  authors: [{ name: "cool9 Team" }],
  creator: "cool9",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cool9.com",
    title: "cool9",
    description: "Build amazing things with cool9.",
    siteName: "cool9",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "cool9 - Build amazing things",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "cool9",
    description: "Build amazing things with cool9.",
    images: ["/og-image.svg"],
    creator: "@cool9",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}