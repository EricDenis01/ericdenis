import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin Turbopack's workspace root to this project so the multi-lockfile
  // detection doesn't pick up the C:\Users\ericd\package-lock.json above us.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
