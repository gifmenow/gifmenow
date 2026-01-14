import Link from "next/link";

export const metadata = {
  title: "Awkward Conversation GIFs | gifmenow.com",
  description:
    "Reaction GIFs for awkward silences, cringe moments, and ‘what do I even say?’ texts — organized for quick replies.",
};

export default function Page() {
  const updatedAtHuman = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // TODO: Replace with your real GIF URLs
  const sections = [
    {
      title: "😬 Awkward Silence",
      desc: "When the chat goes quiet and you can feel it through the screen.",
      gifs: [
        { src: "https://media.giphy.com/media/l0HlG7G8Yb6p7xB4Q/giphy.gif", alt: "Silence is loud" },
      ],
    },
    {
      title: "😵 Cringe Moment",
      desc: "You read the message back and instantly regret everything.",
      gifs: [
        { src: "https://media.giphy.com/media/3og0IPxMM0erATueVW/giphy.gif", alt: "Cringing internally" },
      ],
    },
    {
      title: "🫠 What Do I Even Say",
      desc: "You need a GIF to answer for you. Immediately.",
      gifs: [
        { src: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif", alt: "No words available" },
      ],
    },
  ];

  return (
    <div>
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link> → <Link href="/texting-gifs">Texting GIFs</Link> → <span>Awkward Conversation</span>
      </nav>

      <h1 className="h1">Awkward Conversation GIFs</h1>

      <p className="lede">
        Need the perfect reaction when the chat gets weird? These awkward conversation GIFs are for uncomfortable pauses,
        cringe moments, and “what do I even say?” situations — organized so you can reply fast.
      </p>

      <div className="metaRow">
        <span className="updated">Updated daily: {updatedAtHuman}</span>
        <span>·</span>
        <span>Perfect for texting & group chats</span>
      </div>

      {sections.map((s, idx) => (
        <section key={idx} className="section">
          <h2 className="h2">{s.title}</h2>
          <p className="desc">{s.desc}</p>

          <div className="grid" role="list">
            {s.gifs.map((g, i) => (
              <figure key={i} className="card" role="listitem">
                <img className="gif" src={g.src} alt={g.alt} loading="lazy" />
                <figcaption className="caption">{g.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
