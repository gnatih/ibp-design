import { html, LitElement } from "lit";
import { SearchBoxStyles } from "../styles/search-box-styles";
import { BaseStyles } from "../styles/base-styles";

export class SearchBox extends LitElement {
  static get styles() {
    return [BaseStyles, SearchBoxStyles];
  }

  focusInput() {
    let input = this.renderRoot.querySelector("input[type=search]");
    if (input) input.focus();
  }

  render() {
    return html`<form action="https://internationalbudget.org/" method="get" role="search" class="search-box">
      <input type="search" class="search-field" placeholder="Enter Search" name="s" /><i class="ibp-icons icon-search"></i>
      <input type="submit" class="search-submit" value="Search" style="display: none" />
    </form>`;
  }
}

window.customElements.define("search-box", SearchBox);
