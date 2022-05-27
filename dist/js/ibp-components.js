/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/scripts/api.js":
/*!****************************!*\
  !*** ./src/scripts/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPrimaryMenu": () => (/* binding */ createPrimaryMenu),
/* harmony export */   "createSecondaryMenu": () => (/* binding */ createSecondaryMenu),
/* harmony export */   "fetchData": () => (/* binding */ fetchData),
/* harmony export */   "renderFullMenu": () => (/* binding */ renderFullMenu),
/* harmony export */   "renderPrimaryMenu": () => (/* binding */ renderPrimaryMenu),
/* harmony export */   "renderSecondaryMenu": () => (/* binding */ renderSecondaryMenu)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/directives/unsafe-html.js */ "./node_modules/lit/directives/unsafe-html.js");
/* harmony import */ var _menu_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-data */ "./src/scripts/menu-data.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function fetchData(_x) {
  return _fetchData.apply(this, arguments);
}

function _fetchData() {
  _fetchData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(path) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _menu_data__WEBPACK_IMPORTED_MODULE_2__.menu);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchData.apply(this, arguments);
}

function createPrimaryMenu(menu, active_slug) {
  var _menu = [];
  var _current = {};
  var _parent = {};
  menu.forEach(function (item) {
    var href = window.location.href.replace(/\/$/, "");
    var url = item.url.replace(/\/$/, "");
    var parent = {
      title: item.title,
      url: item.url,
      hero: item.hero
    };

    if (url == href) {
      _current = parent;
      parent.active = true;
    }

    if (active_slug && item.slug == active_slug) {
      _current = parent;
      parent.active = true;
    }

    if (item.children) {
      item.children.forEach(function (item_child) {
        var item_url = item_child.url.replace(/\/$/, "");
        var child = {
          title: item_child.title,
          url: item_url,
          hero: item_child.hero,
          active: href.indexOf(item_url) > -1
        };

        if (href.indexOf(item_child.url) > -1) {
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
  return {
    primary: _menu,
    current: _current,
    parent: _parent
  };
}
function renderPrimaryMenu(menu) {
  var str = "";
  menu.forEach(function (el) {
    var parent_class = el.active ? "active" : "";
    str += "<li class=\"d-xs-none\"><a class=\"".concat(parent_class, "\" href=\"").concat(el.url, "\">").concat(el.title, "</a></li>");
  });
  return (0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_1__.unsafeHTML)(str);
}
function renderSecondaryMenu(menu) {
  if (menu.children && menu.children.length > 1) {
    var str = "<div class=\"secondary-nav\"><hr><h6>".concat(menu.title, "</h6><ul>");
    menu.children.forEach(function (item) {
      var link_class = "";
      if (item.active) link_class += "active";
      if (item.url.match(/(#calculator|#download)/)) link_class += " hash-link";
      str += "<li><a href=\"".concat(item.url, "\" class=\"").concat(link_class, "\">").concat(item.title, "</a></li>");
    });
    str += "</ul></div><div class=\"spacer\"></div>";
    return (0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_1__.unsafeHTML)(str);
  }
}
function renderFullMenu(menu) {
  var str = "";
  var menu_items = [menu.slice(0, 2), menu.slice(2, menu.length - 4), menu.slice(menu.length - 4, menu.length)];
  str += "<div>".concat(createLinkList(menu_items[0]), "</div>");
  str += "<div>".concat(createLinkList(menu_items[1]), "</div>");
  str += "<div>\n            ".concat(createLinkList(menu_items[2]), "\n            \n            <span class=\"action-buttons d-md-none\"><a href=\"#\" class=\"btn-action\">Take Action</a><a href=\"#\" class=\"btn-donate\">Donate</a> </span>\n            <span class=\"sub-links\">\n              <a href=\"#\">Press</a>\n              <a href=\"#\">Events</a>\n              <a href=\"#\">Insights</a>\n            </span>\n\n            <social-links></social-links>\n          </div>");
  return (0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_1__.unsafeHTML)(str);
}

function createLinkList(items) {
  var str = "";
  items.forEach(function (item) {
    if (item.children) {
      str += "<input class=\"toggle\" type=\"checkbox\" id=\"".concat(item.title, "\" name=\"fn\"><h6><label for=\"").concat(item.title, "\">").concat(item.title, " <i class=\"ibp-icons icon-caret-down\" style=\"float:right\"></i></label></h6><ul>");
      item.children.forEach(function (child) {
        str += "<li><a href=\"".concat(child.url, "\">").concat(child.title, "</a></li>");
      });
      str += "</ul>";
    } else {
      str += "<h6><a href=\"".concat(item.url, "\">").concat(item.title, "</a></h6>");
    }
  });
  return str;
}

function createSecondaryMenu(menu) {}

/***/ }),

/***/ "./src/scripts/components/ibp-footer.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/ibp-footer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IbpFooter": () => (/* binding */ IbpFooter)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _styles_base_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/base-styles */ "./src/scripts/components/styles/base-styles.js");
/* harmony import */ var _styles_footer_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/footer-styles */ "./src/scripts/components/styles/footer-styles.js");
/* harmony import */ var _partials_ibp_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/ibp-logo */ "./src/scripts/components/partials/ibp-logo.js");
/* harmony import */ var _partials_newsletter_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partials/newsletter-form */ "./src/scripts/components/partials/newsletter-form.js");
/* harmony import */ var _partials_social_links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partials/social-links */ "./src/scripts/components/partials/social-links.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var IbpFooter = /*#__PURE__*/function (_LitElement) {
  _inherits(IbpFooter, _LitElement);

  var _super = _createSuper(IbpFooter);

  function IbpFooter() {
    _classCallCheck(this, IbpFooter);

    return _super.call(this);
  }

  _createClass(IbpFooter, [{
    key: "render",
    value: function render() {
      var show_heading = true;
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral([" <footer>\n      <div class=\"grid-12-col\">\n        <div class=\"left\">\n          <hr />\n          <h6>Quick Links</h6>\n\n          <ul class=\"footer-nav\">\n            <li><a href=\"#\">The Network</a></li>\n            <li><a href=\"#\">Countries</a></li>\n            <li><a href=\"#\">Resources</a></li>\n            <li><a href=\"#\">About</a></li>\n          </ul>\n        </div>\n        <div class=\"main\">\n          <ibp-logo flat width=\"280\"></ibp-logo>\n\n          <newsletter-form show-heading style=\"padding: 0 44px; margin: 44px 0;\"></newsletter-form>\n\n          <social-links color=\"var(--ibp-accent-alt)\"></social-links>\n        </div>\n        <div class=\"right\">\n          <hr />\n          <h6>Title</h6>\n          <ul class=\"footer-nav\">\n            <li><a href=\"#\">Contact</a></li>\n            <li><a href=\"#\">Whistleblower Policy</a></li>\n            <li><a href=\"#\">Privacy Policy</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"copyright\">\xA9 2022 International Budget Partnership. All rights reserved. \u2022 Made with Love by creatives with a conscience</div>\n    </footer>"])));
    }
  }]);

  return IbpFooter;
}(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);

_defineProperty(IbpFooter, "styles", [_styles_base_styles__WEBPACK_IMPORTED_MODULE_1__.BaseStyles, _styles_footer_styles__WEBPACK_IMPORTED_MODULE_2__.FooterStyles]);

window.customElements.define("ibp-footer", IbpFooter);

/***/ }),

/***/ "./src/scripts/components/ibp-header.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/ibp-header.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IbpHeader": () => (/* binding */ IbpHeader)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _styles_header_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/header-styles */ "./src/scripts/components/styles/header-styles.js");
/* harmony import */ var lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/unsafe-html.js */ "./node_modules/lit/directives/unsafe-html.js");
/* harmony import */ var _styles_base_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/base-styles */ "./src/scripts/components/styles/base-styles.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api */ "./src/scripts/api.js");
/* harmony import */ var _partials_menu_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partials/menu-overlay */ "./src/scripts/components/partials/menu-overlay.js");
/* harmony import */ var _partials_pre_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partials/pre-header */ "./src/scripts/components/partials/pre-header.js");
/* harmony import */ var _partials_ibp_logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./partials/ibp-logo */ "./src/scripts/components/partials/ibp-logo.js");
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var IbpHeader = /*#__PURE__*/function (_LitElement) {
  _inherits(IbpHeader, _LitElement);

  var _super = _createSuper(IbpHeader);

  function IbpHeader() {
    var _this;

    _classCallCheck(this, IbpHeader);

    _this = _super.call(this);
    _this.primary_menu = [];
    _this.parent_menu = {};
    _this.current_menu = {};
    _this.show_menu = false;
    (0,_api__WEBPACK_IMPORTED_MODULE_4__.fetchData)("wp-api-menus/v2/menu-locations/primary").then(function (res) {
      var _createPrimaryMenu = (0,_api__WEBPACK_IMPORTED_MODULE_4__.createPrimaryMenu)(res, _this.active_slug),
          primary = _createPrimaryMenu.primary,
          current = _createPrimaryMenu.current,
          parent = _createPrimaryMenu.parent;

      if (current.hero && typeof _this.background !== "undefined") {
        _this.background = current.hero;
      }

      _this.primary_menu = primary;
      _this.current_menu = current;
      _this.parent_menu = parent;
    });
    return _this;
  }

  _createClass(IbpHeader, [{
    key: "firstUpdated",
    value: // static get properties() {
    //   return {
    //     primary_menu: { type: Array },
    //     hero: { type: String },
    //     current_menu: { type: Object },
    //     show_menu: { type: Boolean, attribute: "visible" },
    //     background: {},
    //     hide_sidebar: { type: Boolean, attribute: "hide-sidebar" },
    //     mini: { type: Boolean, attribute: "mini" },
    //   };
    // }
    function firstUpdated() {
      var hash_links = this.shadowRoot.querySelectorAll(".hash-link");
      console.log(hash_links);

      var _iterator = _createForOfIteratorHelper(hash_links),
          _step;

      try {
        var _loop = function _loop() {
          var link = _step.value;
          link.addEventListener("click", function (e) {
            e.preventDefault();
            window.location = link.getAttribute("href");
            return false;
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "showMenuOverlay",
    value: function showMenuOverlay(e) {
      e.preventDefault();
      this.show_menu = true;
    }
  }, {
    key: "_hideMenuOverlay",
    value: function _hideMenuOverlay() {
      this.show_menu = false;
    }
  }, {
    key: "_getSidebar",
    value: function _getSidebar() {
      if (!this.hide_sidebar) {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["<div class=\"secondary-nav\">\n          <slot name=\"secondary-nav\">", "</slot>\n        </div>\n        <div class=\"spacer\"></div>"])), (0,_api__WEBPACK_IMPORTED_MODULE_4__.renderSecondaryMenu)(this.parent_menu));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <pre-header></pre-header>\n      <div class=\"main-nav-wrapper\">\n        <div class=\"main-nav grid-12-col container\">\n          <a class=\"logo\" href=\"/\"><ibp-logo></ibp-logo></a>\n          <ul class=\"nav\">\n            ", "\n            <li class=\"d-md-none\">\n              <a href=\"#\" class=\"search-btn\"><i class=\"ibp-icons icon-globe\"></i></a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"search-btn\"><i class=\"ibp-icons icon-search\"></i></a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"search-btn\" @click=", "><i class=\"ibp-icons icon-menu\"></i></a>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      ", "\n\n      <menu-overlay @hideMenuOverlay=", " ?visible=\"", "\" .menu=\"", "\"></menu-overlay>\n    "])), (0,_api__WEBPACK_IMPORTED_MODULE_4__.renderPrimaryMenu)(this.primary_menu), this.showMenuOverlay, !this.mini ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            <div class=\"", "\" style=\"background-image: url(", ")\">\n              <div class=\"nav-content-wrapper\">\n                <div class=\"container nav-content grid-12-col\">\n                  ", "\n                  <div class=\"nav-content--header\">\n                    <slot name=\"pre-nav\"></slot>\n                    <slot name=\"nav-title\"><h1 class=\"page-title\">", "</h1></slot>\n                    <slot name=\"nav-description\"><div class=\"page-description\">", "</div></slot>\n                  </div>\n                  <slot name=\"infobox\"></slot>\n                </div>\n              </div>\n            </div>\n          "])), (0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_8__.classMap)({
        banner: !this.mini,
        "has-image": this.background
      }), this.background, this._getSidebar(), this.current_menu.title, (0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_2__.unsafeHTML)(this.current_menu.description)) : null, this._hideMenuOverlay, this.show_menu, this.primary_menu);
    }
  }]);

  return IbpHeader;
}(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);

_defineProperty(IbpHeader, "styles", [_styles_base_styles__WEBPACK_IMPORTED_MODULE_3__.BaseStyles, _styles_header_styles__WEBPACK_IMPORTED_MODULE_1__.HeaderStyles]);

_defineProperty(IbpHeader, "properties", {
  primary_menu: {
    type: Array
  },
  hero: {
    type: String
  },
  current_menu: {
    type: Object
  },
  show_menu: {
    type: Boolean,
    attribute: "visible"
  },
  background: {},
  hide_sidebar: {
    type: Boolean,
    attribute: "hide-sidebar"
  },
  mini: {
    type: Boolean,
    attribute: "mini"
  },
  active_slug: {
    attribute: "active-slug"
  }
});

window.customElements.define("ibp-header", IbpHeader);

/***/ }),

/***/ "./src/scripts/components/partials/featured-story.js":
/*!***********************************************************!*\
  !*** ./src/scripts/components/partials/featured-story.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedStory": () => (/* binding */ FeaturedStory)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _styles_base_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/base-styles */ "./src/scripts/components/styles/base-styles.js");
/* harmony import */ var _styles_featured_story_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/featured-story-styles */ "./src/scripts/components/styles/featured-story-styles.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var FeaturedStory = /*#__PURE__*/function (_LitElement) {
  _inherits(FeaturedStory, _LitElement);

  var _super = _createSuper(FeaturedStory);

  function FeaturedStory() {
    _classCallCheck(this, FeaturedStory);

    return _super.apply(this, arguments);
  }

  _createClass(FeaturedStory, [{
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["<div class=\"story-image\" style=\"background: url(https://internationalbudget.org/wp-content/uploads/226A5020-Astou_senegal_square.jpg) center/cover no-repeat\"></div>\n      <div class=\"story-content\">\n        <p class=\"featured-type\">Story</p>\n        <h3>Building Inclusive & Accountable Budgets in Gambia</h3>\n        <a href=\"#\" class=\"read-more\">Read more <i class=\"ibp-icons icon-caret-right-circle\"></i></a>\n      </div>"])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_styles_base_styles__WEBPACK_IMPORTED_MODULE_1__.BaseStyles, _styles_featured_story_styles__WEBPACK_IMPORTED_MODULE_2__.FeaturedStoryStyles];
    }
  }]);

  return FeaturedStory;
}(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);
window.customElements.define("featured-story", FeaturedStory);

/***/ }),

