import { html, LitElement } from "lit";
import { NewsletterFormStyles } from "../styles/newsletter-form-styles";
import { BaseStyles } from "../styles/base-styles";

export class NewsletterForm extends LitElement {
  static get styles() {
    return [BaseStyles, NewsletterFormStyles];
  }

  static get properties() {
    return {
      show_heading: { type: Boolean, attribute: "show-heading" },
    };
  }

  render() {
    return html`
      <div class="signup-form">
        ${this.show_heading ? html`<h6>Sign up for updates</h6>` : ``}
        <form class="form">
          <a class="newsletter-signup-button" href="http://eepurl.com/dNqbOs" target="_blank" rel="nofollow"><i class="icon-email"></i> <span>Sign up for our newsletters</span></a>
        </form>
      </div>
    `;
  }
}

window.customElements.define("newsletter-form", NewsletterForm);
