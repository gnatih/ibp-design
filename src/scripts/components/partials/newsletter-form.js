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
      <div>
        ${this.show_heading ? html`<p>Keep up to date by subscribing to our newsletter.</p>` : ``}
        <form class="signup-form" action="https://internationalbudget.us12.list-manage.com/subscribe/post" method="POST">
          <input type="hidden" name="u" value="de5755d359416097d437841c1" />
          <input type="hidden" name="id" value="5799ba65dd" />
          <input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" value="" placeholder="Email address" />
          <input type="hidden" name="ht" value="96c90fdc37737e65fac2ec4dfea45fd6b4126bf0:MTY3NDczOTA0Ni4wNzk5" />
          <input type="hidden" name="mc_signupsource" value="hosted" />
          <input type="submit" class="formEmailButton" name="submit" value="Signup" />
          <i class="icon-email"></i>
        </form>
      </div>
    `;
  }
}

window.customElements.define("newsletter-form", NewsletterForm);
