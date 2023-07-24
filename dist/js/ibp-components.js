"use strict";
(self["webpackChunk_gnatih_ibp_design"] = self["webpackChunk_gnatih_ibp_design"] || []).push([["/js/ibp-components"],{

/***/ "./src/scripts/api.js":
/*!****************************!*\
  !*** ./src/scripts/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPrimaryMenu": () => (/* binding */ createPrimaryMenu),
/* harmony export */   "createSecondaryMenu": () => (/* binding */ createSecondaryMenu),
/* harmony export */   "fetchData": () => (/* binding */ fetchData),
/* harmony export */   "renderFullMenu": () => (/* binding */ renderFullMenu),
/* harmony export */   "renderPrimaryMenu": () => (/* binding */ renderPrimaryMenu),
/* harmony export */   "renderSecondaryMenu": () => (/* binding */ renderSecondaryMenu)
/* harmony export */ });
/* harmony import */ var lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit/directives/unsafe-html.js */ "./node_modules/lit/directives/unsafe-html.js");
/* harmony import */ var _menu_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-data */ "./src/scripts/menu-data.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function fetchData(_x) {
  return _fetchData.apply(this, arguments);
}
function _fetchData() {
  _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(path) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _menu_data__WEBPACK_IMPORTED_MODULE_1__.menu);
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _fetchData.apply(this, arguments);
}
function createPrimaryMenu(menu, active_slug) {
  var href = window.location.href.replace(/\/$/, "");
  var _menu = [];
  var _current = {};
  var _parent = {};
  var has_active = false;
  menu.forEach(function (item) {
    var item_url = item.url.replace(/\/$/, "");
    var parent = {
      title: item.title,
      hero: item.hero,
      url: item.url
    };
    if (item_url == href && href !== "https://internationalbudget.org/events") {
      parent.active = true;
      _parent = parent;
      has_active = true;
    }
    if (item.children) {
      item.children.forEach(function (item_child) {
        var child_url = item_child.url.replace(/\/$/, "");
        var child = {
          title: item_child.title,
          url: item_child.url,
          hero: item_child.hero
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
  return (0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.unsafeHTML)(str);
}
function renderSecondaryMenu(menu) {
  console.log(menu);
  if (menu.children && menu.children.length > 1) {
    var str = "<div class=\"secondary-nav\"><hr><h6>".concat(menu.title, "</h6><ul>");
    menu.children.forEach(function (item) {
      var link_class = "";
      if (item.active) link_class += "active";
      if (item.url.match(/(#calculator|#download)/)) link_class += " hash-link";
      str += "<li><a href=\"".concat(item.url, "\" class=\"").concat(link_class, "\">").concat(item.title, "</a></li>");
    });
    str += "</ul></div><div class=\"spacer\"></div>";
    return (0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.unsafeHTML)(str);
  }
}
function renderFullMenu(menu) {
  var str = "";

  // let menu_items = [menu.slice(0, 2), menu.slice(2, menu.length - 4), menu.slice(menu.length - 4, menu.length)]; //pre-launch
  var menu_items = [menu.slice(0, 3), menu.slice(3, menu.length - 1), menu.slice(menu.length - 1)];
  str += "<div>".concat(createLinkList(menu_items[0]), "</div>");
  str += "<div>".concat(createLinkList(menu_items[1]), "</div>");
  str += "<div>\n            ".concat(createLinkList(menu_items[2]), "\n            <div class=\"sub\"> \n            <h6><a href=\"/press\">Press</a></h6>\n            <h6><a href=\"/events\">Events</a></h6>\n            <h6><a href=\"/insights\">Insights</a></h6>\n            </div>\n            <div class=\"action-buttons d-md-none\"><a href=\"https://internationalbudget.org/take-action/\" class=\"btn-action\">Take Action</a><a href=\"https://internationalbudget.org/support-us\" class=\"btn-donate\">Support Us</a></div>\n            <social-links></social-links>\n          </div>");
  return (0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.unsafeHTML)(str);
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
var _templateObject;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






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
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral([" <div class=\"footer-banner\">\n        <div class=\"grid-12-col\">\n          <div class=\"footer-slogan\">We make <span>budgets</span><br />work for <span>people</span></div>\n          <div class=\"footer-newsletter\"><newsletter-form show-heading=\"true\" class=\"signup-form\"></newsletter-form></div>\n        </div>\n      </div>\n      <footer>\n        <div class=\"grid-12-col\">\n          <div class=\"left\">\n            <h6>Quick Links</h6>\n\n            <ul class=\"footer-nav\">\n              <li><a href=\"https://internationalbudget.org/campaign-to-open-budgets/\">Join Our Call To Action</a></li>\n              <li><a href=\"https://internationalbudget.org/our-work/\">What We Do</a></li>\n              <li><a href=\"https://internationalbudget.org/library/publications/\">Publications</a></li>\n              <li><a href=\"https://internationalbudget.org/about-us/\">About</a></li>\n            </ul>\n          </div>\n          <div class=\"main\">\n            <ibp-logo flat width=\"280\"></ibp-logo>\n            <social-links color=\"var(--ibp-accent-alt)\"></social-links>\n          </div>\n          <div class=\"right\">\n            <h6>&nbsp;</h6>\n            <ul class=\"footer-nav\">\n              <li><a href=\"https://internationalbudget.org/contact-us/\">Contact</a></li>\n              <li><a href=\"https://internationalbudget.org/ethical-violations/\">Whistleblower Policy</a></li>\n              <li><a href=\"https://www.internationalbudget.org/library/copyright/\">Copyright</a></li>\n              <li><a href=\"https://us12.campaign-archive.com/home/?u=de5755d359416097d437841c1&id=5799ba65dd\">Newsletter</a></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"copyright\">\xA9 ", " International Budget Partnership. All rights reserved. \u2022 Made with Love by creatives with a conscience</div>\n      </footer>"])), new Date().getFullYear());
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this = this;
      var nb = this.shadowRoot.querySelector(".footer-banner");
      var observer = new IntersectionObserver(function (entries) {
        _this.shadowRoot.querySelector(".footer-banner").classList.toggle("active", entries[0].isIntersecting);
      }, {
        threshold: [0.4]
      });
      observer.observe(nb);
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
/* harmony import */ var _partials_ibp_logo_twentyfive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./partials/ibp-logo-twentyfive */ "./src/scripts/components/partials/ibp-logo-twentyfive.js");
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
/* harmony import */ var _menu_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../menu-data */ "./src/scripts/menu-data.js");
var _templateObject, _templateObject2, _templateObject3;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }











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
    (0,_api__WEBPACK_IMPORTED_MODULE_4__.fetchData)().then(function (res) {
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
    value: function firstUpdated() {
      var hash_links = this.shadowRoot.querySelectorAll(".hash-link");
      var _iterator = _createForOfIteratorHelper(hash_links),
        _step;
      try {
        var _loop = function _loop() {
          var link = _step.value;
          link.addEventListener("click", function (e) {
            e.preventDefault();
            var href = link.getAttribute("href");
            window.location = href;
            var urlParser = document.createElement("a");
            urlParser.href = href;
            if (urlParser.origin + urlParser.pathname === location.origin + location.pathname) {
              window.location.reload(true);
            }
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
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <pre-header></pre-header>\n      <div class=\"main-nav-wrapper\">\n        <div class=\"main-nav grid-12-col container\">\n          <a class=\"logo\" href=\"/\"><ibp-logo-twentyfive></ibp-logo-twentyfive></a>\n          <ul class=\"nav\">\n            ", "\n            <li>\n              <a href=\"#\" class=\"search-btn\" @click=", "><i class=\"ibp-icons icon-menu\"></i></a>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      ", "\n\n      <menu-overlay @hideMenuOverlay=", " ?visible=\"", "\" .menu=\"", "\"></menu-overlay>\n    "])), (0,_api__WEBPACK_IMPORTED_MODULE_4__.renderPrimaryMenu)(this.primary_menu), this.showMenuOverlay, !this.mini ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            <div class=\"", "\" style=\"background-image: url(", ")\">\n              <div class=\"nav-content-wrapper\">\n                <div class=\"container nav-content grid-12-col\">\n                  ", "\n                  <div class=\"nav-content--header\">\n                    <slot name=\"pre-nav\"></slot>\n                    <slot name=\"nav-title\"><h1 class=\"page-title\">", "</h1></slot>\n                    <slot name=\"nav-description\"><div class=\"page-description\">", "</div></slot>\n                  </div>\n                  <slot name=\"infobox\"></slot>\n                </div>\n              </div>\n            </div>\n          "])), (0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_9__.classMap)({
        banner: !this.mini,
        "has-image": this.background
      }), this.background, this._getSidebar(), this.current_menu.title, (0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_2__.unsafeHTML)(this.current_menu.description)) : null, this._hideMenuOverlay, this.show_menu, this.primary_menu);
    }
  }]);
  return IbpHeader;
}(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);
_defineProperty(IbpHeader, "styles", [_styles_base_styles__WEBPACK_IMPORTED_MODULE_3__.BaseStyles, _styles_header_styles__WEBPACK_IMPORTED_MODULE_1__.HeaderStyles]);
// static get properties() {
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedStory": () => (/* binding */ FeaturedStory)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _styles_base_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/base-styles */ "./src/scripts/components/styles/base-styles.js");
/* harmony import */ var _styles_featured_story_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/featured-story-styles */ "./src/scripts/components/styles/featured-story-styles.js");
var _templateObject;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var FeaturedStory = /*#__PURE__*/function (_LitElement) {
  _inherits(FeaturedStory, _LitElement);
  var _super = _createSuper(FeaturedStory);
  function FeaturedStory() {
    var _this;
    _classCallCheck(this, FeaturedStory);
    _this = _super.call(this);
    _this.featured = {
      featured_image: "",
      featured_link: "",
      featured_type: "",
      featured_title: "",
      featured_button_text: ""
    };
    fetch("https://internationalbudget.org/wp-json/ibp/v1/featured").then(function (res) {
      return res.json();
    }).then(function (data) {
      _this.featured = data;
    });
    return _this;
  }
  _createClass(FeaturedStory, [{
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["<div class=\"story-image\"><img src=\"", "\" style=\"\" /></div>\n      <div class=\"story-content\">\n        <p class=\"featured-type\">", "</p>\n        <h3>", "</h3>\n        <div>\n          <a href=\"", "\" class=\"read-more btn btn-clear\">", " <i class=\"ibp-icons icon-caret-right-circle\"></i></a>\n        </div>\n      </div>"])), this.featured.featured_image, this.featured.featured_type, this.featured.featured_title, this.featured.featured_link, this.featured.featured_button_text);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_styles_base_styles__WEBPACK_IMPORTED_MODULE_1__.BaseStyles, _styles_featured_story_styles__WEBPACK_IMPORTED_MODULE_2__.FeaturedStoryStyles];
    }
  }]);
  return FeaturedStory;
}(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);
_defineProperty(FeaturedStory, "properties", {
  featured: {
    type: Object
  }
});
window.customElements.define("featured-story", FeaturedStory);

