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
    /* Teal caps with hairline separators (Jayesh review round, 14 Jul 2026). */
    font-size: 13px;
    font-family: var(--ibp-body-font-family);
    font-weight: 600;
    letter-spacing: var(--ibp-letter-spacing);
    text-transform: uppercase;
    text-decoration: none;
    color: var(--ibp-teal);
    padding: 0 14px;
    line-height: 35px;
  }

  .sep {
    /* Vertical cousin of the dropdown row hairlines. */
    flex: none;
    width: 1px;
    height: 16px;
    background: var(--ibp-teal-wash-border, #c7e3e5);
  }

  a:hover,
  a:focus-visible {
    color: var(--ibp-teal-dark);
  }

  a:focus-visible,
  .search-toggle:focus-visible {
    outline: 2px solid var(--ibp-teal-dark);
    outline-offset: -2px;
  }

  .search-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    /* 44x44 touch target per the Part-2 spec (Vera gate, 14 Jul 2026).
       The 35px util bar stays; the extra hit area overflows transparently. */
    width: 44px;
    height: 44px;
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
