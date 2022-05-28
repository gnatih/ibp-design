import { LitElement, html } from "lit";
import { BaseStyles } from "./styles/base-styles";
import { FooterStyles } from "./styles/footer-styles";
import "./partials/ibp-logo";
import "./partials/newsletter-form";
import "./partials/social-links";

export class IbpFooter extends LitElement {
  static styles = [BaseStyles, FooterStyles];

  constructor() {
    super();
  }

  render() {
    const show_heading = true;

    return html` <footer>
      <div class="grid-12-col">
        <div class="left">
          <hr />
          <h6>Quick Links</h6>

          <ul class="footer-nav">
            <li><a href="https://internationalbudget.org/campaign-to-open-budgets/">Join Our Call To Action</a></li>
            <li><a href="https://internationalbudget.org/our-work/">What We Do</a></li>
            <li><a href="https://internationalbudget.org/library/publications/">Publications</a></li>
            <li><a href="https://internationalbudget.org/about-us/">About</a></li>
          </ul>
        </div>
        <div class="main">
          <ibp-logo flat width="280"></ibp-logo>

          <newsletter-form style="padding: 0 44px; margin: 44px 0;"></newsletter-form>

          <social-links color="var(--ibp-accent-alt)"></social-links>
        </div>
        <div class="right">
          <hr />
          <h6>&nbsp;</h6>
          <ul class="footer-nav">
            <li><a href="https://internationalbudget.org/contact-us/">Contact</a></li>
            <li><a href="https://internationalbudget.org/ethical-violations/">Whistleblower Policy</a></li>
            <li><a href="https://www.internationalbudget.org/library/copyright/">Copyright</a></li>
            <li><a href="https://www.internationalbudget.org/library/publications/newsletter/sign-up-for-ibp-e-publications/">Newsletter</a></li>
          </ul>
        </div>
      </div>
      <div class="copyright">© 2022 International Budget Partnership. All rights reserved. • Made with Love by creatives with a conscience</div>
    </footer>`;
  }
}

window.customElements.define("ibp-footer", IbpFooter);
