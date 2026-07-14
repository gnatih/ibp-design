import { css } from "lit";

export const HeaderStyles = css`
  :host {
    display: block;
    // min-height: var(--ibp-header-height);
    overflow: visible;
  }

  :host([mini]) {
    min-height: auto;
  }

  .banner {
    // min-height: var(--ibp-header-height);
    width: 100%;
    z-index: 0;
    background-color: var(--ibp-ecru);
    padding-top: 90px;
    padding-bottom: 80px;
  }

  .banner.has-image {
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    background-color: #979797;
    background-blend-mode: multiply;
  }
  @media screen and (max-width: 1560px) {
    .banner.has-image {
      background-position: center;
    }
  }
  @media screen and (min-width: 1561px) {
    .banner.has-image {
      background-position: center -50px;
    }
  }

  .has-image .infobox {
    color: var(--ibp-body-text);
  }

  .banner.has-image .nav li a.active {
    background: rgba(255, 255, 255, 0.3);
  }

  .banner.has-image .secondary-nav a {
    color: white;
  }

  .nav li a.active {
    background: #dad5ca;
  }

  /* --- Main nav row: mega-nav + Events CTA (desktop), hamburger (tablet/mobile) --- */

  .main-nav-header-wrapper {
    border-bottom: 1px solid var(--ibp-hr);
  }

  /* Full-width bar (Jayesh review round, 14 Jul 2026): the nav row runs
     edge to edge instead of the boxed 1352px container, and the menu items
     spread across the space between the logo and the Events button. */
  .main-nav.container {
    max-width: none;
  }

  .nav-area {
    grid-column: 3/13;
    justify-self: stretch;
    align-self: end;
    display: flex;
    align-items: center;
    gap: 16px;
    height: 78px;
  }

  .nav-area mega-nav {
    flex: 1 1 auto;
    min-width: 0;
  }

  .btn-cta {
    /* House .btn-box: teal box button (Jayesh review round, 14 Jul 2026). */
    background: var(--ibp-teal);
    color: white;
    font-family: var(--ibp-body-font-family);
    font-weight: 800;
    font-size: 13px;
    letter-spacing: var(--ibp-letter-spacing);
    text-transform: uppercase;
    line-height: 18px;
    padding: 14px 16px;
    border: none;
    text-decoration: none;
    white-space: nowrap;
  }

  .btn-cta:hover {
    background: var(--ibp-teal-dark);
    color: white;
  }

  .btn-cta:focus-visible {
    outline: 2px solid var(--ibp-teal-dark);
    outline-offset: 2px;
  }

  .menu-btn {
    display: none;
    align-items: center;
    justify-content: center;
    /* 44x44 touch target per the Part-2 spec (Vera gate, 14 Jul 2026). */
    width: 44px;
    height: 44px;
    background: none;
    border: none;
    padding: 0;
    font-size: 20px;
    color: var(--ibp-body-text);
    cursor: pointer;
  }

  .menu-btn:focus-visible {
    outline: 2px solid var(--ibp-teal-dark);
    outline-offset: -2px;
  }

  @media screen and (max-width: 1023px) {
    .menu-btn {
      display: flex;
    }

    .btn-cta {
      display: none;
    }
  }

  .search-row {
    display: none;
    background: white;
    border-top: 1px solid var(--ibp-hr);
    padding: 12px 0;
  }

  .search-row.open {
    display: block;
  }

  .page-title {
    font-family: var(--ibp-heading-font-family);
    font-size: var(--ibp-page-title-font-size);
    font-weight: 400;
    line-height: 1;
    letter-spacing: var(--ibp-letter-spacing-sm);
    margin-top: 0;
    margin-bottom: 32px;
    pointer-events: none;
    user-select: none;
    z-index: 0;
  }

  :host {
    color: var(--ibp-body-text);
  }

  :host([dark]) {
    color: white;
  }

  :host([dark]) .banner {
    background-color: var(--ibp-teal-dark);
  }

  :host([dark]) ::slotted(.page-title) {
    color: var(--ibp-teal-light);
  }

  :host([dark]) hr {
    border: solid var(--ibp-hr-height) var(--ibp-field-outline);
  }

  .nav-content--header {
    grid-column: span 6;
  }

  .nav-content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .secondary-nav {
    grid-column: span 2;
  }

  .secondary-nav h6 {
    margin-top: 8px;
  }

  .infobox {
    grid-column: 9/13;
    background: white;
  }

  .spacer {
    grid-column: span 1;
  }

  input#subnav-toggle {
    display: none;
  }

  .secondary-nav li a.active:before {
    content: "•";
    font-size: 24px;
    line-height: 0;
    margin-right: 8px;
    margin-left: -17px;
    display: inline-block;
    color: var(--ibp-accent);
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f00;
  }

  .secondary-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    line-height: 18px;
  }

  .secondary-nav li {
    border-bottom: 1px solid #acaaa2;
  }

  :host([dark]) .secondary-nav li {
    border-bottom: 1px solid var(--ibp-field-outline);
  }

  .secondary-nav li a {
    color: inherit;
    text-decoration: none;
    margin: 8px 0;
    display: block;
    font-size: 16px;
    font-weight: normal;
  }

  .secondary-nav li:last-child {
    border: none !important;
  }

  @media screen and (max-width: 576px) {
    :host,
    .banner {
      min-height: auto;
    }

    .nav-area {
      height: auto;
      align-self: center;
      gap: 8px;
    }

    .banner {
      padding-top: 0;
      padding-bottom: 0;
    }

    .nav-content {
      gap: 12px;
      grid-template-columns: 1fr;
    }

    .nav-content > .secondary-nav {
      margin-top: 44px;
    }

    .nav-content-wrapper {
      height: auto;
    }

    .secondary-nav,
    .nav-content--header {
      grid-column: auto;
    }

    .banner.has-image .nav-content--header {
      margin-top: 44px;
      margin-bottom: 44px;
    }

    :host > .secondary-nav {
      margin-top: 27px;
      padding: 0 20px;
    }

    .page-title {
      font-size: 42px;
      line-height: 45px;
    }

    label[for="subnav-toggle"] {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    label[for="subnav-toggle"]:after {
      font-family: "ibp-icons";
      content: "\\f109";
      margin-bottom: 8px;
      font-size: 15px;
    }

    .subnav-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s ease-out;
    }

    input#subnav-toggle:checked ~ label:after {
      content: "\\f108";
    }
  }
`;
