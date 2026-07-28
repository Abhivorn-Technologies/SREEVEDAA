import { blogs, services } from "@/data/siteContent";
import { MetadataRoute } from "next";

const baseUrl = "https://sreevedaa.com";

export default function sitemap() {
  const staticPages = ["", "/about", "/service", "/gallery", "/blog", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/${service.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const blogPages = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.createdAt).toISOString(),
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
