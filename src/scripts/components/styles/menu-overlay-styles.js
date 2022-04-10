import { css } from "lit";

export const MenuOverlayStyles = css`
  .overlay {
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 100vh;
    display: none;
  }

  .overlay .scroll-container {
    overflow: auto;
    height: 100%;
    position: absolute;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  input[type="text"] {
    padding: 0;
    border: 1px solid var(--ibp-ecru);
    font-size: 15px;
    line-height: 26px;
    padding: 4px 9px;
    border-radius: 26px;
    position: relative;
    padding-left: 46px;
  }

  .search-box {
    position: relative;
  }

  .search-box i {
    position: absolute;
    left: 0;
    top: 0;
    line-height: 36px;
    border-radius: 50%;
    width: 36px;
    text-align: center;
    background: var(--ibp-ecru);
  }

  .nav-content {
    flex: auto;
    background: var(--ibp-ecru);
    padding: 0 44px;
  }

  .nav-footer {
    padding: 44px;
    justify-self: end;
    background: var(--ibp-footer-bg-light);
    align-items: center;
  }

  .nav-footer .signup-note {
    color: white;
    // grid-column: 1/7;
    grid-column: span 6;
    line-height: 28px;
  }

  .nav-footer .signup-form {
    grid-column: 7/13;
  }

  .full-menu {
    grid-column: span 8;
    display: flex;
  }

  .full-menu div {
    width: 33.3333%;
  }

  .full-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .full-menu li {
    line-height: 2;
  }

  .full-menu h6 {
    margin-top: 44px;
  }

  .full-menu a {
    text-decoration: none;
    color: var(--ibp-body-text);
  }

  .featured-story {
    grid-column: span 4;
    margin-right: -44px;
  }
`;