/***/ "./src/scripts/components/partials/ibp-logo.js":
/*!*****************************************************!*\
  !*** ./src/scripts/components/partials/ibp-logo.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IbpLogo": () => (/* binding */ IbpLogo)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/directives/if-defined.js */ "./node_modules/lit/directives/if-defined.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var IbpLogo = /*#__PURE__*/function (_LitElement) {
  _inherits(IbpLogo, _LitElement);

  var _super = _createSuper(IbpLogo);

  function IbpLogo() {
    _classCallCheck(this, IbpLogo);

    return _super.apply(this, arguments);
  }

  _createClass(IbpLogo, [{
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 207 79\" width=\"", "\">\n        <path fill=\"", "\" d=\"M100.889 35.818v6.815c0 1.155.374 1.662 1.373 1.662a3.407 3.407 0 0 0 2.056-.83v-7.647h3.13v10.804h-2.697l-.225-1.163a4.471 4.471 0 0 1-3.446 1.387c-2.222 0-3.33-1.196-3.33-3.581v-7.447h3.139ZM129.432 36.25a2.33 2.33 0 0 1 1.989-1.662c.287.014.569.078.833.191v2.044a4.454 4.454 0 0 0-1.79.167c.589.67.907 1.535.891 2.426 0 2.419-1.965 3.873-4.745 3.873a6.131 6.131 0 0 1-1.806-.233c-.211.164-.35.402-.391.665 0 .316.183.515.973.557l3.072.191c2.298.141 3.629.93 3.629 3.108 0 2.651-2.497 3.665-5.643 3.665-3.963 0-5.211-1.014-5.211-2.493 0-1.014.774-1.72 1.956-1.945v-.083a1.858 1.858 0 0 1-1.582-1.82c0-1.08.666-1.662 1.665-2.402a3.19 3.19 0 0 1-1.573-2.925c0-2.293 1.723-3.997 4.811-3.997a5.135 5.135 0 0 1 2.922.673Zm-1.665 11.061-3.005-.19a1.348 1.348 0 0 0-.649 1.038c0 .831 1.182 1.097 2.639 1.097 1.456 0 2.339-.208 2.339-1.097-.017-.416-.225-.79-1.34-.848h.016Zm-1.074-9.532c-1.123 0-1.972.482-1.972 1.662s.599 1.662 1.931 1.662a1.669 1.669 0 0 0 1.745-.97c.097-.217.147-.453.144-.692 0-1.138-.707-1.662-1.848-1.662ZM132.928 41.245c0-3.897 2.389-5.66 5.294-5.66 3.28 0 4.645 1.995 4.645 4.987 0 .35 0 1.04-.067 1.405h-6.567c.058 1.787.832 2.443 2.172 2.443a1.66 1.66 0 0 0 1.765-1.53l2.63.64c-.391 2.012-2.006 3.325-4.578 3.325-4.037 0-5.294-2.693-5.294-5.61Zm5.128-3.399c-.891 0-1.765.582-1.782 2.153h3.33c.025-1.554-.533-2.153-1.548-2.153ZM149.168 46.854c-2.264 0-3.446-1.039-3.446-3.499v-5.26h-1.548v-2.277h1.615v-3.191l3.13-.416v3.607h2.863v2.277h-2.863v4.82c0 .956.274 1.454 1.265 1.454a3.865 3.865 0 0 0 1.781-.498l.441 2.218a6.585 6.585 0 0 1-3.238.765ZM84.973 31.58H90.9c3.546 0 4.545 1.612 4.545 3.665a3.503 3.503 0 0 1-2.847 3.499v.041c2.389.291 3.488 1.596 3.488 3.665 0 3.067-2.406 4.155-5.66 4.155h-5.478l.025-15.025Zm7.359 4.155c0-1.612-1.074-1.72-2.498-1.72H88.17v3.731h1.19c1.482.059 2.972-.207 2.972-1.953v-.058Zm.374 6.4c0-1.663-1.157-1.962-2.589-1.962h-1.956v3.914h1.665c1.723.059 2.88-.257 2.88-1.894v-.059ZM117.096 46.605l-.192-1.056h-.058a4.049 4.049 0 0 1-3.196 1.33c-2.498 0-4.254-1.554-4.254-5.427 0-4.33 2.322-5.817 4.562-5.817a3.713 3.713 0 0 1 2.738.914v-5.576h3.005v15.632h-2.605Zm-2.248-8.535c-1.573 0-2.172 1.388-2.172 3.258s.599 3.058 2.072 3.058a2.832 2.832 0 0 0 1.848-.765v-4.986a2.956 2.956 0 0 0-1.748-.565Z\" />\n        <path fill=\"", "\" d=\"M84.973 26.834V11.875h3.188v14.959h-3.188ZM97.56 26.834v-6.831c0-1.164-.459-1.662-1.433-1.662a3.475 3.475 0 0 0-2.114.83v7.638H90.9V16.005h2.78l.158 1.072a5.075 5.075 0 0 1 3.43-1.288c2.389 0 3.421 1.18 3.421 3.64v7.372l-3.13.033ZM106.824 27.085c-2.256 0-3.438-1.04-3.438-3.5v-5.26h-1.665v-2.277h1.665v-3.191l3.13-.416v3.607h2.863v2.277h-2.863v4.829c0 .947.266 1.446 1.265 1.446a3.888 3.888 0 0 0 1.781-.499l.442 2.219a6.596 6.596 0 0 1-3.18.765ZM110.678 21.475c0-3.897 2.389-5.65 5.294-5.65 3.28 0 4.645 1.985 4.645 4.986 0 .349 0 1.038-.058 1.404h-6.576c.058 1.787.832 2.443 2.172 2.443a1.666 1.666 0 0 0 1.765-1.529l2.639.64c-.4 2.011-2.015 3.324-4.587 3.324-4.004-.008-5.294-2.7-5.294-5.618Zm5.127-3.399c-.89 0-1.764.582-1.781 2.153h3.33c.025-1.554-.533-2.153-1.549-2.153ZM125.636 19.853v6.98h-3.105V16.03h2.681l.224 1.662a3.95 3.95 0 0 1 3.372-1.903h.541v3.042a5.343 5.343 0 0 0-3.713 1.022ZM137.332 26.834v-6.831c0-1.163-.458-1.662-1.432-1.662a3.46 3.46 0 0 0-2.115.83v7.638h-3.138V16.006h2.781l.166 1.072a5.074 5.074 0 0 1 3.446-1.288c2.381 0 3.421 1.18 3.421 3.64V26.8l-3.129.033ZM152.173 24.974c.222-.008.441-.05.65-.125l.075 1.804a5.396 5.396 0 0 1-1.99.415c-1.24 0-1.989-.357-2.214-1.37a3.799 3.799 0 0 1-3.222 1.387c-2.688 0-3.213-1.803-3.213-2.875 0-3.325 3.422-3.79 6.202-3.773v-.391c0-1.222-.167-1.97-1.532-1.97-1.04 0-1.432.433-1.665 1.488l-2.655-.515c.333-2.028 1.615-3.225 4.562-3.225 2.946 0 4.336 1.114 4.336 3.806v4.513c.025.582.159.831.666.831Zm-6.759-1.288c0 .623.267 1.18 1.265 1.18a2.777 2.777 0 0 0 1.807-.698v-1.911h-.5c-1.49.041-2.572.332-2.572 1.429ZM157.817 27.083c-2.264 0-3.446-1.039-3.446-3.499v-5.26h-1.615v-2.277h1.615v-3.192l3.121-.39v3.607h2.864v2.277h-2.864v4.828c0 .948.275 1.446 1.266 1.446a3.93 3.93 0 0 0 1.789-.498l.433 2.218a6.584 6.584 0 0 1-3.163.74ZM163.969 14.636a1.725 1.725 0 0 1-1.882-1.904 1.886 1.886 0 0 1 1.886-2.011 1.897 1.897 0 0 1 1.379.597 1.884 1.884 0 0 1 .506 1.414 1.723 1.723 0 0 1-.495 1.397 1.747 1.747 0 0 1-1.394.507Zm-1.574 12.2V16.031h3.13v10.803h-3.13ZM167.415 21.492c0-3.457 1.806-5.668 5.56-5.668 3.754 0 5.203 2.252 5.203 5.444 0 3.515-1.615 5.817-5.494 5.817-3.879 0-5.269-2.36-5.269-5.593Zm7.491-.125c0-2.36-.641-3.183-2.031-3.183-1.39 0-2.206.89-2.206 3.225s.608 3.324 2.14 3.324c1.39.033 2.114-.84 2.114-3.366h-.017ZM186.743 26.834v-6.831c0-1.163-.458-1.662-1.432-1.662a3.459 3.459 0 0 0-2.114.83v7.638h-3.138V16.006h2.78l.167 1.072a5.073 5.073 0 0 1 3.446-1.288c2.381 0 3.421 1.18 3.421 3.64V26.8l-3.13.033ZM201.61 24.974c.219-.008.435-.05.641-.125l.083 1.804a5.395 5.395 0 0 1-1.989.415c-1.241 0-1.99-.357-2.215-1.37a3.788 3.788 0 0 1-3.221 1.387c-2.697 0-3.213-1.803-3.213-2.875 0-3.325 3.421-3.79 6.201-3.773v-.391c0-1.222-.166-1.97-1.531-1.97-1.041 0-1.432.433-1.665 1.488l-2.655-.515c.332-2.028 1.614-3.225 4.561-3.225s4.337 1.114 4.337 3.806v4.513c0 .582.1.831.666.831Zm-6.759-1.288c0 .623.266 1.18 1.265 1.18a2.772 2.772 0 0 0 1.806-.698v-1.911h-.499c-1.523.041-2.597.332-2.597 1.429h.025ZM203.782 26.835V11.203h3.13v15.632h-3.13ZM84.973 66.377V51.418h5.686c3.829 0 4.994 2.294 4.994 4.679 0 3.607-1.973 5.468-5.827 5.468h-1.665v4.845l-3.188-.033Zm7.4-10.09c0-1.919-1.14-2.334-2.697-2.334h-1.531v4.986h1.282c1.64.066 2.946-.449 2.946-2.651ZM106.166 64.516a2.15 2.15 0 0 0 .641-.125l.083 1.795a5.427 5.427 0 0 1-1.989.416c-1.249 0-1.989-.35-2.223-1.363a3.773 3.773 0 0 1-3.213 1.387c-2.697 0-3.213-1.803-3.213-2.875 0-3.324 3.421-3.798 6.202-3.773v-.39c0-1.222-.167-1.97-1.54-1.97-1.032 0-1.432.432-1.665 1.487l-2.655-.515c.324-2.028 1.614-3.233 4.561-3.233s4.337 1.122 4.337 3.815v4.513c.033.581.133.83.674.83Zm-6.759-1.289c0 .624.266 1.18 1.265 1.18a2.774 2.774 0 0 0 1.798-.706v-1.903h-.491c-1.498.042-2.572.332-2.572 1.43ZM111.41 59.395v6.98h-3.129V55.573h2.672l.224 1.662a3.967 3.967 0 0 1 3.405-1.928 4.07 4.07 0 0 1 .541 0v3.116a5.352 5.352 0 0 0-3.713.973ZM121.699 66.626c-2.256 0-3.438-1.04-3.438-3.5v-5.26h-1.665V55.59h1.665v-3.191l3.13-.416v3.607h2.863v2.277h-2.863v4.82c0 .956.266 1.455 1.265 1.455a3.869 3.869 0 0 0 1.782-.499l.441 2.219a6.596 6.596 0 0 1-3.18.765ZM133.186 66.376v-6.832c0-1.163-.458-1.662-1.432-1.662a3.532 3.532 0 0 0-2.122.831v7.646h-3.13V55.555h2.78l.167 1.072a5.073 5.073 0 0 1 3.446-1.305c2.38 0 3.421 1.18 3.421 3.649v7.371l-3.13.034ZM138.405 61.017c0-3.898 2.389-5.66 5.286-5.66 3.28 0 4.653 1.987 4.653 4.987 0 .349 0 1.03-.066 1.404h-6.601c.066 1.787.832 2.444 2.181 2.444a1.666 1.666 0 0 0 1.764-1.53l2.631.64c-.392 2.011-2.015 3.324-4.587 3.324-3.97 0-5.261-2.692-5.261-5.61Zm5.128-3.4c-.899 0-1.765.583-1.79 2.153h3.33c.033-1.554-.525-2.152-1.54-2.152ZM153.33 59.395v6.98h-3.129V55.573h2.672l.233 1.662a3.936 3.936 0 0 1 3.396-1.928 4.07 4.07 0 0 1 .541 0v3.116a5.36 5.36 0 0 0-3.713.973ZM157.492 63.767l2.498-.83a1.983 1.983 0 0 0 2.156 1.662c1.057 0 1.664-.358 1.664-1.056 0-.831-.832-1.064-2.072-1.288-1.723-.333-3.904-.723-3.904-3.325 0-2.36 2.072-3.498 4.503-3.498s3.796 1.08 4.312 2.9l-2.497.748a1.775 1.775 0 0 0-1.848-1.579c-1.041 0-1.474.44-1.474 1.039 0 .83.833 1.014 2.223 1.263 1.781.332 3.796.748 3.796 3.274 0 2.527-2.098 3.624-4.778 3.624-2.681 0-4.196-1.13-4.579-2.934ZM175.314 66.376v-6.814c0-1.155-.458-1.662-1.432-1.662a3.476 3.476 0 0 0-2.114.83v7.621h-3.13V50.744h3.114v5.818a5.181 5.181 0 0 1 3.329-1.222c2.323 0 3.33 1.18 3.33 3.648v7.372l-3.097.016ZM182.365 54.176a1.899 1.899 0 0 1-1.872-2.256 1.892 1.892 0 0 1 1.485-1.495 1.9 1.9 0 0 1 2.276 1.848 1.714 1.714 0 0 1-1.132 1.812 1.722 1.722 0 0 1-.757.091Zm-1.565 12.2V55.572h3.13v10.804h-3.13ZM188.982 55.589l.183 1.097a4.747 4.747 0 0 1 3.38-1.33c2.306 0 4.07 1.413 4.07 5.386 0 4.288-2.014 5.883-4.403 5.883a3.973 3.973 0 0 1-2.863-1.038v5.177h-3.022V55.589h2.655Zm2.323 8.527c1.448 0 2.031-1.197 2.031-3.325 0-2.127-.641-2.983-1.906-2.983a3.525 3.525 0 0 0-2.015.83v4.721a3.15 3.15 0 0 0 1.89.757Z\" />\n        <path fill=\"", "\" d=\"M6.977 52.415a30.142 30.142 0 0 0 8.324 5.294l10.596-26.361L.8 44.736a30.7 30.7 0 0 0 6.177 7.679\" />\n        <path fill=\"", "\" d=\"M65.678 53.297c0-1.539-.117-3.075-.35-4.596L37.31 53.638 61.949 67.84a30.153 30.153 0 0 0 3.729-14.543\" />\n        <path fill=\"", "\" d=\"M48.19 73.964a29.981 29.981 0 0 0 6.425-7.48L29.976 52.307 39.716 79a30.07 30.07 0 0 0 8.473-4.986\" />\n        <path fill=\"", "\" d=\"m7.95 38.23 25.04-13.522-27.878-5.726A30.24 30.24 0 0 0 7.951 38.23\" />\n        <path fill=\"", "\" d=\"m33.572 69.36-9.74-26.694-9.73 26.694a30.497 30.497 0 0 0 19.47 0\" />\n        <path fill=\"", "\" d=\"M66.635 27.426 48.147 49.033l28.07-4.679a30.002 30.002 0 0 0-3.397-9.241 30.54 30.54 0 0 0-6.185-7.687Z\" />\n        <path fill=\"", "\" d=\"m53.983 11.203-1.374 28.38 19.32-20.875a30.19 30.19 0 0 0-8.324-5.236 30.55 30.55 0 0 0-9.597-2.269\" />\n        <path fill=\"", "\" d=\"M50.703 29.279 51.286.873a30.323 30.323 0 0 0-18.422 6.275l17.839 22.13Z\" />\n        <path fill=\"", "\" d=\"M18.614 9.457a30.072 30.072 0 0 0-3.555 9.142l27.994 5.144-18.13-21.848a30.263 30.263 0 0 0-6.31 7.562\" />\n      </svg>\n    "])), (0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.width), this.flat ? "#fff" : "#EA7125", this.flat ? "#fff" : "#004A8A", this.flat ? "#fff" : "#16ADC1", this.flat ? "#fff" : "#4B3853", this.flat ? "#fff" : "#004A8A", this.flat ? "#fff" : "#53C3C9", this.flat ? "#fff" : "#0083A9", this.flat ? "#fff" : "#D13D27", this.flat ? "#fff" : "#ED3326", this.flat ? "#fff" : "#EA7125", this.flat ? "#fff" : "#EEBAAA");
    }
  }]);

  return IbpLogo;
}(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);

_defineProperty(IbpLogo, "properties", {
  flat: {
    type: Boolean
  },
  width: {
    type: String
  }
});

window.customElements.define("ibp-logo", IbpLogo);

/***/ }),

/***/ "./src/scripts/components/partials/menu-overlay.js":
/*!*********************************************************!*\
  !*** ./src/scripts/components/partials/menu-overlay.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuOverlay": () => (/* binding */ MenuOverlay)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
/* harmony import */ var _styles_base_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/base-styles */ "./src/scripts/components/styles/base-styles.js");
/* harmony import */ var _styles_menu_overlay_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/menu-overlay-styles */ "./src/scripts/components/styles/menu-overlay-styles.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./src/scripts/api.js");
/* harmony import */ var _pre_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pre-header */ "./src/scripts/components/partials/pre-header.js");
/* harmony import */ var _ibp_logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ibp-logo */ "./src/scripts/components/partials/ibp-logo.js");
/* harmony import */ var _featured_story__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./featured-story */ "./src/scripts/components/partials/featured-story.js");
/* harmony import */ var _social_links__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./social-links */ "./src/scripts/components/partials/social-links.js");
/* harmony import */ var _newsletter_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./newsletter-form */ "./src/scripts/components/partials/newsletter-form.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var MenuOverlay = /*#__PURE__*/function (_LitElement) {
  _inherits(MenuOverlay, _LitElement);

  var _super = _createSuper(MenuOverlay);

  function MenuOverlay() {
    _classCallCheck(this, MenuOverlay);

    return _super.apply(this, arguments);
  }

  _createClass(MenuOverlay, [{
    key: "hideMenuOverlay",
    value: function hideMenuOverlay(e) {
      e.preventDefault();
      this.visible = false;
      this.dispatchEvent(new CustomEvent("hideMenuOverlay", {
        detail: {
          visible: false
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div class=", ">\n        <div class=\"scroll-container\">\n          <pre-header></pre-header>\n\n          <div class=\"nav-header\">\n            <div class=\"main-nav-wrapper\">\n              <div class=\"container\">\n                <div class=\"main-nav grid-12-col\">\n                  <a class=\"logo\" href=\"/\"><ibp-logo fill=\"#000\"></ibp-logo></a>\n                  <ul class=\"nav\">\n                    <li class=\"search-box d-xs-none\"><input type=\"text\" placeholder=\"Enter text\" /><i class=\"ibp-icons icon-search\"></i></li>\n                    <li>\n                      <a href=\"#\" class=\"close-btn\" @click=", "><i class=\"ibp-icons icon-close\"></i></a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class=\"container nav-content-wrapper\">\n              <div class=\"nav-content grid-12-col\">\n                <div class=\"full-menu\">", "</div>\n                <featured-story class=\"featured-story\"></featured-story>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"nav-footer-wrapper\">\n            <div class=\"container\">\n              <div class=\"nav-footer grid-12-col\">\n                <div class=\"signup-note\">Subscribe to updates about International Budget Partnership&apos;s work around the world</div>\n                <newsletter-form class=\"signup-form\"></newsletter-form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    "])), (0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__.classMap)({
        visible: this.visible,
        overlay: true
      }), this.hideMenuOverlay, (0,_api__WEBPACK_IMPORTED_MODULE_4__.renderFullMenu)(this.menu)); // return html` <link rel="stylesheet" href="css/icons.css" />
      //   <div class="overlay" style=${styleMap({ display: this.visible ? "block" : "none" })}>
      //     <div class="scroll-container">
      //       <pre-header></pre-header>
      //       <div class="main-nav grid-12-col" style="background: var(--ibp-page-bg)">
      //         <div class="logo"><ibp-logo fill="#000" /></div>
      //         <div class="nav">
      //           <ul>
      //             <li class="search-box"><input type="text" placeholder="Enter text" /><i class="ibp-icons icon-search"></i></li>
      //             <li>
      //               <a href="#" class="close-btn" @click=${this.hideMenuOverlay}><i class="ibp-icons icon-close"></i></a>
      //             </li>
      //           </ul>
      //         </div>
      //       </div>
      //       <div class="nav-content grid-12-col">
      //         <div class="full-menu">${renderFullMenu(this.menu)}</div>
      //         <featured-story class="featured-story"></featured-story>
      //       </div>
      //       <div class="nav-footer grid-12-col">
      //         <div class="signup-note">Subscribe to updates about International Budget Partnership’s work around the world</div>
      //         <div class="signup-form"></div>
      //       </div>
      //     </div>
      //   </div>`;
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_styles_base_styles__WEBPACK_IMPORTED_MODULE_2__.BaseStyles, _styles_menu_overlay_styles__WEBPACK_IMPORTED_MODULE_3__.MenuOverlayStyles];
    }
  }]);

  return MenuOverlay;
}(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);

_defineProperty(MenuOverlay, "properties", {
  visible: {
    type: Boolean,
    attribute: "visible"
  },
  menu: {
    type: Array
  }
});

window.customElements.define("menu-overlay", MenuOverlay);

/***/ }),

/***/ "./src/scripts/components/partials/newsletter-form.js":
/*!************************************************************!*\
  !*** ./src/scripts/components/partials/newsletter-form.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterForm": () => (/* binding */ NewsletterForm)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _styles_newsletter_form_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/newsletter-form-styles */ "./src/scripts/components/styles/newsletter-form-styles.js");
/* harmony import */ var _styles_base_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/base-styles */ "./src/scripts/components/styles/base-styles.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var NewsletterForm = /*#__PURE__*/function (_LitElement) {
  _inherits(NewsletterForm, _LitElement);

  var _super = _createSuper(NewsletterForm);

  function NewsletterForm() {
    _classCallCheck(this, NewsletterForm);

    return _super.apply(this, arguments);
  }

  _createClass(NewsletterForm, [{
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div class=\"signup-form\">\n        ", "\n        <form class=\"form\">\n          <i class=\"icon-email\"></i>\n          <input type=\"text\" placeholder=\"Email address\" />\n          <button type=\"submit\">Sign up</button>\n        </form>\n      </div>\n    "])), this.show_heading ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<h6>Sign up for updates</h6>"]))) : "");
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_styles_base_styles__WEBPACK_IMPORTED_MODULE_2__.BaseStyles, _styles_newsletter_form_styles__WEBPACK_IMPORTED_MODULE_1__.NewsletterFormStyles];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        show_heading: {
          type: Boolean,
          attribute: "show-heading"
        }
      };
    }
  }]);

  return NewsletterForm;
}(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);
window.customElements.define("newsletter-form", NewsletterForm);

/***/ }),

/***/ "./src/scripts/components/partials/pre-header.js":
/*!*******************************************************!*\
  !*** ./src/scripts/components/partials/pre-header.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreHeader": () => (/* binding */ PreHeader)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _styles_pre_header_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pre-header-styles */ "./src/scripts/components/styles/pre-header-styles.js");
/* harmony import */ var _styles_base_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/base-styles */ "./src/scripts/components/styles/base-styles.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var PreHeader = /*#__PURE__*/function (_LitElement) {
  _inherits(PreHeader, _LitElement);

  var _super = _createSuper(PreHeader);

  function PreHeader() {
    _classCallCheck(this, PreHeader);

    return _super.apply(this, arguments);
  }

  _createClass(PreHeader, [{
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <a href=\"/\" class=\"btn btn-action\">Take Action</a>\n      <a href=\"#\" class=\"btn btn-donate\">Donate</a>\n    "])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_styles_base_styles__WEBPACK_IMPORTED_MODULE_2__.BaseStyles, _styles_pre_header_styles__WEBPACK_IMPORTED_MODULE_1__.PreHeaderStyles];
    }
  }]);

  return PreHeader;
}(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);
window.customElements.define("pre-header", PreHeader);

/***/ }),

/***/ "./src/scripts/components/partials/social-links.js":
/*!*********************************************************!*\
  !*** ./src/scripts/components/partials/social-links.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialLinks": () => (/* binding */ SocialLinks)
