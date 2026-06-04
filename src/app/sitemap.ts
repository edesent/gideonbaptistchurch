import type { MetadataRoute } from "next";

const BASE_URL = "https://www.gideonbaptistchurch.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/messages", changeFrequency: "weekly", priority: 0.9 },
    { path: "/pastor", changeFrequency: "monthly", priority: 0.8 },
    { path: "/history", changeFrequency: "yearly", priority: 0.7 },
    { path: "/statement-of-faith", changeFrequency: "yearly", priority: 0.7 },
    { path: "/missionaries", changeFrequency: "monthly", priority: 0.7 },
    { path: "/counseling", changeFrequency: "monthly", priority: 0.7 },
    { path: "/give", changeFrequency: "monthly", priority: 0.7 },
    { path: "/facebook-events", changeFrequency: "weekly", priority: 0.6 },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
