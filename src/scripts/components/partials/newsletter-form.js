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
          <i class="icon-email"></i>
          <input type="text" placeholder="Email address" />
          <button type="submit">Sign up</button>
        </form>
      </div>
    `;
  }
}

window.customElements.define("newsletter-form", NewsletterForm);
