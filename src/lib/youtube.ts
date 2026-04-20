const CHANNEL_ID = "UCcr932DeDNvydoiqWB896bg";

export interface YouTubeVideo {
  id: string;
  title: string;
  published: string;
  url: string;
  thumbnail: string;
  description: string;
}

export async function getRecentVideos(): Promise<YouTubeVideo[]> {
  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

  try {
    const res = await fetch(url, { next: { revalidate: 600 } });
    if (!res.ok) return [];
    const xml = await res.text();
    return parseFeed(xml);
  } catch {
    return [];
  }
}

function parseFeed(xml: string): YouTubeVideo[] {
  const entries = xml.split("<entry>").slice(1);
  return entries.map((entry) => {
    const videoId = match(entry, /<yt:videoId>([^<]+)<\/yt:videoId>/);
    const title = match(entry, /<title>([^<]+)<\/title>/);
    const published = match(entry, /<published>([^<]+)<\/published>/);
    const thumbnail = match(entry, /<media:thumbnail url="([^"]+)"/) ||
      (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "");
    const description = match(entry, /<media:description>([\s\S]*?)<\/media:description>/);

    return {
      id: videoId,
      title: decodeEntities(title),
      published,
      url: `https://www.youtube.com/watch?v=${videoId}`,
      thumbnail,
      description: decodeEntities(description).slice(0, 280),
    };
  }).filter((v) => v.id);
}

function match(text: string, re: RegExp): string {
  const m = text.match(re);
  return m ? m[1] : "";
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}