/***/ }),

/***/ "./src/scripts/components/partials/ibp-logo-twentyfive.js":
/*!****************************************************************!*\
  !*** ./src/scripts/components/partials/ibp-logo-twentyfive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IbpLogoTwentyfive": () => (/* binding */ IbpLogoTwentyfive)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var IbpLogoTwentyfive = /*#__PURE__*/function (_LitElement) {
  _inherits(IbpLogoTwentyfive, _LitElement);
  var _super = _createSuper(IbpLogoTwentyfive);
  function IbpLogoTwentyfive() {
    _classCallCheck(this, IbpLogoTwentyfive);
    return _super.apply(this, arguments);
  }
  _createClass(IbpLogoTwentyfive, [{
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" viewBox=\"0 0 1333.333 261.333\">\n      <path fill=\"#53c3c9\" d=\"m228.58 221.606 33.047-50.144s62.386 80.205 154.85 27.491c0 0-71.854 117.63-187.897 22.653\" />\n      <path fill=\"#004a8a\" d=\"m235.718 28.51-2.89 111.718c14.22-37.051 39.715-73.105 54.278-92.04-21.31-6.892-38.672-13.947-51.388-19.677\" />\n      <path fill=\"#16adc1\" d=\"M345.169 207.98s38.687-3.182 74.912-20.647c0 0 15.585-70.646-78.088-87.316 0 0 74.485 69.065 3.176 107.963\" />\n      <path fill=\"#0083a9\" d=\"M362.302 142.884s-10.767-44.968-92.067-52.393c0 0-19.053 24.707-25.404 44.107 0 0 42.848-14.017 117.47 8.286\" />\n      <path fill=\"#ea7125\" d=\"M4.782 41.581 37.66 91.467S104.277 2.039 196.267 54.48c0 0-76.038-107.39-191.485-12.9M2.667 248.107s76.1-42.992 192.43-52.735c0 0 11.334 26.706 8.78 63.28 0 0-84.305-32.644-201.21-10.545\" />\n      <path fill=\"#d13d27\" d=\"M9.009 233.953s-13.02-90.227 73.854-118.66c0 0-38.341 58.48-21.145 97.93 0 0-26.355 7.043-52.71 20.73\" />\n      <path fill=\"#ed3326\" d=\"M92.34 115.293s-17.375 32.557-20.534 47.386c0 0 130.18-3.16 130.18-82.136 0 0-45.046 36.33-109.646 34.75\" />\n      <path fill=\"#eebaaa\" d=\"M146.044 48.346s26.53 13.252 10.896 48.472c0 0 28.133-7.109 46.164-27.642 0 0-17.571-20.83-57.06-20.83\" />\n      <path fill=\"#53c3c9\" d=\"M226.453 13.287s76.494 43.214 193.425 53.007c0 0 11.391-26.845 8.823-63.607 0 0-84.739 32.812-202.248 10.6\" />\n      <path fill=\"#16adc1\" d=\"M676.648 171.538a98.647 98.647 0 0 0 27.185 17.369l34.694-86.378-82.082 43.862a99.637 99.637 0 0 0 20.203 25.147\" />\n      <path fill=\"#4a3854\" d=\"M868.658 174.427c0-5.009-.384-10.057-1.149-15.04l-91.66 16.165 80.595 46.535a98.467 98.467 0 0 0 10.709-30.433 99.86 99.86 0 0 0 1.505-17.227\" />\n      <path fill=\"#004a8a\" d=\"M811.457 242.187a99.5 99.5 0 0 0 21.02-24.473l-80.598-46.53 31.837 87.468a98.668 98.668 0 0 0 27.741-16.465\" />\n      <path fill=\"#53c3c9\" d=\"m679.831 124.991 81.889-44.23-91.167-18.756a99.66 99.66 0 0 0-1.575 15.002 99.484 99.484 0 0 0 1.019 17.264 98.399 98.399 0 0 0 9.834 30.72\" />\n      <path fill=\"#0083a9\" d=\"m763.624 227.078-31.838-87.473-31.838 87.473c20.486 6.957 43.187 6.957 63.676 0\" />\n      <path fill=\"#d13d27\" d=\"m871.78 89.63-60.475 70.723 91.814-15.313a98.49 98.49 0 0 0-11.101-30.286 99.398 99.398 0 0 0-20.238-25.123\" />\n      <path fill=\"#ed3326\" d=\"m830.383 36.536-4.381 92.976 63.104-68.394a98.624 98.624 0 0 0-27.326-17.149 98.68 98.68 0 0 0-31.397-7.433\" />\n      <path fill=\"#ea7125\" d=\"m819.669 95.748 1.908-93.06a98.752 98.752 0 0 0-31.823 5.298 98.608 98.608 0 0 0-28.426 15.265l58.34 72.497\" />\n      <path fill=\"#004a8a\" d=\"M931.758 87.745v-49.12h10.45v49.12h-10.45m41.176 0V65.357c0-3.8-1.493-5.427-4.68-5.427-2.783 0-5.565 1.557-6.92 2.781v25.034h-10.246V52.397h9.09l.543 3.528c2.578-2.375 6.445-4.273 11.263-4.273 7.802 0 11.195 3.866 11.195 11.94v24.153h-10.245m30.316.814c-7.398 0-11.263-3.394-11.263-11.465V59.86h-5.293v-7.464h5.293V41.949l10.244-1.356v11.804h9.364v7.464h-9.364v15.807c0 3.122.883 4.748 4.139 4.748 2.035 0 4.477-.813 5.834-1.626l1.425 7.26c-1.764 1.153-5.902 2.509-10.38 2.509m12.61-18.387c0-12.753 7.802-18.52 17.3-18.52 10.719 0 15.197 6.511 15.197 16.35 0 1.154-.068 3.393-.204 4.613h-21.507c.204 5.835 2.647 8.007 7.124 8.007 3.664 0 5.089-2.038 5.768-5.02l8.615 2.102c-1.289 6.581-6.58 10.855-14.994 10.855-13.094 0-17.3-8.82-17.3-18.387zm16.758-11.125c-2.919 0-5.768 1.898-5.836 7.056h10.99c0-5.089-1.832-7.056-5.154-7.056m32.147 5.834v22.864h-10.245V52.397h8.753l.745 5.565c2.375-3.462 5.7-6.31 11.127-6.31.544 0 1.154 0 1.764.066v9.975c-4.613-.407-9.159.813-12.144 3.188m38.255 22.864V65.357c0-3.8-1.492-5.427-4.681-5.427-2.783 0-5.564 1.557-6.92 2.781v25.034h-10.245V52.397h9.092l.541 3.528c2.579-2.375 6.447-4.273 11.262-4.273 7.803 0 11.196 3.866 11.196 11.94v24.153h-10.245m48.566-6.105c.609 0 1.22-.136 2.102-.41l.272 5.903c-1.357.682-4.342 1.359-6.513 1.359-4.072 0-6.513-1.153-7.26-4.477-2.238 2.917-5.632 4.544-10.516 4.544-8.82 0-10.515-5.903-10.515-9.43 0-10.786 11.193-12.416 20.285-12.347v-1.29c0-4.005-.543-6.445-5.02-6.445-3.392 0-4.682 1.424-5.36 4.884l-8.684-1.696c1.084-6.648 5.292-10.583 14.926-10.583 9.43 0 14.179 3.663 14.179 12.483v14.79c0 1.9.34 2.715 2.104 2.715zm-22.119-4.206c0 2.034.882 3.865 4.139 3.865 2.443 0 4.817-1.22 5.903-2.307v-6.241h-1.628c-4.886.136-8.414 1.085-8.414 4.683m40.56 11.125c-7.395 0-11.262-3.394-11.262-11.465V59.86h-5.292v-7.464h5.292V41.949l10.244-1.356v11.804h9.364v7.464h-9.364v15.807c0 3.122.883 4.748 4.14 4.748 2.035 0 4.477-.813 5.835-1.626l1.425 7.26c-1.764 1.153-5.903 2.509-10.381 2.509m20.14-40.775c-3.935 0-6.174-2.306-6.174-6.242 0-3.934 2.239-6.174 6.175-6.174 3.867 0 6.174 2.24 6.174 6.174 0 3.936-2.307 6.242-6.174 6.242zm-5.155 39.961V52.397h10.245v35.348h-10.245m16.413-17.505c0-11.329 5.902-18.588 18.182-18.588s17.029 7.395 17.029 17.842c0 11.534-5.292 19.065-17.978 19.065-12.824 0-17.233-7.735-17.233-18.319zm24.559-.406c0-7.735-2.103-10.45-6.65-10.45-4.612 0-7.19 2.92-7.19 10.586 0 7.87 1.968 10.989 6.988 10.989 4.477 0 6.852-2.848 6.852-11.125m38.66 17.911V65.357c0-3.8-1.493-5.427-4.68-5.427-2.783 0-5.565 1.557-6.922 2.781v25.034h-10.244V52.397h9.09l.543 3.528c2.579-2.375 6.446-4.273 11.263-4.273 7.802 0 11.195 3.866 11.195 11.94v24.153h-10.245m48.563-6.105c.61 0 1.223-.136 2.104-.41l.27 5.903c-1.357.682-4.34 1.359-6.512 1.359-4.071 0-6.514-1.153-7.259-4.477-2.238 2.917-5.632 4.544-10.516 4.544-8.82 0-10.517-5.903-10.517-9.43 0-10.786 11.195-12.416 20.286-12.347v-1.29c0-4.005-.542-6.445-5.02-6.445-3.391 0-4.68 1.424-5.36 4.884L1282 62.235c1.084-6.648 5.29-10.583 14.925-10.583 9.43 0 14.18 3.663 14.18 12.483v14.79c0 1.9.338 2.715 2.102 2.715zm-22.117-4.206c0 2.034.882 3.865 4.139 3.865 2.443 0 4.817-1.22 5.901-2.307v-6.241h-1.626c-4.887.136-8.414 1.085-8.414 4.683m29.298 10.311V36.523h10.245v51.222h-10.245\" />\n      <path fill=\"#ea7125\" d=\"M931.758 103.398h19.472c11.603 0 14.858 5.292 14.858 12.008 0 6.581-4.341 10.11-9.295 11.466v.136c7.803.95 11.399 5.225 11.399 12.008 0 10.043-7.87 13.503-18.521 13.503h-17.913zm24.086 13.705c0-5.292-3.528-5.632-8.209-5.632h-5.428v12.213h3.867c4.885 0 9.77-.884 9.77-6.58zm1.221 20.964c0-5.497-3.8-6.446-8.48-6.446h-6.378v12.824h5.36c5.699 0 9.498-1.018 9.498-6.378m26.853-20.898v22.323c0 3.799 1.221 5.496 4.477 5.496 2.648 0 5.361-1.561 6.719-2.781v-25.038h10.244v35.35h-8.82l-.747-3.8c-2.51 2.85-6.444 4.546-11.26 4.546-7.262 0-10.857-3.934-10.857-11.74V117.17h10.244m52.907 35.35-.61-3.46-.205-.07c-2.443 2.715-5.765 4.343-10.446 4.343-8.279 0-13.91-5.087-13.91-17.776 0-14.18 7.6-19.131 14.927-19.131 3.935 0 6.716.88 8.954 2.984v-18.113h9.839v51.223Zm-7.328-27.952c-5.156 0-7.124 4.544-7.124 10.652 0 6.306 1.968 10.04 6.785 10.04 2.17 0 4.41-1.019 6.039-2.51v-16.215c-1.358-1.018-3.393-1.967-5.7-1.967m47.684-5.973c1.22-2.645 3.188-5.36 6.513-5.36.882 0 1.832.205 2.85.612v6.716c-2.104-.201-3.868-.065-5.836.543 2.036 2.307 2.918 5.089 2.918 7.94 0 7.936-6.445 12.686-15.537 12.686-2.374 0-3.934-.206-5.902-.748-.61.612-1.29 1.29-1.29 2.173 0 1.018.611 1.696 3.19 1.832l10.04.61c7.531.475 11.874 3.054 11.874 10.178 0 8.683-8.075 12.007-18.456 12.007-12.958 0-17.027-3.324-17.027-8.209 0-3.325 2.51-5.63 6.377-6.378v-.27c-3.46-1.02-5.157-3.054-5.157-5.97 0-3.53 2.172-5.497 5.497-7.87-3.19-1.834-5.157-5.091-5.157-9.569 0-7.53 5.632-13.092 15.74-13.092 3.867 0 7.056.609 9.363 2.169zm-5.496 36.232-9.837-.612c-1.29.95-2.104 2.103-2.104 3.393 0 2.782 3.868 3.595 8.617 3.595 4.546 0 7.665-.678 7.665-3.595 0-1.358-.677-2.58-4.34-2.78zm-3.46-31.21c-3.664 0-6.445 1.56-6.445 5.36 0 3.528 1.968 5.425 6.31 5.425 3.662 0 6.174-1.966 6.174-5.426 0-3.664-2.308-5.36-6.039-5.36m20.412 11.329c0-12.752 7.802-18.52 17.3-18.52 10.72 0 15.198 6.512 15.198 16.35 0 1.155-.068 3.394-.203 4.614h-21.507c.202 5.834 2.645 8.007 7.123 8.007 3.664 0 5.09-2.038 5.767-5.02l8.617 2.102c-1.29 6.582-6.581 10.855-14.994 10.855-13.095 0-17.301-8.82-17.301-18.388zm16.758-11.125c-2.919 0-5.768 1.899-5.834 7.057h10.99c0-5.089-1.832-7.057-5.156-7.057m36.422 29.513c-7.396 0-11.263-3.394-11.263-11.465v-17.233h-5.293v-7.465h5.293v-10.447l10.244-1.356v11.803h9.364v7.465h-9.364v15.807c0 3.121.883 4.748 4.139 4.748 2.036 0 4.477-.813 5.836-1.627l1.424 7.26c-1.764 1.154-5.903 2.51-10.38 2.51\" />\n      <path fill=\"#004a8a\" d=\"M931.758 217.29V168.17h18.59c12.552 0 16.35 7.53 16.35 15.332 0 11.806-6.445 17.912-19.199 17.912h-5.36v15.875Zm24.22-33.04c0-6.31-3.73-7.665-8.819-7.665h-5.02V193h4.207c5.358 0 9.633-1.558 9.633-8.752m45.104 26.936c.61 0 1.223-.135 2.104-.41l.27 5.904c-1.357.68-4.342 1.36-6.513 1.36-4.07 0-6.513-1.155-7.258-4.48-2.239 2.918-5.632 4.546-10.517 4.546-8.82 0-10.516-5.904-10.516-9.43 0-10.787 11.195-12.416 20.285-12.348v-1.29c0-4.004-.543-6.445-5.02-6.445-3.392 0-4.681 1.426-5.358 4.885l-8.686-1.697c1.086-6.647 5.292-10.582 14.927-10.582 9.43 0 14.18 3.663 14.18 12.484v14.788c0 1.9.338 2.715 2.102 2.715zm-22.117-4.205c0 2.033.882 3.865 4.139 3.865 2.442 0 4.816-1.22 5.9-2.308v-6.24h-1.626c-4.886.135-8.413 1.084-8.413 4.683m39.271-12.553v22.863h-10.244v-35.348h8.752l.747 5.566c2.375-3.463 5.7-6.31 11.126-6.31.544 0 1.155 0 1.764.066v9.973c-4.613-.406-9.158.815-12.145 3.19m33.643 23.678c-7.395 0-11.262-3.394-11.262-11.466v-17.233h-5.292v-7.464h5.292v-10.447l10.244-1.356v11.803h9.363v7.464h-9.363v15.807c0 3.123.882 4.75 4.138 4.75 2.036 0 4.479-.814 5.836-1.627l1.425 7.258c-1.764 1.155-5.903 2.51-10.38 2.51m37.576-.814v-22.387c0-3.8-1.492-5.428-4.681-5.428-2.783 0-5.564 1.558-6.922 2.781v25.034h-10.243v-35.348h9.091l.543 3.529c2.577-2.375 6.445-4.273 11.261-4.273 7.804 0 11.196 3.866 11.196 11.938v24.154h-10.245m17.086-17.573c0-12.751 7.802-18.52 17.3-18.52 10.72 0 15.198 6.512 15.198 16.351 0 1.153-.068 3.392-.204 4.613h-21.506c.202 5.833 2.645 8.007 7.122 8.007 3.664 0 5.09-2.038 5.768-5.02l8.616 2.102c-1.29 6.582-6.581 10.855-14.994 10.855-13.093 0-17.3-8.82-17.3-18.388zm16.758-11.125c-2.918 0-5.768 1.899-5.836 7.057h10.992c0-5.089-1.833-7.057-5.156-7.057m32.149 5.835v22.863h-10.245v-35.348h8.751l.746 5.566c2.374-3.463 5.7-6.31 11.126-6.31.544 0 1.155 0 1.764.066v9.973c-4.613-.406-9.158.815-12.142 3.19m13.627 14.315 8.276-2.85c.816 2.784 2.242 5.429 7.057 5.429 3.46 0 5.36-1.153 5.36-3.461 0-2.712-2.781-3.46-6.785-4.207-5.632-1.085-12.754-2.375-12.754-10.99 0-7.735 6.784-11.465 14.722-11.465 8.007 0 12.416 3.525 14.112 9.497l-8.21 2.441c-.814-3.052-2.306-5.156-6.038-5.156-3.392 0-4.816 1.426-4.816 3.393 0 2.781 2.85 3.324 7.259 4.138 5.836 1.088 12.415 2.443 12.415 10.72 0 8.007-6.851 11.874-15.603 11.874-9.025 0-13.841-3.46-14.995-9.363m58.2 8.548v-22.322c0-3.798-1.493-5.426-4.68-5.426-2.783 0-5.565 1.561-6.922 2.78v24.968h-10.244v-51.223h10.176V185.2c2.512-1.967 5.904-4.001 10.925-4.001 7.597 0 10.99 3.866 10.99 11.938v24.154h-10.245m23.056-39.962c-3.936 0-6.175-2.305-6.175-6.24s2.239-6.174 6.175-6.174c3.866 0 6.173 2.239 6.173 6.174 0 3.935-2.307 6.24-6.173 6.24zm-5.156 39.962v-35.348h10.245v35.348h-10.245m26.791-35.348.61 3.598c3.054-3.056 7.123-4.342 11.06-4.342 7.531 0 13.296 4.613 13.296 17.64 0 14.042-6.58 19.267-14.382 19.267-4.341 0-7.124-1.356-9.364-3.394v16.963h-9.904v-49.732zm7.599 27.954c4.75 0 6.648-3.935 6.648-10.788 0-7.123-2.103-9.77-6.24-9.77-2.376 0-5.022 1.423-6.582 2.714v15.469c1.018.95 3.663 2.375 6.174 2.375\" />\n      <path fill=\"#eebaaa\" d=\"M714.691 30.803a98.495 98.495 0 0 0-11.605 30.1l91.546 16.836L735.35 6.02a99.329 99.329 0 0 0-20.659 24.782\" />\n      <path fill=\"#004a8a\" d=\"M474.255 217.266v-19.158l16.562-31.651H479.87l-10.737 21.755h-.352l-11.158-21.755h-11.86l17.614 31.791v19.018Zm30.702.843c8.702 0 14.177-4.422 15.51-11.23l-8.913-2.175c-.701 3.088-2.176 5.194-5.965 5.194-4.632 0-7.159-2.246-7.37-8.282h22.248c.14-1.263.21-3.579.21-4.772 0-10.176-4.631-16.913-15.72-16.913-9.825 0-17.896 5.965-17.896 19.16 0 9.894 4.352 19.018 17.896 19.018zm4.773-23.23h-11.37c.07-5.334 3.018-7.299 6.035-7.299 3.439 0 5.335 2.036 5.335 7.298zm46.795 13.265v-15.3c0-9.124-4.912-12.913-14.668-12.913-9.965 0-14.317 4.07-15.44 10.947l8.984 1.755c.702-3.578 2.035-5.053 5.544-5.053 4.632 0 5.193 2.527 5.193 6.668v1.334c-9.403-.071-20.983 1.612-20.983 12.772 0 3.65 1.754 9.755 10.877 9.755 5.053 0 8.562-1.684 10.878-4.703.772 3.439 3.299 4.632 7.51 4.632 2.245 0 5.333-.701 6.737-1.402l-.282-6.107c-.912.281-1.544.421-2.174.421-1.826 0-2.176-.842-2.176-2.806zm-12.001-6.387h1.685v6.456c-1.124 1.123-3.58 2.386-6.107 2.386-3.367 0-4.28-1.894-4.28-4 0-3.72 3.65-4.702 8.702-4.842zm44.375-11.44v-10.315c-.632-.071-1.264-.071-1.826-.071-5.614 0-9.053 2.948-11.509 6.526l-.772-5.754h-9.053v36.563h10.597v-23.65c3.088-2.456 7.79-3.72 12.563-3.298zm18.07 27.792c9.053 0 16.14-4 16.14-12.281 0-8.563-6.806-9.967-12.842-11.09-4.56-.84-7.509-1.403-7.509-4.28 0-2.035 1.474-3.509 4.983-3.509 3.86 0 5.404 2.175 6.246 5.334l8.49-2.527c-1.753-6.176-6.315-9.825-14.596-9.825-8.21 0-15.23 3.86-15.23 11.86 0 8.913 7.37 10.246 13.195 11.369 4.14.772 7.017 1.544 7.017 4.351 0 2.387-1.964 3.58-5.544 3.58-4.982 0-6.455-2.737-7.298-5.615l-8.562 2.948c1.193 6.105 6.175 9.685 15.51 9.685\" />\n    </svg>"])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      svg {\n        width: 280px;\n      }\n\n      @media screen and (max-width: 576px) {\n        svg {\n          width: 200px;\n        }\n      }\n    "])));
    }
  }]);
  return IbpLogoTwentyfive;
}(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);
window.customElements.define("ibp-logo-twentyfive", IbpLogoTwentyfive);

