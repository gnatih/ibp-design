import { css } from "lit";

export const NewsletterFormStyles = css`
  :host {
    display: block;
  }

  .signup-form {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }

  .signup-form h6,
  .signup-form .form {
    text-align: left;
    grid-column: 2/6;
  }

  .form {
    display: flex;
    margin-top: 8px;
    position: relative;
  }

  input[type="text"] {
    font-family: var(--ibp-body-font-family);
    width: 100%;
    border: none;
    font-size: 12px;
    letter-spacing: 1px;
    padding: 16px 0;
    padding-left: 42px;
  }

  .icon-email {
    margin-right: 8px;
    //   position: absolute;
    //   top: 12px;
    //   left: 12px;
    //   color: var(--ibp-ecru);
  }

  button {
    min-width: 120px;
    border: none;
  }

  a.newsletter-signup-button {
    background: var(--ibp-accent-alt);
    width: 100%;
    color: var(--ibp-body-text);
    text-transform: uppercase;
    text-align: center;
    font-size: 16px;
    letter-spacing: 1px;
    padding: 20px;
  }

  .newsletter-signup-button:hover {
    background: white;
    color: var(--ibp-body-text);
  }

  @media screen and (max-width: 576px) {
    .signup-form h6,
    .signup-form .form {
      grid-column: auto;
    }

    .signup-form {
      grid-template-columns: 1fr;
    }
  }
`;
