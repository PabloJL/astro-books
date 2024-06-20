import GitHub from "@auth/core/providers/github";
import { defineConfig } from "auth-astro";

export default defineConfig({
  providers: [
    GitHub({
      clientId: import.meta.env.AUTH_GITHUB_ID,
      clientSecret: import.meta.env.AUTH_GITHUB_SECRET,
    }),
  ],
});
