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
    background: purple;
  }

  input[type="text"] {
    padding: 0;
    border: 1px solid var(--ibp-ecru);
    font-size: 15px;
    line-height: 26px;
    padding: 4px 9px;
    border-radius: 26px;
    position: relative;
    padding-left: 46px;
  }

  .search-box {
    position: relative;
  }

  .search-box i {
    position: absolute;
    left: 0;
    top: 0;
    line-height: 36px;
    border-radius: 50%;
    width: 36px;
    text-align: center;
    background: var(--ibp-ecru);
  }

  .nav-header {
    display: flex;
    flex-direction: column;
    flex: 1;
    background: var(--ibp-ecru);
  }

  .nav-content {
    height: 100%;
  }

  .nav-footer-wrapper {
    background: var(--ibp-footer-bg-light);
  }

  .nav-content-wrapper {
    flex: 1;
  }

  .main-nav-wrapper {
    background: white;
  }

  .nav-footer .signup-note {
    color: white;
    grid-column: span 5;
    line-height: 28px;
    padding: 44px 0;
  }

  .nav-footer newsletter-form {
    grid-column: 7/13;
  }

  .full-menu {
    grid-column: span 8;
    display: flex;
  }

  .full-menu div {
    width: 33.3333%;
  }

  .full-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .full-menu li {
    line-height: 2;
  }

  .full-menu h6 {
    margin-top: 44px;
  }

  .full-menu h6 i {
    display: none;
  }

  .full-menu a {
    text-decoration: none;
    color: var(--ibp-body-text);
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
      background: var(--ibp-ecru);
    }

    .main-nav-wrapper .container {
      padding: 0 12px;
    }

    pre-nav {
      outline: 1px solid red;
    }

    .full-menu {
      flex-direction: column;
    }

    .full-menu div {
      width: auto;
    }

    .full-menu h6 {
      background: var(--ibp-ecru);
      margin: 0;
      padding-top: 14px;
      padding-bottom: 12px;
      border-top: 1px solid var(--ibp-text-highlight-light);
    }

    .full-menu h6 i {
      display: block;
    }

    .full-menu li a {
      font-size: 14px;
    }

    .btn-donate,
    .btn-action {
      padding: 14px 14px 12px 14px;
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
      margin-top: 24px;
      display: block;
    }

    .nav-footer newsletter-form {
      grid-column: auto;
      margin-top: 0;
      margin-bottom: 44px;
    }
  }
`;
