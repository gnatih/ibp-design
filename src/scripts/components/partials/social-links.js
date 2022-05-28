import { BaseStyles } from "../styles/base-styles";
import { LitElement, html, css } from "lit";

export class SocialLinks extends LitElement {
  static get properties() {
    return {
      color: {
        type: String,
      },
    };
  }

  static get styles() {
    return [
      BaseStyles,
      css`
        footer :host {
          background: green;
        }

        footer .social-links {
          outline: 1px solid red;
        }

        a:hover {
          color: white;
        }
      `,
    ];
  }

  render() {
    return html` <div class="social-links" style="color: ${this.color}">
      <a href="https://www.facebook.com/InternationalBudgetPartnership" target="_blank"><i class="ibp-icons icon-facebook"></i></a>
      <a href="https://twitter.com/OpenBudgets" target="_blank"><i class="ibp-icons icon-twitter"></i></a>
      <a href="https://www.linkedin.com/company/international-budget-partnership" target="_blank"><i class="ibp-icons icon-linkedin"></i></a>
      <a href="https://www.youtube.com/user/IntBudgetPartnership/playlists" target="_blank"><i class="ibp-icons icon-youtube"></i></a>
    </div>`;
  }
}

window.customElements.define("social-links", SocialLinks);
