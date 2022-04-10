import { css } from "lit";

export const BaseStyles = css`
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
    color: var(--ibp-accent-alt);
    margin: 0 15px;
  }

  .main-nav {
    padding: 0 44px;
    min-height: 135px;
    align-items: center;
    font-famiy: "Adelle Sans", sans-serif;
  }

  .main-nav .logo {
    grid-column: 1/3;

    @media screen and (max-width: 375px) {
      grid-column: 1/13;
    }
  }

  .main-nav .nav {
    justify-self: end;
    grid-column: 3/13;
  }

  .nav ul {
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
    text-decoration: none;
    letter-spacing: 0.12em;
    margin-right: 1em;
    font-weight: 400;
    font-family: "Adelle Sans", sans-serif;
  }

  .nav li:last-child a {
    margin-right: 0;
    padding-right: 0;
  }

  .grid-12-col {
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(12, 1fr);

    @media screen and (min-width: 375px) {
      gap: 12px;
    }
  }

  @media screen and (max-width: 576px) {
    .grid-12-col {
      grid-template-columns: 1fr;
    }

    .main-nav {
      grid-template-columns: 1fr;
    }

    .main-nav .nav {
      grid-column: auto;
      display: none;
    }

    .main-nav .logo {
      grid-column: auto;
    }
  }
`;
