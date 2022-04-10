import { css } from "lit";

export const FooterStyles = css`
  footer {
    background-color: var(--ibp-footer-bg-light);
    padding: 0 44px;
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

  .signup-form {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin-top: 44px;
  }

  .signup-form h6,
  .signup-form .form {
    text-align: left;
    grid-column: 2/6;
  }

  .form {
    display: flex;
    margin-top: 8px;
  }

  .form input[type="text"] {
    width: 100%;
    border: none;
  }

  .form button {
    min-width: 120px;
    border: none;
  }

  .copyright {
    text-align: center;
    color: rgba(255, 255, 255, 0.2);
    text-transform: uppercase;
    font-size: 12px;
    padding: 18px 0;
  }

  @media screen and (max-width: 576px) {
    .signup-form h6,
    .signup-form .form,
    .main,
    .right,
    .left {
      grid-column: auto;
    }

    footer {
      padding: 0;
    }

    .right {
      order: 3;
      padding: 0 32px;
    }

    .left {
      order: 2;
      padding: 0 32px;
    }

    .signup-form {
      grid-template-columns: 1fr;
      padding: 0 32px;
    }
  }
`;
