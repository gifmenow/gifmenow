import Link from "next/link";

export default function FunnyGifsPage() {
  return (
    <main style={{ padding: 40, maxWidth: 960, margin: "0 auto" }}>
      <h1>Funny GIFs for Texting, Group Chats, and Awkward Moments</h1>

      <p style={{ marginTop: 12, lineHeight: 1.6 }}>
        Need a quick laugh to save a dry chat or lighten the mood? These funny
        GIFs are perfect for group chats, playful roasting, awkward silences,
        and “you’ve got to be kidding me” moments. Use them when you want to be
        witty without typing a paragraph. Scroll, pick your vibe, and drop the
        perfect funny reaction.
      </p>

      <section style={{ marginTop: 28 }}>
        <h2 style={{ marginBottom: 10 }}>Related</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>
            <Link href="/texting-gifs">Texting GIFs</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/texting-gifs/awkward-conversation-gifs">
              Awkward Conversation GIFs
            </Link>
          </li>
          <li>
            <Link href="/texting-gifs/double-text">Double Text GIFs</Link>
          </li>
          <li>
            <Link href="/texting-gifs/left-on-read-gifs">
              Left on Read GIFs
            </Link>
          </li>
          <li>
            <Link href="/texting-gifs/waiting-for-a-reply-gifs">
              Waiting for a Reply GIFs
            </Link>
          </li>
          <li>
            <Link href="/texting-gifs/typing-gifs">Typing GIFs</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
