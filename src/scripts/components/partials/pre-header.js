import { html, LitElement } from "lit";
import { PreHeaderStyles } from "../styles/pre-header-styles";
import { BaseStyles } from "../styles/base-styles";

export class PreHeader extends LitElement {
  static get styles() {
    return [BaseStyles, PreHeaderStyles];
  }

  render() {
    return html`
      <a href="https://internationalbudget.org/press/" class="btn btn-press">Press</a>
      <a href="https://internationalbudget.org/events/" class="btn btn-events">Events</a>
      <a href="https://internationalbudget.org/support-us/" class="btn btn-donate">Support Us</a>
    `;
  }
}

window.customElements.define("pre-header", PreHeader);
