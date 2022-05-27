import { LitElement, html, css } from "lit";
import { HeaderStyles } from "./styles/header-styles";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { BaseStyles } from "./styles/base-styles";
import { fetchData, createPrimaryMenu, renderPrimaryMenu, renderSecondaryMenu } from "../api";
import "./partials/menu-overlay";
import "./partials/pre-header";
import "./partials/ibp-logo";
import { classMap } from "lit/directives/class-map.js";

export class IbpHeader extends LitElement {
  static styles = [BaseStyles, HeaderStyles];

  // static get properties() {
  //   return {
  //     primary_menu: { type: Array },
  //     hero: { type: String },
  //     current_menu: { type: Object },
  //     show_menu: { type: Boolean, attribute: "visible" },
  //     background: {},
  //     hide_sidebar: { type: Boolean, attribute: "hide-sidebar" },
  //     mini: { type: Boolean, attribute: "mini" },
  //   };
  // }

  static properties = {
    primary_menu: { type: Array },
    hero: { type: String },
    current_menu: { type: Object },
    show_menu: { type: Boolean, attribute: "visible" },
    background: {},
    hide_sidebar: { type: Boolean, attribute: "hide-sidebar" },
    mini: { type: Boolean, attribute: "mini" },
    active_slug: { attribute: "active-slug" },
  };

  firstUpdated() {
    let hash_links = this.shadowRoot.querySelectorAll(".hash-link");

    for (const link of hash_links) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");
        window.location = href;

        var urlParser = document.createElement("a");
        urlParser.href = href;
        if (urlParser.origin + urlParser.pathname === location.origin + location.pathname) {
          window.location.reload(true);
        }
        return false;
      });
    }
  }

  constructor() {
    super();
    this.primary_menu = [];
    this.parent_menu = {};
    this.current_menu = {};
    this.show_menu = false;

    fetchData("wp-api-menus/v2/menu-locations/primary").then((res) => {
      let { primary, current, parent } = createPrimaryMenu(res, this.active_slug);

      if (current.hero && typeof this.background !== "undefined") {
        this.background = current.hero;
      }

      this.primary_menu = primary;
      this.current_menu = current;
      this.parent_menu = parent;
    });
  }

  showMenuOverlay(e) {
    e.preventDefault();
    this.show_menu = true;
  }

  _hideMenuOverlay() {
    this.show_menu = false;
  }

  _getSidebar() {
    if (!this.hide_sidebar) {
      return html`<div class="secondary-nav">
          <slot name="secondary-nav">${renderSecondaryMenu(this.parent_menu)}</slot>
        </div>
        <div class="spacer"></div>`;
    }
  }

  render() {
    return html`
      <pre-header></pre-header>
      <div class="main-nav-wrapper">
        <div class="main-nav grid-12-col container">
          <a class="logo" href="/"><ibp-logo></ibp-logo></a>
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

      ${!this.mini
        ? html`
            <div class="${classMap({ banner: !this.mini, "has-image": this.background })}" style="background-image: url(${this.background})">
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
          `
        : null}

      <menu-overlay @hideMenuOverlay=${this._hideMenuOverlay} ?visible="${this.show_menu}" .menu="${this.primary_menu}"></menu-overlay>
    `;
  }
}

window.customElements.define("ibp-header", IbpHeader);
