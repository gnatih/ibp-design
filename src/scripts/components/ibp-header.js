import { LitElement, html, css } from "lit";
import { HeaderStyles } from "./styles/header-styles";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { BaseStyles } from "./styles/base-styles";
import { fetchData, createPrimaryMenu, renderPrimaryMenu, renderSecondaryMenu } from "../api";
import "./partials/menu-overlay";
import "./partials/pre-header";
import "./partials/ibp-logo";
import "./partials/ibp-logo-twentyfive";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

export class IbpHeader extends LitElement {
  static styles = [BaseStyles, HeaderStyles];

  static properties = {
    primary_menu: { type: Array },
    hero: { type: String },
    current_menu: { type: Object },
    show_menu: { type: Boolean, attribute: "visible" },
    dark: { type: Boolean, reflect: true },
    background_image: { type: String, attribute: "background-image" },
    hide_sidebar: { type: Boolean, attribute: "hide-sidebar" },
    mini: { type: Boolean, attribute: "mini" },
    active_slug: { attribute: "active-slug" },
    subnavToggle: {},
  };

  get subnavToggle() {
    return this.renderRoot.querySelector("label");
  }

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

    let didScroll,
      lastScrollTop = 0,
      delta = 5,
      header = this.renderRoot.querySelector(".main-nav-header-wrapper"),
      navbarHeight = parseFloat(getComputedStyle(header).getPropertyValue("height"));

    window.addEventListener("scroll", (e) => (didScroll = true));

    setInterval(() => {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);

    let hasScrolled = () => {
      let { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (Math.abs(lastScrollTop - scrollTop) <= delta) return;

      if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
        header.classList.remove("header-down");
        header.classList.add("header-up");
      } else {
        if (scrollTop + clientHeight < scrollHeight) {
          header.classList.remove("header-up");
          header.classList.add("header-down");
        }
      }

      lastScrollTop = scrollTop;
      console.log(scrollTop);
    };
  }

  constructor() {
    super();
    this.primary_menu = [];
    this.parent_menu = {};
    this.current_menu = {};
    this.show_menu = false;

    fetchData().then((res) => {
      let { primary, current, parent } = createPrimaryMenu(res, this.active_slug);

      if (current.hero && typeof this.background_image !== "undefined") {
        this.background = current.hero;
      }

      this.primary_menu = primary;
      this.current_menu = current;
      this.parent_menu = parent;

      window.setTimeout(() => {
        let subnavToggle = this.shadowRoot.querySelector("label[for=subnav-toggle]");

        subnavToggle.onclick = function () {
          let subnavContent = this.nextElementSibling;
          if (subnavContent.style.maxHeight) {
            subnavContent.style.maxHeight = null;
          } else {
            subnavContent.style.maxHeight = subnavContent.scrollHeight + "px";
          }
        };
      });
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
    let styles = {
      "background-color": this.background_color || "var(--ibp-ecru)",
      color: this.text_color,
    };

    if (this.background_image) {
      styles["background-image"] = this.background_image;
    }

    return html`
      <div class="main-nav-header-wrapper">
        <pre-header></pre-header>
        <div class="main-nav grid-12-col container">
          <a class="logo" href="/"><ibp-logo-twentyfive></ibp-logo-twentyfive></a>
          <ul class="nav">
            ${renderPrimaryMenu(this.primary_menu)}
            <li>
              <a href="#" class="search-btn" @click=${this.showMenuOverlay}><i class="ibp-icons icon-menu"></i></a>
            </li>
          </ul>
        </div>
      </div>

      ${!this.mini
        ? html`
            <div class="${classMap({ banner: !this.mini, "has-image": this.background })}">
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
