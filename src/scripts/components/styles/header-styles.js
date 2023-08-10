import { css } from "lit";

export const HeaderStyles = css`
  :host {
    display: block;
    min-height: var(--ibp-header-height);
    overflow: visible;
  }

  :host([mini]) {
    min-height: auto;
  }

  .banner {
    min-height: var(--ibp-header-height);
    width: 100%;
    z-index: 0;
  }

  .banner.has-image {
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    color: white;
    background-color: #979797;
    background-blend-mode: multiply;
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
    background: #eceae5;
  }

  :host([dark]) {
    color: white;
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
    padding-bottom: 44px;
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
    border: none;
  }

  @media screen and (max-width: 576px) {
    :host,
    .banner {
      min-height: auto;
    }

    .nav-content {
      gap: 12px;
      grid-template-columns: 1fr;
    }

    .secondary-nav,
    .nav-content--header {
      grid-column: auto;
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