/* harmony export */ });
/* harmony import */ var _styles_base_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/base-styles */ "./src/scripts/components/styles/base-styles.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SocialLinks = /*#__PURE__*/function (_LitElement) {
  _inherits(SocialLinks, _LitElement);

  var _super = _createSuper(SocialLinks);

  function SocialLinks() {
    _classCallCheck(this, SocialLinks);

    return _super.apply(this, arguments);
  }

  _createClass(SocialLinks, [{
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral([" <div class=\"social-links\" style=\"color: ", "\">\n      <a href=\"#\" target=\"_blank\"><i class=\"ibp-icons icon-facebook\"></i></a>\n      <a href=\"#\" target=\"_blank\"><i class=\"ibp-icons icon-twitter\"></i></a>\n      <a href=\"#\" target=\"_blank\"><i class=\"ibp-icons icon-linkedin\"></i></a>\n      <a href=\"#\" target=\"_blank\"><i class=\"ibp-icons icon-youtube\"></i></a>\n    </div>"])), this.color);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        color: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_styles_base_styles__WEBPACK_IMPORTED_MODULE_0__.BaseStyles, (0,lit__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        footer :host {\n          background: green;\n        }\n\n        footer .social-links {\n          outline: 1px solid red;\n        }\n      "])))];
    }
  }]);

  return SocialLinks;
}(lit__WEBPACK_IMPORTED_MODULE_1__.LitElement);
window.customElements.define("social-links", SocialLinks);

/***/ }),

/***/ "./src/scripts/components/styles/base-styles.js":
/*!******************************************************!*\
  !*** ./src/scripts/components/styles/base-styles.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseStyles": () => (/* binding */ BaseStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var BaseStyles = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .container {\n    max-width: 1352px;\n    padding: 0 44px;\n    margin: 0 auto;\n  }\n\n  h6 {\n    font-family: var(--ibp-body-font-family);\n    font-weight: 800;\n    text-transform: uppercase;\n    letter-spacing: var(--ibp-letter-spacing);\n    font-size: var(--ibp-heading-6-font-size);\n    margin: 0;\n    font-weight: 800;\n    margin-bottom: 1em;\n  }\n\n  hr {\n    border: solid var(--ibp-hr-height) #acaaa2;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  input[type=\"text\"] {\n    padding: 12px;\n    font-family: var(--ibp-body-font-family);\n    font-size: var(--ibp-input-font-size);\n    color: var(--ibp-body-text);\n  }\n\n  button {\n    background: var(--ibp-accent-alt);\n    text-transform: uppercase;\n    letter-spacing: 0.12em;\n    border: none;\n    font-weight: 800;\n    cursor: pointer;\n  }\n\n  input[type=\"text\"]:focus {\n    outline: none;\n  }\n\n  .social-links {\n    margin-top: 44px;\n  }\n\n  .social-links a {\n    color: inherit;\n    margin-right: 25px;\n  }\n\n  .main-nav-wrapper {\n    background: white;\n  }\n\n  .main-nav {\n    min-height: var(--ibp-main-nav-height);\n    align-items: center;\n    font-famiy: \"Adelle Sans\", sans-serif;\n  }\n\n  .main-nav .logo {\n    grid-column: 1/3;\n  }\n\n  .nav-content-wrapper {\n    padding-top: 44px;\n  }\n\n  .nav,\n  .mobile-nav {\n    justify-self: end;\n    grid-column: 3/13;\n  }\n\n  .nav {\n    padding: 0;\n    margin: 0;\n    display: flex;\n    list-style: none;\n    align-items: center;\n  }\n\n  .nav li a {\n    border-radius: 500px;\n    padding: 8px 12px;\n    color: #151515;\n    text-transform: uppercase;\n    font-size: 13px;\n    line-height: 18px;\n    letter-spacing: 0.12em;\n    margin-right: 1em;\n    font-weight: 400;\n    font-family: \"Adelle Sans\", sans-serif;\n  }\n\n  @media screen and (max-width: 1299px) {\n    .nav li a {\n      margin-right: 0;\n    }\n  }\n\n  .nav li:last-child a {\n    margin-right: 0;\n    padding-right: 0;\n  }\n\n  .grid-12-col {\n    display: grid;\n    gap: 40px;\n    grid-template-columns: repeat(12, 1fr);\n  }\n\n  @media screen and (max-width: 375px) {\n    .grid-12-col {\n      gap: 12px;\n    }\n  }\n\n  .btn-donate {\n    background: var(--ibp-accent-alt);\n  }\n\n  .btn-donate:hover,\n  .btn-action:hover {\n    background: var(--ibp-accent);\n  }\n\n  .btn-action {\n    background: var(--ibp-text-highlight-light);\n  }\n\n  .d-md-none {\n    display: none;\n  }\n\n  input[type=\"text\"]::placeholder {\n    text-transform: uppercase;\n  }\n\n  @media screen and (max-width: 576px) {\n    .grid-12-col {\n      grid-template-columns: 1fr;\n      gap: 0;\n    }\n\n    .main-nav {\n      grid-template-columns: 1fr;\n      align-items: start;\n      padding-top: 14px;\n    }\n\n    .main-nav .mobile-nav {\n      display: flex;\n    }\n\n    .main-nav .logo {\n      grid-column: auto;\n      max-width: 131px;\n    }\n\n    .container {\n      max-width: 100%;\n      padding: 0 32px;\n      margin: 0 auto;\n    }\n\n    .main-nav {\n      min-height: 68px;\n    }\n\n    .main-nav .mobile-nav {\n      display: flex;\n    }\n\n    .nav li a {\n      margin-right: 0;\n      font-size: 18px;\n    }\n\n    .d-md-none {\n      display: block;\n    }\n\n    .social-links {\n      margin-top: 0;\n    }\n  }\n\n  @media screen and (max-width: 1190px) {\n    .d-xs-none {\n      display: none;\n    }\n  }\n\n  /** icons **/\n  i[class^=\"icon-\"]:before,\n  i[class*=\" icon-\"]:before {\n    font-family: ibp-icons !important;\n    font-style: normal;\n    font-weight: normal !important;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  .icon-arrow-left:before {\n    content: \"\\f101\";\n  }\n  .icon-arrow-up:before {\n    content: \"\\f102\";\n  }\n  .icon-budget:before {\n    content: \"\\f103\";\n  }\n  .icon-caret-down:before {\n    content: \"\\f104\";\n  }\n  .icon-caret-left:before {\n    content: \"\\f105\";\n  }\n  .icon-caret-right-circle:before {\n    content: \"\\f106\";\n  }\n  .icon-caret-right:before {\n    content: \"\\f107\";\n  }\n  .icon-close:before {\n    content: \"\\f108\";\n  }\n  .icon-download:before {\n    content: \"\\f109\";\n  }\n  .icon-email-filled:before {\n    content: \"\\f10a\";\n  }\n  .icon-email:before {\n    content: \"\\f10b\";\n  }\n  .icon-facebook:before {\n    content: \"\\f10c\";\n  }\n  .icon-filter:before {\n    content: \"\\f10d\";\n  }\n  .icon-globe:before {\n    content: \"\\f10e\";\n  }\n  .icon-linkedin:before {\n    content: \"\\f10f\";\n  }\n  .icon-menu:before {\n    content: \"\\f110\";\n  }\n  .icon-participation:before {\n    content: \"\\f111\";\n  }\n  .icon-search:before {\n    content: \"\\f112\";\n  }\n  .icon-share:before {\n    content: \"\\f113\";\n  }\n  .icon-transparency:before {\n    content: \"\\f114\";\n  }\n  .icon-twitter:before {\n    content: \"\\f115\";\n  }\n  .icon-youtube:before {\n    content: \"\\f116\";\n  }\n  .icon-zoom:before {\n    content: \"\\f117\";\n  }\n"], ["\n  .container {\n    max-width: 1352px;\n    padding: 0 44px;\n    margin: 0 auto;\n  }\n\n  h6 {\n    font-family: var(--ibp-body-font-family);\n    font-weight: 800;\n    text-transform: uppercase;\n    letter-spacing: var(--ibp-letter-spacing);\n    font-size: var(--ibp-heading-6-font-size);\n    margin: 0;\n    font-weight: 800;\n    margin-bottom: 1em;\n  }\n\n  hr {\n    border: solid var(--ibp-hr-height) #acaaa2;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  input[type=\"text\"] {\n    padding: 12px;\n    font-family: var(--ibp-body-font-family);\n    font-size: var(--ibp-input-font-size);\n    color: var(--ibp-body-text);\n  }\n\n  button {\n    background: var(--ibp-accent-alt);\n    text-transform: uppercase;\n    letter-spacing: 0.12em;\n    border: none;\n    font-weight: 800;\n    cursor: pointer;\n  }\n\n  input[type=\"text\"]:focus {\n    outline: none;\n  }\n\n  .social-links {\n    margin-top: 44px;\n  }\n\n  .social-links a {\n    color: inherit;\n    margin-right: 25px;\n  }\n\n  .main-nav-wrapper {\n    background: white;\n  }\n\n  .main-nav {\n    min-height: var(--ibp-main-nav-height);\n    align-items: center;\n    font-famiy: \"Adelle Sans\", sans-serif;\n  }\n\n  .main-nav .logo {\n    grid-column: 1/3;\n  }\n\n  .nav-content-wrapper {\n    padding-top: 44px;\n  }\n\n  .nav,\n  .mobile-nav {\n    justify-self: end;\n    grid-column: 3/13;\n  }\n\n  .nav {\n    padding: 0;\n    margin: 0;\n    display: flex;\n    list-style: none;\n    align-items: center;\n  }\n\n  .nav li a {\n    border-radius: 500px;\n    padding: 8px 12px;\n    color: #151515;\n    text-transform: uppercase;\n    font-size: 13px;\n    line-height: 18px;\n    letter-spacing: 0.12em;\n    margin-right: 1em;\n    font-weight: 400;\n    font-family: \"Adelle Sans\", sans-serif;\n  }\n\n  @media screen and (max-width: 1299px) {\n    .nav li a {\n      margin-right: 0;\n    }\n  }\n\n  .nav li:last-child a {\n    margin-right: 0;\n    padding-right: 0;\n  }\n\n  .grid-12-col {\n    display: grid;\n    gap: 40px;\n    grid-template-columns: repeat(12, 1fr);\n  }\n\n  @media screen and (max-width: 375px) {\n    .grid-12-col {\n      gap: 12px;\n    }\n  }\n\n  .btn-donate {\n    background: var(--ibp-accent-alt);\n  }\n\n  .btn-donate:hover,\n  .btn-action:hover {\n    background: var(--ibp-accent);\n  }\n\n  .btn-action {\n    background: var(--ibp-text-highlight-light);\n  }\n\n  .d-md-none {\n    display: none;\n  }\n\n  input[type=\"text\"]::placeholder {\n    text-transform: uppercase;\n  }\n\n  @media screen and (max-width: 576px) {\n    .grid-12-col {\n      grid-template-columns: 1fr;\n      gap: 0;\n    }\n\n    .main-nav {\n      grid-template-columns: 1fr;\n      align-items: start;\n      padding-top: 14px;\n    }\n\n    .main-nav .mobile-nav {\n      display: flex;\n    }\n\n    .main-nav .logo {\n      grid-column: auto;\n      max-width: 131px;\n    }\n\n    .container {\n      max-width: 100%;\n      padding: 0 32px;\n      margin: 0 auto;\n    }\n\n    .main-nav {\n      min-height: 68px;\n    }\n\n    .main-nav .mobile-nav {\n      display: flex;\n    }\n\n    .nav li a {\n      margin-right: 0;\n      font-size: 18px;\n    }\n\n    .d-md-none {\n      display: block;\n    }\n\n    .social-links {\n      margin-top: 0;\n    }\n  }\n\n  @media screen and (max-width: 1190px) {\n    .d-xs-none {\n      display: none;\n    }\n  }\n\n  /** icons **/\n  i[class^=\"icon-\"]:before,\n  i[class*=\" icon-\"]:before {\n    font-family: ibp-icons !important;\n    font-style: normal;\n    font-weight: normal !important;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  .icon-arrow-left:before {\n    content: \"\\\\f101\";\n  }\n  .icon-arrow-up:before {\n    content: \"\\\\f102\";\n  }\n  .icon-budget:before {\n    content: \"\\\\f103\";\n  }\n  .icon-caret-down:before {\n    content: \"\\\\f104\";\n  }\n  .icon-caret-left:before {\n    content: \"\\\\f105\";\n  }\n  .icon-caret-right-circle:before {\n    content: \"\\\\f106\";\n  }\n  .icon-caret-right:before {\n    content: \"\\\\f107\";\n  }\n  .icon-close:before {\n    content: \"\\\\f108\";\n  }\n  .icon-download:before {\n    content: \"\\\\f109\";\n  }\n  .icon-email-filled:before {\n    content: \"\\\\f10a\";\n  }\n  .icon-email:before {\n    content: \"\\\\f10b\";\n  }\n  .icon-facebook:before {\n    content: \"\\\\f10c\";\n  }\n  .icon-filter:before {\n    content: \"\\\\f10d\";\n  }\n  .icon-globe:before {\n    content: \"\\\\f10e\";\n  }\n  .icon-linkedin:before {\n    content: \"\\\\f10f\";\n  }\n  .icon-menu:before {\n    content: \"\\\\f110\";\n  }\n  .icon-participation:before {\n    content: \"\\\\f111\";\n  }\n  .icon-search:before {\n    content: \"\\\\f112\";\n  }\n  .icon-share:before {\n    content: \"\\\\f113\";\n  }\n  .icon-transparency:before {\n    content: \"\\\\f114\";\n  }\n  .icon-twitter:before {\n    content: \"\\\\f115\";\n  }\n  .icon-youtube:before {\n    content: \"\\\\f116\";\n  }\n  .icon-zoom:before {\n    content: \"\\\\f117\";\n  }\n"])));

/***/ }),

/***/ "./src/scripts/components/styles/featured-story-styles.js":
/*!****************************************************************!*\
  !*** ./src/scripts/components/styles/featured-story-styles.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedStoryStyles": () => (/* binding */ FeaturedStoryStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var FeaturedStoryStyles = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :host {\n    display: flex;\n    flex-direction: column;\n    background: var(--ibp-text-highlight-light);\n  }\n\n  .story-image {\n    flex: 1;\n  }\n\n  .story-image img {\n    object-fit: contain;\n  }\n\n  .story-content {\n    padding: 38px;\n  }\n\n  .featured-type {\n    font-size: 12px;\n    color: var(--ibp-text-highlight-dark);\n    margin: 0;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    margin-bottom: 10px;\n  }\n\n  h3 {\n    font-family: var(--ibp-heading-font-family);\n    font-size: var(--ibp-heading-3-font-size);\n    letter-spacing: var(--ibp-letter-spacing-sm);\n    line-height: 1.1;\n    margin: 0;\n    margin-bottom: 22px;\n  }\n\n  .read-more {\n    color: var(--ibp-body-text);\n    text-decoration: none;\n    font-weight: 700;\n  }\n\n  .read-more i {\n    margin-left: 8px;\n    font-size: 15px;\n  }\n\n  @media screen and (max-width: 576px) {\n    h3 {\n      font-size: 20px;\n      margin-top: 15px;\n    }\n\n    .story-image {\n      min-height: 100vw;\n    }\n\n    .story-content {\n      padding: 24px 15px;\n    }\n\n    :host {\n      display: block;\n      margin-left: 0;\n      margin-right: 0 !important;\n      margin-bottom: 32px;\n      margin-top: 32px;\n    }\n\n    .read-more {\n      font-size: 14px;\n    }\n  }\n"])));

/***/ }),

/***/ "./src/scripts/components/styles/footer-styles.js":
/*!********************************************************!*\
  !*** ./src/scripts/components/styles/footer-styles.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterStyles": () => (/* binding */ FooterStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var FooterStyles = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  footer {\n    background-color: var(--ibp-footer-bg-light);\n  }\n\n  .grid-12-col {\n    padding: 0 44px;\n    max-width: 1440px;\n    margin: 0 auto;\n  }\n\n  hr {\n    border-color: var(--ibp-footer-bg-dark);\n  }\n\n  .left,\n  .right {\n    padding-top: 32px;\n  }\n\n  .left {\n    grid-column: 1/4;\n  }\n\n  .right {\n    grid-column: 10/13;\n  }\n\n  .main {\n    grid-column: 4/10;\n    background: var(--ibp-footer-bg-dark);\n    text-align: center;\n    padding: 44px 0;\n    color: white;\n  }\n\n  .copyright {\n    text-align: center;\n    color: rgba(255, 255, 255, 0.2);\n    text-transform: uppercase;\n    font-size: 12px;\n    padding: 18px;\n  }\n\n  .footer-nav {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  .footer-nav li {\n    padding: 8px 0;\n    border-bottom: 1px solid #3f8d98;\n  }\n\n  .footer-nav li:last-child {\n    border-bottom: none;\n  }\n\n  .footer-nav a {\n    color: white;\n    font-size: 16px;\n  }\n\n  @media screen and (max-width: 576px) {\n    .main,\n    .right,\n    .left {\n      grid-column: auto;\n    }\n\n    .grid-12-col {\n      padding: 0;\n    }\n\n    footer {\n      padding: 0;\n    }\n\n    .right {\n      order: 3;\n      padding: 0 32px;\n      padding-bottom: 32px;\n    }\n\n    .left {\n      order: 2;\n      padding: 0 32px;\n    }\n\n    .copyright {\n      padding: 0 32px 32px 32px;\n      text-align: left;\n    }\n\n    hr {\n      margin-top: 44px;\n    }\n  }\n"])));

/***/ }),

/***/ "./src/scripts/components/styles/header-styles.js":
/*!********************************************************!*\
  !*** ./src/scripts/components/styles/header-styles.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderStyles": () => (/* binding */ HeaderStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var HeaderStyles = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :host {\n    display: block;\n    background: #eceae5;\n    min-height: var(--ibp-header-height);\n    overflow: visible;\n  }\n\n  :host([mini]) {\n    min-height: auto;\n  }\n\n  .banner {\n    min-height: var(--ibp-header-height);\n    width: 100%;\n    z-index: 0;\n  }\n\n  .banner.has-image {\n    background-size: cover;\n    background-position: center top;\n    background-repeat: no-repeat;\n    color: white;\n    background-color: #979797;\n    background-blend-mode: multiply;\n  }\n\n  .has-image .infobox {\n    color: var(--ibp-body-text);\n  }\n\n  .banner.has-image .nav li a.active {\n    background: rgba(255, 255, 255, 0.3);\n  }\n\n  .banner.has-image .secondary-nav a {\n    color: white;\n  }\n\n  .nav li a.active {\n    background: #dad5ca;\n  }\n\n  .page-title {\n    font-family: var(--ibp-heading-font-family);\n    font-size: var(--ibp-page-title-font-size);\n    font-weight: 400;\n    line-height: 1;\n    letter-spacing: var(--ibp-letter-spacing-sm);\n    margin-top: 0;\n    margin-bottom: 32px;\n    pointer-events: none;\n    user-select: none;\n    z-index: 0;\n  }\n\n  .nav-content--header {\n    grid-column: span 6;\n    padding-bottom: 44px;\n  }\n\n  .secondary-nav {\n    grid-column: span 2;\n  }\n\n  .infobox {\n    grid-column: 9/13;\n    background: white;\n  }\n\n  .spacer {\n    grid-column: span 1;\n  }\n\n  .secondary-nav li a.active:before {\n    content: \"\u2022\";\n    font-size: 24px;\n    line-height: 0;\n    margin-right: 8px;\n    margin-left: -17px;\n    display: inline-block;\n    color: var(--ibp-accent);\n  }\n\n  .overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: #f00;\n  }\n\n  .secondary-nav ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  .secondary-nav li {\n    border-bottom: 1px solid #acaaa2;\n  }\n\n  .secondary-nav li a {\n    color: #222222;\n    text-decoration: none;\n    margin: 8px 0;\n    display: block;\n    font-size: 16px;\n  }\n\n  .secondary-nav li:last-child {\n    border: none;\n  }\n\n  ::slotted[name=\"infobox\"] {\n    background: blue;\n  }\n\n  @media screen and (max-width: 576px) {\n    :host,\n    .banner {\n      min-height: auto;\n    }\n\n    .nav-content {\n      gap: 12px;\n      grid-template-columns: 1fr;\n    }\n\n    .secondary-nav,\n    .nav-content--header {\n      grid-column: auto;\n    }\n\n    .main-nav-wrapper {\n      padding: 0 12px;\n    }\n\n    .page-title {\n      font-size: 42px;\n      line-height: 45px;\n    }\n  }\n"])));

/***/ }),

