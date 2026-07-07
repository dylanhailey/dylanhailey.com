# dylanhailey.com

Personal blog and project showcase. Fully static build, deployed on Cloudflare Pages.

Built with [Astro](https://astro.build) on the [AstroPaper](https://github.com/satnaing/astro-paper) theme (MIT).

## Development

```sh
npm install
npm run dev      # dev server at localhost:4321
npm run build    # production build to dist/
npm run preview  # preview the production build
```

Requires Node 22+ (see `.nvmrc`).

## Content

- Posts live in `src/content/posts/` as Markdown with frontmatter; every post declares a `category` (`security | travel | finance | projects`), defined in `src/data/categories.ts`.
- The Releases page is driven by `src/data/repos.ts`; repo language is fetched from the GitHub API at build time.
- Site settings (title, socials, features) live in `astro-paper.config.ts`.
