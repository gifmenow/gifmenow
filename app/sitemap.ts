import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gifmenow.com";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/texting-gifs`, lastModified: new Date() },
    { url: `${baseUrl}/texting-gifs/awkward-conversation-gifs`, lastModified: new Date() },
    { url: `${baseUrl}/texting-gifs/cancels-last-minute-gifs`, lastModified: new Date() },
  ];
}
