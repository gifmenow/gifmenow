import Link from "next/link";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import GifGrid from "@/app/components/GifGrid";

export const revalidate = 60 * 60 * 24; // daily refresh

export const metadata = {
  title: "Ghosted GIFs | When They Stop Texting Back | gifmenow.com",
  description:
    "They disappeared without a word. Browse the best ghosted reaction GIFs for texting when you realize you’ve been completely ignored.",
  alternates: {
    canonical: "https://www.gifmenow.com/texting-gifs/ghosted-gifs",
  },
  openGraph: {
    type: "website",
    url: "https://www.gifmenow.com/texting-gifs/ghosted-gifs",
    siteName: "gifmenow.com",
    title: "Ghosted GIFs | When They Stop Texting Back | gifmenow.com",
    description:
      "They disappeared without a word. Browse the best ghosted reaction GIFs for texting when you realize you’ve been completely ignored.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghosted GIFs | When They Stop Texting Back | gifmenow.com",
    description:
      "They disappeared without a word. Browse the best ghosted reaction GIFs for texting when you realize you’ve been completely ignored.",
  },
};

const gifs = [
  { id: "ghosted-1", embedUrl: "https://giphy.com/embed/GDTenQepzptV7F6McD", alt: "Realizing you got ghosted" },
  { id: "ghosted-2", embedUrl: "https://giphy.com/embed/J9SGZWFtcjH0GelxUm", alt: "Waiting but no reply" },
  { id: "ghosted-3", embedUrl: "https://giphy.com/embed/Cx7VuExVnETdVyW53g", alt: "Confused silence after texting" },
  { id: "ghosted-4", embedUrl: "https://giphy.com/embed/w89ak63KNl0nJl80ig", alt: "Checking phone again" },
  { id: "ghosted-5", embedUrl: "https://giphy.com/embed/XQaa2apHIuvbBY5r9a", alt: "Zoning out after being ignored" },
  { id: "ghosted-6", embedUrl: "https://giphy.com/embed/dJQRcKrntTqegwqZZC", alt: "Acceptance after ghosting" },
  { id: "ghosted-7", embedUrl: "https://giphy.com/embed/VN3dGsdlp9nCPUfe8y", alt: "Dead inside reaction" },
  { id: "ghosted-8", embedUrl: "https://giphy.com/embed/yjGdFXbm8KpXF5Xqco", alt: "Internal screaming" },
  { id: "ghosted-9", embedUrl: "https://giphy.com/embed/eBCnpuRGBhQGY", alt: "No response energy" },
  { id: "ghosted-10", embedUrl: "https://giphy.com/embed/tbsyS16NFRhwQ", alt: "Emotionally checked out" },
  { id: "ghosted-11", embedUrl: "https://giphy.com/embed/FBeSx3itXlUQw", alt: "Left hanging" },
  { id: "ghosted-12", embedUrl: "https://giphy.com/embed/MMgja87oX0VUs", alt: "Conversation sinking feeling" },
  { id: "ghosted-13", embedUrl: "https://giphy.com/embed/zJMkK5JKqdlvw16Bog", alt: "Skeleton dead inside" },
  { id: "ghosted-14", embedUrl: "https://giphy.com/embed/aTf4PONtSYB1e", alt: "Actually ghosted" },
  { id: "ghosted-15", embedUrl: "https://giphy.com/embed/Z8pzh8afGbZle", alt: "Scooby Doo confusion" },
  { id: "ghosted-16", embedUrl: "https://giphy.com/embed/GK5cQrLmRbgIJfOl5Z", alt: "Call of Duty ghost reaction" },
  { id: "ghosted-17", embedUrl: "https://giphy.com/embed/c8scirNg0aDhO59UkH", alt: "Spooky ghost reaction" },
  { id: "ghosted-18", embedUrl: "https://giphy.com/embed/khLv6cbb0VoedBsiaF", alt: "Halloween ghost reaction" },
  { id: "ghosted-19", embedUrl: "https://giphy.com/embed/EtH3A45sJ21qM", alt: "Casper ghost reaction" },
  { id: "ghosted-20", embedUrl: "https://giphy.com/embed/Ke97StdZZrPRbefL6D", alt: "Power ghosted reaction" },
  { id: "ghosted-21", embedUrl: "https://giphy.com/embed/hYHUcErxfZwbK", alt: "Real ghost reaction" },
  { id: "ghosted-22", embedUrl: "https://giphy.com/embed/Yph6D7zPIVtIc", alt: "Ghosts reaction" },
  { id: "ghosted-23", embedUrl: "https://giphy.com/embed/NqqaysALSYoco", alt: "Stupid ghost reaction" },
  { id: "ghosted-24", embedUrl: "https://giphy.com/embed/TWViwVSWC1yNT9dMs1", alt: "31 Nights of Freeform ghost" },
  { id: "ghosted-25", embedUrl: "https://giphy.com/embed/mwDiODJuaGG8o", alt: "Patrick Swayze ghost reaction" },
  { id: "ghosted-26", embedUrl: "https://giphy.com/embed/0Bx2BV2KstM8qrWIdF", alt: "CBS Ghosts reaction" },
  { id: "ghosted-27", embedUrl: "https://giphy.com/embed/wFWQIJq7XQkxuJWmDh", alt: "Haunted Mansion ghost" },
  { id: "ghosted-28", embedUrl: "https://giphy.com/embed/O6kb3Pa3Kgbsc", alt: "Earsplit ghost reaction" },
  { id: "ghosted-29", embedUrl: "https://giphy.com/embed/3oxRmCTRE4Q0QxA5Py", alt: "Ghost Hunters reaction" },
  { id: "ghosted-30", embedUrl: "https://giphy.com/embed/t8Nx50erR39oI9fTYN", alt: "Ghost story reaction" },
];

export default function GhostedGifsPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Texting GIFs", href: "/texting-gifs" },
    { label: "Ghosted GIFs" },
  ];

  return (
    <main className="page">
      <Breadcrumbs crumbs={crumbs} />

      <h1>Ghosted GIFs for Texting When They Disappear</h1>

      <p className="page-intro">
        One minute you’re mid-conversation. The next? Silence. These ghosted reaction GIFs
        perfectly capture the moment you realize they’re not texting back — and probably won’t.
      </p>

      <GifGrid gifs={gifs} />

      <section className="related">
        <h2>More Texting Reaction GIFs</h2>
        <ul>
          <li>
            <Link href="/texting-gifs/left-on-read-gifs">Left on Read GIFs</Link>
          </li>
          <li>
            <Link href="/texting-gifs/waiting-for-a-reply-gifs">Waiting for a Reply GIFs</Link>
          </li>
          <li>
            <Link href="/texting-gifs/double-text">Double Text GIFs</Link>
          </li>
        </ul>
      </section>

      <p className="freshness">
        Updated daily with new ghosted reaction GIFs · {new Date().toDateString()}
      </p>
    </main>
  );
}