/***/ "./src/scripts/components/styles/menu-overlay-styles.js":
/*!**************************************************************!*\
  !*** ./src/scripts/components/styles/menu-overlay-styles.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuOverlayStyles": () => (/* binding */ MenuOverlayStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var MenuOverlayStyles = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .overlay {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    min-height: 100vh;\n    opacity: 0;\n    height: 0;\n    transition: all 1s;\n    pointer-events: none;\n  }\n\n  .overlay.visible {\n    opacity: 1;\n    top: 0;\n    pointer-events: auto;\n    z-index: 999;\n  }\n\n  .scroll-container {\n    display: flex;\n    overflow: auto;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: purple;\n  }\n\n  input[type=\"text\"] {\n    padding: 0;\n    border: 1px solid var(--ibp-ecru);\n    font-size: 15px;\n    line-height: 26px;\n    padding: 4px 9px;\n    border-radius: 26px;\n    position: relative;\n    padding-left: 46px;\n  }\n\n  .search-box {\n    position: relative;\n  }\n\n  .search-box i {\n    position: absolute;\n    left: 0;\n    top: 0;\n    line-height: 36px;\n    border-radius: 50%;\n    width: 36px;\n    text-align: center;\n    background: var(--ibp-ecru);\n  }\n\n  .nav-header {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    background: var(--ibp-ecru);\n  }\n\n  .nav-content {\n    height: 100%;\n  }\n\n  .nav-footer-wrapper {\n    background: var(--ibp-footer-bg-light);\n  }\n\n  .nav-content-wrapper {\n    padding-top: 0;\n    flex: 1;\n  }\n\n  .main-nav-wrapper {\n    background: white;\n  }\n\n  .nav-footer .signup-note {\n    color: white;\n    grid-column: span 5;\n    line-height: 28px;\n    padding: 44px 0;\n  }\n\n  .nav-footer newsletter-form {\n    grid-column: 7/13;\n    align-self: center;\n  }\n\n  .full-menu {\n    grid-column: span 8;\n    display: flex;\n  }\n\n  .full-menu div {\n    width: 33.3333%;\n  }\n\n  .full-menu ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n\n  .full-menu li {\n    line-height: 2;\n  }\n\n  .full-menu h6 {\n    margin-top: 44px;\n  }\n\n  .full-menu h6 i {\n    display: none;\n  }\n\n  .full-menu a {\n    text-decoration: none;\n    color: var(--ibp-body-text);\n  }\n\n  .featured-story {\n    grid-column: span 4;\n    margin-right: -44px;\n  }\n\n  .toggle {\n    display: none;\n  }\n\n  .sub-links {\n    display: block;\n    margin: 32px 0;\n    line-height: 32px;\n  }\n\n  .sub-links a {\n    display: block;\n    font-size: 13px;\n    font-weight: bold;\n  }\n\n  @media screen and (max-width: 576px) {\n    .main-nav-wrapper {\n      background: var(--ibp-ecru);\n    }\n\n    .main-nav-wrapper .container {\n      padding: 0 12px;\n    }\n\n    pre-nav {\n      outline: 1px solid red;\n    }\n\n    .full-menu {\n      flex-direction: column;\n    }\n\n    .full-menu div {\n      width: auto;\n    }\n\n    .full-menu h6 {\n      background: var(--ibp-ecru);\n      margin: 0;\n      padding-top: 14px;\n      padding-bottom: 12px;\n      border-top: 1px solid var(--ibp-text-highlight-light);\n    }\n\n    .full-menu h6 i {\n      display: block;\n    }\n\n    .full-menu li a {\n      font-size: 14px;\n    }\n\n    .btn-donate,\n    .btn-action {\n      padding: 14px 14px 12px 14px;\n      font-size: 13px;\n      text-transform: uppercase;\n      font-weight: 800;\n      border-radius: 500px;\n      margin-right: 11px;\n      letter-spacing: var(--ibp-letter-spacing);\n    }\n\n    .toggle:checked + h6 i {\n      transform: rotate(180deg) translateY(4px);\n    }\n\n    .full-menu ul {\n      overflow: hidden;\n      transition: max-height 0.8s ease-in-out;\n      max-height: 0;\n    }\n\n    h6 label {\n      transition: all 0.7s ease-out;\n    }\n\n    .toggle:checked + h6 + ul {\n      display: block;\n      color: blue;\n      max-height: 100vh;\n    }\n\n    .action-buttons {\n      margin-top: 24px;\n      display: block;\n    }\n\n    .nav-footer newsletter-form {\n      grid-column: auto;\n      margin-top: 0;\n      margin-bottom: 44px;\n    }\n  }\n"])));

/***/ }),

/***/ "./src/scripts/components/styles/newsletter-form-styles.js":
/*!*****************************************************************!*\
  !*** ./src/scripts/components/styles/newsletter-form-styles.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterFormStyles": () => (/* binding */ NewsletterFormStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var NewsletterFormStyles = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :host {\n    display: block;\n  }\n\n  .signup-form {\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n  }\n\n  .signup-form h6,\n  .signup-form .form {\n    text-align: left;\n    grid-column: 2/6;\n  }\n\n  .form {\n    display: flex;\n    margin-top: 8px;\n    position: relative;\n  }\n\n  input[type=\"text\"] {\n    font-family: var(--ibp-body-font-family);\n    width: 100%;\n    border: none;\n    font-size: 12px;\n    letter-spacing: 1px;\n    padding: 16px 0;\n    padding-left: 42px;\n  }\n\n  .icon-email {\n    position: absolute;\n    top: 12px;\n    left: 12px;\n    color: var(--ibp-ecru);\n  }\n\n  button {\n    min-width: 120px;\n    border: none;\n  }\n\n  @media screen and (max-width: 576px) {\n    .signup-form h6,\n    .signup-form .form {\n      grid-column: auto;\n    }\n\n    .signup-form {\n      grid-template-columns: 1fr;\n    }\n  }\n"])));

/***/ }),

/***/ "./src/scripts/components/styles/pre-header-styles.js":
/*!************************************************************!*\
  !*** ./src/scripts/components/styles/pre-header-styles.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreHeaderStyles": () => (/* binding */ PreHeaderStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var PreHeaderStyles = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :host {\n    display: flex;\n    justify-content: end;\n    height: 35px;\n    background: white;\n  }\n\n  .overlay :host {\n    background: green;\n  }\n\n  a {\n    font-size: 13px;\n    font-family: \"Adelle Sans\", sans-serif;\n    font-weight: 800;\n    text-decoration: none;\n    color: #151515;\n    padding: 0 14px;\n    text-transform: uppercase;\n    line-height: 35px;\n    letter-spacing: 0.12em;\n  }\n\n  @media screen and (max-width: 576px) {\n    :host {\n      display: none;\n    }\n  }\n"])));

/***/ }),

