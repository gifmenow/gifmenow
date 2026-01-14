import type { ReactNode } from "react";
import Link from "next/link";
import "./texting.css";

export default function TextingGifsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="wrap">
      {/* top nav (matches your look) */}
      <header className="topbar">
        <div className="brand">gifmenow.com</div>
        <nav className="toplinks">
          <Link href="/">Home</Link>
          <Link href="/texting-gifs">Texting GIFs</Link>
        </nav>
      </header>

      {children}
    </main>
  );
}
