import { LitElement, html } from "lit";
import { BaseStyles } from "./styles/base-styles";
import { FooterStyles } from "./styles/footer-styles";
import "./partials/ibp-logo";

export class IbpFooter extends LitElement {
  static styles = [BaseStyles, FooterStyles];

  constructor() {
    super();
  }

  render() {
    return html` <link rel="stylesheet" href="/css/icons.css" />
      <footer>
        <div class="grid-12-col">
          <div class="left">
            <hr />
            <h6>Quick Links</h6>
          </div>
          <div class="main">
            <ibp-logo fill="#fff" width="280"></ibp-logo>

            <div class="signup-form">
              <h6>Sign up for updates</h6>
              <div class="form">
                <input type="text" />
                <button type="submit">Sign up</button>
              </div>
            </div>

            <div class="social-links">
              <a href="#" target="_blank"><i class="ibp-icons icon-facebook"></i></a>
              <a href="#" target="_blank"><i class="ibp-icons icon-twitter"></i></a>
              <a href="#" target="_blank"><i class="ibp-icons icon-linkedin"></i></a>
              <a href="#" target="_blank"><i class="ibp-icons icon-youtube"></i></a>
            </div>
          </div>
          <div class="right">
            <hr />
            <h6>Some title</h6>
          </div>
        </div>
        <div class="copyright">
          © 2022 International Budget Partnership. All rights reserved. • Made with Love by creatives with a conscience
        </div>
      </footer>`;
  }
}

window.customElements.define("ibp-footer", IbpFooter);
