import { html, LitElement } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { BaseStyles } from "../styles/base-styles";
import { MenuOverlayStyles } from "../styles/menu-overlay-styles";
import { getSectionConfig } from "../../menu-config";
import "./ibp-logo";
import "./search-box";

/**
 * Mobile / tablet drawer (< 1024px): full-height white drawer with one
 * tap-to-expand accordion per top-level section (Part 2 responsive spec,
 * phone mockups). One section open at a time, 44px tap targets, the orange
 * Events CTA pinned after the rows, Press / Support Us as utility links.
 */
export class MenuOverlay extends LitElement {
  static properties = {
    visible: { type: Boolean, attribute: "visible" },
    menu: { type: Array },
    open_index: { state: true },
  };

  static get styles() {
    return [BaseStyles, MenuOverlayStyles];
  }

  constructor() {
    super();
    this.menu = [];
    this.open_index = -1;
  }

  updated(changed) {
    if (changed.has("visible") && this.visible) {
      this.open_index = -1;
      let close = this.renderRoot.querySelector(".close-btn");
      if (close) close.focus();
    }
  }

  hideMenuOverlay(e) {
    if (e) e.preventDefault();

    this.visible = false;
    this.dispatchEvent(new CustomEvent("hideMenuOverlay", { detail: { visible: false } }));
  }

  _onKeydown(e) {
    if (e.key === "Escape" && this.visible) this.hideMenuOverlay();
  }

  _toggleSection(index) {
    // Opening a section collapses the previous one (one open at a time).
    this.open_index = this.open_index === index ? -1 : index;
  }

  _renderSection(item, index) {
    let has_children = item.children && item.children.length > 0;

    if (!has_children) {
      return html`<a class="drawer-row" href="${item.url}">${item.title}</a>`;
    }

    let open = this.open_index === index;
    let config = getSectionConfig(item);
    let item_url = (item.url || "").replace(/\/$/, "");
    let has_landing_child = item.children.some((child) => (child.url || "").replace(/\/$/, "") === item_url);

    return html`
      <button
        class="${classMap({ "drawer-row": true, open })}"
        aria-expanded="${open}"
        aria-controls="drawer-sub-${index}"
        @click=${() => this._toggleSection(index)}
      >
        ${item.title} <span class="indicator" aria-hidden="true">${open ? "−" : "＋"}</span>
      </button>
      <div id="drawer-sub-${index}" class="drawer-sub" ?hidden=${!open}>
        ${!has_landing_child ? html`<a href="${item.url}">${(config && config.pillLabel) || "Overview"}</a>` : null}
        ${item.children.map((child) => html`<a class="${child.classes || ""}" href="${child.url}">${child.title}</a>`)}
      </div>
    `;
  }

  render() {
    return html`
      <div class=${classMap({ visible: this.visible, overlay: true })} role="dialog" aria-modal="true" aria-label="Menu" @keydown=${this._onKeydown}>
        <div class="scroll-container">
          <div class="drawer-bar">
            <div class="container drawer-bar-inner">
              <a class="logo" href="/"><ibp-logo width="140"></ibp-logo></a>
              <button class="close-btn" aria-label="Close menu" @click=${this.hideMenuOverlay}><i class="ibp-icons icon-close"></i></button>
            </div>
          </div>

          <div class="drawer">
            <div class="container">
              <div class="drawer-search"><search-box></search-box></div>
              <nav aria-label="Primary">${this.menu.map((item, index) => this._renderSection(item, index))}</nav>
              <a class="drawer-cta" href="https://internationalbudget.org/events/">Events</a>
              <div class="util-links">
                <a href="https://internationalbudget.org/press/">Press</a>
                <a href="https://internationalbudget.org/support-us/">Support Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define("menu-overlay", MenuOverlay);
