import { css, html, LitElement } from "lit";

export class PreHeader extends LitElement {
  static get styles() {
    return css`
      .pre-nav {
        background: white;
        display: flex;
        justify-content: end;
        height: 35px;
        align-items: center;
      }

      .pre-nav a {
        font-size: 13px;
        font-family: "Adelle Sans", sans-serif;
        font-weight: 800;
        text-decoration: none;
        color: #151515;
        padding: 0 14px;
        text-transform: uppercase;
        line-height: 35px;
        letter-spacing: 0.12em;
      }

      .btn-donate {
        background: #97e5ea;
      }

      .btn-action {
        background: #dad5ca;
      }
    `;
  }

  render() {
    return html`<div class="pre-nav">
      <a href="/" class="btn btn-action">Take Action</a>
      <a href="#" class="btn btn-donate">Donate</a>
    </div>`;
  }
}

window.customElements.define("pre-header", PreHeader);
