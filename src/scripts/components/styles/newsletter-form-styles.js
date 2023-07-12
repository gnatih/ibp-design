import { css } from "lit";

export const NewsletterFormStyles = css`
  :host {
    display: block;
    color: white;
    font-size: 16px;
    line-height: 22px;
  }

  .signup-form {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    position: relative;
  }

  .signup-form h6,
  .signup-form .form {
    text-align: left;
    grid-column: 2/6;
  }

  // .form {
  //   display: flex;
  //   margin-top: 8px;
  //   position: relative;
  // }

  input[type="email"] {
    font-family: var(--ibp-body-font-family);
    width: 100%;
    border: none;
    font-size: 12px;
    letter-spacing: 1px;
    padding: 16px 0;
    padding-left: 46px;
    grid-column: 1/6;
  }

  input[type="email"]::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  input[type="email"]:focus {
    outline: none;
  }

  .icon-email {
    margin-right: 8px;
    position: absolute;
    top: 15px;
    left: 16px;
    color: var(--ibp-teal-light);
    font-size: 18px;
  }

  button {
    min-width: 120px;
    border: none;
  }

  .formEmailButton {
    grid-column: 6/7;
    background: var(--ibp-teal-dark);
    width: 100%;
    color: white;
    text-transform: uppercase;
    text-align: center;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 1px;
    padding: 16px;
    border: none;
  }

  .formEmailButton:hover {
    background: var(--ibp-accent);
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
