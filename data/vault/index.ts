import "server-only";
import fs from "fs";
import path from "path";

interface VaultEntry {
  giphyId: string;
  alt: string;
  categories: string[];
  id?: string;
}

// Load the GIF vault from the JSON file located at data/vault/gifs.json.
// Resolves from process.cwd() to avoid __dirname issues in Vercel builds.
function loadVault(): Record<string, VaultEntry> {
  try {
    const filePath = path.join(process.cwd(), "data", "vault", "gifs.json");
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data) as Record<string, VaultEntry>;
  } catch {
    return {};
  }
}

/**
 * Retrieve GIFs for a specific category slug.
 * Returns items shaped for the GifGrid component: { id, embedUrl, alt }.
 * If no matches, returns an empty array.
 */
export function getGifsForCategory(slug: string) {
  const vault = loadVault();
  return Object.entries(vault)
    .filter(([, entry]) => Array.isArray(entry.categories) && entry.categories.includes(slug))
    .map(([key, entry]) => ({
      id: entry.id || key,
      embedUrl: `https://giphy.com/embed/${entry.giphyId}`,
      alt: entry.alt,
    }));
}
