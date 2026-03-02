import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/", destination: "/legacy/home.html" },
      { source: "/about", destination: "/legacy/about.html" },
      { source: "/service", destination: "/legacy/services.html" },
      { source: "/gallery", destination: "/legacy/gallery.html" },
      { source: "/blog", destination: "/legacy/blog.html" },
      { source: "/blog/:slug*", destination: "/legacy/blog_detail.html" },
      { source: "/contact", destination: "/legacy/contact.html" },
      { source: "/all-type-of-false-ceilings", destination: "/legacy/all-type-of-false-ceilings.html" },
      { source: "/electricalwork", destination: "/legacy/electrical-works.html" },
      { source: "/lighting", destination: "/legacy/lighting.html" },
      { source: "/paintings", destination: "/legacy/paintings.html" },
      { source: "/woodwork", destination: "/legacy/woodwork.html" },
      { source: "/furnishing", destination: "/legacy/furnishings.html" },
      { source: "/landscaping", destination: "/legacy/landscaping.html" },
      { source: "/civilwork", destination: "/legacy/civilwork.html" },
    ];
  },
};

export default nextConfig;
