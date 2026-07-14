import { css } from "lit";

export const MegaNavStyles = css`
  :host {
    display: block;
    /* Panel tokens: the exact SHIP-mockup values, overridable from the page
       via the --ibp-* custom properties (see scss/partials/_variables.scss). */
    --menu-wash: var(--ibp-teal-wash, #e6f4f5);
    --menu-hairline: var(--ibp-teal-wash-border, #c7e3e5);
    --menu-ink: var(--ibp-menu-ink, #0e3a41);
    --menu-muted: var(--ibp-menu-muted, #3f6b70);
    --menu-pill-ink: var(--ibp-menu-pill-ink, #0e5a63);
    --menu-cta-ink: var(--ibp-menu-cta-ink, #3a1c00);
    --menu-panel-height: var(--ibp-menu-panel-height, 320px);
  }

  .nav-list {
    display: flex;
    align-items: center;
    gap: 3px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 19px 12px;
    border-bottom: 3px solid transparent;
    color: var(--ibp-body-text);
    font-family: var(--ibp-body-font-family);
    font-weight: 600;
    font-size: 14px;
    line-height: 1.2;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .nav-item .caret {
    display: flex;
    opacity: 0.75;
    transition: transform 0.18s ease;
  }

  .nav-item[aria-expanded="true"] .caret {
    transform: rotate(180deg);
  }

  .nav-item:hover,
  .nav-item[aria-expanded="true"],
  .nav-item[aria-current] {
    color: var(--ibp-teal-dark);
    border-bottom-color: var(--ibp-accent);
  }

  .nav-item:focus-visible {
    outline: 2px solid var(--ibp-accent);
    outline-offset: -2px;
  }

  /* --- The three-zone dropdown panel --- */

  .panel {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    z-index: 10;
    background: var(--menu-wash);
    color: var(--menu-ink);
    border-bottom: 4px solid var(--ibp-accent);
    box-shadow: 0 12px 32px rgba(6, 61, 79, 0.12);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-6px);
    transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s;
  }

  .panel.open {
    opacity: 1;
    visibility: visible;
    transform: none;
  }

  .panel-grid {
    display: grid;
    grid-template-columns: 0.9fr 1.5fr 0.82fr;
    /* One shared drop height across all five panels; Issues (8 items) sets it. */
    min-height: var(--menu-panel-height);
  }

  .panel-grid.no-photo {
    grid-template-columns: 0.9fr 2.32fr;
  }

  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 22px 22px 22px 0;
    border-right: 1px solid var(--menu-hairline);
  }

  .intro-title {
    font-family: var(--ibp-heading-font-family);
    font-weight: 400;
    font-size: 23px;
    line-height: 1.1;
    color: var(--ibp-teal-dark);
    margin: 0 0 9px;
  }

  .intro-copy {
    font-size: 13px;
    line-height: 1.45;
    color: var(--menu-muted);
    margin: 0 0 16px;
  }

  .opill {
    align-self: flex-start;
    border: 1.5px solid var(--ibp-teal);
    border-radius: 999px;
    padding: 9px 20px;
    color: var(--menu-pill-ink);
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.7px;
    text-transform: uppercase;
    text-decoration: none;
  }

  .opill:hover,
  .opill:focus-visible {
    background: var(--ibp-teal);
    color: white;
  }

  .opill:focus-visible {
    outline: 2px solid var(--ibp-accent);
    outline-offset: 2px;
  }

  .mid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 20px 22px;
  }

  .rows {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 24px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-height: 40px;
    padding: 8px 0;
    border-bottom: 1px solid var(--menu-hairline);
    text-decoration: none;
  }

  .row .t {
    font-weight: 700;
    font-size: 14.5px;
    line-height: 1.15;
    color: var(--menu-ink);
  }

  .arw {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--ibp-teal);
    color: white;
    font-weight: 700;
    font-size: 13px;
  }

  .row:hover .arw,
  .row:focus-visible .arw {
    background: var(--ibp-accent);
    color: var(--menu-cta-ink);
  }

  .row:focus-visible {
    outline: 2px solid var(--ibp-teal);
    outline-offset: -2px;
  }

  /* Wedge-masked photo band. The mask is the pinwheel-wedge vector; the
     gaps stay transparent so the panel wash shows through. */
  .wedge {
    overflow: hidden;
  }

  .wedge img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-mask-image: var(--wedge-mask);
    mask-image: var(--wedge-mask);
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
  }

  /* Laptop (1024-1199px): photo drops out first, everything tightens. */
  @media screen and (max-width: 1199px) {
    .nav-item {
      padding: 14px 10px;
      font-size: 12.5px;
    }

    .wedge {
      display: none;
    }

    .panel-grid,
    .panel-grid.no-photo {
      grid-template-columns: 0.9fr 1.5fr;
    }

    .intro {
      padding-left: 0;
    }
  }

  /* Tablet and below: the hamburger drawer (menu-overlay) takes over. */
  @media screen and (max-width: 1023px) {
    :host {
      display: none;
    }
  }
`;
