import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type RelatedLink = { href: string; label: string };
type GifItem = { id: string; alt: string };

type Props = {
  siteName?: string; // default gifmenow.com
  title: string; // H1
  description?: string;
  breadcrumbs: { href: string; label: string }[];
  related?: RelatedLink[];
  gifs: GifItem[];
};

function buildGiphySrc(id: string) {
  // Using the official embed endpoint is safest for attribution/terms.
  return `https://giphy.com/embed/${id}`;
}

export default function GifGridPage({
  siteName = "gifmenow.com",
  title,
  description,
  breadcrumbs,
  related = [],
  gifs,
}: Props) {
  return (
    <main className={`${inter.className} wrap`}>
      <header className="top">
        <div className="brand">{siteName}</div>

        <nav className="topNav" aria-label="Top navigation">
          <Link href="/">Home</Link>
          <Link href="/texting-gifs">Texting GIFs</Link>
        </nav>
      </header>

      <div className="crumbs" aria-label="Breadcrumb">
        {breadcrumbs.map((b, i) => (
          <span key={b.href}>
            <Link href={b.href}>{b.label}</Link>
            {i < breadcrumbs.length - 1 ? <span className="sep">→</span> : null}
          </span>
        ))}
      </div>

      <h1 className="h1">{title}</h1>
      {description ? <p className="sub">{description}</p> : null}

      {related.length > 0 ? (
        <section className="related" aria-label="Related pages">
          <div className="relatedTitle">Related pages</div>
          <div className="relatedLinks">
            {related.map((r) => (
              <Link key={r.href} href={r.href}>
                {r.label}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="grid" aria-label={`${title} GIF grid`}>
        {gifs.map((g) => (
          <div className="tile" key={g.id}>
            <div className="frame">
              <iframe
                src={buildGiphySrc(g.id)}
                title={g.alt}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        ))}
      </section>

      <style>{`
        .wrap{
          width:100%;
          padding:24px 16px 48px;
          margin:0;
          font-weight:400;
        }

        .top{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:16px;
          margin-bottom:10px;
        }

        .brand{
          font-weight:700;
          letter-spacing:-0.02em;
        }

        .topNav{
          display:flex;
          gap:14px;
          font-weight:500;
        }
        .topNav a{ text-decoration:underline; }

        .crumbs{
          font-size:14px;
          opacity:.85;
          margin:10px 0 10px;
        }
        .crumbs a{ text-decoration:underline; }
        .sep{ padding:0 8px; opacity:.75; }

        .h1{
          font-size:44px;
          line-height:1.08;
          letter-spacing:-0.03em;
          font-weight:700;
          margin:8px 0 10px;
        }

        .sub{
          max-width:82ch;
          font-size:16px;
          line-height:1.5;
          opacity:.9;
          margin:0 0 18px;
          font-weight:400;
        }

        .related{
          margin:14px 0 18px;
          max-width:82ch;
        }
        .relatedTitle{
          font-weight:700;
          margin-bottom:6px;
        }
        .relatedLinks{
          display:flex;
          flex-direction:column;
          gap:6px;
          font-weight:400;
        }
        .relatedLinks a{
          text-decoration:underline;
        }

        /* FULL-WIDTH GRID (removes the big left/right whitespace) */
        .grid{
          width:100%;
          display:grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap:12px;
          margin-top:14px;
        }

        /* SAME SIZE tiles */
        .tile{
          border-radius:14px;
          overflow:hidden;
          background:transparent;
        }

        /* Fixed aspect ratio so everything is uniform */
        .frame{
          width:100%;
          aspect-ratio: 4 / 3; /* change to 1/1 if you want perfect squares */
          overflow:hidden;
          border-radius:14px;
        }

        /* iframe fills tile, no extra border */
        .frame iframe{
          width:100%;
          height:100%;
          border:0;
          display:block;
        }

        @media (max-width: 520px){
          .h1{ font-size:34px; }
          .grid{ grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); }
          .wrap{ padding:18px 12px 40px; }
        }
      `}</style>
    </main>
  );
}
