export const CATEGORIES = ["security", "travel", "finance", "projects"] as const;

export type Category = (typeof CATEGORIES)[number];

interface CategoryMeta {
  label: string;
  description: string;
  /** Tailwind classes for the colored chip (light + dark variants) */
  chip: string;
}

export const CATEGORY_META: Record<Category, CategoryMeta> = {
  security: {
    label: "Security",
    description: "Security engineering, tooling, and research.",
    chip: "border-cyan-600/40 bg-cyan-500/10 text-cyan-700 dark:border-cyan-400/40 dark:bg-cyan-400/10 dark:text-cyan-300",
  },
  travel: {
    label: "Travel",
    description: "Trips we take, and the food along the way.",
    chip: "border-emerald-600/40 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-400/10 dark:text-emerald-300",
  },
  finance: {
    label: "Finance",
    description: "Personal finance tips — points, miles, and getting the most value.",
    chip: "border-amber-600/40 bg-amber-500/10 text-amber-700 dark:border-amber-400/40 dark:bg-amber-400/10 dark:text-amber-300",
  },
  projects: {
    label: "Projects",
    description: "Things I'm building and releasing.",
    chip: "border-violet-600/40 bg-violet-500/10 text-violet-700 dark:border-violet-400/40 dark:bg-violet-400/10 dark:text-violet-300",
  },
};
