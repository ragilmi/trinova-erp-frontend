import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// Enables Cloudflare bindings during `next dev` (no-op in production builds).
// Must be called after the config export.
// https://opennext.js.org/cloudflare/get-started#12-develop-locally
if (process.env.NODE_ENV === "development") {
  const { initOpenNextCloudflareForDev } = await import("@opennextjs/cloudflare");
  await initOpenNextCloudflareForDev();
}