/***/ }),

/***/ "./src/scripts/components/partials/ibp-logo.js":
/*!*****************************************************!*\
  !*** ./src/scripts/components/partials/ibp-logo.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IbpLogo": () => (/* binding */ IbpLogo)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/directives/if-defined.js */ "./node_modules/lit/directives/if-defined.js");
var _templateObject, _templateObject2;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


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
  }], [{
    key: "styles",
    get: function get() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      @media screen and (max-width: 320px) {\n        svg {\n          width: 80%;\n        }\n      }\n    "])));
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
/* harmony import */ var _search_box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-box */ "./src/scripts/components/partials/search-box.js");
var _templateObject;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }











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
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div class=", ">\n        <div class=\"scroll-container\">\n          <pre-header></pre-header>\n\n          <div class=\"nav-header\">\n            <div class=\"main-nav-wrapper\">\n              <div class=\"container\">\n                <div class=\"main-nav grid-12-col\">\n                  <a class=\"logo\" href=\"/\"><ibp-logo fill=\"#000\"></ibp-logo></a>\n                  <ul class=\"nav\">\n                    <li class=\"search-box\">\n                      <search-box></search-box>\n                    </li>\n                    <li>\n                      <a href=\"#\" class=\"close-btn\" @click=", "><i class=\"ibp-icons icon-close\"></i></a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class=\"container nav-content-wrapper\">\n              <div class=\"nav-content grid-12-col\">\n                <div class=\"full-menu\">", "</div>\n                <div class=\"search-box-mobile\"><search-box></search-box></div>\n                <featured-story class=\"featured-story\"></featured-story>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"nav-footer-wrapper\">\n            <div class=\"container\">\n              <div class=\"nav-footer grid-12-col\">\n                <div class=\"signup-note\">Subscribe to updates about International Budget Partnership&apos;s work around the world</div>\n                <newsletter-form class=\"signup-form\"></newsletter-form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    "])), (0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__.classMap)({
        visible: this.visible,
        overlay: true
      }), this.hideMenuOverlay, (0,_api__WEBPACK_IMPORTED_MODULE_4__.renderFullMenu)(this.menu));
      // return html` <link rel="stylesheet" href="css/icons.css" />
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
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



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
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div>\n        ", "\n        <form class=\"signup-form\" action=\"https://internationalbudget.us12.list-manage.com/subscribe/post\" method=\"POST\">\n          <input type=\"hidden\" name=\"u\" value=\"de5755d359416097d437841c1\" />\n          <input type=\"hidden\" name=\"id\" value=\"5799ba65dd\" />\n          <input type=\"email\" autocapitalize=\"off\" autocorrect=\"off\" name=\"MERGE0\" id=\"MERGE0\" value=\"\" placeholder=\"Email address\" />\n          <input type=\"hidden\" name=\"ht\" value=\"96c90fdc37737e65fac2ec4dfea45fd6b4126bf0:MTY3NDczOTA0Ni4wNzk5\" />\n          <input type=\"hidden\" name=\"mc_signupsource\" value=\"hosted\" />\n          <input type=\"submit\" class=\"formEmailButton\" name=\"submit\" value=\"Signup\" />\n          <i class=\"icon-email\"></i>\n        </form>\n      </div>\n    "])), this.show_heading ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<p>Keep up to date by subscribing to our newsletter.</p>"]))) : "");
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
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



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
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <a href=\"https://internationalbudget.org/take-action/\" class=\"btn btn-action\">Take Action</a>\n      <a href=\"https://internationalbudget.org/support-us/\" class=\"btn btn-donate\">Support Us</a>\n    "])));
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

