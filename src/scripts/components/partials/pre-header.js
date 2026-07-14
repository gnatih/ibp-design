import { html, LitElement } from "lit";
import { PreHeaderStyles } from "../styles/pre-header-styles";
import { BaseStyles } from "../styles/base-styles";

export class PreHeader extends LitElement {
  static get styles() {
    return [BaseStyles, PreHeaderStyles];
  }

  static properties = {
    search_open: { type: Boolean, attribute: "search-open" },
  };

  _toggleSearch(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent("toggleSearch", { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <a href="https://internationalbudget.org/press/">Press</a>
      <span class="sep" aria-hidden="true"></span>
      <a href="https://internationalbudget.org/support-us/">Support Us</a>
      <span class="sep" aria-hidden="true"></span>
      <button class="search-toggle" aria-label="Search" aria-expanded="${!!this.search_open}" @click=${this._toggleSearch}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
      </button>
    `;
  }
}

window.customElements.define("pre-header", PreHeader);
