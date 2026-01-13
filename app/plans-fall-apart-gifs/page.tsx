import GifGrid from "../components/GifGrid";

const GIFS = ["https://giphy.com/embed/3ohzdYJK1wAdPWVk88"];

export default function Page() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>GIFs for When Plans Fall Apart</h1>
      <p>Use these when everything goes wrong and you’re just accepting it.</p>
      <GifGrid gifs={GIFS} />
      <p style={{ marginTop: 14, fontSize: 13, color: "#666" }}>
        GIFs embedded from GIPHY.
      </p>
    </main>
  );
}
