import { LitElement, html, css } from "lit";
import { HeaderStyles } from "./styles/header-styles";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { BaseStyles } from "./styles/base-styles";
import { fetchData, createPrimaryMenu, renderSecondaryMenu } from "../api";
import "./partials/menu-overlay";
import "./partials/pre-header";
import "./partials/ibp-logo";
import "./partials/ibp-logo-twentyfive";
import "./partials/mega-nav";
import "./partials/search-box";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

export class IbpHeader extends LitElement {
  static styles = [BaseStyles, HeaderStyles];

  static properties = {
    primary_menu: { type: Array },
    hero: { type: String },
    current_menu: { type: Object },
    show_menu: { type: Boolean, attribute: "visible" },
    show_search: { type: Boolean },
    dark: { type: Boolean, reflect: true },
    background: { type: String, attribute: "background" },
    hide_sidebar: { type: Boolean, attribute: "hide-sidebar" },
    mini: { type: Boolean, attribute: "mini" },
    active_slug: { attribute: "active-slug" },
    assets_base: { attribute: "assets-base" },
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
    };
  }

  constructor() {
    super();
    this.primary_menu = [];
    this.parent_menu = {};
    this.current_menu = {};
    this.show_menu = false;
    this.show_search = false;

    fetchData().then((res) => {
      let { primary, current, parent } = createPrimaryMenu(res, this.active_slug);

      if (current.hero && typeof this.background_image !== "undefined") {
        this.background = current.hero;
      }

      this.primary_menu = primary;
      this.current_menu = current;
      this.parent_menu = parent;

      window.setTimeout(() => {
        if (document.body.clientWidth < 767 && this.background) {
          let secnav = this.renderRoot.querySelector(".secondary-nav");
          secnav.remove();
          this.shadowRoot.appendChild(secnav.cloneNode(true));
        }

        let subnavToggle = this.shadowRoot.querySelector("label[for=subnav-toggle]");

        if (subnavToggle) {
          if (document.body.clientWidth < 767) {
            this.shadowRoot.querySelector("label[for=subnav-toggle] h6").innerHTML += " Menu";
          }

          subnavToggle.onclick = function () {
            let subnavContent = this.nextElementSibling;

            if (subnavContent.style.maxHeight) {
              subnavContent.style.maxHeight = null;
            } else {
              subnavContent.style.maxHeight = subnavContent.scrollHeight + "px";
            }
          };
        }
      });
    });
  }

  showMenuOverlay(e) {
    e.preventDefault();
    this.show_menu = true;
  }

  _hideMenuOverlay() {
    this.show_menu = false;

    // Return focus to the hamburger that opened the drawer (WCAG 2.4.11 /
    // aria-modal contract): closing a dialog must not drop focus.
    this.updateComplete.then(() => {
      let btn = this.renderRoot.querySelector(".menu-btn");
      if (btn) btn.focus();
    });
  }

  _toggleSearch() {
    this.show_search = !this.show_search;

    if (this.show_search) {
      this.updateComplete.then(() => {
        let box = this.renderRoot.querySelector(".search-row search-box");
        if (box && box.focusInput) box.focusInput();
      });
    }
  }

  _onHeaderKeydown(e) {
    if (e.key === "Escape" && this.show_search) {
      this.show_search = false;
      let toggle = this.renderRoot.querySelector("pre-header");
      if (toggle) toggle.renderRoot.querySelector(".search-toggle").focus();
    }
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
      <div class="main-nav-header-wrapper" @keydown=${this._onHeaderKeydown}>
        <pre-header ?search-open="${this.show_search}" @toggleSearch=${this._toggleSearch}></pre-header>
        <div class="main-nav grid-12-col container">
          <a class="logo" href="/" aria-label="International Budget Partnership — home"><ibp-logo></ibp-logo></a>
          <div class="nav-area">
            <mega-nav .menu="${this.primary_menu}" assets-base="${ifDefined(this.assets_base)}"></mega-nav>
            <a class="btn-cta" href="https://internationalbudget.org/events/">Events</a>
            <button class="menu-btn" aria-label="Open menu" @click=${this.showMenuOverlay}><i class="ibp-icons icon-menu" aria-hidden="true"></i></button>
          </div>
        </div>
        <div class="${classMap({ "search-row": true, open: this.show_search })}">
          <div class="container"><search-box></search-box></div>
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
