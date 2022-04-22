import { LitElement, html, css } from "lit";
import { HeaderStyles } from "./styles/header-styles";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { BaseStyles } from "./styles/base-styles";
import { fetchData, createPrimaryMenu, renderPrimaryMenu, renderSecondaryMenu } from "../api";
import "./partials/menu-overlay";
import "./partials/pre-header";
import "./partials/ibp-logo";
import { classMap } from "lit/directives/class-map.js";

onhashchange = () => {
  if (window.location.hash !== "") {
    window.location.reload();
  }
};

const ibpHome = "http://ibp.wp.localhost";

export class IbpHeader extends LitElement {
  static styles = [BaseStyles, HeaderStyles];

  static get properties() {
    return {
      primary_menu: { type: Array },
      hero: { type: String },
      current_menu: { type: Object },
      show_menu: { type: Boolean, attribute: "visible" },
      background: { type: String, attribute: "background" },
      hide_sidebar: { type: Boolean, attribute: "hide-sidebar" },
    };
  }

  constructor() {
    super();
    this.primary_menu = [];
    this.parent_menu = {};
    this.current_menu = {};
    this.show_menu = false;
    // this.background = "http://";

    document.querySelector("ibp-header").classList.remove("loading");

    fetchData("wp-api-menus/v2/menu-locations/primary").then((res) => {
      let { primary, current, parent } = createPrimaryMenu(res);
      this.primary_menu = primary;
      this.current_menu = current;
      this.parent_menu = parent;
    });
  }

  showMenuOverlay() {
    this.show_menu = true;
  }

  _hideMenuOverlay() {
    this.show_menu = false;
  }

  _getSidebar() {
    if (!this.hide_sidebar) {
      return html`<div class="secondary-nav">
        <slot name="secondary-nav">${renderSecondaryMenu(this.parent_menu)}</slot>
      </div>`;
    }
  }

  render() {
    return html`
      <pre-header></pre-header>
      <div class="${classMap({ banner: true, "has-image": this.background || this.current_menu.hero })}" style="background: url(${this.background || this.current_menu.hero}) center/cover no-repeat">
        <div class="main-nav-wrapper container">
          <div class="main-nav grid-12-col">
            <a class="logo" href="/"><ibp-logo fill="#000"></ibp-logo></a>
            <ul class="nav">
              ${renderPrimaryMenu(this.primary_menu)}
              <li class="d-md-none">
                <a href="#" class="search-btn"><i class="ibp-icons icon-globe"></i></a>
              </li>
              <li>
                <a href="#" class="search-btn"><i class="ibp-icons icon-search"></i></a>
              </li>
              <li>
                <a href="#" class="search-btn" @click=${this.showMenuOverlay}><i class="ibp-icons icon-menu"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="nav-content-wrapper">
          <div class="container nav-content grid-12-col">
            ${this._getSidebar()}
            <div class="nav-content--header">
              <slot name="pre-nav"></slot>
              <slot name="nav-title"><h1 class="page-title">${this.current_menu.title}</h1></slot>
              <slot name="nav-description"><div class="page-description">${unsafeHTML(this.current_menu.description)}</div></slot>
            </div>
            <slot name="infobox"></slot>
          </div>
        </div>
      </div>
      <menu-overlay @hideMenuOverlay=${this._hideMenuOverlay} ?visible="${this.show_menu}" .menu="${this.primary_menu}"></menu-overlay>
    `;
  }
}

window.customElements.define("ibp-header", IbpHeader);