/***/ "./src/scripts/components/partials/search-box.js":
/*!*******************************************************!*\
  !*** ./src/scripts/components/partials/search-box.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBox": () => (/* binding */ SearchBox)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _styles_search_box_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/search-box-styles */ "./src/scripts/components/styles/search-box-styles.js");
/* harmony import */ var _styles_base_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/base-styles */ "./src/scripts/components/styles/base-styles.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SearchBox = /*#__PURE__*/function (_LitElement) {
  _inherits(SearchBox, _LitElement);
  var _super = _createSuper(SearchBox);
  function SearchBox() {
    _classCallCheck(this, SearchBox);
    return _super.apply(this, arguments);
  }
  _createClass(SearchBox, [{
    key: "render",
    value: function render() {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["<form action=\"https://internationalbudget.org/\" method=\"get\" role=\"search\" class=\"search-box\">\n      <input type=\"search\" class=\"search-field\" placeholder=\"Enter Search\" name=\"s\" /><i class=\"ibp-icons icon-search\"></i>\n      <input type=\"submit\" class=\"search-submit\" value=\"Search\" style=\"display: none\" />\n    </form>"])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_styles_base_styles__WEBPACK_IMPORTED_MODULE_2__.BaseStyles, _styles_search_box_styles__WEBPACK_IMPORTED_MODULE_1__.SearchBoxStyles];
    }
  }]);
  return SearchBox;
}(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);
window.customElements.define("search-box", SearchBox);

