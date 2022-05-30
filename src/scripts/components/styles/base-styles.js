import { css } from "lit";

export const BaseStyles = css`
  .container {
    max-width: 1352px;
    padding: 0 44px;
    margin: 0 auto;
  }

  h6 {
    font-family: var(--ibp-body-font-family);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: var(--ibp-letter-spacing);
    font-size: var(--ibp-heading-6-font-size);
    margin: 0;
    font-weight: 800;
    margin-bottom: 1em;
  }

  hr {
    border: solid var(--ibp-hr-height) #acaaa2;
  }

  a {
    text-decoration: none;
  }

  input[type="text"] {
    padding: 12px;
    font-family: var(--ibp-body-font-family);
    font-size: var(--ibp-input-font-size);
    color: var(--ibp-body-text);
  }

  button {
    background: var(--ibp-accent-alt);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    border: none;
    font-weight: 800;
    cursor: pointer;
  }

  input[type="text"]:focus {
    outline: none;
  }

  .social-links {
    margin-top: 44px;
  }

  .social-links a {
    color: inherit;
    margin-right: 25px;
  }

  .main-nav-wrapper {
    background: white;
  }

  .main-nav {
    min-height: var(--ibp-main-nav-height);
    align-items: center;
    font-famiy: "Adelle Sans", sans-serif;
  }

  .main-nav .logo {
    grid-column: 1/3;
  }

  .nav-content-wrapper {
    padding-top: 44px;
  }

  .nav,
  .mobile-nav {
    justify-self: end;
    grid-column: 3/13;
  }

  .nav {
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  .nav li a {
    border-radius: 500px;
    padding: 8px 12px;
    color: #151515;
    text-transform: uppercase;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0.12em;
    margin-right: 1em;
    font-weight: 400;
    font-family: "Adelle Sans", sans-serif;
  }

  @media screen and (max-width: 1299px) {
    .nav li a {
      margin-right: 0;
    }
  }

  .nav li:last-child a {
    margin-right: 0;
    padding-right: 0;
  }

  .grid-12-col {
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(12, 1fr);
  }

  @media screen and (max-width: 375px) {
    .grid-12-col {
      gap: 12px;
    }
  }

  .btn-donate {
    background: var(--ibp-accent-alt);
  }

  .btn-donate:hover,
  .btn-action:hover {
    background: var(--ibp-accent);
  }

  .btn-action {
    background: var(--ibp-text-highlight-light);
  }

  .d-md-none {
    display: none;
  }

  input[type="text"]::placeholder {
    text-transform: uppercase;
  }

  @media screen and (max-width: 576px) {
    .grid-12-col {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .main-nav.container {
      padding: 0 15px;
      padding-top: 5px;
      grid-template-columns: 1fr;
      align-items: center;
    }

    .main-nav .mobile-nav {
      display: flex;
    }

    .main-nav .logo {
      grid-column: auto;
      max-width: 131px;
    }

    .container {
      max-width: 100%;
      padding: 0 32px;
      margin: 0 auto;
    }

    .main-nav {
      min-height: 68px;
    }

    .main-nav .mobile-nav {
      display: flex;
    }

    .nav li a {
      margin-right: 0;
      font-size: 18px;
    }

    .d-md-none {
      display: block;
    }

    .social-links {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 1190px) {
    .d-xs-none {
      display: none;
    }
  }

  /** icons **/
  i[class^="icon-"]:before,
  i[class*=" icon-"]:before {
    font-family: ibp-icons !important;
    font-style: normal;
    font-weight: normal !important;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-arrow-left:before {
    content: "\\f101";
  }
  .icon-arrow-up:before {
    content: "\\f102";
  }
  .icon-budget:before {
    content: "\\f103";
  }
  .icon-caret-down:before {
    content: "\\f104";
  }
  .icon-caret-left:before {
    content: "\\f105";
  }
  .icon-caret-right-circle:before {
    content: "\\f106";
  }
  .icon-caret-right:before {
    content: "\\f107";
  }
  .icon-close:before {
    content: "\\f108";
  }
  .icon-download:before {
    content: "\\f109";
  }
  .icon-email-filled:before {
    content: "\\f10a";
  }
  .icon-email:before {
    content: "\\f10b";
  }
  .icon-facebook:before {
    content: "\\f10c";
  }
  .icon-filter:before {
    content: "\\f10d";
  }
  .icon-globe:before {
    content: "\\f10e";
  }
  .icon-linkedin:before {
    content: "\\f10f";
  }
  .icon-menu:before {
    content: "\\f110";
  }
  .icon-participation:before {
    content: "\\f111";
  }
  .icon-search:before {
    content: "\\f112";
  }
  .icon-share:before {
    content: "\\f113";
  }
  .icon-transparency:before {
    content: "\\f114";
  }
  .icon-twitter:before {
    content: "\\f115";
  }
  .icon-youtube:before {
    content: "\\f116";
  }
  .icon-zoom:before {
    content: "\\f117";
  }
`;
