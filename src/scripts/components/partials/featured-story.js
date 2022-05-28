import { html, LitElement } from "lit";
import { BaseStyles } from "../styles/base-styles";
import { FeaturedStoryStyles } from "../styles/featured-story-styles";

export class FeaturedStory extends LitElement {
  static get styles() {
    return [BaseStyles, FeaturedStoryStyles];
  }

  render() {
    return html`<div class="story-image" style="background: url(https://www2.internationalbudget.org/wp-content/uploads/2022/05/menu_obsimage.jpg) center/cover no-repeat"></div>
      <div class="story-content">
        <p class="featured-type">Report</p>
        <h3>Paths to Progress in the Open Budget Survey 2021</h3>
        <a href="https://internationalbudget.org/open-budget-survey/open-budget-survey-2021" class="read-more">Read more <i class="ibp-icons icon-caret-right-circle"></i></a>
      </div>`;
  }
}

window.customElements.define("featured-story", FeaturedStory);
