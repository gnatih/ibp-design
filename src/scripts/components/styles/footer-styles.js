import { css } from "lit";

export const FooterStyles = css`
  footer {
    background-color: var(--ibp-footer-bg-light);
  }

  .grid-12-col {
    padding: 0 44px;
    max-width: 1440px;
    margin: 0 auto;
  }

  hr {
    border-color: var(--ibp-footer-bg-dark);
  }

  .left,
  .right {
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
    background: var(--ibp-footer-bg-dark);
    text-align: center;
    padding: 44px 0;
    color: white;
  }

  .copyright {
    text-align: center;
    color: rgba(255, 255, 255, 0.2);
    text-transform: uppercase;
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

  @media screen and (max-width: 576px) {
    .main,
    .right,
    .left {
      grid-column: auto;
    }

    .grid-12-col {
      padding: 0;
    }

    footer {
      padding: 0;
    }

    .right {
      order: 3;
      padding: 0 32px;
      padding-bottom: 32px;
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
  }
`;
