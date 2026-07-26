/**
 * Mega-menu section configuration.
 *
 * WordPress owns the menu STRUCTURE (labels, links, hierarchy come from the
 * REST endpoint). This map owns the mega-menu PRESENTATION per section:
 * intro copy, the outlined pill (label + optional href override) and the
 * wedge photo. Sections are matched tolerantly by slug or label so the map
 * keeps working before and after Raj restructures the menu in WP admin
 * (Countries -> Where We Work, Initiatives -> Issues, etc.).
 *
 * Copy is locked design copy from the approved mockups
 * (Deliverables/2026-07-13-ibp-mega-menu-options, Parts 12/17/18).
 *
 * A WP per-item `hero` field, when present, overrides `heroImage`.
 *
 * ── HOW TO SWAP A MENU PHOTO ────────────────────────────────────────────
 * Option A — WordPress (no code): set the `hero` field on the TOP-LEVEL
 *   menu item (Appearance -> Menus; the field is exposed on the item by the
 *   wp-api-menus REST plugin). Paste a full image URL. The component uses
 *   it as-is, wedge-masked, and it wins over the shipped photo below.
 * Option B — GitHub (one line): drop the new image into src/images/menu/,
 *   change that section's `heroImage:` filename below, run
 *   `npx mix --production`, commit. `heroPosition` nudges the crop
 *   (CSS object-position: "x% y%") so the subject sits in the big wedge.
 * ────────────────────────────────────────────────────────────────────────
 */

// Where the wedge photos are served from. The component ships on both the
// WordPress and Drupal sites, so the default is the gh-pages asset host
// (same pattern as $images-path in src/scss/partials/_variables.scss).
// Override for local preview: <ibp-header assets-base="./images/menu/">.
export const DEFAULT_ASSETS_BASE = "https://internationalbudget.org/wp-content/uploads/menu/";

const SECTION_CONFIG = [
  {
    keys: ["about", "about-us", "about-ibp"],
    introCopy: "We partner globally to advance public budget systems that work for people, not special interests.",
    pillLabel: "About IBP",
    pillHref: null,
    heroImage: "about.jpg",
    heroPosition: "calc(50% + 66px) 55%",
  },
  {
    keys: ["open-budget-survey", "obs"],
    introCopy: "The world's only independent, comparative measure of budget transparency, participation and oversight.",
    pillLabel: "Explore the data",
    pillHref: null,
    heroImage: "open-budget-survey.jpg",
    heroPosition: "calc(72% + 41px) 44%",
  },
  {
    keys: ["where-we-work", "countries"],
    introCopy: "Three country offices, two regions, and partners across roughly 120 countries.",
    pillLabel: "All countries",
    pillHref: null,
    heroImage: "where-we-work.jpg",
    heroPosition: "calc(50% + 96px) 74%",
  },
  {
    keys: ["issues", "initiatives"],
    introCopy: "The issues and initiatives through which we advance budget accountability worldwide.",
    pillLabel: "All initiatives",
    pillHref: null,
    heroImage: "issues.jpg",
    heroPosition: "calc(50% + 41px) 56%",
    heroZoom: 1.07,
  },
  {
    keys: ["stories-impact", "stories-and-impact", "stories", "impact", "stories-amp-impact"],
    introCopy: "The proof of the work — reports, stories of change, analysis and the resource library.",
    pillLabel: "See our impact",
    pillHref: "/about-us/impacts/",
    heroImage: "stories-impact.jpg",
    heroPosition: "calc(50% + 81px) 46%",
  },
];

// "Open Budget Survey" -> "open-budget-survey"; "Stories & Impact" -> "stories-impact"
export function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&amp;|&/g, " ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Find the section config for a top-level menu item. Matches, in order:
 * 1. the slugified item title (label from WP),
 * 2. the last path segment of the item URL.
 * Returns null when the section has no config (the panel then renders
 * without the intro zone and photo, links only).
 */
export function getSectionConfig(item) {
  if (!item) return null;

  let candidates = [slugify(item.title)];

  if (item.url) {
    try {
      let path = new URL(item.url, "https://internationalbudget.org").pathname;
      let segment = path.replace(/\/$/, "").split("/").pop();
      if (segment) candidates.push(slugify(segment));
    } catch (e) {
      // Malformed URL from WP: match on title only.
    }
  }

  for (const config of SECTION_CONFIG) {
    if (candidates.some((candidate) => config.keys.includes(candidate))) {
      return config;
    }
  }

  return null;
}
