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
            <li><a href="#">The Network</a></li>
            <li><a href="#">Countries</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
        <div class="main">
          <ibp-logo fill="#fff" width="280"></ibp-logo>

          <newsletter-form show-heading style="padding: 0 44px; margin: 44px 0;"></newsletter-form>

          <social-links color="var(--ibp-accent-alt)"></social-links>
        </div>
        <div class="right">
          <hr />
          <h6>Title</h6>
          <ul class="footer-nav">
            <li><a href="#">Contact</a></li>
            <li><a href="#">Whistleblower Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="copyright">© 2022 International Budget Partnership. All rights reserved. • Made with Love by creatives with a conscience</div>
    </footer>`;
  }
}

window.customElements.define("ibp-footer", IbpFooter);
