import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://battle-beacon.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/app-privacy", "/app-eula", "/app-delete-account", "/app-feedback"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
