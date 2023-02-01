import { css } from "lit";

export const SearchBoxStyles = css`
  .search-box {
    position: relative;
  }

  .search-box i {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    left: 1px;
    top: 1px;
    line-height: 36px;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    text-align: center;
    background: var(--ibp-ecru);
  }

  input[type="text"],
  input[type="search"] {
    padding: 0;
    border: 1px solid var(--ibp-ecru);
    font-size: 15px;
    line-height: 26px;
    padding: 4px 9px;
    border-radius: 500px;
    position: relative;
    padding-left: 46px;
  }

  input[type="search"]:focus {
    outline: 1px solid var(--ibp-accent);
  }

  @media screen and (max-width: 567px) {
    input[type="search"] {
      width: 100%;
    }
  }
`;
