import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://battle-beacon.com";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/for-players", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/for-venues", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/book-a-demo", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/roadmap", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/join", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/landing", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