/***/ }),

/***/ "./src/scripts/components/partials/social-links.js":
/*!*********************************************************!*\
  !*** ./src/scripts/components/partials/social-links.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


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
      return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral([" <div class=\"social-links\" style=\"color: ", "\">\n      <i class=\"fa fa-instagram\"></i>\n      <a href=\"https://www.facebook.com/InternationalBudgetPartnership\" target=\"_blank\"><i class=\"ibp-icons icon-facebook\"></i></a>\n      <a href=\"https://twitter.com/OpenBudgets\" target=\"_blank\"><i class=\"ibp-icons icon-twitter\"></i></a>\n      <a href=\"https://www.linkedin.com/company/international-budget-partnership\" target=\"_blank\"><i class=\"ibp-icons icon-linkedin\"></i></a>\n      <a href=\"https://www.youtube.com/user/IntBudgetPartnership/playlists\" target=\"_blank\"><i class=\"ibp-icons icon-youtube\"></i></a>\n      <a href=\"https://www.instagram.com/openbudgets/\" target=\"_blank\"><i class=\"ibp-icons icon-instagram\"></i></a>\n    </div>"])), this.color);
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
      return [_styles_base_styles__WEBPACK_IMPORTED_MODULE_0__.BaseStyles, (0,lit__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        .social-links {\n          margin-top: 30px;\n        }\n\n        a {\n          background: rgba(255, 255, 255, 0.2);\n          border-radius: 50%;\n          width: 32px;\n          height: 32px;\n          display: inline-flex;\n          line-height: 38px;\n          color: white !important;\n          justify-content: center;\n        }\n\n        a:hover {\n          color: white;\n        }\n      "])))];
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseStyles": () => (/* binding */ BaseStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyles = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .container {\n    max-width: 1352px;\n    padding: 0 44px;\n    margin: 0 auto;\n  }\n\n  h6 {\n    font-family: var(--ibp-body-font-family);\n    font-weight: 800;\n    text-transform: uppercase;\n    letter-spacing: var(--ibp-letter-spacing);\n    font-size: var(--ibp-heading-6-font-size);\n    margin: 0;\n    font-weight: 800;\n    margin-bottom: 1em;\n  }\n\n  hr {\n    border: solid var(--ibp-hr-height) #acaaa2;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  input[type=\"text\"] {\n    padding: 12px;\n    font-family: var(--ibp-body-font-family);\n    font-size: var(--ibp-input-font-size);\n    color: var(--ibp-body-text);\n  }\n\n  button {\n    background: var(--ibp-accent-alt);\n    text-transform: uppercase;\n    letter-spacing: 0.12em;\n    border: none;\n    font-weight: 800;\n    cursor: pointer;\n  }\n\n  input[type=\"text\"]:focus {\n    outline: none;\n  }\n\n  .social-links {\n    margin-top: 44px;\n  }\n\n  .social-links a {\n    color: inherit;\n    margin-right: 15px;\n  }\n\n  .main-nav-wrapper {\n    background: white;\n  }\n\n  .main-nav {\n    min-height: var(--ibp-main-nav-height);\n    align-items: center;\n    font-family: var(--ibp-body-font-family);\n  }\n\n  .main-nav .logo {\n    grid-column: 1/3;\n  }\n\n  .nav-content-wrapper {\n    padding-top: 44px;\n  }\n\n  .nav,\n  .mobile-nav {\n    justify-self: end;\n    grid-column: 3/13;\n  }\n\n  .nav {\n    padding: 0;\n    margin: 0;\n    display: flex;\n    list-style: none;\n    align-items: center;\n    height: 78px;\n    align-self: end;\n  }\n\n  .nav li a {\n    border-radius: 500px;\n    padding: 8px 12px;\n    color: #151515;\n    text-transform: uppercase;\n    font-size: 13px;\n    line-height: 18px;\n    letter-spacing: 0.12em;\n    margin-right: 1em;\n    font-family: var(--ibp-body-font-family);\n    font-weight: 600;\n  }\n\n  @media screen and (max-width: 1299px) {\n    .nav li a {\n      margin-right: 0;\n    }\n  }\n\n  .nav li:last-child a {\n    margin-right: 0;\n    padding-right: 0;\n  }\n\n  .grid-12-col {\n    display: grid;\n    gap: 40px;\n    grid-template-columns: repeat(12, 1fr);\n  }\n\n  @media screen and (max-width: 375px) {\n    .grid-12-col {\n      gap: 12px;\n    }\n  }\n\n  .btn-donate {\n    background: var(--ibp-accent-alt);\n  }\n\n  .btn-donate:hover,\n  .btn-action:hover {\n    background: var(--ibp-accent);\n  }\n\n  .btn-action {\n    background: var(--ibp-ecru);\n  }\n\n  .d-md-none {\n    display: none;\n  }\n\n  input[type=\"text\"]::placeholder {\n    text-transform: uppercase;\n  }\n\n  @media screen and (max-width: 576px) {\n    .grid-12-col {\n      grid-template-columns: 1fr;\n      gap: 0;\n    }\n\n    .main-nav.container {\n      // padding: 0 15px;\n      padding-top: 5px;\n      grid-template-columns: 1fr;\n      align-items: center;\n    }\n\n    .main-nav .mobile-nav {\n      display: flex;\n    }\n\n    .main-nav .logo {\n      grid-column: auto;\n      max-width: 131px;\n    }\n\n    .container {\n      max-width: 100%;\n      padding: 0 32px;\n      margin: 0 auto;\n    }\n\n    .main-nav {\n      min-height: 68px;\n    }\n\n    .main-nav .mobile-nav {\n      display: flex;\n    }\n\n    .nav li a {\n      margin-right: 0;\n      font-size: 18px;\n    }\n\n    .d-md-none {\n      display: block;\n    }\n\n    .social-links {\n      margin-top: 0;\n    }\n  }\n\n  @media screen and (max-width: 1190px) {\n    .d-xs-none {\n      display: none;\n    }\n  }\n\n  /** icons **/\n  i[class^=\"icon-\"]:before,\n  i[class*=\" icon-\"]:before {\n    font-family: ibp-icons !important;\n    font-style: normal;\n    font-weight: normal !important;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .icon-arrow-left:before {\n    content: \"\\f101\";\n  }\n  .icon-arrow-up:before {\n    content: \"\\f102\";\n  }\n  .icon-budget:before {\n    content: \"\\f103\";\n  }\n  .icon-caret-down:before {\n    content: \"\\f104\";\n  }\n  .icon-caret-left:before {\n    content: \"\\f105\";\n  }\n  .icon-caret-right-circle:before {\n    content: \"\\f106\";\n  }\n  .icon-caret-right:before {\n    content: \"\\f107\";\n  }\n  .icon-close:before {\n    content: \"\\f108\";\n  }\n  .icon-download:before {\n    content: \"\\f109\";\n  }\n  .icon-email-filled:before {\n    content: \"\\f10a\";\n  }\n  .icon-email:before {\n    content: \"\\f10b\";\n  }\n  .icon-facebook:before {\n    content: \"\\f10c\";\n  }\n  .icon-filter:before {\n    content: \"\\f10d\";\n  }\n  .icon-globe:before {\n    content: \"\\f10e\";\n  }\n  .icon-instagram:before {\n    content: \"\\f10f\";\n  }\n  .icon-linkedin:before {\n    content: \"\\f110\";\n  }\n  .icon-menu:before {\n    content: \"\\f111\";\n  }\n  .icon-participation:before {\n    content: \"\\f112\";\n  }\n  .icon-search:before {\n    content: \"\\f113\";\n  }\n  .icon-share:before {\n    content: \"\\f114\";\n  }\n  .icon-transparency:before {\n    content: \"\\f115\";\n  }\n  .icon-twitter:before {\n    content: \"\\f116\";\n  }\n  .icon-youtube:before {\n    content: \"\\f117\";\n  }\n  .icon-zoom:before {\n    content: \"\\f118\";\n  }\n"], ["\n  .container {\n    max-width: 1352px;\n    padding: 0 44px;\n    margin: 0 auto;\n  }\n\n  h6 {\n    font-family: var(--ibp-body-font-family);\n    font-weight: 800;\n    text-transform: uppercase;\n    letter-spacing: var(--ibp-letter-spacing);\n    font-size: var(--ibp-heading-6-font-size);\n    margin: 0;\n    font-weight: 800;\n    margin-bottom: 1em;\n  }\n\n  hr {\n    border: solid var(--ibp-hr-height) #acaaa2;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  input[type=\"text\"] {\n    padding: 12px;\n    font-family: var(--ibp-body-font-family);\n    font-size: var(--ibp-input-font-size);\n    color: var(--ibp-body-text);\n  }\n\n  button {\n    background: var(--ibp-accent-alt);\n    text-transform: uppercase;\n    letter-spacing: 0.12em;\n    border: none;\n    font-weight: 800;\n    cursor: pointer;\n  }\n\n  input[type=\"text\"]:focus {\n    outline: none;\n  }\n\n  .social-links {\n    margin-top: 44px;\n  }\n\n  .social-links a {\n    color: inherit;\n    margin-right: 15px;\n  }\n\n  .main-nav-wrapper {\n    background: white;\n  }\n\n  .main-nav {\n    min-height: var(--ibp-main-nav-height);\n    align-items: center;\n    font-family: var(--ibp-body-font-family);\n  }\n\n  .main-nav .logo {\n    grid-column: 1/3;\n  }\n\n  .nav-content-wrapper {\n    padding-top: 44px;\n  }\n\n  .nav,\n  .mobile-nav {\n    justify-self: end;\n    grid-column: 3/13;\n  }\n\n  .nav {\n    padding: 0;\n    margin: 0;\n    display: flex;\n    list-style: none;\n    align-items: center;\n    height: 78px;\n    align-self: end;\n  }\n\n  .nav li a {\n    border-radius: 500px;\n    padding: 8px 12px;\n    color: #151515;\n    text-transform: uppercase;\n    font-size: 13px;\n    line-height: 18px;\n    letter-spacing: 0.12em;\n    margin-right: 1em;\n    font-family: var(--ibp-body-font-family);\n    font-weight: 600;\n  }\n\n  @media screen and (max-width: 1299px) {\n    .nav li a {\n      margin-right: 0;\n    }\n  }\n\n  .nav li:last-child a {\n    margin-right: 0;\n    padding-right: 0;\n  }\n\n  .grid-12-col {\n    display: grid;\n    gap: 40px;\n    grid-template-columns: repeat(12, 1fr);\n  }\n\n  @media screen and (max-width: 375px) {\n    .grid-12-col {\n      gap: 12px;\n    }\n  }\n\n  .btn-donate {\n    background: var(--ibp-accent-alt);\n  }\n\n  .btn-donate:hover,\n  .btn-action:hover {\n    background: var(--ibp-accent);\n  }\n\n  .btn-action {\n    background: var(--ibp-ecru);\n  }\n\n  .d-md-none {\n    display: none;\n  }\n\n  input[type=\"text\"]::placeholder {\n    text-transform: uppercase;\n  }\n\n  @media screen and (max-width: 576px) {\n    .grid-12-col {\n      grid-template-columns: 1fr;\n      gap: 0;\n    }\n\n    .main-nav.container {\n      // padding: 0 15px;\n      padding-top: 5px;\n      grid-template-columns: 1fr;\n      align-items: center;\n    }\n\n    .main-nav .mobile-nav {\n      display: flex;\n    }\n\n    .main-nav .logo {\n      grid-column: auto;\n      max-width: 131px;\n    }\n\n    .container {\n      max-width: 100%;\n      padding: 0 32px;\n      margin: 0 auto;\n    }\n\n    .main-nav {\n      min-height: 68px;\n    }\n\n    .main-nav .mobile-nav {\n      display: flex;\n    }\n\n    .nav li a {\n      margin-right: 0;\n      font-size: 18px;\n    }\n\n    .d-md-none {\n      display: block;\n    }\n\n    .social-links {\n      margin-top: 0;\n    }\n  }\n\n  @media screen and (max-width: 1190px) {\n    .d-xs-none {\n      display: none;\n    }\n  }\n\n  /** icons **/\n  i[class^=\"icon-\"]:before,\n  i[class*=\" icon-\"]:before {\n    font-family: ibp-icons !important;\n    font-style: normal;\n    font-weight: normal !important;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .icon-arrow-left:before {\n    content: \"\\\\f101\";\n  }\n  .icon-arrow-up:before {\n    content: \"\\\\f102\";\n  }\n  .icon-budget:before {\n    content: \"\\\\f103\";\n  }\n  .icon-caret-down:before {\n    content: \"\\\\f104\";\n  }\n  .icon-caret-left:before {\n    content: \"\\\\f105\";\n  }\n  .icon-caret-right-circle:before {\n    content: \"\\\\f106\";\n  }\n  .icon-caret-right:before {\n    content: \"\\\\f107\";\n  }\n  .icon-close:before {\n    content: \"\\\\f108\";\n  }\n  .icon-download:before {\n    content: \"\\\\f109\";\n  }\n  .icon-email-filled:before {\n    content: \"\\\\f10a\";\n  }\n  .icon-email:before {\n    content: \"\\\\f10b\";\n  }\n  .icon-facebook:before {\n    content: \"\\\\f10c\";\n  }\n  .icon-filter:before {\n    content: \"\\\\f10d\";\n  }\n  .icon-globe:before {\n    content: \"\\\\f10e\";\n  }\n  .icon-instagram:before {\n    content: \"\\\\f10f\";\n  }\n  .icon-linkedin:before {\n    content: \"\\\\f110\";\n  }\n  .icon-menu:before {\n    content: \"\\\\f111\";\n  }\n  .icon-participation:before {\n    content: \"\\\\f112\";\n  }\n  .icon-search:before {\n    content: \"\\\\f113\";\n  }\n  .icon-share:before {\n    content: \"\\\\f114\";\n  }\n  .icon-transparency:before {\n    content: \"\\\\f115\";\n  }\n  .icon-twitter:before {\n    content: \"\\\\f116\";\n  }\n  .icon-youtube:before {\n    content: \"\\\\f117\";\n  }\n  .icon-zoom:before {\n    content: \"\\\\f118\";\n  }\n"])));

/***/ }),

