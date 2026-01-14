import Link from "next/link";

export const metadata = {
  title: "Left on Read GIFs | gifmenow.com",
  description:
    "Left on read hurts. Reaction GIFs for when they saw your message and responded with silence — perfect for texting and group chats.",
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
      title: "😐 Trying to Stay Calm",
      desc: "You’re fine. Totally fine. Not staring at the read receipt or anything.",
      gifs: [
        { src: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif", alt: "Trying to act normal" },
      ],
    },
    {
      title: "😤 Low-Key Annoyed",
      desc: "They saw it. They chose peace… without you.",
      gifs: [
        { src: "https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif", alt: "Side eye intensifies" },
      ],
    },
    {
      title: "😂 Laughing Through It",
      desc: "If you don’t laugh, you’ll double text.",
      gifs: [
        { src: "https://media.giphy.com/media/3o7aD4q6aOQOQmQ7C8/giphy.gif", alt: "Coping with humor" },
      ],
    },
  ];

  return (
    <div>
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link> → <Link href="/texting-gifs">Texting GIFs</Link> → <span>Left on Read</span>
      </nav>

      <h1 className="h1">Left on Read GIFs</h1>

      <p className="lede">
        Read receipts hurt. These GIFs are for when they <em>saw</em> your message and responded with pure silence.
        Use them for iMessage, Instagram DMs, and any chat where “seen” hits different.
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
