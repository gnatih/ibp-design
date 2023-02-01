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
    return html` <div class="footer-banner">
        <div class="grid-12-col">
          <div class="footer-slogan">We make <span>budgets</span><br />work for <span>people</span></div>
          <div class="footer-newsletter"><newsletter-form show-heading="true" class="signup-form"></newsletter-form></div>
        </div>
      </div>
      <footer>
        <div class="grid-12-col">
          <div class="left">
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
            <social-links color="var(--ibp-accent-alt)"></social-links>
          </div>
          <div class="right">
            <h6>&nbsp;</h6>
            <ul class="footer-nav">
              <li><a href="https://internationalbudget.org/contact-us/">Contact</a></li>
              <li><a href="https://internationalbudget.org/ethical-violations/">Whistleblower Policy</a></li>
              <li><a href="https://www.internationalbudget.org/library/copyright/">Copyright</a></li>
              <li><a href="https://us12.campaign-archive.com/home/?u=de5755d359416097d437841c1&id=5799ba65dd">Newsletter</a></li>
            </ul>
          </div>
        </div>
        <div class="copyright">© ${new Date().getFullYear()} International Budget Partnership. All rights reserved. • Made with Love by creatives with a conscience</div>
      </footer>`;
  }

  firstUpdated() {
    let nb = this.shadowRoot.querySelector("footer");

    let observer = new IntersectionObserver(
      (entries) => {
        this.shadowRoot.querySelector(".footer-banner").classList.toggle("active", entries[0].isIntersecting);
      },
      {
        threshold: [0.4],
      }
    );

    observer.observe(nb);
  }
}

window.customElements.define("ibp-footer", IbpFooter);
