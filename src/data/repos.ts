export interface Repo {
  /** GitHub repo in "owner/name" form */
  repo: string;
  /** Short description shown on the card (overrides the GitHub description) */
  blurb: string;
}

// Add repos here as they go public, e.g.:
// { repo: "dylanhailey/LagBench", blurb: "What it does, in one sentence." },
export const repos: Repo[] = [];
