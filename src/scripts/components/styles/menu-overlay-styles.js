import { css } from "lit";

export const MenuOverlayStyles = css`
  :host {
    /* Drawer sub-list maps to sanctioned tokens only (GL-003 §8): white
       page bg + ecru hairlines (the same treatment as the top-level rows)
       and ink for the link text. Fallback literals mirror those tokens. */
    --drawer-sub-bg: var(--ibp-drawer-sub-bg, #ffffff);
    --drawer-sub-border: var(--ibp-drawer-sub-border, #eceae5);
    --drawer-sub-ink: var(--ibp-drawer-sub-ink, #222222);
    --drawer-cta-ink: var(--ibp-menu-cta-ink, #3a1c00);
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s;
    font-weight: 400;
  }

  .overlay.visible {
    opacity: 1;
    visibility: visible;
    z-index: 999;
  }

  .scroll-container {
    display: flex;
    overflow: auto;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .drawer-bar {
    background: white;
    border-bottom: 1px solid var(--ibp-hr);
    flex: none;
  }

  .drawer-bar-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 68px;
  }

  .close-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: none;
    border: none;
    padding: 0;
    font-size: 18px;
    color: var(--ibp-body-text);
    cursor: pointer;
  }

  .close-btn:focus-visible,
  .drawer-row:focus-visible,
  .drawer-sub a:focus-visible,
  .util-links a:focus-visible {
    /* Dark ring: the orange accent fails WCAG 1.4.11 non-text contrast on
       white (Vera gate, 14 Jul 2026). */
    outline: 2px solid var(--ibp-teal-dark);
    outline-offset: -2px;
  }

  .drawer-cta:focus-visible {
    /* Positive offset so the dark ring sits on the white around the orange
       pill (a ring on the orange fill itself cannot reach 3:1). */
    outline: 2px solid var(--ibp-teal-dark);
    outline-offset: 2px;
  }

  .drawer {
    flex: 1;
    background: white;
    padding-bottom: 44px;
  }

  .drawer-search {
    margin: 16px 0;
  }

  .drawer-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 44px;
    padding: 12px 2px;
    background: none;
    border: none;
    border-bottom: 1px solid var(--ibp-ecru);
    font-family: var(--ibp-body-font-family);
    font-weight: 600;
    font-size: 16px;
    text-align: left;
    text-transform: none;
    letter-spacing: normal;
    color: var(--ibp-body-text);
    text-decoration: none;
    cursor: pointer;
  }

  .drawer-row .indicator {
    color: var(--ibp-teal);
    font-size: 14px;
  }

  .drawer-row.open {
    background: var(--ibp-ecru);
    /* Deep teal, not brand teal: #117A88 on ecru is 4.20:1 and fails WCAG
       1.4.3 at 16px/600 (Vera gate, 14 Jul 2026). The teal indicator glyph
       stays (non-text, needs only 3:1). */
    color: var(--ibp-teal-dark);
    padding-left: 12px;
    padding-right: 12px;
  }

  .drawer-sub {
    background: var(--drawer-sub-bg);
    padding: 2px 0;
  }

  .drawer-sub a {
    display: flex;
    align-items: center;
    min-height: 44px;
    padding: 4px 14px 4px 24px;
    font-size: 14px;
    color: var(--drawer-sub-ink);
    border-bottom: 1px solid var(--drawer-sub-border);
    text-decoration: none;
  }

  .drawer-sub a:last-child {
    border-bottom: none;
  }

  .drawer-cta {
    display: block;
    margin: 24px 0 14px;
    background: var(--ibp-accent);
    color: var(--drawer-cta-ink);
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    padding: 13px;
    /* SHIP pills are fully round (999px), matching the desktop .btn-cta. */
    border-radius: 999px;
    text-decoration: none;
  }

  .util-links {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }

  .util-links a {
    font-size: 13px;
    font-weight: 600;
    color: var(--ibp-teal);
    text-decoration: none;
    min-height: 44px;
    display: flex;
    align-items: center;
  }

  /* The drawer is the < 1120px pattern; on desktop the mega menu owns nav.
     Cutover raised from 1024 to 1120 (Jayesh round 3, 15 Jul 2026): the six
     nav labels plus the Events button only clear each other from ~1063px up,
     so the whole cramped laptop band goes to the drawer instead. */
  @media screen and (min-width: 1120px) {
    .overlay {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .overlay {
      transition: none;
    }
  }
`;