/***/ "./src/scripts/components/styles/featured-story-styles.js":
/*!****************************************************************!*\
  !*** ./src/scripts/components/styles/featured-story-styles.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedStoryStyles": () => (/* binding */ FeaturedStoryStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FeaturedStoryStyles = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :host {\n    display: flex;\n    flex-direction: column;\n    background: white;\n    color: var(--ibp-body-text);\n  }\n\n  .story-image {\n    flex: 1;\n    position: relative;\n  }\n\n  .story-image img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: left top;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  .story-content {\n    padding: 38px;\n    padding-top: 28px;\n  }\n\n  .featured-type {\n    font-size: 12px;\n    color: var(--ibp-body-text);\n    margin: 0;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    // margin-bottom: 10px;\n  }\n\n  h3 {\n    font-family: var(--ibp-heading-font-family);\n    font-size: var(--ibp-heading-3-font-size);\n    letter-spacing: var(--ibp-letter-spacing-sm);\n    font-weight: normal;\n    line-height: 1.1;\n    margin: 0;\n    margin-bottom: 22px;\n  }\n\n  .read-more {\n    color: var(--ibp-body-text);\n    text-decoration: none;\n    font-weight: 700;\n    display: inline-flex;\n    align-items: center;\n    padding: 5px 12px 4px 12px;\n    border-radius: 500px;\n    margin-left: -12px;\n  }\n\n  .read-more:hover {\n    outline: 1px solid var(--ibp-accent);\n  }\n\n  .read-more i {\n    margin-left: 8px;\n    font-size: 15px;\n    line-height: 0;\n  }\n\n  @media screen and (max-width: 576px) {\n    h3 {\n      font-size: 20px;\n      margin-top: 15px;\n    }\n\n    .story-image {\n      min-height: 100vw;\n    }\n\n    .story-content {\n      padding: 24px 15px;\n    }\n\n    :host {\n      display: block;\n      margin-left: 0;\n      margin-right: 0 !important;\n      margin-bottom: 32px;\n      margin-top: 32px;\n    }\n\n    .read-more {\n      font-size: 14px;\n    }\n  }\n"])));

/***/ }),

