import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // { source: "/", destination: "/legacy/home.html" },
      { source: "/furnishing", destination: "/legacy/furnishings.html" },
      { source: "/landscaping", destination: "/legacy/landscaping.html" },
      { source: "/civilwork", destination: "/legacy/civilwork.html" },
    ];
  },
};

export default nextConfig;
