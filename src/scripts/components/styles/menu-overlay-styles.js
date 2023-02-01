import { css } from "lit";

export const MenuOverlayStyles = css`
  .overlay {
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 100vh;
    opacity: 0;
    height: 0;
    transition: all 1s;
    pointer-events: none;
  }

  .overlay.visible {
    opacity: 1;
    top: 0;
    pointer-events: auto;
    z-index: 999;
  }

  .scroll-container {
    display: flex;
    overflow: auto;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }

  .search-box-mobile {
    grid-column: span 12;
    margin-top: 20px;
    display: none;
  }

  .nav-header {
    display: flex;
    flex-direction: column;
    flex: 1;
    background: var(--ibp-teal-dark);
    color: white;
  }

  .nav-content {
    height: 100%;
  }

  .nav-footer-wrapper {
    background: var(--ibp-teal-light);
  }

  .nav-content-wrapper {
    padding-top: 0;
    flex: 1;
  }

  .main-nav-wrapper {
    background: white;
  }

  .nav-footer .signup-note {
    color: var(--ibp-body-text);
    grid-column: span 5;
    line-height: 28px;
    padding: 44px 0;
  }

  .nav-footer newsletter-form {
    grid-column: 7/13;
    align-self: center;
  }

  .full-menu {
    grid-column: span 8;
    display: flex;
  }

  .full-menu div {
    width: 33.3333%;
    margin-right: 20px;
  }

  .full-menu div:last-child {
    margin-right: 0;
  }

  .full-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .full-menu li {
    line-height: 2;
  }

  .full-menu .sub {
    margin-top: 44px;
    line-height: 3;
  }

  .full-menu .sub a {
    font-size: 13px;
    line-height: 15px;
    font-weight: bold;
  }

  .full-menu li a {
    line-height: 1.4;
  }

  .full-menu h6 {
    margin-top: 44px;
  }

  .full-menu h6 i {
    display: none;
  }

  .full-menu a {
    display: inline-block;
    text-decoration: none;
    color: white;
  }

  .featured-story {
    grid-column: span 4;
    margin-right: -44px;
  }

  .toggle {
    display: none;
  }

  .sub-links {
    display: block;
    margin: 32px 0;
    line-height: 32px;
  }

  .sub-links a {
    display: block;
    font-size: 13px;
    font-weight: bold;
  }

  @media screen and (max-width: 576px) {
    .main-nav-wrapper {
      padding: 0;
      padding-top: 5px;
      // background: var(--ibp-teal-dark);
      background: white;
    }

    .search-box-mobile {
      display: block;
    }

    .nav-content {
      margin-top: 20px;
    }

    .search-box {
      display: none;
    }

    .logo {
      max-width: 20px;
    }

    pre-nav {
      outline: 1px solid red;
    }

    .full-menu {
      flex-direction: column;
    }

    .full-menu div {
      width: auto;
      margin: 0;
    }

    .full-menu h6 {
      background: var(--ibp-teal-dark);
      margin: 0;
      padding-top: 14px;
      padding-bottom: 12px;
      border-top: 1px solid var(--ibp-teal-light);
    }

    .full-menu h6 i {
      display: block;
    }

    .full-menu li a {
      font-size: 14px;
    }

    .btn-donate,
    .btn-action {
      // padding: 14px 14px 12px 14px;
      padding: 8px 14px 6px 14px;
      font-size: 13px;
      text-transform: uppercase;
      font-weight: 800;
      border-radius: 500px;
      margin-right: 11px;
      letter-spacing: var(--ibp-letter-spacing);
    }

    .toggle:checked + h6 i {
      transform: rotate(180deg) translateY(4px);
    }

    .full-menu ul {
      overflow: hidden;
      transition: max-height 0.8s ease-in-out;
      max-height: 0;
    }

    h6 label {
      transition: all 0.7s ease-out;
    }

    .toggle:checked + h6 + ul {
      display: block;
      color: blue;
      max-height: 100vh;
    }

    .action-buttons {
      margin-top: 18px;
      margin-bottom: 24px;
      display: block;
    }

    .nav-footer newsletter-form {
      grid-column: auto;
      margin-top: 0;
      margin-bottom: 44px;
    }
  }
`;