/***/ "./src/scripts/components/styles/footer-styles.js":
/*!********************************************************!*\
  !*** ./src/scripts/components/styles/footer-styles.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterStyles": () => (/* binding */ FooterStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterStyles = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :host {\n    font-weight: 400;\n  }\n\n  footer {\n    background-color: var(--ibp-teal-dark);\n  }\n\n  .grid-12-col {\n    padding: 0 44px;\n    max-width: 1352px;\n    margin: 0 auto;\n  }\n\n  hr {\n    border-color: rgba(255, 255, 255, 0.2);\n  }\n\n  .left,\n  .right {\n    color: white;\n    padding-top: 32px;\n  }\n\n  .left {\n    grid-column: 1/4;\n  }\n\n  .right {\n    grid-column: 10/13;\n  }\n\n  .main {\n    grid-column: 4/10;\n    text-align: center;\n    padding: 44px 0;\n    color: white;\n  }\n\n  .copyright {\n    text-align: center;\n    color: rgba(255, 255, 255, 0.5);\n    font-size: 12px;\n    padding: 18px;\n  }\n\n  .footer-nav {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  .footer-nav li {\n    padding: 8px 0;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  }\n\n  .footer-nav li:last-child {\n    border-bottom: none;\n  }\n\n  .footer-nav a {\n    color: white;\n    font-size: 16px;\n  }\n\n  .footer-banner {\n    padding-top: 60px;\n    padding-bottom: 60px;\n    position: relative;\n    background: var(--ibp-teal-dark);\n    font-weight: 400;\n  }\n\n  .footer-banner .grid-12-col {\n    z-index: 2;\n    position: relative;\n    opacity: 0;\n    transition: all 0.7s ease-out;\n    margin-top: 35px;\n  }\n\n  .footer-banner:after {\n    content: \"\";\n    width: 100%;\n    position: absolute;\n    top: 0;\n    height: 100%;\n    left: 0;\n    background: var(--ibp-teal);\n    clip-path: polygon(45% 0, 100% 0, 100% 100%, 35% 100%);\n    z-index: 0;\n    transition: all 0.7s ease-out;\n  }\n\n  .footer-banner.active:after {\n    clip-path: polygon(63% 0, 100% 0, 100% 100%, 53% 100%);\n  }\n\n  .footer-banner.active .grid-12-col {\n    opacity: 1;\n    margin-top: 0;\n  }\n\n  .footer-slogan {\n    grid-column: 1/8;\n    font-size: 90px;\n    color: white;\n    line-height: 94px;\n    letter-spacing: -0.025em;\n    font-family: var(--ibp-heading-font-family);\n  }\n\n  .footer-slogan span {\n    color: var(--ibp-teal-light);\n  }\n\n  .footer-newsletter {\n    grid-column: 9/13;\n    align-self: center;\n  }\n\n  @media screen and (max-width: 576px) {\n    .main,\n    .right,\n    .left {\n      grid-column: auto;\n    }\n\n    .left .footer-nav li:last-child {\n      border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n    }\n\n    .right h6 {\n      display: none;\n    }\n\n    .grid-12-col,\n    footer {\n      padding: 0;\n    }\n\n    .right {\n      order: 3;\n      padding: 0 32px 32px 32px;\n    }\n\n    .left {\n      order: 2;\n      padding: 0 32px;\n    }\n\n    .copyright {\n      padding: 0 32px 32px 32px;\n      text-align: left;\n    }\n\n    hr {\n      margin-top: 44px;\n    }\n\n    .footer-banner {\n      background: linear-gradient(180deg, var(--ibp-teal-dark) 50%, var(--ibp-teal) 50%);\n      padding-top: 32px;\n      padding-bottom: 32px;\n    }\n\n    .footer-banner:after {\n      display: none;\n    }\n\n    .footer-banner .grid-12-col {\n      padding: 0 20px;\n      margin-top: 0 !important;\n      opacity: 1;\n    }\n\n    .footer-slogan {\n      font-size: 42px;\n      line-height: 48px;\n      grid-column: 1/13;\n      white-space: nowrap;\n    }\n\n    .footer-newsletter {\n      padding-top: 40px;\n    }\n  }\n\n  @media screen and (max-width: 320px) {\n    .footer-slogan {\n      font-size: 32px;\n      line-height: 41px;\n    }\n  }\n"])));

/***/ }),

/***/ "./src/scripts/components/styles/header-styles.js":
/*!********************************************************!*\
  !*** ./src/scripts/components/styles/header-styles.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderStyles": () => (/* binding */ HeaderStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderStyles = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :host {\n    display: block;\n    background: #eceae5;\n    min-height: var(--ibp-header-height);\n    overflow: visible;\n  }\n\n  :host([mini]) {\n    min-height: auto;\n  }\n\n  .banner {\n    min-height: var(--ibp-header-height);\n    width: 100%;\n    z-index: 0;\n  }\n\n  .banner.has-image {\n    background-size: cover;\n    background-position: center top;\n    background-repeat: no-repeat;\n    color: white;\n    background-color: #979797;\n    background-blend-mode: multiply;\n  }\n\n  .has-image .infobox {\n    color: var(--ibp-body-text);\n  }\n\n  .banner.has-image .nav li a.active {\n    background: rgba(255, 255, 255, 0.3);\n  }\n\n  .banner.has-image .secondary-nav a {\n    color: white;\n  }\n\n  .nav li a.active {\n    background: #dad5ca;\n  }\n\n  .page-title {\n    font-family: var(--ibp-heading-font-family);\n    font-size: var(--ibp-page-title-font-size);\n    font-weight: 400;\n    line-height: 1;\n    letter-spacing: var(--ibp-letter-spacing-sm);\n    margin-top: 0;\n    margin-bottom: 32px;\n    pointer-events: none;\n    user-select: none;\n    z-index: 0;\n  }\n\n  .nav-content--header {\n    grid-column: span 6;\n    padding-bottom: 44px;\n  }\n\n  .secondary-nav {\n    grid-column: span 2;\n  }\n\n  .infobox {\n    grid-column: 9/13;\n    background: white;\n  }\n\n  .spacer {\n    grid-column: span 1;\n  }\n\n  .secondary-nav li a.active:before {\n    content: \"\u2022\";\n    font-size: 24px;\n    line-height: 0;\n    margin-right: 8px;\n    margin-left: -17px;\n    display: inline-block;\n    color: var(--ibp-accent);\n  }\n\n  .overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: #f00;\n  }\n\n  .secondary-nav ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    line-height: 18px;\n  }\n\n  .secondary-nav li {\n    border-bottom: 1px solid #acaaa2;\n  }\n\n  .secondary-nav li a {\n    color: #222222;\n    text-decoration: none;\n    margin: 8px 0;\n    display: block;\n    font-size: 16px;\n    font-weight: normal;\n  }\n\n  .secondary-nav li:last-child {\n    border: none;\n  }\n\n  @media screen and (max-width: 576px) {\n    :host,\n    .banner {\n      min-height: auto;\n    }\n\n    .nav-content {\n      gap: 12px;\n      grid-template-columns: 1fr;\n    }\n\n    .secondary-nav,\n    .nav-content--header {\n      grid-column: auto;\n    }\n\n    .page-title {\n      font-size: 42px;\n      line-height: 45px;\n    }\n  }\n"])));

/***/ }),

