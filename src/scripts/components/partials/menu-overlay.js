import { html, LitElement } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { BaseStyles } from "../styles/base-styles";
import { MenuOverlayStyles } from "../styles/menu-overlay-styles";
import { renderFullMenu } from "../../api";
import "./pre-header";
import "./ibp-logo";
import "./featured-story";

export class MenuOverlay extends LitElement {
  static properties = {
    visible: { type: Boolean, attribute: "visible" },
    menu: { type: Array },
  };

  static get styles() {
    return [BaseStyles, MenuOverlayStyles];
  }

  hideMenuOverlay() {
    this.visible = false;
    this.dispatchEvent(new CustomEvent("hideMenuOverlay", { detail: { visible: false } }));
  }

  render() {
    return html` <link rel="stylesheet" href="css/icons.css" />
      <div class="overlay" style=${styleMap({ display: this.visible ? "block" : "none" })}>
        <div class="scroll-container">
          <pre-header></pre-header>
          <div class="main-nav grid-12-col" style="background: var(--ibp-page-bg)">
            <div class="logo"><ibp-logo fill="#000" /></div>
            <div class="nav">
              <ul>
                <li class="search-box"><input type="text" placeholder="Enter text" /><i class="ibp-icons icon-search"></i></li>
                <li>
                  <a href="#" class="close-btn" @click=${this.hideMenuOverlay}><i class="ibp-icons icon-close"></i></a>
                </li>
              </ul>
            </div>
          </div>

          <div class="nav-content grid-12-col">
            <div class="full-menu">${renderFullMenu(this.menu)}</div>
            <featured-story class="featured-story"></featured-story>
          </div>
          <div class="nav-footer grid-12-col">
            <div class="signup-note">Subscribe to updates about International Budget Partnership’s work around the world</div>
            <div class="signup-form"></div>
          </div>
        </div>
      </div>`;
  }
}

window.customElements.define("menu-overlay", MenuOverlay);
