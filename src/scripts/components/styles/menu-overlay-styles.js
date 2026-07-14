import { css } from "lit";

export const MenuOverlayStyles = css`
  :host {
    --drawer-sub-bg: var(--ibp-drawer-sub-bg, #f7f5f0);
    --drawer-sub-border: var(--ibp-drawer-sub-border, #efece5);
    --drawer-sub-ink: var(--ibp-drawer-sub-ink, #3f3f39);
    --drawer-cta-ink: var(--ibp-menu-cta-ink, #3a1c00);
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s;
    font-weight: 400;
  }

  .overlay.visible {
    opacity: 1;
    visibility: visible;
    z-index: 999;
  }

  .scroll-container {
    display: flex;
    overflow: auto;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .drawer-bar {
    background: white;
    border-bottom: 1px solid var(--ibp-hr);
    flex: none;
  }

  .drawer-bar-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 68px;
  }

  .close-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: none;
    border: none;
    padding: 0;
    font-size: 18px;
    color: var(--ibp-body-text);
    cursor: pointer;
  }

  .close-btn:focus-visible,
  .drawer-row:focus-visible,
  .drawer-sub a:focus-visible,
  .drawer-cta:focus-visible,
  .util-links a:focus-visible {
    outline: 2px solid var(--ibp-accent);
    outline-offset: -2px;
  }

  .drawer {
    flex: 1;
    background: white;
    padding-bottom: 44px;
  }

  .drawer-search {
    margin: 16px 0;
  }

  .drawer-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 44px;
    padding: 12px 2px;
    background: none;
    border: none;
    border-bottom: 1px solid var(--ibp-ecru);
    font-family: var(--ibp-body-font-family);
    font-weight: 600;
    font-size: 16px;
    text-align: left;
    text-transform: none;
    letter-spacing: normal;
    color: var(--ibp-body-text);
    text-decoration: none;
    cursor: pointer;
  }

  .drawer-row .indicator {
    color: var(--ibp-teal);
    font-size: 14px;
  }

  .drawer-row.open {
    background: var(--ibp-ecru);
    color: var(--ibp-teal);
    padding-left: 12px;
    padding-right: 12px;
  }

  .drawer-sub {
    background: var(--drawer-sub-bg);
    padding: 2px 0;
  }

  .drawer-sub a {
    display: flex;
    align-items: center;
    min-height: 44px;
    padding: 4px 14px 4px 24px;
    font-size: 14px;
    color: var(--drawer-sub-ink);
    border-bottom: 1px solid var(--drawer-sub-border);
    text-decoration: none;
  }

  .drawer-sub a:last-child {
    border-bottom: none;
  }

  .drawer-cta {
    display: block;
    margin: 24px 0 14px;
    background: var(--ibp-accent);
    color: var(--drawer-cta-ink);
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    padding: 13px;
    border-radius: 7px;
    text-decoration: none;
  }

  .util-links {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }

  .util-links a {
    font-size: 13px;
    font-weight: 600;
    color: var(--ibp-teal);
    text-decoration: none;
    min-height: 44px;
    display: flex;
    align-items: center;
  }

  /* The drawer is the < 1024px pattern; on desktop the mega menu owns nav. */
  @media screen and (min-width: 1024px) {
    .overlay {
      display: none;
    }
  }
`;
