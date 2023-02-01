import { css } from "lit";

export const PreHeaderStyles = css`
  :host {
    display: flex;
    justify-content: end;
    height: 35px;
    background: white;
    position: absolute;
    top: 0;
    right: 0;
  }

  .overlay :host {
    background: green;
  }

  a {
    font-size: 13px;
    font-family: "Adelle Sans", sans-serif;
    font-weight: 800;
    text-decoration: none;
    color: #151515;
    padding: 0 14px;
    text-transform: uppercase;
    line-height: 35px; 
    letter-spacing: 0.12em;
  }

  @media screen and (max-width: 576px) {
    :host {
      display: none;
    }
  }
`;
