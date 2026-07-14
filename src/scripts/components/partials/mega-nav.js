import { html, LitElement } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { BaseStyles } from "../styles/base-styles";
import { MegaNavStyles } from "../styles/mega-nav-styles";
import { getSectionConfig, DEFAULT_ASSETS_BASE } from "../../menu-config";

/**
 * Desktop hover mega-menu (>= 1024px). Renders whatever WordPress sends:
 * top items without children are plain links; items with children get the
 * three-zone panel (intro + pill / arrow rows / wedge photo). Section intro
 * copy, pill and photo come from menu-config.js, matched by slug/label.
 *
 * Interaction contract (Part 2 responsive spec):
 * - hover opens with intent delay, one panel at a time
 * - first click/tap opens, second follows the parent link
 * - Enter follows that same click contract, Space always toggles
 * - Esc closes and returns focus to the top-level item
 * - focus or click outside closes
 */

const OPEN_DELAY = 100;
const CLOSE_DELAY = 250;

export class MegaNav extends LitElement {
  static styles = [BaseStyles, MegaNavStyles];

  static properties = {
    menu: { type: Array },
    assets_base: { attribute: "assets-base" },
    open_index: { state: true },
  };

  constructor() {
    super();
    this.menu = [];
    this.assets_base = DEFAULT_ASSETS_BASE;
    this.open_index = -1;
    this._open_timer = null;
    this._close_timer = null;
    this._onDocumentClick = (e) => {
      if (this.open_index > -1 && !e.composedPath().includes(this)) this._close();
    };
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("click", this._onDocumentClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this._onDocumentClick);
    this._clearTimers();
  }

  _clearTimers() {
    window.clearTimeout(this._open_timer);
    window.clearTimeout(this._close_timer);
  }

  _open(index) {
    this._clearTimers();
    this.open_index = index;
  }

  _close() {
    this._clearTimers();
    this.open_index = -1;
  }

  _scheduleOpen(index) {
    this._clearTimers();
    this._open_timer = window.setTimeout(() => (this.open_index = index), OPEN_DELAY);
  }

  _scheduleClose() {
    this._clearTimers();
    this._close_timer = window.setTimeout(() => (this.open_index = -1), CLOSE_DELAY);
  }

  _onTopClick(e, index) {
    // First activation opens the panel; the second follows the link.
    if (this.open_index !== index) {
      e.preventDefault();
      this._open(index);
    }
  }

  _onTopKeydown(e, index) {
    if (e.key === " ") {
      e.preventDefault();
      this.open_index === index ? this._close() : this._open(index);
    }
  }

  _onKeydown(e) {
    if (e.key === "Escape" && this.open_index > -1) {
      let toggle = this.renderRoot.querySelector(`#mega-toggle-${this.open_index}`);
      this._close();
      if (toggle) toggle.focus();
    }
  }

  _onFocusout() {
    // Close once focus has fully left the component (tabbing out).
    window.setTimeout(() => {
      if (!this.matches(":focus-within")) this._close();
    });
  }

  _renderPanel(item, config, index) {
    let pill_href = (config && config.pillHref) || item.url;
    let hero = item.hero || (config && config.heroImage ? this.assets_base + config.heroImage : null);
    let wedge_styles = {
      "--wedge-mask": `url('${this.assets_base}wedge-mask.svg')`,
    };

    return html`
      <div id="mega-panel-${index}" class="${classMap({ panel: true, open: this.open_index === index })}">
        <div class="container">
          <div class="${classMap({ "panel-grid": true, "no-photo": !hero })}">
            <div class="intro">
              <p class="intro-title">${item.title}</p>
              ${config && config.introCopy ? html`<p class="intro-copy">${config.introCopy}</p>` : null}
              <a class="opill" href="${pill_href}">${(config && config.pillLabel) || "Overview"}</a>
            </div>
            <div class="mid">
              <ul class="rows">
                ${item.children.map(
                  (child) => html`
                    <li>
                      <a class="row ${child.classes || ""}" href="${child.url}">
                        <span class="t">${child.title}</span>
                        <span class="arw" aria-hidden="true">›</span>
                      </a>
                    </li>
                  `
                )}
              </ul>
            </div>
            ${hero
              ? html`
                  <div class="wedge" style=${styleMap(wedge_styles)}>
                    <img src="${hero}" alt="" loading="lazy" style=${styleMap({ "object-position": (config && config.heroPosition) || "center" })} />
                  </div>
                `
              : null}
          </div>
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <nav aria-label="Primary" @keydown=${this._onKeydown} @focusout=${this._onFocusout}>
        <ul class="nav-list">
          ${this.menu.map((item, index) => {
            let has_children = item.children && item.children.length > 0;
            let config = has_children ? getSectionConfig(item) : null;

            if (!has_children) {
              return html`
                <li>
                  <a class="nav-item" href="${item.url}" aria-current=${ifDefined(item.active ? "true" : undefined)}>${item.title}</a>
                </li>
              `;
            }

            return html`
              <li
                @mouseenter=${() => this._scheduleOpen(index)}
                @mouseleave=${() => this._scheduleClose()}
              >
                <a
                  id="mega-toggle-${index}"
                  class="nav-item"
                  href="${item.url}"
                  aria-haspopup="true"
                  aria-expanded="${this.open_index === index}"
                  aria-current=${ifDefined(item.active ? "true" : undefined)}
                  @click=${(e) => this._onTopClick(e, index)}
                  @keydown=${(e) => this._onTopKeydown(e, index)}
                >
                  ${item.title}
                  <span class="caret" aria-hidden="true">
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor"><path d="M1 3l4 4 4-4z" /></svg>
                  </span>
                </a>
                ${this._renderPanel(item, config, index)}
              </li>
            `;
          })}
        </ul>
      </nav>
    `;
  }
}

window.customElements.define("mega-nav", MegaNav);