/***/ "./src/scripts/menu-data.js":
/*!**********************************!*\
  !*** ./src/scripts/menu-data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
var href = window.location.href;
var wp_url = "https://redesign.internationalbudget.org";
var drupal_url = "https://redesign.internationalbudget.org/open-budget-survey";
var explorer_url = "https://obs-data-explorer.herokuapp.com";

if (href.match(/(ddev|localhost)/)) {
  wp_url = "https://www2-ibp.wp.localhost";
  drupal_url = "https://international-budget-partnership.ddev.site:4443/open-budget-survey";
  explorer_url = "http://localhost:3000";
}

var menu = [{
  title: "About",
  url: "https://internationalbudget.org/about-us",
  hero: "",
  slug: "about",
  children: [{
    title: "About Us",
    url: "https://internationalbudget.org/about-us"
  }, {
    title: "Our Network",
    url: "https://internationalbudget.org/findgroup"
  }, {
    title: "Our People",
    url: "https://internationalbudget.org/about-us/our-people/"
  }, {
    title: "Our Learning",
    url: "https://internationalbudget.org/about-us/learning/"
  }, {
    title: "Our Impact",
    url: "https://internationalbudget.org/about-us/annual-report/"
  }]
}, {
  title: "Our Work",
  url: "https://internationalbudget.org/our-work",
  children: [{
    title: "Our Work",
    url: "https://internationalbudget.org/our-work"
  }, {
    title: "Where we work",
    url: "https://internationalbudget.org/countries"
  }]
}, {
  title: "Open Budget Survey",
  url: "".concat(wp_url, "/open-budget-survey"),
  slug: "open-budget-survey",
  children: [{
    title: "Open Budget Survey",
    url: "".concat(wp_url, "/open-budget-survey"),
    description: '<a href="#" class="btn btn-dark">Link to open budget survey</a>'
  }, {
    title: "Rankings",
    url: "".concat(drupal_url, "/rankings"),
    description: "<p>The Open Budget Survey (OBS) 2021 results include country-specific findings and recommendations on budget transparency, public participation, and oversight.</p><p>Select a country on the drop down menu or via the map below to view its assessment. PDF versions of the country summaries and completed survey questionnaires can be downloaded from the country page.</p>",
    children: []
  }, {
    title: "Country Results",
    url: "".concat(drupal_url, "/country-results")
  }, {
    title: "Reports",
    url: "".concat(drupal_url, "/reports")
  }, {
    title: "Calculator",
    url: "".concat(explorer_url, "/#calculator")
  }, {
    title: "Download Data",
    url: "".concat(explorer_url, "/#download")
  }, {
    title: "Road to 61 Roadmap",
    url: "".concat(wp_url, "/open-budget-survey/roadmap-to-61")
  }, {
    title: "Events",
    url: "https://internationalbudget.org/events/"
  }]
}, {
  title: "Join Us",
  url: "https://internationalbudget.org/support-us/",
  children: [{
    title: "Join Us",
    url: "https://internationalbudget.org/support-us/"
  }, {
    title: "Attend an Event",
    url: "https://internationalbudget.org/events/"
  }, {
    title: "Join our Call to Action",
    url: "https://internationalbudget.org/campaign-to-open-budgets/"
  }, {
    title: "Get Updates",
    url: "https://internationalbudget.org/library/publications/sign-up-for-ibp-e-publications/"
  }, {
    title: "Apply for a Job",
    url: "https://internationalbudget.org/job-opportunities/"
  }]
}, {
  title: "Publications",
  url: "https://internationalbudget.org/library/publications/"
}, {
  title: "Blog",
  url: "https://internationalbudget.org/blog"
}, {
  title: "Stories",
  url: "https://story.internationalbudget.org"
}, {
  title: "News",
  url: "https://internationalbudget.org/pressarchive/"
}];

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/css-tag.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/css-tag.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": () => (/* binding */ CSSResult),
/* harmony export */   "adoptStyles": () => (/* binding */ adoptStyles),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "getCompatibleStyle": () => (/* binding */ getCompatibleStyle),
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* binding */ supportsAdoptingStyleSheets),
/* harmony export */   "unsafeCSS": () => (/* binding */ unsafeCSS)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
const supportsAdoptingStyleSheets = window.ShadowRoot &&
    (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype;
const constructionToken = Symbol();
const styleSheetCache = new Map();
/**
 * A container for a string of CSS text, that may be used to create a CSSStyleSheet.
 *
 * CSSResult is the return value of `css`-tagged template literals and
 * `unsafeCSS()`. In order to ensure that CSSResults are only created via the
 * `css` tag and `unsafeCSS()`, CSSResult cannot be constructed directly.
 */
class CSSResult {
    constructor(cssText, safeToken) {
        // This property needs to remain unminified.
        this['_$cssResult$'] = true;
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
    }
    // Note, this is a getter so that it's lazy. In practice, this means
    // stylesheets are not created until the first element instance is made.
    get styleSheet() {
        // Note, if `supportsAdoptingStyleSheets` is true then we assume
        // CSSStyleSheet is constructable.
        let styleSheet = styleSheetCache.get(this.cssText);
        if (supportsAdoptingStyleSheets && styleSheet === undefined) {
            styleSheetCache.set(this.cssText, (styleSheet = new CSSStyleSheet()));
            styleSheet.replaceSync(this.cssText);
        }
        return styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
const textFromCSSResult = (value) => {
    // This property needs to remain unminified.
    if (value['_$cssResult$'] === true) {
        return value.cssText;
    }
    else if (typeof value === 'number') {
        return value;
    }
    else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ` +
            `${value}. Use 'unsafeCSS' to pass non-literal values, but take care ` +
            `to ensure page security.`);
    }
};
/**
 * Wrap a value for interpolation in a {@linkcode css} tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = (value) => new CSSResult(typeof value === 'string' ? value : String(value), constructionToken);
/**
 * A template literal tag which can be used with LitElement's
 * {@linkcode LitElement.styles} property to set element styles.
 *
 * For security reasons, only literal string values and number may be used in
 * embedded expressions. To incorporate non-literal values {@linkcode unsafeCSS}
 * may be used inside an expression.
 */
const css = (strings, ...values) => {
    const cssText = strings.length === 1
        ? strings[0]
        : values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, constructionToken);
};
/**
 * Applies the given styles to a `shadowRoot`. When Shadow DOM is
 * available but `adoptedStyleSheets` is not, styles are appended to the
 * `shadowRoot` to [mimic spec behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
 * Note, when shimming is used, any styles that are subsequently placed into
 * the shadowRoot should be placed *before* any shimmed adopted styles. This
 * will match spec behavior that gives adopted sheets precedence over styles in
 * shadowRoot.
 */
const adoptStyles = (renderRoot, styles) => {
    if (supportsAdoptingStyleSheets) {
        renderRoot.adoptedStyleSheets = styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
    }
    else {
        styles.forEach((s) => {
            const style = document.createElement('style');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const nonce = window['litNonce'];
            if (nonce !== undefined) {
                style.setAttribute('nonce', nonce);
            }
            style.textContent = s.cssText;
            renderRoot.appendChild(style);
        });
    }
};
const cssResultFromStyleSheet = (sheet) => {
    let cssText = '';
    for (const rule of sheet.cssRules) {
        cssText += rule.cssText;
    }
    return unsafeCSS(cssText);
};
const getCompatibleStyle = supportsAdoptingStyleSheets
    ? (s) => s
    : (s) => s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;
//# sourceMappingURL=css-tag.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/reactive-element.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/reactive-element.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   "ReactiveElement": () => (/* binding */ ReactiveElement),
/* harmony export */   "adoptStyles": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   "css": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   "defaultConverter": () => (/* binding */ defaultConverter),
/* harmony export */   "getCompatibleStyle": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   "notEqual": () => (/* binding */ notEqual),
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   "unsafeCSS": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-tag.js */ "./node_modules/@lit/reactive-element/development/css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c;
var _d;
/**
 * Use this module if you want to create your own base class extending
 * {@link ReactiveElement}.
 * @packageDocumentation
 */


const DEV_MODE = true;
let requestUpdateThenable;
let issueWarning;
const trustedTypes = window
    .trustedTypes;
// Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.
const emptyStringForBooleanAttribute = trustedTypes
    ? trustedTypes.emptyScript
    : '';
const polyfillSupport = DEV_MODE
    ? window.reactiveElementPolyfillSupportDevMode
    : window.reactiveElementPolyfillSupport;
if (DEV_MODE) {
    // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    const issuedWarnings = ((_a = globalThis.litIssuedWarnings) !== null && _a !== void 0 ? _a : (globalThis.litIssuedWarnings = new Set()));
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += ` See https://lit.dev/msg/${code} for more information.`;
        if (!issuedWarnings.has(warning)) {
            console.warn(warning);
            issuedWarnings.add(warning);
        }
    };
    issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
    // Issue polyfill support warning.
    if (((_b = window.ShadyDOM) === null || _b === void 0 ? void 0 : _b.inUse) && polyfillSupport === undefined) {
        issueWarning('polyfill-support-missing', `Shadow DOM is being polyfilled via \`ShadyDOM\` but ` +
            `the \`polyfill-support\` module has not been loaded.`);
    }
    requestUpdateThenable = (name) => ({
        then: (onfulfilled, _onrejected) => {
            issueWarning('request-update-promise', `The \`requestUpdate\` method should no longer return a Promise but ` +
                `does so on \`${name}\`. Use \`updateComplete\` instead.`);
            if (onfulfilled !== undefined) {
                onfulfilled(false);
            }
        },
    });
}
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
const debugLogEvent = DEV_MODE
    ? (event) => {
        const shouldEmit = window
            .emitLitDebugLogEvents;
        if (!shouldEmit) {
            return;
        }
        window.dispatchEvent(new CustomEvent('lit-debug', {
            detail: event,
        }));
    }
    : undefined;
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
/*@__INLINE__*/
const JSCompiler_renameProperty = (prop, _obj) => prop;
const defaultConverter = {
    toAttribute(value, type) {
        switch (type) {
            case Boolean:
                value = value ? emptyStringForBooleanAttribute : null;
                break;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                value = value == null ? value : JSON.stringify(value);
                break;
        }
        return value;
    },
    fromAttribute(value, type) {
        let fromValue = value;
        switch (type) {
            case Boolean:
                fromValue = value !== null;
                break;
            case Number:
                fromValue = value === null ? null : Number(value);
                break;
            case Object:
            case Array:
                // Do *not* generate exception when invalid JSON is set as elements
                // don't normally complain on being mis-configured.
                // TODO(sorvell): Do generate exception in *dev mode*.
                try {
                    // Assert to adhere to Bazel's "must type assert JSON parse" rule.
                    fromValue = JSON.parse(value);
                }
                catch (e) {
                    fromValue = null;
                }
                break;
        }
        return fromValue;
    },
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
const notEqual = (value, old) => {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual,
};
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */
const finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */
class ReactiveElement extends HTMLElement {
    constructor() {
        super();
        this.__instanceProperties = new Map();
        /**
         * True if there is a pending update as a result of calling `requestUpdate()`.
         * Should only be read.
         * @category updates
         */
        this.isUpdatePending = false;
        /**
         * Is set to `true` after the first update. The element code cannot assume
         * that `renderRoot` exists before the element `hasUpdated`.
         * @category updates
         */
        this.hasUpdated = false;
        /**
         * Name of currently reflecting property
         */
        this.__reflectingProperty = null;
        this._initialize();
    }
    /**
     * Adds an initializer function to the class that is called during instance
     * construction.
     *
     * This is useful for code that runs against a `ReactiveElement`
     * subclass, such as a decorator, that needs to do work for each
     * instance, such as setting up a `ReactiveController`.
     *
     * ```ts
     * const myDecorator = (target: typeof ReactiveElement, key: string) => {
     *   target.addInitializer((instance: ReactiveElement) => {
     *     // This is run during construction of the element
     *     new MyController(instance);
     *   });
     * }
     * ```
     *
     * Decorating a field will then cause each instance to run an initializer
     * that adds a controller:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   @myDecorator foo;
     * }
     * ```
     *
     * Initializers are stored per-constructor. Adding an initializer to a
     * subclass does not add it to a superclass. Since initializers are run in
     * constructors, initializers will run in order of the class hierarchy,
     * starting with superclasses and progressing to the instance's class.
     *
     * @nocollapse
     */
    static addInitializer(initializer) {
        var _a;
        (_a = this._initializers) !== null && _a !== void 0 ? _a : (this._initializers = []);
        this._initializers.push(initializer);
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     * @category attributes
     */
    static get observedAttributes() {
        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        const attributes = [];
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.elementProperties.forEach((v, p) => {
            const attr = this.__attributeNameForProperty(p, v);
            if (attr !== undefined) {
                this.__attributeToPropertyMap.set(attr, p);
                attributes.push(attr);
            }
        });
        return attributes;
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a {@linkcode PropertyDeclaration} for the property with the
     * given options. The property setter calls the property's `hasChanged`
     * property option or uses a strict identity check to determine whether or not
     * to request an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * ```ts
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */
    static createProperty(name, options = defaultPropertyDeclaration) {
        var _a;
        // if this is a state property, force the attribute to false.
        if (options.state) {
            // Cast as any since this is readonly.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            options.attribute = false;
        }
        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure finalization has been kicked off.
        this.finalize();
        this.elementProperties.set(name, options);
        // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it
        if (!options.noAccessor && !this.prototype.hasOwnProperty(name)) {
            const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
            const descriptor = this.getPropertyDescriptor(name, key, options);
            if (descriptor !== undefined) {
                Object.defineProperty(this.prototype, name, descriptor);
                if (DEV_MODE) {
                    // If this class doesn't have its own set, create one and initialize
                    // with the values in the set from the nearest ancestor class, if any.
                    if (!this.hasOwnProperty('__reactivePropertyKeys')) {
                        this.__reactivePropertyKeys = new Set((_a = this.__reactivePropertyKeys) !== null && _a !== void 0 ? _a : []);
                    }
                    this.__reactivePropertyKeys.add(name);
                }
            }
        }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     * ```ts
     * class MyElement extends LitElement {
     *   static getPropertyDescriptor(name, key, options) {
     *     const defaultDescriptor =
     *         super.getPropertyDescriptor(name, key, options);
     *     const setter = defaultDescriptor.set;
     *     return {
     *       get: defaultDescriptor.get,
     *       set(value) {
     *         setter.call(this, value);
     *         // custom action.
     *       },
     *       configurable: true,
     *       enumerable: true
     *     }
     *   }
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */
    static getPropertyDescriptor(name, key, options) {
        return {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            get() {
                return this[key];
            },
            set(value) {
                const oldValue = this[name];
                this[key] = value;
                this.requestUpdate(name, oldValue, options);
            },
            configurable: true,
            enumerable: true,
        };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a `PropertyDeclaration` via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override
     * {@linkcode createProperty}.
     *
     * @nocollapse
     * @final
     * @category properties
     */
    static getPropertyOptions(name) {
        return this.elementProperties.get(name) || defaultPropertyDeclaration;
    }
    /**
     * Creates property accessors for registered properties, sets up element
     * styling, and ensures any superclasses are also finalized. Returns true if
     * the element was finalized.
     * @nocollapse
     */
    static finalize() {
        if (this.hasOwnProperty(finalized)) {
            return false;
        }
        this[finalized] = true;
        // finalize any superclasses
        const superCtor = Object.getPrototypeOf(this);
        superCtor.finalize();
        this.elementProperties = new Map(superCtor.elementProperties);
        // initialize Map populated in observedAttributes
        this.__attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            // support symbols in properties (IE11 does not support this)
            const propKeys = [
                ...Object.getOwnPropertyNames(props),
                ...Object.getOwnPropertySymbols(props),
            ];
            // This for/of is ok because propKeys is an array
            for (const p of propKeys) {
                // note, use of `any` is due to TypeScript lack of support for symbol in
                // index types
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this.createProperty(p, props[p]);
            }
        }
        this.elementStyles = this.finalizeStyles(this.styles);
        // DEV mode warnings
        if (DEV_MODE) {
            const warnRemovedOrRenamed = (name, renamed = false) => {
                if (this.prototype.hasOwnProperty(name)) {
                    issueWarning(renamed ? 'renamed-api' : 'removed-api', `\`${name}\` is implemented on class ${this.name}. It ` +
                        `has been ${renamed ? 'renamed' : 'removed'} ` +
                        `in this version of LitElement.`);
                }
            };
            warnRemovedOrRenamed('initialize');
            warnRemovedOrRenamed('requestUpdateInternal');
            warnRemovedOrRenamed('_getUpdateComplete', true);
        }
        return true;
    }
    /**
     * Takes the styles the user supplied via the `static styles` property and
     * returns the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * Styles are deduplicated preserving the _last_ instance in the list. This
     * is a performance optimization to avoid duplicated styles that can occur
     * especially when composing via subclassing. The last item is kept to try
     * to preserve the cascade order with the assumption that it's most important
     * that last added styles override previous styles.
     *
     * @nocollapse
     * @category styles
     */
    static finalizeStyles(styles) {
        const elementStyles = [];
        if (Array.isArray(styles)) {
            // Dedupe the flattened array in reverse order to preserve the last items.
            // Casting to Array<unknown> works around TS error that
            // appears to come from trying to flatten a type CSSResultArray.
            const set = new Set(styles.flat(Infinity).reverse());
            // Then preserve original order by adding the set items in reverse order.
            for (const s of set) {
                elementStyles.unshift((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(s));
            }
        }
        else if (styles !== undefined) {
            elementStyles.push((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(styles));
        }
        return elementStyles;
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */
    static __attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false
            ? undefined
            : typeof attribute === 'string'
                ? attribute
                : typeof name === 'string'
                    ? name.toLowerCase()
                    : undefined;
    }
    /**
     * Internal only override point for customizing work done when elements
     * are constructed.
     *
     * @internal
     */
    _initialize() {
        var _a;
        this.__updatePromise = new Promise((res) => (this.enableUpdating = res));
        this._$changedProperties = new Map();
        this.__saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this.requestUpdate();
        (_a = this.constructor._initializers) === null || _a === void 0 ? void 0 : _a.forEach((i) => i(this));
    }
    /**
     * Registers a `ReactiveController` to participate in the element's reactive
     * update cycle. The element automatically calls into any registered
     * controllers during its lifecycle callbacks.
     *
     * If the element is connected when `addController()` is called, the
     * controller's `hostConnected()` callback will be immediately called.
     * @category controllers
     */
    addController(controller) {
        var _a, _b;
        ((_a = this.__controllers) !== null && _a !== void 0 ? _a : (this.__controllers = [])).push(controller);
        // If a controller is added after the element has been connected,
        // call hostConnected. Note, re-using existence of `renderRoot` here
        // (which is set in connectedCallback) to avoid the need to track a
        // first connected state.
        if (this.renderRoot !== undefined && this.isConnected) {
            (_b = controller.hostConnected) === null || _b === void 0 ? void 0 : _b.call(controller);
        }
    }
    /**
     * Removes a `ReactiveController` from the element.
     * @category controllers
     */
    removeController(controller) {
        var _a;
        // Note, if the indexOf is -1, the >>> will flip the sign which makes the
        // splice do nothing.
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.splice(this.__controllers.indexOf(controller) >>> 0, 1);
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */
    __saveInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor.elementProperties.forEach((_v, p) => {
            if (this.hasOwnProperty(p)) {
                this.__instanceProperties.set(p, this[p]);
                delete this[p];
            }
        });
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     *
     * @return Returns a node into which to render.
     * @category rendering
     */
    createRenderRoot() {
        var _a;
        const renderRoot = (_a = this.shadowRoot) !== null && _a !== void 0 ? _a : this.attachShadow(this.constructor.shadowRootOptions);
        (0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles)(renderRoot, this.constructor.elementStyles);
        return renderRoot;
    }
    /**
     * On first connection, creates the element's renderRoot, sets up
     * element styling, and enables updating.
     * @category lifecycle
     */
    connectedCallback() {
        var _a;
        // create renderRoot before first update.
        if (this.renderRoot === undefined) {
            this.renderRoot = this.createRenderRoot();
        }
        this.enableUpdating(true);
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostConnected) === null || _a === void 0 ? void 0 : _a.call(c); });
    }
    /**
     * Note, this method should be considered final and not overridden. It is
     * overridden on the element instance with a function that triggers the first
     * update.
     * @category updates
     */
    enableUpdating(_requestedUpdate) { }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     * @category lifecycle
     */
    disconnectedCallback() {
        var _a;
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostDisconnected) === null || _a === void 0 ? void 0 : _a.call(c); });
    }
    /**
     * Synchronizes property values when attributes change.
     *
     * Specifically, when an attribute is set, the corresponding property is set.
     * You should rarely need to implement this callback. If this method is
     * overridden, `super.attributeChangedCallback(name, _old, value)` must be
     * called.
     *
     * See [using the lifecycle callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)
     * on MDN for more information about the `attributeChangedCallback`.
     * @category attributes
     */
    attributeChangedCallback(name, _old, value) {
        this._$attributeToProperty(name, value);
    }
    __propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
        var _a, _b;
        const attr = this.constructor.__attributeNameForProperty(name, options);
        if (attr !== undefined && options.reflect === true) {
            const toAttribute = (_b = (_a = options.converter) === null || _a === void 0 ? void 0 : _a.toAttribute) !== null && _b !== void 0 ? _b : defaultConverter.toAttribute;
            const attrValue = toAttribute(value, options.type);
            if (DEV_MODE &&
                this.constructor.enabledWarnings.indexOf('migration') >= 0 &&
                attrValue === undefined) {
                issueWarning('undefined-attribute-value', `The attribute value for the ${name} property is ` +
                    `undefined on element ${this.localName}. The attribute will be ` +
                    `removed, but in the previous version of \`ReactiveElement\`, ` +
                    `the attribute would not have changed.`);
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this.__reflectingProperty = name;
            if (attrValue == null) {
                this.removeAttribute(attr);
            }
            else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /** @internal */
    _$attributeToProperty(name, value) {
        var _a, _b, _c;
        const ctor = this.constructor;
        // Note, hint this as an `AttributeMap` so closure clearly understands
        // the type; it has issues with tracking types through statics
        const propName = ctor.__attributeToPropertyMap.get(name);
        // Use tracking info to avoid reflecting a property value to an attribute
        // if it was just set because the attribute changed.
        if (propName !== undefined && this.__reflectingProperty !== propName) {
            const options = ctor.getPropertyOptions(propName);
            const converter = options.converter;
            const fromAttribute = (_c = (_b = (_a = converter) === null || _a === void 0 ? void 0 : _a.fromAttribute) !== null && _b !== void 0 ? _b : (typeof converter === 'function'
                ? converter
                : null)) !== null && _c !== void 0 ? _c : defaultConverter.fromAttribute;
            // mark state reflecting
            this.__reflectingProperty = propName;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this[propName] = fromAttribute(value, options.type);
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should be called
     * when an element should update based on some state not triggered by setting
     * a reactive property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored.
     *
     * @param name name of requesting property
     * @param oldValue old value of requesting property
     * @param options property options to use instead of the previously
     *     configured options
     * @category updates
     */
    requestUpdate(name, oldValue, options) {
        let shouldRequestUpdate = true;
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            options =
                options ||
                    this.constructor.getPropertyOptions(name);
            const hasChanged = options.hasChanged || notEqual;
            if (hasChanged(this[name], oldValue)) {
                if (!this._$changedProperties.has(name)) {
                    this._$changedProperties.set(name, oldValue);
                }
                // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.
                if (options.reflect === true && this.__reflectingProperty !== name) {
                    if (this.__reflectingProperties === undefined) {
                        this.__reflectingProperties = new Map();
                    }
                    this.__reflectingProperties.set(name, options);
                }
            }
            else {
                // Abort the request if the property should not be considered changed.
                shouldRequestUpdate = false;
            }
        }
        if (!this.isUpdatePending && shouldRequestUpdate) {
            this.__updatePromise = this.__enqueueUpdate();
        }
        // Note, since this no longer returns a promise, in dev mode we return a
        // thenable which warns if it's called.
        return DEV_MODE
            ? requestUpdateThenable(this.localName)
            : undefined;
    }
    /**
     * Sets up the element to asynchronously update.
     */
    async __enqueueUpdate() {
        this.isUpdatePending = true;
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await this.__updatePromise;
        }
        catch (e) {
            // Refire any previous errors async so they do not disrupt the update
            // cycle. Errors are refired so developers have a chance to observe
            // them, and this can be done by implementing
            // `window.onunhandledrejection`.
            Promise.reject(e);
        }
        const result = this.scheduleUpdate();
        // If `scheduleUpdate` returns a Promise, we await it. This is done to
        // enable coordinating updates with a scheduler. Note, the result is
        // checked to avoid delaying an additional microtask unless we need to.
        if (result != null) {
            await result;
        }
        return !this.isUpdatePending;
    }
    /**
     * Schedules an element update. You can override this method to change the
     * timing of updates by returning a Promise. The update will await the
     * returned Promise, and you should resolve the Promise to allow the update
     * to proceed. If this method is overridden, `super.scheduleUpdate()`
     * must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```ts
     * override protected async scheduleUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.scheduleUpdate();
     * }
     * ```
     * @category updates
     */
    scheduleUpdate() {
        return this.performUpdate();
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * Call `performUpdate()` to immediately process a pending update. This should
     * generally not be needed, but it can be done in rare cases when you need to
     * update synchronously.
     *
     * Note: To ensure `performUpdate()` synchronously completes a pending update,
     * it should not be overridden. In LitElement 2.x it was suggested to override
     * `performUpdate()` to also customizing update scheduling. Instead, you should now
     * override `scheduleUpdate()`. For backwards compatibility with LitElement 2.x,
     * scheduling updates via `performUpdate()` continues to work, but will make
     * also calling `performUpdate()` to synchronously process updates difficult.
     *
     * @category updates
     */
    performUpdate() {
        var _a, _b;
        // Abort any update if one is not pending when this is called.
        // This can happen if `performUpdate` is called early to "flush"
        // the update.
        if (!this.isUpdatePending) {
            return;
        }
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({ kind: 'update' });
        // create renderRoot before first update.
        if (!this.hasUpdated) {
            // Produce warning if any class properties are shadowed by class fields
            if (DEV_MODE) {
                const shadowedProperties = [];
                (_a = this.constructor.__reactivePropertyKeys) === null || _a === void 0 ? void 0 : _a.forEach((p) => {
                    var _a;
                    if (this.hasOwnProperty(p) && !((_a = this.__instanceProperties) === null || _a === void 0 ? void 0 : _a.has(p))) {
                        shadowedProperties.push(p);
                    }
                });
                if (shadowedProperties.length) {
                    throw new Error(`The following properties on element ${this.localName} will not ` +
                        `trigger updates as expected because they are set using class ` +
                        `fields: ${shadowedProperties.join(', ')}. ` +
                        `Native class fields and some compiled output will overwrite ` +
                        `accessors used for detecting changes. See ` +
                        `https://lit.dev/msg/class-field-shadowing ` +
                        `for more information.`);
                }
            }
        }
        // Mixin instance properties once, if they exist.
        if (this.__instanceProperties) {
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.__instanceProperties.forEach((v, p) => (this[p] = v));
            this.__instanceProperties = undefined;
        }
        let shouldUpdate = false;
        const changedProperties = this._$changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.willUpdate(changedProperties);
                (_b = this.__controllers) === null || _b === void 0 ? void 0 : _b.forEach((c) => { var _a; return (_a = c.hostUpdate) === null || _a === void 0 ? void 0 : _a.call(c); });
                this.update(changedProperties);
            }
            else {
                this.__markUpdated();
            }
        }
        catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            // Ensure element can accept additional updates after an exception.
            this.__markUpdated();
            throw e;
        }
        // The update is no longer considered pending and further updates are now allowed.
        if (shouldUpdate) {
            this._$didUpdate(changedProperties);
        }
    }
    /**
     * Invoked before `update()` to compute values needed during the update.
     *
     * Implement `willUpdate` to compute property values that depend on other
     * properties and are used in the rest of the update process.
     *
     * ```ts
     * willUpdate(changedProperties) {
     *   // only need to check changed properties for an expensive computation.
     *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
     *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
     *   }
     * }
     *
     * render() {
     *   return html`SHA: ${this.sha}`;
     * }
     * ```
     *
     * @category updates
     */
    willUpdate(_changedProperties) { }
    // Note, this is an override point for polyfill-support.
    // @internal
    _$didUpdate(changedProperties) {
        var _a;
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostUpdated) === null || _a === void 0 ? void 0 : _a.call(c); });
        if (!this.hasUpdated) {
            this.hasUpdated = true;
            this.firstUpdated(changedProperties);
        }
        this.updated(changedProperties);
        if (DEV_MODE &&
            this.isUpdatePending &&
            this.constructor.enabledWarnings.indexOf('change-in-update') >= 0) {
            issueWarning('change-in-update', `Element ${this.localName} scheduled an update ` +
                `(generally because a property was set) ` +
                `after an update completed, causing a new update to be scheduled. ` +
                `This is inefficient and should be avoided unless the next update ` +
                `can only be scheduled as a side effect of the previous update.`);
        }
    }
    __markUpdated() {
        this._$changedProperties = new Map();
        this.isUpdatePending = false;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super.getUpdateComplete()`, then any subsequent state.
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */
    get updateComplete() {
        return this.getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   override async getUpdateComplete() {
     *     const result = await super.getUpdateComplete();
     *     await this._myChild.updateComplete;
     *     return result;
     *   }
     * }
     * ```
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */
    getUpdateComplete() {
        return this.__updatePromise;
    }
    /**
     * Controls whether or not `update()` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    update(_changedProperties) {
        if (this.__reflectingProperties !== undefined) {
            // Use forEach so this works even if for/of loops are compiled to for
            // loops expecting arrays
            this.__reflectingProperties.forEach((v, k) => this.__propertyToAttribute(k, this[k], v));
            this.__reflectingProperties = undefined;
        }
        this.__markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    updated(_changedProperties) { }
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * ```ts
     * firstUpdated() {
     *   this.renderRoot.getElementById('my-text-area').focus();
     * }
     * ```
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    firstUpdated(_changedProperties) { }
}
_d = finalized;
/**
 * Marks class as having finished creating properties.
 */
ReactiveElement[_d] = true;
/**
 * Memoized list of all element properties, including any superclass properties.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category properties
 */
ReactiveElement.elementProperties = new Map();
/**
 * Memoized list of all element styles.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category styles
 */
ReactiveElement.elementStyles = [];
/**
 * Options used when calling `attachShadow`. Set this property to customize
 * the options for the shadowRoot; for example, to create a closed
 * shadowRoot: `{mode: 'closed'}`.
 *
 * Note, these options are used in `createRenderRoot`. If this method
 * is customized, options should be respected if possible.
 * @nocollapse
 * @category rendering
 */
ReactiveElement.shadowRootOptions = { mode: 'open' };
// Apply polyfills if available
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({ ReactiveElement });
// Dev mode warnings...
if (DEV_MODE) {
    // Default warning set.
    ReactiveElement.enabledWarnings = ['change-in-update'];
    const ensureOwnWarnings = function (ctor) {
        if (!ctor.hasOwnProperty(JSCompiler_renameProperty('enabledWarnings', ctor))) {
            ctor.enabledWarnings = ctor.enabledWarnings.slice();
        }
    };
    ReactiveElement.enableWarning = function (warning) {
        ensureOwnWarnings(this);
        if (this.enabledWarnings.indexOf(warning) < 0) {
            this.enabledWarnings.push(warning);
        }
    };
    ReactiveElement.disableWarning = function (warning) {
        ensureOwnWarnings(this);
        const i = this.enabledWarnings.indexOf(warning);
        if (i >= 0) {
            this.enabledWarnings.splice(i, 1);
        }
    };
}
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for ReactiveElement usage.
((_c = globalThis.reactiveElementVersions) !== null && _c !== void 0 ? _c : (globalThis.reactiveElementVersions = [])).push('1.3.1');
if (DEV_MODE && globalThis.reactiveElementVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` +
        `is not recommended.`);
}
//# sourceMappingURL=reactive-element.js.map

/***/ }),

/***/ "./node_modules/lit-element/development/lit-element.js":
/*!*************************************************************!*\
  !*** ./node_modules/lit-element/development/lit-element.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   "INTERNAL": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.INTERNAL),
/* harmony export */   "LitElement": () => (/* binding */ LitElement),
/* harmony export */   "ReactiveElement": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement),
/* harmony export */   "UpdatingElement": () => (/* binding */ UpdatingElement),
/* harmony export */   "_$LE": () => (/* binding */ _$LE),
/* harmony export */   "_$LH": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__._$LH),
/* harmony export */   "adoptStyles": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   "css": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   "defaultConverter": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.defaultConverter),
/* harmony export */   "getCompatibleStyle": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   "html": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.html),
/* harmony export */   "noChange": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange),
/* harmony export */   "notEqual": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.notEqual),
/* harmony export */   "nothing": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.nothing),
/* harmony export */   "render": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   "svg": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.svg),
/* harmony export */   "unsafeCSS": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c;
/**
 * The main LitElement module, which defines the {@linkcode LitElement} base
 * class and related APIs.
 *
 *  LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 *  Import {@linkcode LitElement} and {@linkcode html} from this module to
 * create a component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends {@linkcode ReactiveElement} and adds lit-html
 * templating. The `ReactiveElement` class is provided for users that want to
 * build their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */




// For backwards compatibility export ReactiveElement as UpdatingElement. Note,
// IE transpilation requires exporting like this.
const UpdatingElement = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement;
const DEV_MODE = true;
let issueWarning;
if (DEV_MODE) {
    // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    const issuedWarnings = ((_a = globalThis.litIssuedWarnings) !== null && _a !== void 0 ? _a : (globalThis.litIssuedWarnings = new Set()));
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += ` See https://lit.dev/msg/${code} for more information.`;
        if (!issuedWarnings.has(warning)) {
            console.warn(warning);
            issuedWarnings.add(warning);
        }
    };
}
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the {@linkcode LitElement.properties properties} property or the
 * {@linkcode property} decorator.
 */
class LitElement extends _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement {
    constructor() {
        super(...arguments);
        /**
         * @category rendering
         */
        this.renderOptions = { host: this };
        this.__childPart = undefined;
    }
    /**
     * @category rendering
     */
    createRenderRoot() {
        var _a;
        var _b;
        const renderRoot = super.createRenderRoot();
        // When adoptedStyleSheets are shimmed, they are inserted into the
        // shadowRoot by createRenderRoot. Adjust the renderBefore node so that
        // any styles in Lit content render before adoptedStyleSheets. This is
        // important so that adoptedStyleSheets have precedence over styles in
        // the shadowRoot.
        (_a = (_b = this.renderOptions).renderBefore) !== null && _a !== void 0 ? _a : (_b.renderBefore = renderRoot.firstChild);
        return renderRoot;
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param changedProperties Map of changed properties with old values
     * @category updates
     */
    update(changedProperties) {
        // Setting properties in `render` should not trigger an update. Since
        // updates are allowed after super.update, it's important to call `render`
        // before that.
        const value = this.render();
        if (!this.hasUpdated) {
            this.renderOptions.isConnected = this.isConnected;
        }
        super.update(changedProperties);
        this.__childPart = (0,lit_html__WEBPACK_IMPORTED_MODULE_1__.render)(value, this.renderRoot, this.renderOptions);
    }
    /**
     * Invoked when the component is added to the document's DOM.
     *
     * In `connectedCallback()` you should setup tasks that should only occur when
     * the element is connected to the document. The most common of these is
     * adding event listeners to nodes external to the element, like a keydown
     * event handler added to the window.
     *
     * ```ts
     * connectedCallback() {
     *   super.connectedCallback();
     *   addEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * Typically, anything done in `connectedCallback()` should be undone when the
     * element is disconnected, in `disconnectedCallback()`.
     *
     * @category lifecycle
     */
    connectedCallback() {
        var _a;
        super.connectedCallback();
        (_a = this.__childPart) === null || _a === void 0 ? void 0 : _a.setConnected(true);
    }
    /**
     * Invoked when the component is removed from the document's DOM.
     *
     * This callback is the main signal to the element that it may no longer be
     * used. `disconnectedCallback()` should ensure that nothing is holding a
     * reference to the element (such as event listeners added to nodes external
     * to the element), so that it is free to be garbage collected.
     *
     * ```ts
     * disconnectedCallback() {
     *   super.disconnectedCallback();
     *   window.removeEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * An element may be re-connected after being disconnected.
     *
     * @category lifecycle
     */
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        (_a = this.__childPart) === null || _a === void 0 ? void 0 : _a.setConnected(false);
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `ChildPart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     * @category rendering
     */
    render() {
        return lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange;
    }
}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See @lit/reactive-element for more information.
 */
LitElement['finalized'] = true;
// This property needs to remain unminified.
LitElement['_$litElement$'] = true;
// Install hydration if available
(_b = globalThis.litElementHydrateSupport) === null || _b === void 0 ? void 0 : _b.call(globalThis, { LitElement });
// Apply polyfills if available
const polyfillSupport = DEV_MODE
    ? globalThis.litElementPolyfillSupportDevMode
    : globalThis.litElementPolyfillSupport;
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({ LitElement });
// DEV mode warnings
if (DEV_MODE) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    // Note, for compatibility with closure compilation, this access
    // needs to be as a string property index.
    LitElement['finalize'] = function () {
        const finalized = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement.finalize.call(this);
        if (!finalized) {
            return false;
        }
        const warnRemovedOrRenamed = (obj, name, renamed = false) => {
            if (obj.hasOwnProperty(name)) {
                const ctorName = (typeof obj === 'function' ? obj : obj.constructor)
                    .name;
                issueWarning(renamed ? 'renamed-api' : 'removed-api', `\`${name}\` is implemented on class ${ctorName}. It ` +
                    `has been ${renamed ? 'renamed' : 'removed'} ` +
                    `in this version of LitElement.`);
            }
        };
        warnRemovedOrRenamed(this, 'render');
        warnRemovedOrRenamed(this, 'getStyles', true);
        warnRemovedOrRenamed(this.prototype, 'adoptStyles');
        return true;
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */
}
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _$LE object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-html, since this module re-exports all of lit-html.
 *
 * @private
 */
