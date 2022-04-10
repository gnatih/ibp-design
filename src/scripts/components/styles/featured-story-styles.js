import { css } from "lit";

export const FeaturedStoryStyles = css`
  :host {
    display: flex;
    flex-direction: column;
    background: var(--ibp-text-highlight-light);
  }

  .story-image {
    flex: 1;
  }

  .story-image img {
    object-fit: contain;
  }

  .story-content {
    padding: 38px;
  }

  .featured-type {
    font-size: 12px;
    color: var(--ibp-text-highlight-dark);
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h3 {
    font-family: var(--ibp-heading-font-family);
    font-size: var(--ibp-heading-3-font-size);
    letter-spacing: var(--ibp-letter-spacing-sm);
    line-height: 1.1;
    margin: 0;
    margin-bottom: 22px;
  }

  .read-more {
    color: var(--ibp-body-text);
    text-decoration: none;
    font-weight: 700;
  }
`;
