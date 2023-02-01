import { css } from "lit";

export const FooterStyles = css`
  footer {
    background-color: var(--ibp-teal-dark);
  }

  .grid-12-col {
    padding: 0 44px;
    max-width: 1352px;
    margin: 0 auto;
  }

  hr {
    border-color: var(--ibp-footer-bg-dark);
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
    border-bottom: 1px solid #3f8d98;
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
    // background: linear-gradient(135deg, var(--ibp-teal-dark) 55%, var(--ibp-teal) 55%);
    background: var(--ibp-teal);
    clip-path: polygon(45% 0, 100% 0, 100% 100%, 35% 100%);
    z-index: 0;
    transition: all 0.7s ease-out;
  }

  .footer-banner.active:after {
    clip-path: polygon(60% 0, 100% 0, 100% 100%, 50% 100%);
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
    :host {
      outline: 1px solid purple;
    }

    .main,
    .right,
    .left {
      grid-column: auto;
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
      padding: 0 32px;
      margin-top: 15px;
      opacity: 1;
    }

    .footer-slogan {
      font-size: 42px;
      line-height: 48px;
      grid-column: 1/13;
    }

    .footer-newsletter {
      padding-top: 40px;
    }
  }
`;