const _$LE = {
    _$attributeToProperty: (el, name, value) => {
        // eslint-disable-next-line
        el._$attributeToProperty(name, value);
    },
    // eslint-disable-next-line
    _$changedProperties: (el) => el._$changedProperties,
};
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
((_c = globalThis.litElementVersions) !== null && _c !== void 0 ? _c : (globalThis.litElementVersions = [])).push('3.2.0');
if (DEV_MODE && globalThis.litElementVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` +
        `is not recommended.`);
}
//# sourceMappingURL=lit-element.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directive.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/development/directive.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directive": () => (/* binding */ Directive),
/* harmony export */   "PartType": () => (/* binding */ PartType),
/* harmony export */   "directive": () => (/* binding */ directive)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const PartType = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6,
};
/**
 * Creates a user-facing directive function from a Directive class. This
 * function has the same parameters as the directive's render() method.
 */
const directive = (c) => (...values) => ({
    // This property needs to remain unminified.
    ['_$litDirective$']: c,
    values,
});
/**
 * Base class for creating custom directives. Users should extend this class,
 * implement `render` and/or `update`, and then pass their subclass to
 * `directive`.
 */
class Directive {
    constructor(_partInfo) { }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    /** @internal */
    _$initialize(part, parent, attributeIndex) {
        this.__part = part;
        this._$parent = parent;
        this.__attributeIndex = attributeIndex;
    }
    /** @internal */
    _$resolve(part, props) {
        return this.update(part, props);
    }
    update(_part, props) {
        return this.render(...props);
    }
}
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directives/class-map.js":
/*!*******************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/class-map.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classMap": () => (/* binding */ classMap)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


class ClassMapDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
    constructor(partInfo) {
        var _a;
        super(partInfo);
        if (partInfo.type !== _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.ATTRIBUTE ||
            partInfo.name !== 'class' ||
            ((_a = partInfo.strings) === null || _a === void 0 ? void 0 : _a.length) > 2) {
            throw new Error('`classMap()` can only be used in the `class` attribute ' +
                'and must be the only part in the attribute.');
        }
    }
    render(classInfo) {
        // Add spaces to ensure separation from static classes
        return (' ' +
            Object.keys(classInfo)
                .filter((key) => classInfo[key])
                .join(' ') +
            ' ');
    }
    update(part, [classInfo]) {
        var _a, _b;
        // Remember dynamic classes on the first render
        if (this._previousClasses === undefined) {
            this._previousClasses = new Set();
            if (part.strings !== undefined) {
                this._staticClasses = new Set(part.strings
                    .join(' ')
                    .split(/\s/)
                    .filter((s) => s !== ''));
            }
            for (const name in classInfo) {
                if (classInfo[name] && !((_a = this._staticClasses) === null || _a === void 0 ? void 0 : _a.has(name))) {
                    this._previousClasses.add(name);
                }
            }
            return this.render(classInfo);
        }
        const classList = part.element.classList;
        // Remove old classes that no longer apply
        // We use forEach() instead of for-of so that we don't require down-level
        // iteration.
        this._previousClasses.forEach((name) => {
            if (!(name in classInfo)) {
                classList.remove(name);
                this._previousClasses.delete(name);
            }
        });
        // Add or remove classes based on their classMap value
        for (const name in classInfo) {
            // We explicitly want a loose truthy check of `value` because it seems
            // more convenient that '' and 0 are skipped.
            const value = !!classInfo[name];
            if (value !== this._previousClasses.has(name) &&
                !((_b = this._staticClasses) === null || _b === void 0 ? void 0 : _b.has(name))) {
                if (value) {
                    classList.add(name);
                    this._previousClasses.add(name);
                }
                else {
                    classList.remove(name);
                    this._previousClasses.delete(name);
                }
            }
        }
        return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
    }
}
/**
 * A directive that applies dynamic CSS classes.
 *
 * This must be used in the `class` attribute and must be the only part used in
 * the attribute. It takes each property in the `classInfo` argument and adds
 * the property name to the element's `classList` if the property value is
 * truthy; if the property value is falsey, the property name is removed from
 * the element's `class`.
 *
 * For example `{foo: bar}` applies the class `foo` if the value of `bar` is
 * truthy.
 *
 * @param classInfo
 */
const classMap = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(ClassMapDirective);
//# sourceMappingURL=class-map.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directives/if-defined.js":
/*!********************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/if-defined.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ifDefined": () => (/* binding */ ifDefined)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */
const ifDefined = (value) => value !== null && value !== void 0 ? value : _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
//# sourceMappingURL=if-defined.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directives/unsafe-html.js":
/*!*********************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/unsafe-html.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsafeHTMLDirective": () => (/* binding */ UnsafeHTMLDirective),
/* harmony export */   "unsafeHTML": () => (/* binding */ unsafeHTML)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


const HTML_RESULT = 1;
class UnsafeHTMLDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
    constructor(partInfo) {
        super(partInfo);
        this._value = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
        if (partInfo.type !== _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.CHILD) {
            throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`);
        }
    }
    render(value) {
        if (value === _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing || value == null) {
            this._templateResult = undefined;
            return (this._value = value);
        }
        if (value === _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange) {
            return value;
        }
        if (typeof value != 'string') {
            throw new Error(`${this.constructor.directiveName}() called with a non-string value`);
        }
        if (value === this._value) {
            return this._templateResult;
        }
        this._value = value;
        const strings = [value];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        strings.raw = strings;
        // WARNING: impersonating a TemplateResult like this is extremely
        // dangerous. Third-party directives should not do this.
        return (this._templateResult = {
            // Cast to a known set of integers that satisfy ResultType so that we
            // don't have to export ResultType and possibly encourage this pattern.
            // This property needs to remain unminified.
            ['_$litType$']: this.constructor
                .resultType,
            strings,
            values: [],
        });
    }
}
UnsafeHTMLDirective.directiveName = 'unsafeHTML';
UnsafeHTMLDirective.resultType = HTML_RESULT;
/**
 * Renders the result as HTML, rather than text.
 *
 * The values `undefined`, `null`, and `nothing`, will all result in no content
 * (empty string) being rendered.
 *
 * Note, this is unsafe to use with any user-provided input that hasn't been
 * sanitized or escaped, as it may lead to cross-site-scripting
 * vulnerabilities.
 */
const unsafeHTML = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(UnsafeHTMLDirective);
//# sourceMappingURL=unsafe-html.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/lit-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/development/lit-html.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INTERNAL": () => (/* binding */ INTERNAL),
/* harmony export */   "_$LH": () => (/* binding */ _$LH),
/* harmony export */   "html": () => (/* binding */ html),
/* harmony export */   "noChange": () => (/* binding */ noChange),
/* harmony export */   "nothing": () => (/* binding */ nothing),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "svg": () => (/* binding */ svg)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c, _d;
const DEV_MODE = true;
const ENABLE_EXTRA_SECURITY_HOOKS = true;
const ENABLE_SHADYDOM_NOPATCH = true;
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
const debugLogEvent = DEV_MODE
    ? (event) => {
        const shouldEmit = window
            .emitLitDebugLogEvents;
        if (!shouldEmit) {
            return;
        }
        window.dispatchEvent(new CustomEvent('lit-debug', {
            detail: event,
        }));
    }
    : undefined;
// Used for connecting beginRender and endRender events when there are nested
// renders when errors are thrown preventing an endRender event from being
// called.
let debugLogRenderId = 0;
/**
 * `true` if we're building for google3 with temporary back-compat helpers.
 * This export is not present in prod builds.
 * @internal
 */
const INTERNAL = true;
let issueWarning;
if (DEV_MODE) {
    (_a = globalThis.litIssuedWarnings) !== null && _a !== void 0 ? _a : (globalThis.litIssuedWarnings = new Set());
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += code
            ? ` See https://lit.dev/msg/${code} for more information.`
            : '';
        if (!globalThis.litIssuedWarnings.has(warning)) {
            console.warn(warning);
            globalThis.litIssuedWarnings.add(warning);
        }
    };
    issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
}
const wrap = ENABLE_SHADYDOM_NOPATCH &&
    ((_b = window.ShadyDOM) === null || _b === void 0 ? void 0 : _b.inUse) &&
    ((_c = window.ShadyDOM) === null || _c === void 0 ? void 0 : _c.noPatch) === true
    ? window.ShadyDOM.wrap
    : (node) => node;
const trustedTypes = globalThis.trustedTypes;
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
const policy = trustedTypes
    ? trustedTypes.createPolicy('lit-html', {
        createHTML: (s) => s,
    })
    : undefined;
const identityFunction = (value) => value;
const noopSanitizer = (_node, _name, _type) => identityFunction;
/** Sets the global sanitizer factory. */
const setSanitizer = (newSanitizer) => {
    if (!ENABLE_EXTRA_SECURITY_HOOKS) {
        return;
    }
    if (sanitizerFactoryInternal !== noopSanitizer) {
        throw new Error(`Attempted to overwrite existing lit-html security policy.` +
            ` setSanitizeDOMValueFactory should be called at most once.`);
    }
    sanitizerFactoryInternal = newSanitizer;
};
/**
 * Only used in internal tests, not a part of the public API.
 */
const _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
    sanitizerFactoryInternal = noopSanitizer;
};
const createSanitizer = (node, name, type) => {
    return sanitizerFactoryInternal(node, name, type);
};
// Added to an attribute name to mark the attribute as bound so we can find
// it easily.
const boundAttributeSuffix = '$lit$';
// This marker is used in many syntactic positions in HTML, so it must be
// a valid element name and attribute name. We don't support dynamic names (yet)
// but this at least ensures that the parse tree is closer to the template
// intention.
const marker = `lit$${String(Math.random()).slice(9)}$`;
// String used to tell if a comment is a marker comment
const markerMatch = '?' + marker;
// Text used to insert a comment marker node. We use processing instruction
// syntax because it's slightly smaller, but parses as a comment node.
const nodeMarker = `<${markerMatch}>`;
const d = document;
// Creates a dynamic marker. We never have to search for these in the DOM.
const createMarker = (v = '') => d.createComment(v);
const isPrimitive = (value) => value === null || (typeof value != 'object' && typeof value != 'function');
const isArray = Array.isArray;
const isIterable = (value) => {
    var _a;
    return isArray(value) ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typeof ((_a = value) === null || _a === void 0 ? void 0 : _a[Symbol.iterator]) === 'function';
};
const SPACE_CHAR = `[ \t\n\f\r]`;
const ATTR_VALUE_CHAR = `[^ \t\n\f\r"'\`<>=]`;
const NAME_CHAR = `[^\\s"'>=/]`;
// These regexes represent the five parsing states that we care about in the
// Template's HTML scanner. They match the *end* of the state they're named
// after.
// Depending on the match, we transition to a new state. If there's no match,
// we stay in the same state.
// Note that the regexes are stateful. We utilize lastIndex and sync it
// across the multiple regexes used. In addition to the five regexes below
// we also dynamically create a regex to find the matching end tags for raw
// text elements.
/**
 * End of text is: `<` followed by:
 *   (comment start) or (tag) or (dynamic tag binding)
 */
const textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
const COMMENT_START = 1;
const TAG_NAME = 2;
const DYNAMIC_TAG_NAME = 3;
const commentEndRegex = /-->/g;
/**
 * Comments not started with <!--, like </{, can be ended by a single `>`
 */
const comment2EndRegex = />/g;
/**
 * The tagEnd regex matches the end of the "inside an opening" tag syntax
 * position. It either matches a `>`, an attribute-like sequence, or the end
 * of the string after a space (attribute-name position ending).
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \t\n\f\r" are HTML space characters:
 * https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * So an attribute is:
 *  * The name: any character except a whitespace character, ("), ('), ">",
 *    "=", or "/". Note: this is different from the HTML spec which also excludes control characters.
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, 'g');
const ENTIRE_MATCH = 0;
const ATTRIBUTE_NAME = 1;
const SPACES_AND_EQUALS = 2;
const QUOTE_CHAR = 3;
const singleQuoteAttrEndRegex = /'/g;
const doubleQuoteAttrEndRegex = /"/g;
/**
 * Matches the raw text elements.
 *
 * Comments are not parsed within raw text elements, so we need to search their
 * text content for marker strings.
 */
const rawTextElement = /^(?:script|style|textarea|title)$/i;
/** TemplateResult types */
const HTML_RESULT = 1;
const SVG_RESULT = 2;
// TemplatePart types
// IMPORTANT: these must match the values in PartType
const ATTRIBUTE_PART = 1;
const CHILD_PART = 2;
const PROPERTY_PART = 3;
const BOOLEAN_ATTRIBUTE_PART = 4;
const EVENT_PART = 5;
const ELEMENT_PART = 6;
const COMMENT_PART = 7;
/**
 * Generates a template literal tag function that returns a TemplateResult with
 * the given result type.
 */
const tag = (type) => (strings, ...values) => {
    // Warn against templates octal escape sequences
    // We do this here rather than in render so that the warning is closer to the
    // template definition.
    if (DEV_MODE && strings.some((s) => s === undefined)) {
        console.warn('Some template strings are undefined.\n' +
            'This is probably caused by illegal octal escape sequences.');
    }
    return {
        // This property needs to remain unminified.
        ['_$litType$']: type,
        strings,
        values,
    };
};
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const header = (title: string) => html`<h1>${title}</h1>`;
 * ```
 *
 * The `html` tag returns a description of the DOM to render as a value. It is
 * lazy, meaning no work is done until the template is rendered. When rendering,
 * if a template comes from the same expression as a previously rendered result,
 * it's efficiently updated instead of replaced.
 */
const html = tag(HTML_RESULT);
/**
 * Interprets a template literal as an SVG fragment that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const rect = svg`<rect width="10" height="10"></rect>`;
 *
 * const myImage = html`
 *   <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
 *     ${rect}
 *   </svg>`;
 * ```
 *
 * The `svg` *tag function* should only be used for SVG fragments, or elements
 * that would be contained **inside** an `<svg>` HTML element. A common error is
 * placing an `<svg>` *element* in a template tagged with the `svg` tag
 * function. The `<svg>` element is an HTML element and should be used within a
 * template tagged with the {@linkcode html} tag function.
 *
 * In LitElement usage, it's invalid to return an SVG fragment from the
 * `render()` method, as the SVG fragment will be contained within the element's
 * shadow root and thus cannot be used within an `<svg>` HTML element.
 */
