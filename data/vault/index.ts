import "server-only";
import fs from "fs";
import path from "path";

interface VaultEntry {
  giphyId: string;
  alt: string;
  categories: string[];
  id?: string;
}

/**
 * Load the GIF vault from /data/vault/gifs.json.
 * Returns an empty object if the file cannot be read or parsed.
 */
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
 * Returns items shaped for GifGrid: { id, embedUrl, alt }.
 * If no GIFs match, returns [] (never throws).
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
