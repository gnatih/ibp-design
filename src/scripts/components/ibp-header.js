import { LitElement, html, css } from "lit";
import { HeaderStyles } from "./styles/header-styles";

import { BaseStyles } from "./styles/base-styles";
import { fetchData, createPrimaryMenu, renderPrimaryMenu, renderSecondaryMenu } from "../api";
import "./partials/menu-overlay";
import "./partials/pre-header";
import "./partials/ibp-logo";

onhashchange = () => {
  if (window.location.hash !== "") {
    window.location.reload();
  }
};

export class IbpHeader extends LitElement {
  static styles = [BaseStyles, HeaderStyles];

  static get properties() {
    return {
      primary_menu: { type: Array },
      hero: { type: String },
      current_menu: { type: Object },
      show_menu: { type: Boolean, attribute: "visible" },
    };
  }

  constructor() {
    super();
    this.primary_menu = [];
    this.parent_menu = {};
    this.current_menu = {};
    this.show_menu = false;

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

  render() {
    return html` <link rel="stylesheet" href="css/icons.css" />
      <pre-header></pre-header>
      <div class="banner ${this.current_menu.hero ? "has-image" : ""}" style="background-image:url(${this.current_menu.hero})">
        <div class="main-nav grid-12-col">
          <div class="logo"><ibp-logo fill="${this.current_menu.hero ? "#fff" : "#000"}" /></div>
          <div class="nav">
            <ul>
              ${renderPrimaryMenu(this.primary_menu)}
              <li>
                <a href="#" class="search-btn"><i class="ibp-icons icon-search"></i></a>
              </li>
              <li>
                <a href="#" class="search-btn" @click=${this.showMenuOverlay}><i class="ibp-icons icon-menu"></i></a>
              </li>
            </ul>
          </div>
        </div>

        <div class="nav-content grid-12-col">
          <slot name="secondary-nav">${renderSecondaryMenu(this.parent_menu)}</slot>

          <div class="nav-content--header">
            <slot name="nav-title"><h1 class="page-title">${this.current_menu.title}</h1></slot>
            <slot name="nav-description"></slot>
          </div>
        </div>
      </div>
      <menu-overlay @hideMenuOverlay=${this._hideMenuOverlay} ?visible="${this.show_menu}" .menu="${this.primary_menu}"></menu-overlay>`;
  }
}

window.customElements.define("ibp-header", IbpHeader);
