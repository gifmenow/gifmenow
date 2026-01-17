// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./components/TopNav";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "gifmenow.com | Find the Perfect GIF for Every Moment",
    template: "%s | gifmenow.com",
  },
  description:
    "gifmenow.com helps you find the perfect GIF for every moment—texting reactions, awkward conversations, canceled plans, ghosted vibes, and more.",

  alternates: {
    canonical: "https://www.gifmenow.com",
  },
  openGraph: {
    title: "gifmenow.com | Find the Perfect GIF for Every Moment",
    description:
      "Find reaction GIFs for texting, awkward moments, canceled plans, ghosted conversations, and more.",
    url: "https://www.gifmenow.com",
    siteName: "gifmenow.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "gifmenow.com | Find the Perfect GIF for Every Moment",
    description:
      "Find the perfect reaction GIF for texting, awkward moments, and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
