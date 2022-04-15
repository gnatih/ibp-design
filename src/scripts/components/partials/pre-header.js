import { html, LitElement } from "lit";
import { PreHeaderStyles } from "../styles/pre-header-styles";
import { BaseStyles } from "../styles/base-styles";

export class PreHeader extends LitElement {
  static get styles() {
    return [BaseStyles, PreHeaderStyles];
  }

  render() {
    return html`
      <a href="/" class="btn btn-action">Take Action</a>
      <a href="#" class="btn btn-donate">Donate</a>
    `;
  }
}

window.customElements.define("pre-header", PreHeader);
