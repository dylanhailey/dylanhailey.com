import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://dylanhailey.com",
    title: "Dylan Hailey",
    description:
      "personal ramblings of a security engineer that sometimes talks about travel, food, and finance.",
    author: "Dylan Hailey",
    profile: "https://dylanhailey.com",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "UTC",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",    url: "https://github.com/dylanhailey" },
    { name: "linkedin",  url: "https://www.linkedin.com/in/dylanhailey/" },
    { name: "instagram", url: "https://www.instagram.com/dylanshailey" },
    { name: "x",         url: "https://x.com/dylanshailey" },
    { name: "mail",      url: "mailto:contact@dylanhailey.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