/***/ "./src/scripts/components/styles/menu-overlay-styles.js":
/*!**************************************************************!*\
  !*** ./src/scripts/components/styles/menu-overlay-styles.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuOverlayStyles": () => (/* binding */ MenuOverlayStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MenuOverlayStyles = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .overlay {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    min-height: 100vh;\n    opacity: 0;\n    height: 0;\n    transition: all 1s;\n    pointer-events: none;\n    font-weight: 400;\n  }\n\n  .overlay.visible {\n    opacity: 1;\n    top: 0;\n    pointer-events: auto;\n    z-index: 999;\n  }\n\n  .scroll-container {\n    display: flex;\n    overflow: auto;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  .search-box-mobile {\n    grid-column: span 12;\n    margin-top: 20px;\n    display: none;\n  }\n\n  .nav-header {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    background: var(--ibp-teal-dark);\n    color: white;\n  }\n\n  .nav-content {\n    height: 100%;\n  }\n\n  .nav-footer-wrapper {\n    background: var(--ibp-teal-light);\n  }\n\n  .nav-content-wrapper {\n    padding-top: 0;\n    flex: 1;\n  }\n\n  .main-nav-wrapper {\n    background: white;\n  }\n\n  .nav-footer .signup-note {\n    color: var(--ibp-body-text);\n    grid-column: span 5;\n    line-height: 28px;\n    padding: 44px 0;\n  }\n\n  .nav-footer newsletter-form {\n    grid-column: 7/13;\n    align-self: center;\n  }\n\n  .full-menu {\n    grid-column: span 8;\n    display: flex;\n    padding-bottom: 44px;\n  }\n\n  .full-menu div {\n    width: 33.3333%;\n    margin-right: 20px;\n  }\n\n  .full-menu div:last-child {\n    margin-right: 0;\n  }\n\n  .full-menu ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n\n  .full-menu li {\n    font-size: 16px;\n    margin-bottom: 15px;\n    line-height: 22px;\n  }\n\n  .full-menu .sub {\n    margin-top: 44px;\n    margin-bottom: 20px;\n  }\n\n  .full-menu h6 {\n    margin-top: 44px;\n  }\n\n  .full-menu h6 i {\n    display: none;\n  }\n\n  .full-menu a {\n    display: inline-block;\n    text-decoration: none;\n    color: white;\n  }\n\n  .featured-story {\n    grid-column: span 4;\n    margin-right: -44px;\n  }\n\n  .toggle {\n    display: none;\n  }\n\n  .sub-links {\n    display: block;\n    margin: 32px 0;\n    line-height: 32px;\n  }\n\n  .sub-links a {\n    display: block;\n    font-size: 13px;\n    font-weight: bold;\n  }\n\n  @media screen and (max-width: 576px) {\n    .main-nav-wrapper {\n      padding: 0;\n      padding-top: 5px;\n      // background: var(--ibp-teal-dark);\n      background: white;\n    }\n\n    .search-box-mobile {\n      display: block;\n    }\n\n    .nav-content {\n      margin-top: 20px;\n    }\n\n    .search-box {\n      display: none;\n    }\n\n    .logo {\n      max-width: 20px;\n    }\n\n    pre-nav {\n      outline: 1px solid red;\n    }\n\n    .full-menu {\n      flex-direction: column;\n    }\n\n    .full-menu .sub {\n      margin-top: 0;\n      margin-bottom: 40px;\n    }\n\n    .full-menu div {\n      width: auto;\n      margin: 0;\n    }\n\n    .full-menu h6 {\n      background: var(--ibp-teal-dark);\n      margin: 0;\n      padding-top: 14px;\n      padding-bottom: 12px;\n      border-top: 1px solid rgba(255, 255, 255, 0.2);\n    }\n\n    .full-menu h6 i {\n      display: block;\n      font-size: 10px;\n    }\n\n    .full-menu li a {\n      font-size: 14px;\n    }\n\n    .btn-donate,\n    .btn-action {\n      color: var(--ibp-body-text) !important;\n      padding: 8px 14px 6px 14px;\n      font-size: 13px;\n      text-transform: uppercase;\n      font-weight: 800;\n      margin-right: 11px;\n      letter-spacing: var(--ibp-letter-spacing);\n    }\n\n    .btn-donate:hover,\n    .btn-action:hover {\n      background: white;\n      border: 1px solid var(--ibp-accent);\n    }\n\n    .toggle:checked + h6 i {\n      transform: rotate(180deg) translateY(4px);\n    }\n\n    .full-menu ul {\n      overflow: hidden;\n      transition: max-height 0.8s ease-in-out;\n      max-height: 0;\n    }\n\n    h6 label {\n      transition: all 0.7s ease-out;\n    }\n\n    .toggle:checked + h6 + ul {\n      display: block;\n      color: blue;\n      max-height: 100vh;\n    }\n\n    .action-buttons {\n      margin-top: 18px;\n      margin-bottom: 24px;\n      display: block;\n    }\n\n    .nav-footer newsletter-form {\n      grid-column: auto;\n      margin-top: 0;\n      margin-bottom: 44px;\n    }\n  }\n"])));

/***/ }),

/***/ "./src/scripts/components/styles/newsletter-form-styles.js":
/*!*****************************************************************!*\
  !*** ./src/scripts/components/styles/newsletter-form-styles.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterFormStyles": () => (/* binding */ NewsletterFormStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NewsletterFormStyles = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :host {\n    display: block;\n    color: white;\n    font-size: 16px;\n    line-height: 22px;\n  }\n\n  .signup-form {\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    position: relative;\n  }\n\n  .signup-form h6,\n  .signup-form .form {\n    text-align: left;\n    grid-column: 2/6;\n  }\n\n  // .form {\n  //   display: flex;\n  //   margin-top: 8px;\n  //   position: relative;\n  // }\n\n  input[type=\"email\"] {\n    font-family: var(--ibp-body-font-family);\n    width: 100%;\n    border: none;\n    font-size: 12px;\n    letter-spacing: 1px;\n    padding: 16px 0;\n    padding-left: 46px;\n    grid-column: 1/6;\n  }\n\n  input[type=\"email\"]::placeholder {\n    text-transform: uppercase;\n    letter-spacing: 1px;\n  }\n\n  input[type=\"email\"]:focus {\n    outline: none;\n  }\n\n  .icon-email {\n    margin-right: 8px;\n    position: absolute;\n    top: 15px;\n    left: 16px;\n    color: var(--ibp-teal-light);\n    font-size: 18px;\n  }\n\n  button {\n    min-width: 120px;\n    border: none;\n  }\n\n  .formEmailButton {\n    grid-column: 6/7;\n    background: var(--ibp-teal-dark);\n    width: 100%;\n    color: white;\n    text-transform: uppercase;\n    text-align: center;\n    font-size: 13px;\n    font-weight: 800;\n    letter-spacing: 1px;\n    padding: 16px;\n    border: none;\n  }\n\n  .formEmailButton:hover {\n    background: var(--ibp-accent);\n    color: var(--ibp-body-text);\n  }\n\n  @media screen and (max-width: 576px) {\n    .signup-form h6,\n    .signup-form .form {\n      grid-column: auto;\n    }\n\n    .signup-form {\n      grid-template-columns: 1fr;\n    }\n  }\n"])));

/***/ }),

/***/ "./src/scripts/components/styles/pre-header-styles.js":
/*!************************************************************!*\
  !*** ./src/scripts/components/styles/pre-header-styles.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreHeaderStyles": () => (/* binding */ PreHeaderStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PreHeaderStyles = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :host {\n    display: flex;\n    justify-content: end;\n    height: 35px;\n    background: white;\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n\n  .overlay :host {\n    background: green;\n  }\n\n  a {\n    font-size: 13px;\n    font-family: var(--ibp-body-font-family);\n    font-weight: 800;\n    text-decoration: none;\n    color: #151515;\n    padding: 0 14px;\n    text-transform: uppercase;\n    line-height: 35px;\n    letter-spacing: 0.12em;\n  }\n\n  @media screen and (max-width: 576px) {\n    :host {\n      display: none;\n    }\n  }\n"])));

/***/ }),

/***/ "./src/scripts/components/styles/search-box-styles.js":
/*!************************************************************!*\
  !*** ./src/scripts/components/styles/search-box-styles.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBoxStyles": () => (/* binding */ SearchBoxStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SearchBoxStyles = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .search-box {\n    position: relative;\n  }\n\n  .search-box i {\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: black;\n    left: 1px;\n    top: 1px;\n    line-height: 36px;\n    border-radius: 50%;\n    width: 35px;\n    height: 35px;\n    text-align: center;\n    background: var(--ibp-ecru);\n  }\n\n  input[type=\"text\"],\n  input[type=\"search\"] {\n    padding: 0;\n    border: 1px solid var(--ibp-ecru);\n    font-size: 15px;\n    line-height: 26px;\n    padding: 4px 9px;\n    border-radius: 500px;\n    position: relative;\n    padding-left: 46px;\n  }\n\n  input[type=\"search\"]:focus {\n    outline: 1px solid var(--ibp-accent);\n  }\n\n  @media screen and (max-width: 567px) {\n    input[type=\"search\"] {\n      width: 100%;\n    }\n  }\n"])));

/***/ }),

/***/ "./src/scripts/menu-data.js":
/*!**********************************!*\
  !*** ./src/scripts/menu-data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
var menu = fetch("https://internationalbudget.org/wp-json/wp-api-menus/v2/menu-locations/primary").then(function (response) {
  return response.json();
}).then(function (data) {
  return data;
});

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/styles","/js/vendor"], () => (__webpack_exec__("./src/scripts/components/ibp-header.js"), __webpack_exec__("./src/scripts/components/ibp-footer.js"), __webpack_exec__("./src/scss/styles.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);