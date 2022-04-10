import { html, LitElement } from "lit";
import { PreHeaderStyles } from "../styles/pre-header-styles";

export class PreHeader extends LitElement {
  static get styles() {
    return [PreHeaderStyles];
  }

  render() {
    return html`<div class="pre-nav">
      <a href="/" class="btn btn-action">Take Action</a>
      <a href="#" class="btn btn-donate">Donate</a>
    </div>`;
  }
}

window.customElements.define("pre-header", PreHeader);
