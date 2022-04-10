import { css } from "lit";

export const PreHeaderStyles = css`
  .pre-nav {
    background: white;
    display: flex;
    justify-content: end;
    height: 35px;
    align-items: center;
  }

  .pre-nav a {
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

  .btn-donate {
    background: #97e5ea;
  }

  .btn-action {
    background: #dad5ca;
  }
`;