const svg = tag(SVG_RESULT);
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = Symbol.for('lit-noChange');
/**
 * A sentinel value that signals a ChildPart to fully clear its content.
 *
 * ```ts
 * const button = html`${
 *  user.isAdmin
 *    ? html`<button>DELETE</button>`
 *    : nothing
 * }`;
 * ```
 *
 * Prefer using `nothing` over other falsy values as it provides a consistent
 * behavior between various expression binding contexts.
 *
 * In child expressions, `undefined`, `null`, `''`, and `nothing` all behave the
 * same and render no nodes. In attribute expressions, `nothing` _removes_ the
 * attribute, while `undefined` and `null` will render an empty string. In
 * property expressions `nothing` becomes `undefined`.
 */
const nothing = Symbol.for('lit-nothing');
/**
 * The cache of prepared templates, keyed by the tagged TemplateStringsArray
 * and _not_ accounting for the specific template tag used. This means that
 * template tags cannot be dynamic - the must statically be one of html, svg,
 * or attr. This restriction simplifies the cache lookup, which is on the hot
 * path for rendering.
 */
const templateCache = new WeakMap();
/**
 * Renders a value, usually a lit-html TemplateResult, to the container.
 * @param value
 * @param container
 * @param options
 */
const render = (value, container, options) => {
    var _a, _b, _c;
    const renderId = DEV_MODE ? debugLogRenderId++ : 0;
    const partOwnerNode = (_a = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _a !== void 0 ? _a : container;
    // This property needs to remain unminified.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let part = partOwnerNode['_$litPart$'];
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'begin render',
        id: renderId,
        value,
        container,
        options,
        part,
    });
    if (part === undefined) {
        const endNode = (_b = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _b !== void 0 ? _b : null;
        // Internal modification: don't clear container to match lit-html 2.0
        if (INTERNAL &&
            ((_c = options) === null || _c === void 0 ? void 0 : _c.clearContainerForLit2MigrationOnly) ===
                true) {
            let n = container.firstChild;
            // Clear only up to the `endNode` aka `renderBefore` node.
            while (n && n !== endNode) {
                const next = n.nextSibling;
                n.remove();
                n = next;
            }
        }
        // This property needs to remain unminified.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        partOwnerNode['_$litPart$'] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, undefined, options !== null && options !== void 0 ? options : {});
    }
    part._$setValue(value);
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'end render',
        id: renderId,
        value,
        container,
        options,
        part,
    });
    return part;
};
if (ENABLE_EXTRA_SECURITY_HOOKS) {
    render.setSanitizer = setSanitizer;
    render.createSanitizer = createSanitizer;
    if (DEV_MODE) {
        render._testOnlyClearSanitizerFactoryDoNotCallOrElse =
            _testOnlyClearSanitizerFactoryDoNotCallOrElse;
    }
}
const walker = d.createTreeWalker(d, 129 /* NodeFilter.SHOW_{ELEMENT|COMMENT} */, null, false);
let sanitizerFactoryInternal = noopSanitizer;
/**
 * Returns an HTML string for the given TemplateStringsArray and result type
 * (HTML or SVG), along with the case-sensitive bound attribute names in
 * template order. The HTML contains comment comment markers denoting the
 * `ChildPart`s and suffixes on bound attributes denoting the `AttributeParts`.
 *
 * @param strings template strings array
 * @param type HTML or SVG
 * @return Array containing `[html, attrNames]` (array returned for terseness,
 *     to avoid object fields since this code is shared with non-minified SSR
 *     code)
 */
const getTemplateHtml = (strings, type) => {
    // Insert makers into the template HTML to represent the position of
    // bindings. The following code scans the template strings to determine the
    // syntactic position of the bindings. They can be in text position, where
    // we insert an HTML comment, attribute value position, where we insert a
    // sentinel string and re-write the attribute name, or inside a tag where
    // we insert the sentinel string.
    const l = strings.length - 1;
    // Stores the case-sensitive bound attribute names in the order of their
    // parts. ElementParts are also reflected in this array as undefined
    // rather than a string, to disambiguate from attribute bindings.
    const attrNames = [];
    let html = type === SVG_RESULT ? '<svg>' : '';
    // When we're inside a raw text tag (not it's text content), the regex
    // will still be tagRegex so we can find attributes, but will switch to
    // this regex when the tag ends.
    let rawTextEndRegex;
    // The current parsing state, represented as a reference to one of the
    // regexes
    let regex = textEndRegex;
    for (let i = 0; i < l; i++) {
        const s = strings[i];
        // The index of the end of the last attribute name. When this is
        // positive at end of a string, it means we're in an attribute value
        // position and need to rewrite the attribute name.
        // We also use a special value of -2 to indicate that we encountered
        // the end of a string in attribute name position.
        let attrNameEndIndex = -1;
        let attrName;
        let lastIndex = 0;
        let match;
        // The conditions in this loop handle the current parse state, and the
        // assignments to the `regex` variable are the state transitions.
        while (lastIndex < s.length) {
            // Make sure we start searching from where we previously left off
            regex.lastIndex = lastIndex;
            match = regex.exec(s);
            if (match === null) {
                break;
            }
            lastIndex = regex.lastIndex;
            if (regex === textEndRegex) {
                if (match[COMMENT_START] === '!--') {
                    regex = commentEndRegex;
                }
                else if (match[COMMENT_START] !== undefined) {
                    // We started a weird comment, like </{
                    regex = comment2EndRegex;
                }
                else if (match[TAG_NAME] !== undefined) {
                    if (rawTextElement.test(match[TAG_NAME])) {
                        // Record if we encounter a raw-text element. We'll switch to
                        // this regex at the end of the tag.
                        rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, 'g');
                    }
                    regex = tagEndRegex;
                }
                else if (match[DYNAMIC_TAG_NAME] !== undefined) {
                    if (DEV_MODE) {
                        throw new Error('Bindings in tag names are not supported. Please use static templates instead. ' +
                            'See https://lit.dev/docs/templates/expressions/#static-expressions');
                    }
                    regex = tagEndRegex;
                }
            }
            else if (regex === tagEndRegex) {
                if (match[ENTIRE_MATCH] === '>') {
                    // End of a tag. If we had started a raw-text element, use that
                    // regex
                    regex = rawTextEndRegex !== null && rawTextEndRegex !== void 0 ? rawTextEndRegex : textEndRegex;
                    // We may be ending an unquoted attribute value, so make sure we
                    // clear any pending attrNameEndIndex
                    attrNameEndIndex = -1;
                }
                else if (match[ATTRIBUTE_NAME] === undefined) {
                    // Attribute name position
                    attrNameEndIndex = -2;
                }
                else {
                    attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
                    attrName = match[ATTRIBUTE_NAME];
                    regex =
                        match[QUOTE_CHAR] === undefined
                            ? tagEndRegex
                            : match[QUOTE_CHAR] === '"'
                                ? doubleQuoteAttrEndRegex
                                : singleQuoteAttrEndRegex;
                }
            }
            else if (regex === doubleQuoteAttrEndRegex ||
                regex === singleQuoteAttrEndRegex) {
                regex = tagEndRegex;
            }
            else if (regex === commentEndRegex || regex === comment2EndRegex) {
                regex = textEndRegex;
            }
            else {
                // Not one of the five state regexes, so it must be the dynamically
                // created raw text regex and we're at the close of that element.
                regex = tagEndRegex;
                rawTextEndRegex = undefined;
            }
        }
        if (DEV_MODE) {
            // If we have a attrNameEndIndex, which indicates that we should
            // rewrite the attribute name, assert that we're in a valid attribute
            // position - either in a tag, or a quoted attribute value.
            console.assert(attrNameEndIndex === -1 ||
                regex === tagEndRegex ||
                regex === singleQuoteAttrEndRegex ||
                regex === doubleQuoteAttrEndRegex, 'unexpected parse state B');
        }
        // We have four cases:
        //  1. We're in text position, and not in a raw text element
        //     (regex === textEndRegex): insert a comment marker.
        //  2. We have a non-negative attrNameEndIndex which means we need to
        //     rewrite the attribute name to add a bound attribute suffix.
        //  3. We're at the non-first binding in a multi-binding attribute, use a
        //     plain marker.
        //  4. We're somewhere else inside the tag. If we're in attribute name
        //     position (attrNameEndIndex === -2), add a sequential suffix to
        //     generate a unique attribute name.
        // Detect a binding next to self-closing tag end and insert a space to
        // separate the marker from the tag end:
        const end = regex === tagEndRegex && strings[i + 1].startsWith('/>') ? ' ' : '';
        html +=
            regex === textEndRegex
                ? s + nodeMarker
                : attrNameEndIndex >= 0
                    ? (attrNames.push(attrName),
                        s.slice(0, attrNameEndIndex) +
                            boundAttributeSuffix +
                            s.slice(attrNameEndIndex)) +
                        marker +
                        end
                    : s +
                        marker +
                        (attrNameEndIndex === -2 ? (attrNames.push(undefined), i) : end);
    }
    const htmlResult = html + (strings[l] || '<?>') + (type === SVG_RESULT ? '</svg>' : '');
    // A security check to prevent spoofing of Lit template results.
    // In the future, we may be able to replace this with Array.isTemplateObject,
    // though we might need to make that check inside of the html and svg
    // functions, because precompiled templates don't come in as
    // TemplateStringArray objects.
    if (!Array.isArray(strings) || !strings.hasOwnProperty('raw')) {
        let message = 'invalid template strings array';
        if (DEV_MODE) {
            message =
                `Internal Error: expected template strings to be an array ` +
                    `with a 'raw' field. Please file a bug at ` +
                    `https://github.com/lit/lit/issues/new?template=bug_report.md ` +
                    `and include information about your build tooling, if any.`;
        }
        throw new Error(message);
    }
    // Returned as an array for terseness
    return [
        policy !== undefined
            ? policy.createHTML(htmlResult)
            : htmlResult,
        attrNames,
    ];
};
class Template {
    constructor(
    // This property needs to remain unminified.
    { strings, ['_$litType$']: type }, options) {
        /** @internal */
        this.parts = [];
        let node;
        let nodeIndex = 0;
        let attrNameIndex = 0;
        const partCount = strings.length - 1;
        const parts = this.parts;
        // Create template element
        const [html, attrNames] = getTemplateHtml(strings, type);
        this.el = Template.createElement(html, options);
        walker.currentNode = this.el.content;
        // Reparent SVG nodes into template root
        if (type === SVG_RESULT) {
            const content = this.el.content;
            const svgElement = content.firstChild;
            svgElement.remove();
            content.append(...svgElement.childNodes);
        }
        // Walk the template to find binding markers and create TemplateParts
        while ((node = walker.nextNode()) !== null && parts.length < partCount) {
            if (node.nodeType === 1) {
                if (DEV_MODE) {
                    const tag = node.localName;
                    // Warn if `textarea` includes an expression and throw if `template`
                    // does since these are not supported. We do this by checking
                    // innerHTML for anything that looks like a marker. This catches
                    // cases like bindings in textarea there markers turn into text nodes.
                    if (/^(?:textarea|template)$/i.test(tag) &&
                        node.innerHTML.includes(marker)) {
                        const m = `Expressions are not supported inside \`${tag}\` ` +
                            `elements. See https://lit.dev/msg/expression-in-${tag} for more ` +
                            `information.`;
                        if (tag === 'template') {
                            throw new Error(m);
                        }
                        else
                            issueWarning('', m);
                    }
                }
                // TODO (justinfagnani): for attempted dynamic tag names, we don't
                // increment the bindingIndex, and it'll be off by 1 in the element
                // and off by two after it.
                if (node.hasAttributes()) {
                    // We defer removing bound attributes because on IE we might not be
                    // iterating attributes in their template order, and would sometimes
                    // remove an attribute that we still need to create a part for.
                    const attrsToRemove = [];
                    for (const name of node.getAttributeNames()) {
                        // `name` is the name of the attribute we're iterating over, but not
                        // _neccessarily_ the name of the attribute we will create a part
                        // for. They can be different in browsers that don't iterate on
                        // attributes in source order. In that case the attrNames array
                        // contains the attribute name we'll process next. We only need the
                        // attribute name here to know if we should process a bound attribute
                        // on this element.
                        if (name.endsWith(boundAttributeSuffix) ||
                            name.startsWith(marker)) {
                            const realName = attrNames[attrNameIndex++];
                            attrsToRemove.push(name);
                            if (realName !== undefined) {
                                // Lowercase for case-sensitive SVG attributes like viewBox
                                const value = node.getAttribute(realName.toLowerCase() + boundAttributeSuffix);
                                const statics = value.split(marker);
                                const m = /([.?@])?(.*)/.exec(realName);
                                parts.push({
                                    type: ATTRIBUTE_PART,
                                    index: nodeIndex,
                                    name: m[2],
                                    strings: statics,
                                    ctor: m[1] === '.'
                                        ? PropertyPart
                                        : m[1] === '?'
                                            ? BooleanAttributePart
                                            : m[1] === '@'
                                                ? EventPart
                                                : AttributePart,
                                });
                            }
                            else {
                                parts.push({
                                    type: ELEMENT_PART,
                                    index: nodeIndex,
                                });
                            }
                        }
                    }
                    for (const name of attrsToRemove) {
                        node.removeAttribute(name);
                    }
                }
                // TODO (justinfagnani): benchmark the regex against testing for each
                // of the 3 raw text element names.
                if (rawTextElement.test(node.tagName)) {
                    // For raw text elements we need to split the text content on
                    // markers, create a Text node for each segment, and create
                    // a TemplatePart for each marker.
                    const strings = node.textContent.split(marker);
                    const lastIndex = strings.length - 1;
                    if (lastIndex > 0) {
                        node.textContent = trustedTypes
                            ? trustedTypes.emptyScript
                            : '';
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for node parts
                        // We can't use empty text nodes as markers because they're
                        // normalized when cloning in IE (could simplify when
                        // IE is no longer supported)
                        for (let i = 0; i < lastIndex; i++) {
                            node.append(strings[i], createMarker());
                            // Walk past the marker node we just added
                            walker.nextNode();
                            parts.push({ type: CHILD_PART, index: ++nodeIndex });
                        }
                        // Note because this marker is added after the walker's current
                        // node, it will be walked to in the outer loop (and ignored), so
                        // we don't need to adjust nodeIndex here
                        node.append(strings[lastIndex], createMarker());
                    }
                }
            }
            else if (node.nodeType === 8) {
                const data = node.data;
                if (data === markerMatch) {
                    parts.push({ type: CHILD_PART, index: nodeIndex });
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        parts.push({ type: COMMENT_PART, index: nodeIndex });
                        // Move to the end of the match
                        i += marker.length - 1;
                    }
                }
            }
            nodeIndex++;
        }
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'template prep',
            template: this,
            clonableTemplate: this.el,
            parts: this.parts,
            strings,
        });
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @nocollapse */
    static createElement(html, _options) {
        const el = d.createElement('template');
        el.innerHTML = html;
        return el;
    }
}
function resolveDirective(part, value, parent = part, attributeIndex) {
    var _a, _b, _c;
    var _d;
    // Bail early if the value is explicitly noChange. Note, this means any
    // nested directive is still attached and is not run.
    if (value === noChange) {
        return value;
    }
    let currentDirective = attributeIndex !== undefined
        ? (_a = parent.__directives) === null || _a === void 0 ? void 0 : _a[attributeIndex]
        : parent.__directive;
    const nextDirectiveConstructor = isPrimitive(value)
        ? undefined
        : // This property needs to remain unminified.
            value['_$litDirective$'];
    if ((currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor) {
        // This property needs to remain unminified.
        (_b = currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective['_$notifyDirectiveConnectionChanged']) === null || _b === void 0 ? void 0 : _b.call(currentDirective, false);
        if (nextDirectiveConstructor === undefined) {
            currentDirective = undefined;
        }
        else {
            currentDirective = new nextDirectiveConstructor(part);
            currentDirective._$initialize(part, parent, attributeIndex);
        }
        if (attributeIndex !== undefined) {
            ((_c = (_d = parent).__directives) !== null && _c !== void 0 ? _c : (_d.__directives = []))[attributeIndex] =
                currentDirective;
        }
        else {
            parent.__directive = currentDirective;
        }
    }
    if (currentDirective !== undefined) {
        value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
    }
    return value;
}
/**
 * An updateable instance of a Template. Holds references to the Parts used to
 * update the template instance.
 */
class TemplateInstance {
    constructor(template, parent) {
        /** @internal */
        this._parts = [];
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$template = template;
        this._$parent = parent;
    }
    // Called by ChildPart parentNode getter
    get parentNode() {
        return this._$parent.parentNode;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    // This method is separate from the constructor because we need to return a
    // DocumentFragment and we don't want to hold onto it with an instance field.
    _clone(options) {
        var _a;
        const { el: { content }, parts: parts, } = this._$template;
        const fragment = ((_a = options === null || options === void 0 ? void 0 : options.creationScope) !== null && _a !== void 0 ? _a : d).importNode(content, true);
        walker.currentNode = fragment;
        let node = walker.nextNode();
        let nodeIndex = 0;
        let partIndex = 0;
        let templatePart = parts[0];
        while (templatePart !== undefined) {
            if (nodeIndex === templatePart.index) {
                let part;
                if (templatePart.type === CHILD_PART) {
                    part = new ChildPart(node, node.nextSibling, this, options);
                }
                else if (templatePart.type === ATTRIBUTE_PART) {
                    part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
                }
                else if (templatePart.type === ELEMENT_PART) {
                    part = new ElementPart(node, this, options);
                }
                this._parts.push(part);
                templatePart = parts[++partIndex];
            }
            if (nodeIndex !== (templatePart === null || templatePart === void 0 ? void 0 : templatePart.index)) {
                node = walker.nextNode();
                nodeIndex++;
            }
        }
        return fragment;
    }
    _update(values) {
        let i = 0;
        for (const part of this._parts) {
            if (part !== undefined) {
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'set part',
                    part,
                    value: values[i],
                    valueIndex: i,
                    values,
                    templateInstance: this,
                });
                if (part.strings !== undefined) {
                    part._$setValue(values, part, i);
                    // The number of values the part consumes is part.strings.length - 1
                    // since values are in between template spans. We increment i by 1
                    // later in the loop, so increment it by part.strings.length - 2 here
                    i += part.strings.length - 2;
                }
                else {
                    part._$setValue(values[i]);
                }
            }
            i++;
        }
    }
}
class ChildPart {
    constructor(startNode, endNode, parent, options) {
        var _a;
        this.type = CHILD_PART;
        this._$committedValue = nothing;
        // The following fields will be patched onto ChildParts when required by
        // AsyncDirective
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$startNode = startNode;
        this._$endNode = endNode;
        this._$parent = parent;
        this.options = options;
        // Note __isConnected is only ever accessed on RootParts (i.e. when there is
        // no _$parent); the value on a non-root-part is "don't care", but checking
        // for parent would be more code
        this.__isConnected = (_a = options === null || options === void 0 ? void 0 : options.isConnected) !== null && _a !== void 0 ? _a : true;
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            // Explicitly initialize for consistent class shape.
            this._textSanitizer = undefined;
        }
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        var _a, _b;
        // ChildParts that are not at the root should always be created with a
        // parent; only RootChildNode's won't, so they return the local isConnected
        // state
        return (_b = (_a = this._$parent) === null || _a === void 0 ? void 0 : _a._$isConnected) !== null && _b !== void 0 ? _b : this.__isConnected;
    }
    /**
     * The parent node into which the part renders its content.
     *
     * A ChildPart's content consists of a range of adjacent child nodes of
     * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
     * `.endNode`).
     *
     * - If both `.startNode` and `.endNode` are non-null, then the part's content
     * consists of all siblings between `.startNode` and `.endNode`, exclusively.
     *
     * - If `.startNode` is non-null but `.endNode` is null, then the part's
     * content consists of all siblings following `.startNode`, up to and
     * including the last child of `.parentNode`. If `.endNode` is non-null, then
     * `.startNode` will always be non-null.
     *
     * - If both `.endNode` and `.startNode` are null, then the part's content
     * consists of all child nodes of `.parentNode`.
     */
    get parentNode() {
        let parentNode = wrap(this._$startNode).parentNode;
        const parent = this._$parent;
        if (parent !== undefined &&
            parentNode.nodeType === 11 /* Node.DOCUMENT_FRAGMENT */) {
            // If the parentNode is a DocumentFragment, it may be because the DOM is
            // still in the cloned fragment during initial render; if so, get the real
            // parentNode the part will be committed into by asking the parent.
            parentNode = parent.parentNode;
        }
        return parentNode;
    }
    /**
     * The part's leading marker node, if any. See `.parentNode` for more
     * information.
     */
    get startNode() {
        return this._$startNode;
    }
    /**
     * The part's trailing marker node, if any. See `.parentNode` for more
     * information.
     */
    get endNode() {
        return this._$endNode;
    }
    _$setValue(value, directiveParent = this) {
        if (DEV_MODE && this.parentNode === null) {
            throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
        }
        value = resolveDirective(this, value, directiveParent);
        if (isPrimitive(value)) {
            // Non-rendering child values. It's important that these do not render
            // empty text nodes to avoid issues with preventing default <slot>
            // fallback content.
            if (value === nothing || value == null || value === '') {
                if (this._$committedValue !== nothing) {
                    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                        kind: 'commit nothing to child',
                        start: this._$startNode,
                        end: this._$endNode,
                        parent: this._$parent,
                        options: this.options,
                    });
                    this._$clear();
                }
                this._$committedValue = nothing;
            }
            else if (value !== this._$committedValue && value !== noChange) {
                this._commitText(value);
            }
            // This property needs to remain unminified.
        }
        else if (value['_$litType$'] !== undefined) {
            this._commitTemplateResult(value);
        }
        else if (value.nodeType !== undefined) {
            this._commitNode(value);
        }
        else if (isIterable(value)) {
            this._commitIterable(value);
        }
        else {
            // Fallback, will render the string representation
            this._commitText(value);
        }
    }
    _insert(node, ref = this._$endNode) {
        return wrap(wrap(this._$startNode).parentNode).insertBefore(node, ref);
    }
    _commitNode(value) {
        var _a;
        if (this._$committedValue !== value) {
            this._$clear();
            if (ENABLE_EXTRA_SECURITY_HOOKS &&
                sanitizerFactoryInternal !== noopSanitizer) {
                const parentNodeName = (_a = this._$startNode.parentNode) === null || _a === void 0 ? void 0 : _a.nodeName;
                if (parentNodeName === 'STYLE' || parentNodeName === 'SCRIPT') {
                    let message = 'Forbidden';
                    if (DEV_MODE) {
                        if (parentNodeName === 'STYLE') {
                            message =
                                `Lit does not support binding inside style nodes. ` +
                                    `This is a security risk, as style injection attacks can ` +
                                    `exfiltrate data and spoof UIs. ` +
                                    `Consider instead using css\`...\` literals ` +
                                    `to compose styles, and make do dynamic styling with ` +
                                    `css custom properties, ::parts, <slot>s, ` +
                                    `and by mutating the DOM rather than stylesheets.`;
                        }
                        else {
                            message =
                                `Lit does not support binding inside script nodes. ` +
                                    `This is a security risk, as it could allow arbitrary ` +
                                    `code execution.`;
                        }
                    }
                    throw new Error(message);
                }
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit node',
                start: this._$startNode,
                parent: this._$parent,
                value: value,
                options: this.options,
            });
            this._$committedValue = this._insert(value);
        }
    }
    _commitText(value) {
        // If the committed value is a primitive it means we called _commitText on
        // the previous render, and we know that this._$startNode.nextSibling is a
        // Text node. We can now just replace the text content (.data) of the node.
        if (this._$committedValue !== nothing &&
            isPrimitive(this._$committedValue)) {
            const node = wrap(this._$startNode).nextSibling;
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(node, 'data', 'property');
                }
                value = this._textSanitizer(value);
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit text',
                node,
                value,
                options: this.options,
            });
            node.data = value;
        }
        else {
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                const textNode = document.createTextNode('');
                this._commitNode(textNode);
                // When setting text content, for security purposes it matters a lot
                // what the parent is. For example, <style> and <script> need to be
                // handled with care, while <span> does not. So first we need to put a
                // text node into the document, then we can sanitize its content.
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(textNode, 'data', 'property');
                }
                value = this._textSanitizer(value);
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'commit text',
                    node: textNode,
                    value,
                    options: this.options,
                });
                textNode.data = value;
            }
            else {
                this._commitNode(d.createTextNode(value));
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'commit text',
                    node: wrap(this._$startNode).nextSibling,
                    value,
                    options: this.options,
                });
            }
        }
        this._$committedValue = value;
    }
    _commitTemplateResult(result) {
        var _a;
        // This property needs to remain unminified.
        const { values, ['_$litType$']: type } = result;
        // If $litType$ is a number, result is a plain TemplateResult and we get
        // the template from the template cache. If not, result is a
        // CompiledTemplateResult and _$litType$ is a CompiledTemplate and we need
        // to create the <template> element the first time we see it.
        const template = typeof type === 'number'
            ? this._$getTemplate(result)
            : (type.el === undefined &&
                (type.el = Template.createElement(type.h, this.options)),
                type);
        if (((_a = this._$committedValue) === null || _a === void 0 ? void 0 : _a._$template) === template) {
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template updating',
                template,
                instance: this._$committedValue,
                parts: this._$committedValue._parts,
                options: this.options,
                values,
            });
            this._$committedValue._update(values);
        }
        else {
            const instance = new TemplateInstance(template, this);
            const fragment = instance._clone(this.options);
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template instantiated',
                template,
                instance,
                parts: instance._parts,
                options: this.options,
                fragment,
                values,
            });
            instance._update(values);
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template instantiated and updated',
                template,
                instance,
                parts: instance._parts,
                options: this.options,
                fragment,
                values,
            });
            this._commitNode(fragment);
            this._$committedValue = instance;
        }
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @internal */
    _$getTemplate(result) {
        let template = templateCache.get(result.strings);
        if (template === undefined) {
            templateCache.set(result.strings, (template = new Template(result)));
        }
        return template;
    }
    _commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If value is an array, then the previous render was of an
        // iterable and value will contain the ChildParts from the previous
        // render. If value is not an array, clear this part and make a new
        // array for ChildParts.
        if (!isArray(this._$committedValue)) {
            this._$committedValue = [];
            this._$clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this._$committedValue;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            if (partIndex === itemParts.length) {
                // If no existing part, create a new one
                // TODO (justinfagnani): test perf impact of always creating two parts
                // instead of sharing parts between nodes
                // https://github.com/lit/lit/issues/1266
                itemParts.push((itemPart = new ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options)));
            }
            else {
                // Reuse an existing part
                itemPart = itemParts[partIndex];
            }
            itemPart._$setValue(item);
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // itemParts always have end nodes
            this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
        }
    }
    /**
     * Removes the nodes contained within this Part from the DOM.
     *
     * @param start Start node to clear from, for clearing a subset of the part's
     *     DOM (used when truncating iterables)
     * @param from  When `start` is specified, the index within the iterable from
     *     which ChildParts are being removed, used for disconnecting directives in
     *     those Parts.
     *
     * @internal
     */
    _$clear(start = wrap(this._$startNode).nextSibling, from) {
        var _a;
        (_a = this._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(this, false, true, from);
        while (start && start !== this._$endNode) {
            const n = wrap(start).nextSibling;
            wrap(start).remove();
            start = n;
        }
    }
    /**
     * Implementation of RootPart's `isConnected`. Note that this metod
     * should only be called on `RootPart`s (the `ChildPart` returned from a
     * top-level `render()` call). It has no effect on non-root ChildParts.
     * @param isConnected Whether to set
     * @internal
     */
    setConnected(isConnected) {
        var _a;
        if (this._$parent === undefined) {
            this.__isConnected = isConnected;
            (_a = this._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(this, isConnected);
        }
        else if (DEV_MODE) {
            throw new Error('part.setConnected() may only be called on a ' +
                'RootPart returned from render().');
        }
    }
}
class AttributePart {
    constructor(element, name, strings, parent, options) {
        this.type = ATTRIBUTE_PART;
        /** @internal */
        this._$committedValue = nothing;
        /** @internal */
        this._$disconnectableChildren = undefined;
        this.element = element;
        this.name = name;
        this._$parent = parent;
        this.options = options;
        if (strings.length > 2 || strings[0] !== '' || strings[1] !== '') {
            this._$committedValue = new Array(strings.length - 1).fill(new String());
            this.strings = strings;
        }
        else {
            this._$committedValue = nothing;
        }
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            this._sanitizer = undefined;
        }
    }
    get tagName() {
        return this.element.tagName;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    /**
     * Sets the value of this part by resolving the value from possibly multiple
     * values and static strings and committing it to the DOM.
     * If this part is single-valued, `this._strings` will be undefined, and the
     * method will be called with a single value argument. If this part is
     * multi-value, `this._strings` will be defined, and the method is called
     * with the value array of the part's owning TemplateInstance, and an offset
     * into the value array from which the values should be read.
     * This method is overloaded this way to eliminate short-lived array slices
     * of the template instance values, and allow a fast-path for single-valued
     * parts.
     *
     * @param value The part value, or an array of values for multi-valued parts
     * @param valueIndex the index to start reading values from. `undefined` for
     *   single-valued parts
     * @param noCommit causes the part to not commit its value to the DOM. Used
     *   in hydration to prime attribute parts with their first-rendered value,
     *   but not set the attribute, and in SSR to no-op the DOM operation and
     *   capture the value for serialization.
     *
     * @internal
     */
    _$setValue(value, directiveParent = this, valueIndex, noCommit) {
        const strings = this.strings;
        // Whether any of the values has changed, for dirty-checking
        let change = false;
        if (strings === undefined) {
            // Single-value binding case
            value = resolveDirective(this, value, directiveParent, 0);
            change =
                !isPrimitive(value) ||
                    (value !== this._$committedValue && value !== noChange);
            if (change) {
                this._$committedValue = value;
            }
        }
        else {
            // Interpolation case
            const values = value;
            value = strings[0];
            let i, v;
            for (i = 0; i < strings.length - 1; i++) {
                v = resolveDirective(this, values[valueIndex + i], directiveParent, i);
                if (v === noChange) {
                    // If the user-provided value is `noChange`, use the previous value
                    v = this._$committedValue[i];
                }
                change || (change = !isPrimitive(v) || v !== this._$committedValue[i]);
                if (v === nothing) {
                    value = nothing;
                }
                else if (value !== nothing) {
                    value += (v !== null && v !== void 0 ? v : '') + strings[i + 1];
                }
                // We always record each value, even if one is `nothing`, for future
                // change detection.
                this._$committedValue[i] = v;
            }
        }
        if (change && !noCommit) {
            this._commitValue(value);
        }
    }
    /** @internal */
    _commitValue(value) {
        if (value === nothing) {
            wrap(this.element).removeAttribute(this.name);
        }
        else {
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                if (this._sanitizer === undefined) {
                    this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'attribute');
                }
                value = this._sanitizer(value !== null && value !== void 0 ? value : '');
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit attribute',
                element: this.element,
                name: this.name,
                value,
                options: this.options,
            });
            wrap(this.element).setAttribute(this.name, (value !== null && value !== void 0 ? value : ''));
        }
    }
}
class PropertyPart extends AttributePart {
    constructor() {
        super(...arguments);
        this.type = PROPERTY_PART;
    }
    /** @internal */
    _commitValue(value) {
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            if (this._sanitizer === undefined) {
                this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'property');
            }
            value = this._sanitizer(value);
        }
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit property',
            element: this.element,
            name: this.name,
            value,
            options: this.options,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.element[this.name] = value === nothing ? undefined : value;
    }
}
// Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.
const emptyStringForBooleanAttribute = trustedTypes
    ? trustedTypes.emptyScript
    : '';
