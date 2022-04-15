import { css } from "lit";

export const HeaderStyles = css`
  :host {
    display: block;
    background: #eceae5;
    min-height: var(--ibp-header-height);
    overflow: visible;
  }

  .banner {
    min-height: var(--ibp-header-height);
    width: 100%;
    z-index: 0;
  }

  .banner.has-image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    background-color: #979797;
    background-blend-mode: multiply;
  }

  .banner.has-image .nav li a {
    color: white;
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
  }

  ::slotted([slot="nav-description"]) {
    font-size: 18px;
  }

  .nav-content--header {
    grid-column: span 6;
  }

  .secondary-nav {
    grid-column: span 2;
  }

  .spacer {
    grid-column: span 1;
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
  }

  .secondary-nav li {
    border-bottom: 1px solid #acaaa2;
  }

  .secondary-nav li a {
    color: #222222;
    text-decoration: none;
    margin: 8px 0;
    display: block;
    font-size: 16px;
  }

  .secondary-nav li:last-child {
    border: none;
  }

  .banner {
    display: block;
    min-height: 100vh;
  }

  @media screen and (max-width: 576px) {
    :host {
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

    .main-nav-wrapper {
      padding: 0 12px;
    }

    .page-title {
      font-size: 42px;
      line-height: 45px;
    }
  }
`;
