import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://studiowolfcode.netlify.app";
  return [{ url: baseUrl, changeFrequency: "monthly", priority: 1 }, ...projects.map(({ slug }) => ({ url: `${baseUrl}/work/${slug}`, changeFrequency: "monthly" as const, priority: 0.8 }))];
}