class BooleanAttributePart extends AttributePart {
    constructor() {
        super(...arguments);
        this.type = BOOLEAN_ATTRIBUTE_PART;
    }
    /** @internal */
    _commitValue(value) {
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit boolean attribute',
            element: this.element,
            name: this.name,
            value: !!(value && value !== nothing),
            options: this.options,
        });
        if (value && value !== nothing) {
            wrap(this.element).setAttribute(this.name, emptyStringForBooleanAttribute);
        }
        else {
            wrap(this.element).removeAttribute(this.name);
        }
    }
}
class EventPart extends AttributePart {
    constructor(element, name, strings, parent, options) {
        super(element, name, strings, parent, options);
        this.type = EVENT_PART;
        if (DEV_MODE && this.strings !== undefined) {
            throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with ` +
                'invalid content. Event listeners in templates must have exactly ' +
                'one expression and no surrounding text.');
        }
    }
    // EventPart does not use the base _$setValue/_resolveValue implementation
    // since the dirty checking is more complex
    /** @internal */
    _$setValue(newListener, directiveParent = this) {
        var _a;
        newListener =
            (_a = resolveDirective(this, newListener, directiveParent, 0)) !== null && _a !== void 0 ? _a : nothing;
        if (newListener === noChange) {
            return;
        }
        const oldListener = this._$committedValue;
        // If the new value is nothing or any options change we have to remove the
        // part as a listener.
        const shouldRemoveListener = (newListener === nothing && oldListener !== nothing) ||
            newListener.capture !==
                oldListener.capture ||
            newListener.once !==
                oldListener.once ||
            newListener.passive !==
                oldListener.passive;
        // If the new value is not nothing and we removed the listener, we have
        // to add the part as a listener.
        const shouldAddListener = newListener !== nothing &&
            (oldListener === nothing || shouldRemoveListener);
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit event listener',
            element: this.element,
            name: this.name,
            value: newListener,
            options: this.options,
            removeListener: shouldRemoveListener,
            addListener: shouldAddListener,
            oldListener,
        });
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.name, this, oldListener);
        }
        if (shouldAddListener) {
            // Beware: IE11 and Chrome 41 don't like using the listener as the
            // options object. Figure out how to deal w/ this in IE11 - maybe
            // patch addEventListener?
            this.element.addEventListener(this.name, this, newListener);
        }
        this._$committedValue = newListener;
    }
    handleEvent(event) {
        var _a, _b;
        if (typeof this._$committedValue === 'function') {
            this._$committedValue.call((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.host) !== null && _b !== void 0 ? _b : this.element, event);
        }
        else {
            this._$committedValue.handleEvent(event);
        }
    }
}
class ElementPart {
    constructor(element, parent, options) {
        this.element = element;
        this.type = ELEMENT_PART;
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$parent = parent;
        this.options = options;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    _$setValue(value) {
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit to element binding',
            element: this.element,
            value,
            options: this.options,
        });
        resolveDirective(this, value);
    }
}
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _$LH object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-element, which re-exports all of lit-html.
 *
 * @private
 */
const _$LH = {
    // Used in lit-ssr
    _boundAttributeSuffix: boundAttributeSuffix,
    _marker: marker,
    _markerMatch: markerMatch,
    _HTML_RESULT: HTML_RESULT,
    _getTemplateHtml: getTemplateHtml,
    // Used in hydrate
    _TemplateInstance: TemplateInstance,
    _isIterable: isIterable,
    _resolveDirective: resolveDirective,
    // Used in tests and private-ssr-support
    _ChildPart: ChildPart,
    _AttributePart: AttributePart,
    _BooleanAttributePart: BooleanAttributePart,
    _EventPart: EventPart,
    _PropertyPart: PropertyPart,
    _ElementPart: ElementPart,
};
// Apply polyfills if available
const polyfillSupport = DEV_MODE
    ? window.litHtmlPolyfillSupportDevMode
    : window.litHtmlPolyfillSupport;
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport(Template, ChildPart);
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
((_d = globalThis.litHtmlVersions) !== null && _d !== void 0 ? _d : (globalThis.litHtmlVersions = [])).push('2.2.1');
if (DEV_MODE && globalThis.litHtmlVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. ` +
        `Loading multiple versions is not recommended.`);
}
//# sourceMappingURL=lit-html.js.map

/***/ }),

/***/ "./node_modules/lit/directives/class-map.js":
/*!**************************************************!*\
  !*** ./node_modules/lit/directives/class-map.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classMap": () => (/* reexport safe */ lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_0__.classMap)
/* harmony export */ });
/* harmony import */ var lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/class-map.js */ "./node_modules/lit-html/development/directives/class-map.js");

//# sourceMappingURL=class-map.js.map


/***/ }),

/***/ "./node_modules/lit/directives/if-defined.js":
/*!***************************************************!*\
  !*** ./node_modules/lit/directives/if-defined.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ifDefined": () => (/* reexport safe */ lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_0__.ifDefined)
/* harmony export */ });
/* harmony import */ var lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/if-defined.js */ "./node_modules/lit-html/development/directives/if-defined.js");

//# sourceMappingURL=if-defined.js.map


/***/ }),

/***/ "./node_modules/lit/directives/unsafe-html.js":
/*!****************************************************!*\
  !*** ./node_modules/lit/directives/unsafe-html.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsafeHTMLDirective": () => (/* reexport safe */ lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.UnsafeHTMLDirective),
/* harmony export */   "unsafeHTML": () => (/* reexport safe */ lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.unsafeHTML)
/* harmony export */ });
/* harmony import */ var lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/unsafe-html.js */ "./node_modules/lit-html/development/directives/unsafe-html.js");

//# sourceMappingURL=unsafe-html.js.map


/***/ }),

/***/ "./node_modules/lit/index.js":
/*!***********************************!*\
  !*** ./node_modules/lit/index.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.CSSResult),
/* harmony export */   "INTERNAL": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.INTERNAL),
/* harmony export */   "LitElement": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.LitElement),
/* harmony export */   "ReactiveElement": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.ReactiveElement),
/* harmony export */   "UpdatingElement": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.UpdatingElement),
/* harmony export */   "_$LE": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LE),
/* harmony export */   "_$LH": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LH),
/* harmony export */   "adoptStyles": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.adoptStyles),
/* harmony export */   "css": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.css),
/* harmony export */   "defaultConverter": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.defaultConverter),
/* harmony export */   "getCompatibleStyle": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.getCompatibleStyle),
/* harmony export */   "html": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.html),
/* harmony export */   "noChange": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.noChange),
/* harmony export */   "notEqual": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.notEqual),
/* harmony export */   "nothing": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.nothing),
/* harmony export */   "render": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.render),
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.supportsAdoptingStyleSheets),
/* harmony export */   "svg": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.svg),
/* harmony export */   "unsafeCSS": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element/lit-element.js */ "./node_modules/lit-element/development/lit-element.js");

//# sourceMappingURL=index.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/ibp-components": 0,
/******/ 			"css/styles": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_gnatih_ibp_design"] = self["webpackChunk_gnatih_ibp_design"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/styles"], () => (__webpack_require__("./src/scripts/components/ibp-header.js")))
/******/ 	__webpack_require__.O(undefined, ["css/styles"], () => (__webpack_require__("./src/scripts/components/ibp-footer.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/styles"], () => (__webpack_require__("./src/scss/styles.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;