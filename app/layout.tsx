// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import TopNav from "./components/TopNav";

export const metadata: Metadata = {
  title: {
    default: "gifmenow.com | Find the Perfect GIF for Every Moment",
    template: "%s | gifmenow.com",
  },
  description:
    "gifmenow.com helps you find the perfect GIF for every moment—texting reactions, awkward conversations, canceled plans, ghosted vibes, and more.",
  metadataBase: new URL("https://gifmenow.com"),
  alternates: {
    canonical: "https://gifmenow.com",
  },
  openGraph: {
    title: "gifmenow.com | Find the Perfect GIF for Every Moment",
    description:
      "Find reaction GIFs for texting, awkward moments, canceled plans, ghosted conversations, and more.",
    url: "https://gifmenow.com",
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
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
