import { css } from "lit";

export const FooterStyles = css`
  :host {
    font-weight: 400;
  }

  footer {
    background-color: var(--ibp-teal-dark);
  }

  .grid-12-col {
    padding: 0 44px;
    max-width: 1352px;
    margin: 0 auto;
  }

  hr {
    border-color: rgba(255, 255, 255, 0.2);
  }

  .left,
  .right {
    color: white;
    padding-top: 32px;
  }

  .left {
    grid-column: 1/4;
  }

  .right {
    grid-column: 10/13;
  }

  .main {
    grid-column: 4/10;
    text-align: center;
    padding: 44px 0;
    color: white;
  }

  .copyright {
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    padding: 18px;
  }

  .footer-nav {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-nav li {
    padding: 8px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .footer-nav li:last-child {
    border-bottom: none;
  }

  .footer-nav a {
    color: white;
    font-size: 16px;
  }

  .footer-banner {
    padding-top: 60px;
    padding-bottom: 60px;
    position: relative;
    background: var(--ibp-teal-dark);
    font-weight: 400;
  }

  .footer-banner .grid-12-col {
    z-index: 2;
    position: relative;
    opacity: 0;
    transition: all 0.7s ease-out;
    margin-top: 35px;
  }

  .footer-banner:after {
    content: "";
    width: 100%;
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    background: var(--ibp-teal);
    clip-path: polygon(45% 0, 100% 0, 100% 100%, 35% 100%);
    z-index: 0;
    transition: all 0.7s ease-out;
  }

  .footer-banner.active:after {
    clip-path: polygon(63% 0, 100% 0, 100% 100%, 53% 100%);
  }

  .footer-banner.active .grid-12-col {
    opacity: 1;
    margin-top: 0;
  }

  .footer-slogan {
    grid-column: 1/8;
    font-size: 90px;
    color: white;
    line-height: 94px;
    letter-spacing: -0.025em;
    font-family: var(--ibp-heading-font-family);
  }

  .footer-slogan span {
    color: var(--ibp-teal-light);
  }

  .footer-newsletter {
    grid-column: 9/13;
    align-self: center;
  }

  @media screen and (max-width: 576px) {
    .main,
    .right,
    .left {
      grid-column: auto;
    }

    .left .footer-nav li:last-child {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .right h6 {
      display: none;
    }

    .grid-12-col,
    footer {
      padding: 0;
    }

    .right {
      order: 3;
      padding: 0 32px 32px 32px;
    }

    .left {
      order: 2;
      padding: 0 32px;
    }

    .copyright {
      padding: 0 32px 32px 32px;
      text-align: left;
    }

    hr {
      margin-top: 44px;
    }

    .footer-banner {
      background: linear-gradient(180deg, var(--ibp-teal-dark) 50%, var(--ibp-teal) 50%);
      padding-top: 32px;
      padding-bottom: 32px;
    }

    .footer-banner:after {
      display: none;
    }

    .footer-banner .grid-12-col {
      padding: 0 20px;
      margin-top: 0 !important;
      opacity: 1;
    }

    .footer-slogan {
      font-size: 42px;
      line-height: 48px;
      grid-column: 1/13;
      white-space: nowrap;
    }

    .footer-newsletter {
      padding-top: 40px;
    }
  }

  @media screen and (max-width: 320px) {
    .footer-slogan {
      font-size: 32px;
      line-height: 41px;
    }
  }
`;
