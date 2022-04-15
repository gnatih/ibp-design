import { html, LitElement } from "lit";
import { BaseStyles } from "../styles/base-styles";
import { FeaturedStoryStyles } from "../styles/featured-story-styles";

export class FeaturedStory extends LitElement {
  static get styles() {
    return [BaseStyles, FeaturedStoryStyles];
  }

  render() {
    return html`<div class="story-image" style="background: url(https://internationalbudget.org/wp-content/uploads/226A5020-Astou_senegal_square.jpg) center/cover no-repeat"></div>
      <div class="story-content">
        <p class="featured-type">Story</p>
        <h3>Building Inclusive & Accountable Budgets in Gambia</h3>
        <a href="#" class="read-more">Read more <i class="ibp-icons icon-caret-right-circle"></i></a>
      </div>`;
  }
}

window.customElements.define("featured-story", FeaturedStory);
