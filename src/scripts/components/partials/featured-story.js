import { html, LitElement } from "lit";
import { BaseStyles } from "../styles/base-styles";
import { FeaturedStoryStyles } from "../styles/featured-story-styles";

export class FeaturedStory extends LitElement {
  static get styles() {
    return [BaseStyles, FeaturedStoryStyles];
  }

  static properties = {
    featured: { type: Object },
  };

  constructor() {
    super();

    this.featured = {
      featured_image: "",
      featured_link: "",
      featured_type: "",
      featured_title: "",
      featured_button_text: "",
    };

    fetch("https://internationalbudget.org/wp-json/ibp/v1/featured")
      .then((res) => res.json())
      .then((data) => {
        this.featured = data;
      });
  }

  render() {
    return html`<div class="story-image"><img src="${this.featured.featured_image}" style="" /></div>
      <div class="story-content">
        <p class="featured-type">${this.featured.featured_type}</p>
        <h3>${this.featured.featured_title}</h3>
        <div>
          <a href="${this.featured.featured_link}" class="read-more btn btn-clear">${this.featured.featured_button_text} <i class="ibp-icons icon-caret-right-circle"></i></a>
        </div>
      </div>`;
  }
}

window.customElements.define("featured-story", FeaturedStory);
