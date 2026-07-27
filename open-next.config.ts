import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Minimal OpenNext config — no KV/R2 bindings required for this project.
// Add cache/queue overrides here if Cloudflare bindings are added later.
// https://opennext.js.org/cloudflare/get-started
export default defineCloudflareConfig();
