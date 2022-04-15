import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { menu } from "./menu-data";

export async function fetchData(path) {
  // let base_url = "https://ibp.wp.localhost";

  // let data = await fetch(`${base_url}/wp-json/${path}`, {});

  // return await data.json();
  return menu;
}

export function createPrimaryMenu(menu) {
  let _menu = [];
  let _current = {};
  let _parent = {};

  menu.forEach((item) => {
    let href = window.location.href;
    let parent = {
      title: item.title,
      url: item.url,
      hero: item.hero,
    };

    if (item.url == href) {
      _current = parent;
      parent.active = true;
    }

    if (item.children) {
      item.children.forEach((item_child) => {
        let child = {
          title: item_child.title,
          url: item_child.url,
          hero: item_child.hero,
          active: item_child.url == href,
        };

        if (item_child.url == href) {
          _parent = parent;
          _current = item_child;
          parent.active = true;
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
    let str = `<div class="secondary-nav"><hr><h6>${menu.title}</h6><ul>`;

    menu.children.forEach((item) => {
      str += `<li><a href="${item.url}" class="${item.active ? "active" : ""}">${item.title}</a></li>`;
    });

    str += `</ul></div><div class="spacer"></div>`;

    return unsafeHTML(str);
  }
}

export function renderFullMenu(menu) {
  let str = "";

  let menu_items = [menu.slice(0, 2), menu.slice(2, menu.length - 1), menu.slice(menu.length - 1, menu.length)];

  str += `<div>${createLinkList(menu_items[0])}</div>`;
  str += `<div>${createLinkList(menu_items[1])}</div>`;
  str += `<div>
            ${createLinkList(menu_items[2])}
            
            <span class="action-buttons d-md-none"><a href="#" class="btn-action">Take Action</a><a href="#" class="btn-donate">Donate</a> </span>
            <span class="sub-links">
              <a href="#">Press</a>
              <a href="#">Events</a>
              <a href="#">Insights</a>
            </span>

            <social-links></social-links>
          </div>`;

  // menu_items.forEach((items) => {
  //   str += `<div>${createLinkList(items)}</div>`;
  // });

  return unsafeHTML(str);
}

function createLinkList(items) {
  let str = "";

  items.forEach((item) => {
    if (item.children) {
      console.log(item);
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
