import { css } from "lit";

export const PreHeaderStyles = css`
  :host {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 6px;
    height: 35px;
    background: white;
    position: absolute;
    top: 0;
    right: 0;
    padding-right: 8px;
  }

  a {
    font-size: 13px;
    font-family: var(--ibp-body-font-family);
    font-weight: 600;
    text-decoration: none;
    color: var(--ibp-teal);
    padding: 0 14px;
    line-height: 35px;
  }

  a:hover,
  a:focus-visible {
    color: var(--ibp-teal-dark);
  }

  a:focus-visible,
  .search-toggle:focus-visible {
    outline: 2px solid var(--ibp-accent);
    outline-offset: -2px;
  }

  .search-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    padding: 0;
    background: none;
    border: none;
    color: var(--ibp-teal);
    cursor: pointer;
  }

  .search-toggle:hover {
    color: var(--ibp-teal-dark);
  }

  @media screen and (max-width: 576px) {
    :host {
      display: none;
    }
  }
`;
