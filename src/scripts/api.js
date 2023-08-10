import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { menu } from "./menu-data";

export async function fetchData(path) {
  // let base_url = "https://ibp.wp.localhost";

  // let data = await fetch(`${base_url}/wp-json/${path}`, {});

  // return await data.json();
  return menu;
}

export function createPrimaryMenu(menu, active_slug) {
  let href = window.location.href.replace(/\/$/, "");
  let _menu = [];
  let _current = {};
  let _parent = {};
  let has_active = false;

  menu.forEach((item) => {
    let item_url = item.url.replace(/\/$/, "");
    let parent = {
      title: item.title,
      hero: item.hero,
      url: item.url,
    };

    if (item_url == href && href !== "https://internationalbudget.org/events") {
      parent.active = true;
      _parent = parent;
      has_active = true;
    }

    if (item.children) {
      item.children.forEach((item_child) => {
        let child_url = item_child.url.replace(/\/$/, "");

        let child = {
          title: item_child.title,
          url: item_child.url,
          hero: item_child.hero,
        };

        if (child_url === href && href !== "https://internationalbudget.org/events") {
          if (!has_active) {
            parent.active = true;
            _parent = parent;
            has_active = true;
          }

          child.active = true;
          _current = child;
        }

        if (!parent.children) parent.children = [];

        parent.children.push(child);
      });
    }

    _menu.push(parent);
  });

  return { primary: _menu, current: _current, parent: _parent };
}

export function renderPrimaryMenu(menu) {
  let str = "";

  menu.forEach((el) => {
    const parent_class = el.active ? "active" : "";

    str += `<li class="d-xs-none"><a class="${parent_class}" href="${el.url}">${el.title}</a></li>`;
  });

  return unsafeHTML(str);
}

export function renderSecondaryMenu(menu) {
  if (menu.children && menu.children.length > 1) {
    let str = `<hr><input type="checkbox" id="subnav-toggle"><label for="subnav-toggle"><h6>${menu.title}</h6></label><div class="subnav-content"><ul>`;

    menu.children.forEach((item) => {
      let link_class = "";

      if (item.active) link_class += "active";
      if (item.url.match(/(#calculator|#download)/)) link_class += " hash-link";

      str += `<li><a href="${item.url}" class="${link_class}">${item.title}</a></li>`;
    });

    str += `</div></ul><div class="spacer"></div>`;

    return unsafeHTML(str);
  }
}

export function renderFullMenu(menu) {
  let str = "";

  // let menu_items = [menu.slice(0, 2), menu.slice(2, menu.length - 4), menu.slice(menu.length - 4, menu.length)]; //pre-launch
  let menu_items = [menu.slice(0, 3), menu.slice(3, menu.length - 1), menu.slice(menu.length - 1)];

  str += `<div>${createLinkList(menu_items[0])}</div>`;
  str += `<div>${createLinkList(menu_items[1])}</div>`;
  str += `<div>
            ${createLinkList(menu_items[2])}
            <div class="sub"> 
            <h6><a href="/press">Press</a></h6>
            <h6><a href="/events">Events</a></h6>
            <h6><a href="/insights">Insights</a></h6>
            </div>
            <div class="action-buttons d-md-none"><a href="https://internationalbudget.org/take-action/" class="btn-action">Take Action</a><a href="https://internationalbudget.org/support-us" class="btn-donate">Support Us</a></div>
            <social-links></social-links>
          </div>`;

  return unsafeHTML(str);
}

function createLinkList(items) {
  let str = "";

  items.forEach((item) => {
    if (item.children) {
      str += `<input class="toggle" type="checkbox" id="${item.title}" name="fn"><h6><label for="${item.title}">${item.title} <i class="ibp-icons icon-caret-down" style="float:right"></i></label></h6><ul>`;

      item.children.forEach((child) => {
        str += `<li><a href="${child.url}">${child.title}</a></li>`;
      });

      str += `</ul>`;
    } else {
      str += `<h6><a href="${item.url}">${item.title}</a></h6>`;
    }
  });

  return str;
}

export function createSecondaryMenu(menu) {}
