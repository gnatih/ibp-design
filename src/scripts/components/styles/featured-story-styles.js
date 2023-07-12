import { css } from "lit";

export const FeaturedStoryStyles = css`
  :host {
    display: flex;
    flex-direction: column;
    background: white;
    color: var(--ibp-body-text);
  }

  .story-image {
    flex: 1;
    position: relative;
  }

  .story-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left top;
    position: absolute;
    top: 0;
    left: 0;
  }

  .story-content {
    padding: 38px;
    padding-top: 28px;
  }

  .featured-type {
    font-size: 12px;
    color: var(--ibp-body-text);
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    // margin-bottom: 10px;
  }

  h3 {
    font-family: var(--ibp-heading-font-family);
    font-size: var(--ibp-heading-3-font-size);
    letter-spacing: var(--ibp-letter-spacing-sm);
    font-weight: normal;
    line-height: 1.1;
    margin: 0;
    margin-bottom: 22px;
  }

  .read-more {
    color: var(--ibp-body-text);
    text-decoration: none;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    padding: 5px 12px 4px 12px;
    border-radius: 500px;
    margin-left: -12px;
  }

  .read-more:hover {
    outline: 1px solid var(--ibp-accent);
  }

  .read-more i {
    margin-left: 8px;
    font-size: 15px;
    line-height: 0;
  }

  @media screen and (max-width: 576px) {
    h3 {
      font-size: 20px;
      margin-top: 15px;
    }

    .story-image {
      min-height: 100vw;
    }

    .story-content {
      padding: 24px 15px;
    }

    :host {
      display: block;
      margin-left: 0;
      margin-right: 0 !important;
      margin-bottom: 32px;
      margin-top: 32px;
    }

    .read-more {
      font-size: 14px;
    }
  }
`;
