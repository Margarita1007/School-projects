/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style-filters.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style-filters.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".theme-filter, .modules-filter, .width-filter, .height-filter {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style-filters.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,iCAAiC;AACrC","sourcesContent":[".theme-filter, .modules-filter, .width-filter, .height-filter {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style-popup.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style-popup.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-overlay {\r\n    z-index: 1;\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background: rgba(0,0,0,.6);\r\n}\r\n\r\n.modal-window {\r\n    z-index: 2;\r\n    position: absolute;\r\n    top: 0; left: 0; bottom: 0; right: 0;\r\n    margin: auto;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.modal-body {\r\n    z-index: 3;\r\n    position: relative;\r\n    margin: auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: max-content;\r\n    height: 90vh;\r\n    gap: 10px;\r\n    background: #FFF;\r\n    border-radius: 15px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.scroll-off {\r\n    overflow: hidden;\r\n}\r\n\r\n.modal-close {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    width: 30px;\r\n    height: 30px;\r\n    right: 15px;\r\n    top: 15px;\r\n    border: 2px solid #7ccbc8;\r\n    border-radius: 100px;\r\n    background: none;\r\n    font-size: 25px;\r\n}\r\n\r\n.modal-close:hover {\r\n    background: rgba(124, 203, 200, .8);\r\n }\r\n\r\n .modal__img {\r\n    position: relative;\r\n    left: 1%;\r\n    object-fit: cover;\r\n    width: 90%;\r\n    height: 90%;\r\n }\r\n \r\n .modal__content {\r\n    font-family: 'Ubuntu', sans-serif;\r\n    width: 30vh;\r\n    text-align: center;\r\n }\r\n\r\n .modal-add {\r\n    z-index: 5;\r\n    border-radius: 30px;\r\n    border: 1px solid #7ccbc8;\r\n    width: 70px;\r\n    height: 35px;\r\n    align-self: center;\r\n    justify-self: center;\r\n    background-color: #7ccbc8;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    font-size: 1em;\r\n    margin-top: 50px;\r\n}\r\n\r\n.modal-add:hover {\r\n    cursor: pointer;\r\n    background-color: aquamarine;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style-popup.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,eAAe;IACf,MAAM;IACN,QAAQ;IACR,OAAO;IACP,SAAS;IACT,0BAA0B;AAC9B;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,MAAM,EAAE,OAAO,EAAE,SAAS,EAAE,QAAQ;IACpC,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,SAAS;IACT,yBAAyB;IACzB,oBAAoB;IACpB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,mCAAmC;CACtC;;CAEA;IACG,kBAAkB;IAClB,QAAQ;IACR,iBAAiB;IACjB,UAAU;IACV,WAAW;CACd;;CAEA;IACG,iCAAiC;IACjC,WAAW;IACX,kBAAkB;CACrB;;CAEA;IACG,UAAU;IACV,mBAAmB;IACnB,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,yBAAyB;IACzB,iCAAiC;IACjC,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,4BAA4B;AAChC","sourcesContent":[".modal-overlay {\r\n    z-index: 1;\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background: rgba(0,0,0,.6);\r\n}\r\n\r\n.modal-window {\r\n    z-index: 2;\r\n    position: absolute;\r\n    top: 0; left: 0; bottom: 0; right: 0;\r\n    margin: auto;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.modal-body {\r\n    z-index: 3;\r\n    position: relative;\r\n    margin: auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: max-content;\r\n    height: 90vh;\r\n    gap: 10px;\r\n    background: #FFF;\r\n    border-radius: 15px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.scroll-off {\r\n    overflow: hidden;\r\n}\r\n\r\n.modal-close {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    width: 30px;\r\n    height: 30px;\r\n    right: 15px;\r\n    top: 15px;\r\n    border: 2px solid #7ccbc8;\r\n    border-radius: 100px;\r\n    background: none;\r\n    font-size: 25px;\r\n}\r\n\r\n.modal-close:hover {\r\n    background: rgba(124, 203, 200, .8);\r\n }\r\n\r\n .modal__img {\r\n    position: relative;\r\n    left: 1%;\r\n    object-fit: cover;\r\n    width: 90%;\r\n    height: 90%;\r\n }\r\n \r\n .modal__content {\r\n    font-family: 'Ubuntu', sans-serif;\r\n    width: 30vh;\r\n    text-align: center;\r\n }\r\n\r\n .modal-add {\r\n    z-index: 5;\r\n    border-radius: 30px;\r\n    border: 1px solid #7ccbc8;\r\n    width: 70px;\r\n    height: 35px;\r\n    align-self: center;\r\n    justify-self: center;\r\n    background-color: #7ccbc8;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    font-size: 1em;\r\n    margin-top: 50px;\r\n}\r\n\r\n.modal-add:hover {\r\n    cursor: pointer;\r\n    background-color: aquamarine;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".first-line {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    height: 100px;\r\n    margin: 0;\r\n   \r\n}\r\n\r\n.hidden {\r\n    display: none !important;\r\n}\r\n\r\n.logo img {\r\n    height: 100%;\r\n}\r\n\r\n.nav {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.nav-list {\r\n    list-style: none; \r\n    display: flex;  \r\n    flex-direction: row;\r\n    gap: 20px;\r\n    align-items: center;\r\n}\r\n\r\n.nav-link {   \r\n    font-family: 'Ubuntu', sans-serif;\r\n    text-decoration: none;\r\n    color: #4f4f4f;\r\n\r\n}\r\n.nav-link:hover {\r\n   font-weight: bold;\r\n}\r\n\r\n.cart {\r\n    position: relative;\r\n}\r\n\r\n.img-cart {\r\n    height: 50%;\r\n    display: block;\r\n    padding: 25px;\r\n}\r\n\r\n.cart:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.cart-counter {\r\n    position: absolute;\r\n    right: 15%;\r\n    top: 15%;\r\n    font-weight: 600;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    background-color: #7ccbc8;\r\n    border-radius: 2em;\r\n    width: 2em;\r\n    height: 2em;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.header-title, .footer-title {\r\n    height: 50px;\r\n    margin: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #7ccbc8;\r\n    background-size: cover;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    text-align: center;\r\n}\r\n\r\n.header-title h1 {\r\n    margin: 0;\r\n}\r\n\r\n.wrapper-main {\r\ndisplay: grid;\r\ngap: 10px;\r\ngrid-template-areas:\r\n\"A B\"\r\n\"A C\";\r\n}\r\n\r\n.main-filters {\r\n    grid-area: A;\r\n    padding-top: 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    width: 190px;\r\n}\r\n\r\n.main-cards {\r\n    grid-area: B;\r\n    padding-top: 30px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    row-gap: 30px;\r\n    column-gap: 3%;\r\n    justify-content: start;\r\n}\r\n\r\n.card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 30%;\r\n    height: max-content;\r\n    box-shadow: 0 0 1em rgba(0, 0, 0, .8);\r\n    transition: 0.3s;\r\n} \r\n\r\n.card:hover {\r\n    box-shadow: 0 0 1em rgba(124, 203, 200, .8);\r\n    transform: scale(1.05);\r\n}\r\n\r\n.card__photo {\r\n    display: flex;\r\n    box-sizing: content-box;\r\n}\r\n\r\n.card__photo_img {\r\n    width: 100%;\r\n}\r\n\r\n.card__description {\r\n    display: grid;\r\n    grid-template-areas: \r\n    \"A A\"\r\n    \"B B\"\r\n    \"C D\";\r\n    grid-template-columns: 1fr 1fr;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n.card__description_name {\r\n    grid-area: A;\r\n    text-align: center;\r\n    margin: 5% 0 2% 0; \r\n}\r\n\r\n.card__description_price {\r\n    grid-area: C;\r\n    text-align: start;\r\n    margin: 5% 0 5% 10%;\r\n}\r\n\r\n.card__description_more {\r\n    grid-area: B;\r\n    text-align: center;\r\n    text-decoration: underline 1px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    font-size: smaller;\r\n    margin: 2%;\r\n}\r\n\r\n.card__description_more:hover {\r\n    cursor: pointer;\r\n    font-weight: 700;\r\n}\r\n\r\n.add {\r\n    grid-area: D;\r\n    border: none;\r\n    border-radius: 35px;\r\n    width: 35px;\r\n    height: 35px;\r\n    align-self: center;\r\n    justify-self: end;\r\n    margin-right: 10%;\r\n    background: none;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    font-size: 1em;\r\n    margin: 0 10% 5% 0;\r\n}\r\n\r\n.add:hover {\r\n    cursor: pointer;\r\n    background-color: #7ccbc8;\r\n}\r\n\r\n.add-img {\r\n    width: 25px;\r\n    float: right;\r\n}\r\n\r\n.added {\r\n    background-color: #7ccbc8;\r\n}\r\n\r\n.load {\r\n    grid-area: C;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.div_clear_filters, .div_clear_cart, .div_clear_all {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.load_all, .clear_filters, .clear_cart, .clear_all {\r\n    width: 150px;\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    font-size: 1em;\r\n    font-weight: 400;\r\n    background-color: #7ccbc8;\r\n    margin: 0;\r\n}\r\n\r\n.load_all:hover, .clear_filters:hover, .clear_cart:hover, .clear_all:hover {\r\n    cursor: pointer;\r\n    font-weight: 600;\r\n    background-color: #4f4f4f;\r\n    color: #7ccbc8;\r\n    box-shadow: 0 0 0.5em rgba(0, 0, 0, .8);\r\n}\r\n\r\n.footer-info {\r\n    height: 50px;\r\n    margin: 5% 0 0 0;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #4f4f4f;\r\n    color: #000;\r\n    font-weight: 500;\r\n    background-size: cover;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    text-align: center;\r\n}\r\n\r\n.footer-git, .footer-p, .footer-rss {\r\n    width: 33%;\r\n}\r\n\r\n.footer-rss {\r\n    position: relative;\r\n    height: 100%;\r\n}\r\n\r\n.footer-git {\r\n    display: flex;\r\n    flex-direction: row;\r\n    color: #000;\r\n}\r\n\r\n.footer-git a {\r\n    text-decoration: none;\r\n    color: #000;\r\n}\r\n\r\n#git-img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: scale-down;\r\n}\r\n\r\n#rss-img {\r\n    position: absolute;\r\n    object-fit: cover;\r\n    height: 100%;\r\n    \r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[".first-line {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    height: 100px;\r\n    margin: 0;\r\n   \r\n}\r\n\r\n.hidden {\r\n    display: none !important;\r\n}\r\n\r\n.logo img {\r\n    height: 100%;\r\n}\r\n\r\n.nav {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.nav-list {\r\n    list-style: none; \r\n    display: flex;  \r\n    flex-direction: row;\r\n    gap: 20px;\r\n    align-items: center;\r\n}\r\n\r\n.nav-link {   \r\n    font-family: 'Ubuntu', sans-serif;\r\n    text-decoration: none;\r\n    color: #4f4f4f;\r\n\r\n}\r\n.nav-link:hover {\r\n   font-weight: bold;\r\n}\r\n\r\n.cart {\r\n    position: relative;\r\n}\r\n\r\n.img-cart {\r\n    height: 50%;\r\n    display: block;\r\n    padding: 25px;\r\n}\r\n\r\n.cart:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.cart-counter {\r\n    position: absolute;\r\n    right: 15%;\r\n    top: 15%;\r\n    font-weight: 600;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    background-color: #7ccbc8;\r\n    border-radius: 2em;\r\n    width: 2em;\r\n    height: 2em;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.header-title, .footer-title {\r\n    height: 50px;\r\n    margin: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #7ccbc8;\r\n    background-size: cover;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    text-align: center;\r\n}\r\n\r\n.header-title h1 {\r\n    margin: 0;\r\n}\r\n\r\n.wrapper-main {\r\ndisplay: grid;\r\ngap: 10px;\r\ngrid-template-areas:\r\n\"A B\"\r\n\"A C\";\r\n}\r\n\r\n.main-filters {\r\n    grid-area: A;\r\n    padding-top: 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    width: 190px;\r\n}\r\n\r\n.main-cards {\r\n    grid-area: B;\r\n    padding-top: 30px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    row-gap: 30px;\r\n    column-gap: 3%;\r\n    justify-content: start;\r\n}\r\n\r\n.card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 30%;\r\n    height: max-content;\r\n    box-shadow: 0 0 1em rgba(0, 0, 0, .8);\r\n    transition: 0.3s;\r\n} \r\n\r\n.card:hover {\r\n    box-shadow: 0 0 1em rgba(124, 203, 200, .8);\r\n    transform: scale(1.05);\r\n}\r\n\r\n.card__photo {\r\n    display: flex;\r\n    box-sizing: content-box;\r\n}\r\n\r\n.card__photo_img {\r\n    width: 100%;\r\n}\r\n\r\n.card__description {\r\n    display: grid;\r\n    grid-template-areas: \r\n    \"A A\"\r\n    \"B B\"\r\n    \"C D\";\r\n    grid-template-columns: 1fr 1fr;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n.card__description_name {\r\n    grid-area: A;\r\n    text-align: center;\r\n    margin: 5% 0 2% 0; \r\n}\r\n\r\n.card__description_price {\r\n    grid-area: C;\r\n    text-align: start;\r\n    margin: 5% 0 5% 10%;\r\n}\r\n\r\n.card__description_more {\r\n    grid-area: B;\r\n    text-align: center;\r\n    text-decoration: underline 1px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    font-size: smaller;\r\n    margin: 2%;\r\n}\r\n\r\n.card__description_more:hover {\r\n    cursor: pointer;\r\n    font-weight: 700;\r\n}\r\n\r\n.add {\r\n    grid-area: D;\r\n    border: none;\r\n    border-radius: 35px;\r\n    width: 35px;\r\n    height: 35px;\r\n    align-self: center;\r\n    justify-self: end;\r\n    margin-right: 10%;\r\n    background: none;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    font-size: 1em;\r\n    margin: 0 10% 5% 0;\r\n}\r\n\r\n.add:hover {\r\n    cursor: pointer;\r\n    background-color: #7ccbc8;\r\n}\r\n\r\n.add-img {\r\n    width: 25px;\r\n    float: right;\r\n}\r\n\r\n.added {\r\n    background-color: #7ccbc8;\r\n}\r\n\r\n.load {\r\n    grid-area: C;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.div_clear_filters, .div_clear_cart, .div_clear_all {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.load_all, .clear_filters, .clear_cart, .clear_all {\r\n    width: 150px;\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    font-size: 1em;\r\n    font-weight: 400;\r\n    background-color: #7ccbc8;\r\n    margin: 0;\r\n}\r\n\r\n.load_all:hover, .clear_filters:hover, .clear_cart:hover, .clear_all:hover {\r\n    cursor: pointer;\r\n    font-weight: 600;\r\n    background-color: #4f4f4f;\r\n    color: #7ccbc8;\r\n    box-shadow: 0 0 0.5em rgba(0, 0, 0, .8);\r\n}\r\n\r\n.footer-info {\r\n    height: 50px;\r\n    margin: 5% 0 0 0;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #4f4f4f;\r\n    color: #000;\r\n    font-weight: 500;\r\n    background-size: cover;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    text-align: center;\r\n}\r\n\r\n.footer-git, .footer-p, .footer-rss {\r\n    width: 33%;\r\n}\r\n\r\n.footer-rss {\r\n    position: relative;\r\n    height: 100%;\r\n}\r\n\r\n.footer-git {\r\n    display: flex;\r\n    flex-direction: row;\r\n    color: #000;\r\n}\r\n\r\n.footer-git a {\r\n    text-decoration: none;\r\n    color: #000;\r\n}\r\n\r\n#git-img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: scale-down;\r\n}\r\n\r\n#rss-img {\r\n    position: absolute;\r\n    object-fit: cover;\r\n    height: 100%;\r\n    \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style-filters.css":
/*!*******************************!*\
  !*** ./src/style-filters.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_filters_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style-filters.css */ "./node_modules/css-loader/dist/cjs.js!./src/style-filters.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_filters_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_filters_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/style-popup.css":
/*!*****************************!*\
  !*** ./src/style-popup.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style-popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/style-popup.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_popup_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_popup_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/card.ts":
/*!*********************!*\
  !*** ./src/card.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-loader */ "./src/data-loader.ts");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup */ "./src/popup.ts");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart */ "./src/cart.ts");


const load = new _data_loader__WEBPACK_IMPORTED_MODULE_0__["default"]({});
const cart = new _cart__WEBPACK_IMPORTED_MODULE_2__["default"]();

class Card {
    //creane ONE card
    createCard(item) {
        const fragment = document.createDocumentFragment();
        const cardTempl = document.querySelector('#templ-card');
        if (cardTempl != null) {
            const cardClone = cardTempl.content.cloneNode(true);
            const cardPhoto = cardClone.querySelector('.card__photo_img');
            const cardName = cardClone.querySelector('.card__description_name');
            const cardPrice = cardClone.querySelector('.card__description_price');
            const cartAdd = cardClone.querySelector('.add');
            if (cardPhoto != null) {
                cardPhoto.src = `${item.imgsrc}`;
            }
            if (cardName != null) {
                cardName.textContent = item.name;
            }
            if (cardPrice != null) {
                if (item.stock != 0) {
                    cardPrice.textContent = `Price: $${item.price}`;
                }
                else {
                    cardPrice.textContent = `Sorry, we're out of stock`;
                    cartAdd === null || cartAdd === void 0 ? void 0 : cartAdd.classList.add('hidden');
                }
            }
            fragment.append(cardClone);
        }
        const card = document.querySelector('.main-cards');
        if (card != null) {
            card.append(fragment);
        }
    }
    //more_info for ALL cards
    card_more() {
        document.querySelectorAll('.card__description_more').forEach((elem) => {
            elem.addEventListener('click', (event) => {
                var _a;
                const $currentTarget = event.currentTarget;
                const node = (_a = $currentTarget.parentNode) === null || _a === void 0 ? void 0 : _a.childNodes[1];
                // выведем значения в консоль
                let inText;
                if (node != null) {
                    inText = node.textContent;
                }
                const nameText = inText === null || inText === void 0 ? void 0 : inText.trim().split('  ')[0].trim();
                //console.log(node);
                const data = load.getData();
                //console.log(data);
                const cardFilter = data.filter((item) => {
                    if (nameText === item.name) {
                        return item;
                    }
                });
                //console.log(cardFilter);
                const popup = new _popup__WEBPACK_IMPORTED_MODULE_1__["default"]();
                popup.createPopup(cardFilter[0]);
                document.body.classList.add('scroll-off');
                const BTN_CLOSE = document.querySelector('.modal-close');
                const modalWinow = document.querySelector('.modal-window');
                if (modalWinow != null) {
                    document.addEventListener('click', (event) => {
                        //console.log(event.target);
                        if (event.target === modalWinow) {
                            popup.destroy();
                        }
                    });
                }
                if (BTN_CLOSE != null) {
                    BTN_CLOSE.addEventListener('click', popup.destroy);
                }
            });
        });
    }
    //btn_add for ALL cards
    card_add() {
        document.querySelectorAll('.add').forEach((elem) => {
            elem.addEventListener('click', () => {
                var _a, _b;
                const name_card = (_a = elem.parentNode) === null || _a === void 0 ? void 0 : _a.childNodes[1].textContent;
                const data = load.getData();
                const cardFilter = data.filter((item) => {
                    if (name_card === item.name) {
                        return item;
                    }
                });
                cart.add(cardFilter[0]);
                (_b = elem.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add('added');
                //const number_item = document.createElement('input');
                //number_item.value = '1';
                //elem.append(number_item);
            });
        });
    }
    card_filter() {
        //let dataFilterCheck: { [key: string]: string }[];
        //let dataFilterCheckArr;
        //const data = dataJSON as { [key: string]: string | number }[];
        //type data = { [key: string]: string }[];
        //const data = dataJSON as Array<object>;
        //const cardsName = document.querySelectorAll('.card__description_name');
        const checkboxes = document.querySelectorAll("input[type='checkbox']");
        const checkboxObj = {};
        const data = load.getDataObj();
        //const checkboxValues = [];
        checkboxes.forEach((box) => {
            box.addEventListener('change', () => {
                //const data: { [key: string]: string }[] = load.getDataObj();
                const keyObj = box.name;
                const boxValue = box.id.split('-')[0];
                if (box.checked === true) {
                    localStorage.setItem(box.id, box.checked.toString());
                    if (Object.prototype.hasOwnProperty.call(checkboxObj, keyObj) === false)
                        checkboxObj[keyObj] = [];
                    checkboxObj[keyObj].push(boxValue);
                }
                else {
                    localStorage.removeItem(box.id);
                    if (Object.prototype.hasOwnProperty.call(checkboxObj, keyObj) === true) {
                        checkboxObj[keyObj].splice(checkboxObj[keyObj].indexOf(boxValue), 1);
                        if (checkboxObj[keyObj].length === 0) {
                            delete checkboxObj[keyObj];
                        }
                    }
                }
                const checkboxKeys = Object.keys(checkboxObj);
                const filtered = data.filter((product) => {
                    return checkboxKeys.every((key) => {
                        if (checkboxObj[key].length === 0) {
                            console.log('a');
                        }
                        if (Array.isArray(checkboxObj[key])) {
                            //console.log(product[key]);
                            return checkboxObj[key].includes(product[key].toLowerCase());
                            //filtered.push(product);
                        }
                        return checkboxObj[key].includes(product[key].toLowerCase());
                    });
                });
                localStorage.setItem('filter', JSON.stringify(filtered));
                //localStorage.setItem('filter', JSON.stringify(filtered));
                //console.log('datafilterckeck', dataFilterCheck)
                /* else {
                    const dataStorage: { [key: string]: string }[] = load.getDataFilter();
                    const filtered = dataStorage.filter((product) => {
                        return checkboxKeys.every((key) => {
                            if (checkboxObj[key].length === 0) {
                                console.log('a');
                            }
                            if (Array.isArray(checkboxObj[key])) {
                                //console.log(product[key]);
                                return checkboxObj[key].includes(product[key].toLowerCase());
                                //filtered.push(product);
                            }
                            return checkboxObj[key].includes(product[key].toLowerCase());
                        });
                    });
                    localStorage.removeItem('filter');
                    localStorage.setItem('filter', JSON.stringify(filtered));
                }*/
            });
        });
        /*const radioStock = document.getElementById('stock') as HTMLInputElement;
        const radioAll = document.getElementById('all') as HTMLInputElement;
        radioStock.addEventListener('change', () => {
            //console.log('input');
            localStorage.removeItem(radioAll.id);
            localStorage.setItem(radioStock.id, radioStock.checked.toString());
            const data: { [key: string]: string }[] = load.getDataLS();
            const filtered = data.filter((item) => {
                if (item.stock != '0') return item;
            });
            localStorage.setItem('data', JSON.stringify(filtered));
        });
        radioAll.addEventListener('change', () => {
            //console.log('input');
            localStorage.removeItem(radioStock.id);
            localStorage.setItem(radioAll.id, radioAll.checked.toString());
            const data: { [key: string]: string }[] = load.getDataLS();
            const filtered = data.filter((item) => {
                return item;
            });
            localStorage.setItem('data', JSON.stringify(filtered));
        });
        */
    }
    delete() {
        document.querySelectorAll('.card').forEach((elem) => {
            elem.remove();
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ "./src/cart.ts":
/*!*********************!*\
  !*** ./src/cart.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Cart {
    constructor() {
        this.items = [];
        return this;
    }
    add(item) {
        this.items.push(item);
        localStorage.setItem('cart', JSON.stringify(this.items));
        const cart_count = document.querySelector('.cart-counter');
        if (cart_count != null && cart_count.dataset.counter != undefined) {
            const new_value = Number(cart_count.value) + 1;
            cart_count.value = new_value.toString();
            localStorage.setItem('cart_value', cart_count.value);
        }
    }
    clear() {
        this.items = [];
        localStorage.removeItem('cart');
        localStorage.removeItem('cart_value');
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);


/***/ }),

/***/ "./src/data-loader.ts":
/*!****************************!*\
  !*** ./src/data-loader.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class DataLoader {
    constructor(options) {
        this.cardJSON = [
            {
                article: 'card1',
                name: 'Light misty forest',
                theme: 'Nature',
                modules: 3,
                width: 180,
                height: 120,
                imgsrc: '././img/card1.jpeg',
                price: 49.99,
                stock: 3,
            },
            {
                article: 'card2',
                name: 'Wolfs',
                theme: 'Nature',
                modules: 3,
                width: 210,
                height: 140,
                imgsrc: './img/card2.jpg',
                price: 59.99,
                stock: 0,
            },
            {
                article: 'card3',
                name: 'Deer on the lake',
                theme: 'Animals',
                modules: 3,
                width: 180,
                height: 120,
                imgsrc: './img/card3.jpg',
                price: 42.99,
                stock: 1,
            },
            {
                article: 'card4',
                name: 'Deer figures',
                theme: 'Animals',
                modules: 1,
                width: 180,
                height: 60,
                imgsrc: './img/card4.jpg',
                price: 42.99,
                stock: 0,
            },
            {
                article: 'card5',
                name: 'Сoniferous forest',
                theme: 'Nature',
                modules: 1,
                width: 240,
                height: 60,
                imgsrc: './img/card5.jpg',
                price: 53.99,
                stock: 3,
            },
            {
                article: 'card6',
                name: 'Foggy forest',
                theme: 'Nature',
                modules: 3,
                width: 240,
                height: 120,
                imgsrc: './img/card6.jpeg',
                price: 57.99,
                stock: 3,
            },
            {
                article: 'card7',
                name: 'Spruce forest',
                theme: 'Nature',
                modules: 2,
                width: 180,
                height: 150,
                imgsrc: './img/card7.jpeg',
                price: 54.99,
                stock: 3,
            },
            {
                article: 'card8',
                name: 'Light mistery forest',
                theme: 'Nature',
                modules: 3,
                width: 180,
                height: 120,
                imgsrc: './img/card8.jpg',
                price: 49.99,
                stock: 3,
            },
            {
                article: 'card9',
                name: 'The road in the forest',
                theme: 'Nature',
                modules: 1,
                width: 60,
                height: 100,
                imgsrc: './img/card9.jpg',
                price: 34.99,
                stock: 3,
            },
            {
                article: 'card10',
                name: 'Animals',
                theme: 'Animals',
                modules: 3,
                width: 180,
                height: 100,
                imgsrc: './img/card10.jpg',
                price: 38.99,
                stock: 3,
            },
            {
                article: 'card11',
                name: 'Minimalism',
                theme: 'Minimalism',
                modules: 5,
                width: 120,
                height: 60,
                imgsrc: './img/card11.jpg',
                price: 35.99,
                stock: 3,
            },
            {
                article: 'card12',
                name: 'Green plants',
                theme: 'Minimalism',
                modules: 5,
                width: 180,
                height: 100,
                imgsrc: './img/card12.jpg',
                price: 37.99,
                stock: 3,
            },
            {
                article: 'card13',
                name: 'Travel',
                theme: 'Travel',
                modules: 5,
                width: 150,
                height: 90,
                imgsrc: './img/card13.jpg',
                price: 41.99,
                stock: 3,
            },
            {
                article: 'card14',
                name: 'Greyness',
                theme: 'Minimalism',
                modules: 3,
                width: 180,
                height: 90,
                imgsrc: './img/card14.jpeg',
                price: 42.99,
                stock: 3,
            },
            {
                article: 'card15',
                name: 'Abstraction',
                theme: 'Minimalism',
                modules: 3,
                width: 120,
                height: 60,
                imgsrc: './img/card15.jpg',
                price: 33.99,
                stock: 3,
            },
            {
                article: 'card16',
                name: 'The outline of a deer',
                theme: 'Minimalism',
                modules: 1,
                width: 60,
                height: 90,
                imgsrc: './img/card16.jpg',
                price: 29.99,
                stock: 3,
            },
            {
                article: 'card17',
                name: 'The outline of an owl',
                theme: 'Minimalism',
                modules: 1,
                width: 60,
                height: 90,
                imgsrc: './img/card17.jpeg',
                price: 29.99,
                stock: 3,
            },
            {
                article: 'card18',
                name: 'Dark forest',
                theme: 'Nature',
                modules: 2,
                width: 120,
                height: 90,
                imgsrc: './img/card18.jpg',
                price: 45.99,
                stock: 3,
            },
        ];
        this.cardObj = [
            {
                article: 'card1',
                name: 'Light misty forest',
                theme: 'Nature',
                modules: '3',
                width: '180',
                height: '120',
                imgsrc: '././img/card1.jpeg',
                price: '49.99',
                stock: '3',
            },
            {
                article: 'card2',
                name: 'Wolfs',
                theme: 'Nature',
                modules: '3',
                width: '210',
                height: '140',
                imgsrc: './img/card2.jpg',
                price: '59.99',
                stock: '0',
            },
            {
                article: 'card3',
                name: 'Deer on the lake',
                theme: 'Animals',
                modules: '3',
                width: '180',
                height: '120',
                imgsrc: './img/card3.jpg',
                price: '42.99',
                stock: '1',
            },
            {
                article: 'card4',
                name: 'Deer figures',
                theme: 'Animals',
                modules: '1',
                width: '180',
                height: '60',
                imgsrc: './img/card4.jpg',
                price: '42.99',
                stock: '0',
            },
            {
                article: 'card5',
                name: 'Сoniferous forest',
                theme: 'Nature',
                modules: '1',
                width: '240',
                height: '60',
                imgsrc: './img/card5.jpg',
                price: '53.99',
                stock: '3',
            },
            {
                article: 'card6',
                name: 'Foggy forest',
                theme: 'Nature',
                modules: '3',
                width: '240',
                height: '120',
                imgsrc: './img/card6.jpeg',
                price: '57.99',
                stock: '3',
            },
            {
                article: 'card7',
                name: 'Spruce forest',
                theme: 'Nature',
                modules: '2',
                width: '180',
                height: '150',
                imgsrc: './img/card7.jpeg',
                price: '54.99',
                stock: '3',
            },
            {
                article: 'card8',
                name: 'Light mistery forest',
                theme: 'Nature',
                modules: '3',
                width: '180',
                height: '120',
                imgsrc: './img/card8.jpg',
                price: '49.99',
                stock: '3',
            },
            {
                article: 'card9',
                name: 'The road in the forest',
                theme: 'Nature',
                modules: '1',
                width: '60',
                height: '100',
                imgsrc: './img/card9.jpg',
                price: '34.99',
                stock: '3',
            },
            {
                article: 'card10',
                name: 'Animals',
                theme: 'Animals',
                modules: '3',
                width: '180',
                height: '100',
                imgsrc: './img/card10.jpg',
                price: '38.99',
                stock: '3',
            },
            {
                article: 'card11',
                name: 'Minimalism',
                theme: 'Minimalism',
                modules: '5',
                width: '120',
                height: '60',
                imgsrc: './img/card11.jpg',
                price: '35.99',
                stock: '3',
            },
            {
                article: 'card12',
                name: 'Green plants',
                theme: 'Minimalism',
                modules: '5',
                width: '180',
                height: '100',
                imgsrc: './img/card12.jpg',
                price: '37.99',
                stock: '3',
            },
            {
                article: 'card13',
                name: 'Travel',
                theme: 'Travel',
                modules: '5',
                width: '150',
                height: '90',
                imgsrc: './img/card13.jpg',
                price: '41.99',
                stock: '3',
            },
            {
                article: 'card14',
                name: 'Greyness',
                theme: 'Minimalism',
                modules: '3',
                width: '180',
                height: '90',
                imgsrc: './img/card14.jpeg',
                price: '42.99',
                stock: '3',
            },
            {
                article: 'card15',
                name: 'Abstraction',
                theme: 'Minimalism',
                modules: '3',
                width: '120',
                height: '60',
                imgsrc: './img/card15.jpg',
                price: '33.99',
                stock: '3',
            },
            {
                article: 'card16',
                name: 'The outline of a deer',
                theme: 'Minimalism',
                modules: '1',
                width: '60',
                height: '90',
                imgsrc: './img/card16.jpg',
                price: '29.99',
                stock: '3',
            },
            {
                article: 'card17',
                name: 'The outline of an owl',
                theme: 'Minimalism',
                modules: '1',
                width: '60',
                height: '90',
                imgsrc: './img/card17.jpeg',
                price: '29.99',
                stock: '3',
            },
            {
                article: 'card18',
                name: 'Dark forest',
                theme: 'Nature',
                modules: '2',
                width: '120',
                height: '90',
                imgsrc: './img/card18.jpg',
                price: '45.99',
                stock: '3',
            },
        ];
        this.options = options;
    }
    getData() {
        return this.cardJSON;
    }
    getDataObj() {
        return this.cardObj;
    }
    getDataLS() {
        const dataLS = localStorage.getItem('filter');
        if (dataLS && dataLS !== '[]') {
            const data = JSON.parse(dataLS);
            return data;
        }
        else {
            return this.cardObj;
        }
    }
    getDataFilter() {
        const dataLS = localStorage.getItem('filter');
        if (dataLS != null) {
            const filter = JSON.parse(dataLS);
            return filter;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataLoader);


/***/ }),

/***/ "./src/popup.ts":
/*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Popup {
    createPopup1(selectCard) {
        const modal = document.createElement('div');
        modal.classList.add('vmodal');
        modal.insertAdjacentHTML('afterbegin', `<div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-body">
                    <button class="modal-close">
                    &times;
                    </button>  
            
                    <img class="modal__img" src=${selectCard.imgsrc} alt="${selectCard.article}">
                    <div class="modal__content" id='picture'>
                        <h1 class='modal__content_name'>${selectCard.name}</h1>
                        <h3> Price: $${selectCard.price}</h3>
                        <h5> <b>Theme:</b> ${selectCard.theme} </h5> 
                        <h5> <b>Number of modules:</b> ${selectCard.modules} </h5>
                        <h5> <b>Width: </b> ${selectCard.width} cm </h5>
                        <h5> <b>Height: </b> ${selectCard.height} cm </h5>
                        <h5> <b>Stock availability: </b> ${selectCard.stock}</h5>
                    </div>
                </div>
                </div>
            </div>`);
        document.body.appendChild(modal);
        return modal;
    }
    createPopup(selectCard) {
        const fragment = document.createDocumentFragment();
        const modal = document.createElement('div');
        modal.classList.add('vmodal');
        document.body.appendChild(modal);
        const popupTempl = document.querySelector('#templ-popup');
        if (popupTempl != null) {
            const popupClone = popupTempl.content.cloneNode(true);
            const popupPhoto = popupClone.querySelector('.modal__img');
            const popupName = popupClone.querySelector('.modal__content_name');
            const popupPrice = popupClone.querySelector('.popup_price');
            const popupTheme = popupClone.querySelector('.popup_theme');
            const popupModules = popupClone.querySelector('.popup_modules');
            const popupWidth = popupClone.querySelector('.popup_width');
            const popupHeight = popupClone.querySelector('.popup_height');
            const popupStock = popupClone.querySelector('.popup_stock');
            //const cartAdd = cardClone.querySelector('.add');
            if (popupPhoto != null) {
                popupPhoto.src = selectCard.imgsrc;
                popupPhoto.alt = selectCard.article;
            }
            if (popupName != null) {
                popupName.textContent = selectCard.name;
            }
            if (popupPrice != null) {
                popupPrice.textContent = `Price: $${selectCard.price}`;
            }
            if (popupTheme != null) {
                popupTheme.textContent = `Theme: ${selectCard.theme}`;
            }
            if (popupModules != null) {
                popupModules.textContent = `Modules: ${selectCard.modules}`;
            }
            if (popupWidth != null) {
                popupWidth.textContent = `Width: ${selectCard.width} cm`;
            }
            if (popupHeight != null) {
                popupHeight.textContent = `Height: ${selectCard.height} cm`;
            }
            if (popupStock != null) {
                popupStock.textContent = `Stock availability:: ${selectCard.stock}`;
            }
            fragment.append(popupClone);
        }
        //const modal = document.querySelector('.main-cards');
        modal.append(fragment);
    }
    destroy() {
        const popup = document.querySelector('.vmodal');
        document.body.classList.remove('scroll-off');
        popup === null || popup === void 0 ? void 0 : popup.remove();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);


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
/******/ 			id: moduleId,
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
/************************************************************************/
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-popup.css */ "./src/style-popup.css");
/* harmony import */ var _style_filters_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-filters.css */ "./src/style-filters.css");
/* harmony import */ var _data_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-loader */ "./src/data-loader.ts");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card */ "./src/card.ts");



//import { Options } from '../src/types/types';

//import Popup from './popup';

//import card_filter from './filters';
const load = new _data_loader__WEBPACK_IMPORTED_MODULE_3__["default"]({});
const cards = new _card__WEBPACK_IMPORTED_MODULE_4__["default"]();
const data = load.getDataLS();
for (let i = 0; i < data.length; i++) {
    cards.createCard(data[i]);
}
cards.card_more();
cards.card_add();
cards.card_filter();
const checkboxes = document.querySelectorAll("input[type='checkbox']");
checkboxes.forEach((box) => {
    box.addEventListener('change', () => {
        cards.delete();
        //console.log('console indexts');
        const dataFilter = load.getDataFilter();
        //document.querySelector('.main-cards')?.removeChild(text);
        for (let i = 0; i < dataFilter.length; i++) {
            cards.createCard(dataFilter[i]);
        }
        cards.card_more();
        cards.card_add();
        cards.card_filter();
    });
    if (localStorage[box.id] != undefined) {
        box.checked = true;
    }
    else
        box.checked = false;
});
const clear_filters = document.querySelector('.clear_filters');
if (clear_filters != null) {
    clear_filters.addEventListener('click', () => {
        localStorage.removeItem('filter');
        localStorage.removeItem('data');
        const data = load.getData();
        checkboxes.forEach((box) => {
            const boxID = box.id;
            localStorage.removeItem(boxID);
        });
        cards.delete();
        for (let i = 0; i < data.length; i++) {
            cards.createCard(data[i]);
        }
        cards.card_more();
        cards.card_add();
        cards.card_filter();
        checkboxes.forEach((box) => {
            box.checked = false;
        });
    });
}
const cart_count = document.querySelector('.cart-counter');
const value = localStorage.getItem('cart_value');
if (value != null) {
    console.log('cart-value');
    cart_count.value = value;
}
const clear_cart = document.querySelector('.clear_cart');
if (clear_cart != null) {
    clear_cart.addEventListener('click', () => {
        localStorage.removeItem('cart');
        localStorage.removeItem('cart_value');
        cart_count.value = '0';
        document.querySelectorAll('.card__description').forEach((card) => {
            card.classList.remove('added');
        });
    });
}
const dataLS = localStorage.getItem('cart');
if (dataLS && dataLS !== '[]') {
    const data = JSON.parse(dataLS);
    document.querySelectorAll('.card__description').forEach((card) => {
        const card_name = card.childNodes[1].textContent;
        data.forEach((elem) => {
            if (elem.name === card_name) {
                card.classList.add('added');
            }
        });
    });
}
const clear_LS = document.querySelector('.clear_all');
if (clear_LS != null) {
    clear_LS.addEventListener('click', () => {
        localStorage.clear();
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHlHQUF5RyxzQkFBc0IsK0JBQStCLDBDQUEwQyxLQUFLLHVCQUF1Qix3RkFBd0YsVUFBVSxZQUFZLGFBQWEseUZBQXlGLHNCQUFzQiwrQkFBK0IsMENBQTBDLEtBQUssbUNBQW1DO0FBQy9qQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSwwREFBMEQsbUJBQW1CLHdCQUF3QixlQUFlLGlCQUFpQixnQkFBZ0Isa0JBQWtCLG1DQUFtQyxLQUFLLHVCQUF1QixtQkFBbUIsMkJBQTJCLGdCQUFnQixTQUFTLFdBQVcsU0FBUyxxQkFBcUIsc0JBQXNCLDRCQUE0QixLQUFLLHFCQUFxQixtQkFBbUIsMkJBQTJCLHFCQUFxQixzQkFBc0IsNEJBQTRCLDJCQUEyQixxQkFBcUIsa0JBQWtCLHlCQUF5Qiw0QkFBNEIsZ0NBQWdDLDRCQUE0QixLQUFLLHFCQUFxQix5QkFBeUIsS0FBSyxzQkFBc0Isd0JBQXdCLDJCQUEyQixvQkFBb0IscUJBQXFCLG9CQUFvQixrQkFBa0Isa0NBQWtDLDZCQUE2Qix5QkFBeUIsd0JBQXdCLEtBQUssNEJBQTRCLDRDQUE0QyxNQUFNLHNCQUFzQiwyQkFBMkIsaUJBQWlCLDBCQUEwQixtQkFBbUIsb0JBQW9CLE1BQU0sMkJBQTJCLDBDQUEwQyxvQkFBb0IsMkJBQTJCLE1BQU0scUJBQXFCLG1CQUFtQiw0QkFBNEIsa0NBQWtDLG9CQUFvQixxQkFBcUIsMkJBQTJCLDZCQUE2QixrQ0FBa0MsMENBQTBDLHVCQUF1Qix5QkFBeUIsS0FBSywwQkFBMEIsd0JBQXdCLHFDQUFxQyxLQUFLLFdBQVcsc0ZBQXNGLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSx5Q0FBeUMsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSwwQ0FBMEMsbUJBQW1CLHdCQUF3QixlQUFlLGlCQUFpQixnQkFBZ0Isa0JBQWtCLG1DQUFtQyxLQUFLLHVCQUF1QixtQkFBbUIsMkJBQTJCLGdCQUFnQixTQUFTLFdBQVcsU0FBUyxxQkFBcUIsc0JBQXNCLDRCQUE0QixLQUFLLHFCQUFxQixtQkFBbUIsMkJBQTJCLHFCQUFxQixzQkFBc0IsNEJBQTRCLDJCQUEyQixxQkFBcUIsa0JBQWtCLHlCQUF5Qiw0QkFBNEIsZ0NBQWdDLDRCQUE0QixLQUFLLHFCQUFxQix5QkFBeUIsS0FBSyxzQkFBc0Isd0JBQXdCLDJCQUEyQixvQkFBb0IscUJBQXFCLG9CQUFvQixrQkFBa0Isa0NBQWtDLDZCQUE2Qix5QkFBeUIsd0JBQXdCLEtBQUssNEJBQTRCLDRDQUE0QyxNQUFNLHNCQUFzQiwyQkFBMkIsaUJBQWlCLDBCQUEwQixtQkFBbUIsb0JBQW9CLE1BQU0sMkJBQTJCLDBDQUEwQyxvQkFBb0IsMkJBQTJCLE1BQU0scUJBQXFCLG1CQUFtQiw0QkFBNEIsa0NBQWtDLG9CQUFvQixxQkFBcUIsMkJBQTJCLDZCQUE2QixrQ0FBa0MsMENBQTBDLHVCQUF1Qix5QkFBeUIsS0FBSywwQkFBMEIsd0JBQXdCLHFDQUFxQyxLQUFLLHVCQUF1QjtBQUMxNEk7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsdURBQXVELHNCQUFzQiw0QkFBNEIsdUNBQXVDLHNCQUFzQixrQkFBa0IsWUFBWSxpQkFBaUIsaUNBQWlDLEtBQUssbUJBQW1CLHFCQUFxQixLQUFLLGNBQWMsc0JBQXNCLDRCQUE0QixLQUFLLG1CQUFtQiwwQkFBMEIsd0JBQXdCLDRCQUE0QixrQkFBa0IsNEJBQTRCLEtBQUssc0JBQXNCLDBDQUEwQyw4QkFBOEIsdUJBQXVCLFNBQVMscUJBQXFCLHlCQUF5QixLQUFLLGVBQWUsMkJBQTJCLEtBQUssbUJBQW1CLG9CQUFvQix1QkFBdUIsc0JBQXNCLEtBQUsscUJBQXFCLHdCQUF3QixLQUFLLHVCQUF1QiwyQkFBMkIsbUJBQW1CLGlCQUFpQix5QkFBeUIsMENBQTBDLGtDQUFrQywyQkFBMkIsbUJBQW1CLG9CQUFvQiwyQkFBMkIsc0JBQXNCLGdDQUFnQyw0QkFBNEIsS0FBSywwQ0FBMEMscUJBQXFCLGtCQUFrQixzQkFBc0IsNEJBQTRCLGdDQUFnQyxrQ0FBa0MsK0JBQStCLDBDQUEwQywyQkFBMkIsS0FBSywwQkFBMEIsa0JBQWtCLEtBQUssdUJBQXVCLGtCQUFrQixjQUFjLCtDQUErQyxLQUFLLHVCQUF1QixxQkFBcUIsMEJBQTBCLHNCQUFzQiwrQkFBK0Isa0JBQWtCLHFCQUFxQixLQUFLLHFCQUFxQixxQkFBcUIsMEJBQTBCLHNCQUFzQix3QkFBd0Isc0JBQXNCLHVCQUF1QiwrQkFBK0IsS0FBSyxlQUFlLHNCQUFzQiwrQkFBK0IsbUJBQW1CLDRCQUE0Qiw4Q0FBOEMseUJBQXlCLE1BQU0scUJBQXFCLG9EQUFvRCwrQkFBK0IsS0FBSyxzQkFBc0Isc0JBQXNCLGdDQUFnQyxLQUFLLDBCQUEwQixvQkFBb0IsS0FBSyw0QkFBNEIsc0JBQXNCLDJFQUEyRSx1Q0FBdUMsMENBQTBDLEtBQUssaUNBQWlDLHFCQUFxQiwyQkFBMkIsMkJBQTJCLEtBQUssa0NBQWtDLHFCQUFxQiwwQkFBMEIsNEJBQTRCLEtBQUssaUNBQWlDLHFCQUFxQiwyQkFBMkIsdUNBQXVDLDBDQUEwQywyQkFBMkIsbUJBQW1CLEtBQUssdUNBQXVDLHdCQUF3Qix5QkFBeUIsS0FBSyxjQUFjLHFCQUFxQixxQkFBcUIsNEJBQTRCLG9CQUFvQixxQkFBcUIsMkJBQTJCLDBCQUEwQiwwQkFBMEIseUJBQXlCLDBDQUEwQyx1QkFBdUIsMkJBQTJCLEtBQUssb0JBQW9CLHdCQUF3QixrQ0FBa0MsS0FBSyxrQkFBa0Isb0JBQW9CLHFCQUFxQixLQUFLLGdCQUFnQixrQ0FBa0MsS0FBSyxlQUFlLHFCQUFxQixzQkFBc0IsZ0NBQWdDLEtBQUssNkRBQTZELHNCQUFzQixnQ0FBZ0MsS0FBSyw0REFBNEQscUJBQXFCLHFCQUFxQiwyQkFBMkIsMENBQTBDLHVCQUF1Qix5QkFBeUIsa0NBQWtDLGtCQUFrQixLQUFLLG9GQUFvRix3QkFBd0IseUJBQXlCLGtDQUFrQyx1QkFBdUIsZ0RBQWdELEtBQUssc0JBQXNCLHFCQUFxQix5QkFBeUIsc0JBQXNCLDRCQUE0Qiw0QkFBNEIsZ0NBQWdDLGtDQUFrQyxvQkFBb0IseUJBQXlCLCtCQUErQiwwQ0FBMEMsMkJBQTJCLEtBQUssNkNBQTZDLG1CQUFtQixLQUFLLHFCQUFxQiwyQkFBMkIscUJBQXFCLEtBQUsscUJBQXFCLHNCQUFzQiw0QkFBNEIsb0JBQW9CLEtBQUssdUJBQXVCLDhCQUE4QixvQkFBb0IsS0FBSyxrQkFBa0Isb0JBQW9CLHFCQUFxQiwrQkFBK0IsS0FBSyxrQkFBa0IsMkJBQTJCLDBCQUEwQixxQkFBcUIsYUFBYSxPQUFPLGdGQUFnRixVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxL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UztBQUNUO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JNcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNyQnBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNB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QzlCLGtCQUFrQiw2Q0FBSTtBQUN0QjtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zdHlsZS1maWx0ZXJzLmNzcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc3R5bGUtcG9wdXAuY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc3R5bGUtZmlsdGVycy5jc3M/YjExOSIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc3R5bGUtcG9wdXAuY3NzPzZkMTEiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY2FyZC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY2FydC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvZGF0YS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3BvcHVwLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50aGVtZS1maWx0ZXIsIC5tb2R1bGVzLWZpbHRlciwgLndpZHRoLWZpbHRlciwgLmhlaWdodC1maWx0ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS1maWx0ZXJzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50aGVtZS1maWx0ZXIsIC5tb2R1bGVzLWZpbHRlciwgLndpZHRoLWZpbHRlciwgLmhlaWdodC1maWx0ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tb2RhbC1vdmVybGF5IHtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjYpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtd2luZG93IHtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7IGxlZnQ6IDA7IGJvdHRvbTogMDsgcmlnaHQ6IDA7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWJvZHkge1xcclxcbiAgICB6LWluZGV4OiAzO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IDkwdmg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zY3JvbGwtb2ZmIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNsb3NlIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHJpZ2h0OiAxNXB4O1xcclxcbiAgICB0b3A6IDE1cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3Y2NiYzg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jbG9zZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTI0LCAyMDMsIDIwMCwgLjgpO1xcclxcbiB9XFxyXFxuXFxyXFxuIC5tb2RhbF9faW1nIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiAxJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiB9XFxyXFxuIFxcclxcbiAubW9kYWxfX2NvbnRlbnQge1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHdpZHRoOiAzMHZoO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuIH1cXHJcXG5cXHJcXG4gLm1vZGFsLWFkZCB7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3Y2NiYzg7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Y2NiYzg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1hZGQ6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS1wb3B1cC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsT0FBTztJQUNQLFNBQVM7SUFDVCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVE7SUFDcEMsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQ0FBbUM7Q0FDdEM7O0NBRUE7SUFDRyxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztDQUNkOztDQUVBO0lBQ0csaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxrQkFBa0I7Q0FDckI7O0NBRUE7SUFDRyxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDRCQUE0QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kYWwtb3ZlcmxheSB7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC42KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLXdpbmRvdyB7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwOyBsZWZ0OiAwOyBib3R0b206IDA7IHJpZ2h0OiAwO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1ib2R5IHtcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Nyb2xsLW9mZiB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jbG9zZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICByaWdodDogMTVweDtcXHJcXG4gICAgdG9wOiAxNXB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN2NjYmM4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY2xvc2U6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyNCwgMjAzLCAyMDAsIC44KTtcXHJcXG4gfVxcclxcblxcclxcbiAubW9kYWxfX2ltZyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogMSU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gfVxcclxcbiBcXHJcXG4gLm1vZGFsX19jb250ZW50IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xcclxcbiAgICB3aWR0aDogMzB2aDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiB9XFxyXFxuXFxyXFxuIC5tb2RhbC1hZGQge1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjN2NjYmM4O1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2NjYmM4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtYWRkOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZmlyc3QtbGluZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgIFxcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3Qge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lOyBcXHJcXG4gICAgZGlzcGxheTogZmxleDsgIFxcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7ICAgXFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogIzRmNGY0ZjtcXHJcXG5cXHJcXG59XFxyXFxuLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5pbWctY2FydCB7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQ6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWNvdW50ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAxNSU7XFxyXFxuICAgIHRvcDogMTUlO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Y2NiYzg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcXHJcXG4gICAgd2lkdGg6IDJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5oZWFkZXItdGl0bGUsIC5mb290ZXItdGl0bGUge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Y2NiYzg7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXRpdGxlIGgxIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlci1tYWluIHtcXHJcXG5kaXNwbGF5OiBncmlkO1xcclxcbmdhcDogMTBweDtcXHJcXG5ncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcblxcXCJBIEJcXFwiXFxyXFxuXFxcIkEgQ1xcXCI7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWZpbHRlcnMge1xcclxcbiAgICBncmlkLWFyZWE6IEE7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiAxOTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY2FyZHMge1xcclxcbiAgICBncmlkLWFyZWE6IEI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIHJvdy1nYXA6IDMwcHg7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDMlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gcmdiYSgwLCAwLCAwLCAuOCk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufSBcXHJcXG5cXHJcXG4uY2FyZDpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gcmdiYSgxMjQsIDIwMywgMjAwLCAuOCk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19waG90byB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9fcGhvdG9faW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICBcXFwiQSBBXFxcIlxcclxcbiAgICBcXFwiQiBCXFxcIlxcclxcbiAgICBcXFwiQyBEXFxcIjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19kZXNjcmlwdGlvbl9uYW1lIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBBO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogNSUgMCAyJSAwOyBcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2Rlc2NyaXB0aW9uX3ByaWNlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBDO1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgbWFyZ2luOiA1JSAwIDUlIDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2Rlc2NyaXB0aW9uX21vcmUge1xcclxcbiAgICBncmlkLWFyZWE6IEI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXHJcXG4gICAgbWFyZ2luOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2Rlc2NyaXB0aW9uX21vcmU6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQge1xcclxcbiAgICBncmlkLWFyZWE6IEQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIG1hcmdpbjogMCAxMCUgNSUgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdjY2JjODtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pbWcge1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2NjYmM4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZCB7XFxyXFxuICAgIGdyaWQtYXJlYTogQztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kaXZfY2xlYXJfZmlsdGVycywgLmRpdl9jbGVhcl9jYXJ0LCAuZGl2X2NsZWFyX2FsbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZF9hbGwsIC5jbGVhcl9maWx0ZXJzLCAuY2xlYXJfY2FydCwgLmNsZWFyX2FsbCB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Y2NiYzg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRfYWxsOmhvdmVyLCAuY2xlYXJfZmlsdGVyczpob3ZlciwgLmNsZWFyX2NhcnQ6aG92ZXIsIC5jbGVhcl9hbGw6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjRmNGY7XFxyXFxuICAgIGNvbG9yOiAjN2NjYmM4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgwLCAwLCAwLCAuOCk7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItaW5mbyB7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgbWFyZ2luOiA1JSAwIDAgMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjRmNGY7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1naXQsIC5mb290ZXItcCwgLmZvb3Rlci1yc3Mge1xcclxcbiAgICB3aWR0aDogMzMlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLXJzcyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWdpdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWdpdCBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2dpdC1pbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcclxcbn1cXHJcXG5cXHJcXG4jcnNzLWltZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2Is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SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTs7QUFFaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZpcnN0LWxpbmUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTsgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7ICBcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsgeyAgIFxcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICM0ZjRmNGY7XFxyXFxuXFxyXFxufVxcclxcbi5uYXYtbGluazpob3ZlciB7XFxyXFxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNhcnQge1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0OmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1jb3VudGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMTUlO1xcclxcbiAgICB0b3A6IDE1JTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2NjYmM4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XFxyXFxuICAgIHdpZHRoOiAyZW07XFxyXFxuICAgIGhlaWdodDogMmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uaGVhZGVyLXRpdGxlLCAuZm9vdGVyLXRpdGxlIHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2NjYmM4O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci10aXRsZSBoMSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXItbWFpbiB7XFxyXFxuZGlzcGxheTogZ3JpZDtcXHJcXG5nYXA6IDEwcHg7XFxyXFxuZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG5cXFwiQSBCXFxcIlxcclxcblxcXCJBIENcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1maWx0ZXJzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBBO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICB3aWR0aDogMTkwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNhcmRzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBCO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICByb3ctZ2FwOiAzMHB4O1xcclxcbiAgICBjb2x1bW4tZ2FwOiAzJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIHJnYmEoMCwgMCwgMCwgLjgpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn0gXFxyXFxuXFxyXFxuLmNhcmQ6aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIHJnYmEoMTI0LCAyMDMsIDIwMCwgLjgpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9fcGhvdG8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX3Bob3RvX2ltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9fZGVzY3JpcHRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcIkEgQVxcXCJcXHJcXG4gICAgXFxcIkIgQlxcXCJcXHJcXG4gICAgXFxcIkMgRFxcXCI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9fZGVzY3JpcHRpb25fbmFtZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogQTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDUlIDAgMiUgMDsgXFxyXFxufVxcclxcblxcclxcbi5jYXJkX19kZXNjcmlwdGlvbl9wcmljZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogQztcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgIG1hcmdpbjogNSUgMCA1JSAxMCU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19kZXNjcmlwdGlvbl9tb3JlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBCO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDFweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxyXFxuICAgIG1hcmdpbjogMiU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19kZXNjcmlwdGlvbl9tb3JlOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBEO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBtYXJnaW46IDAgMTAlIDUlIDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQ6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Y2NiYzg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtaW1nIHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdjY2JjODtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWQge1xcclxcbiAgICBncmlkLWFyZWE6IEM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2X2NsZWFyX2ZpbHRlcnMsIC5kaXZfY2xlYXJfY2FydCwgLmRpdl9jbGVhcl9hbGwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRfYWxsLCAuY2xlYXJfZmlsdGVycywgLmNsZWFyX2NhcnQsIC5jbGVhcl9hbGwge1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2NjYmM4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5sb2FkX2FsbDpob3ZlciwgLmNsZWFyX2ZpbHRlcnM6aG92ZXIsIC5jbGVhcl9jYXJ0OmhvdmVyLCAuY2xlYXJfYWxsOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY0ZjRmO1xcclxcbiAgICBjb2xvcjogIzdjY2JjODtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMCwgMCwgMCwgLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWluZm8ge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbjogNSUgMCAwIDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY0ZjRmO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItZ2l0LCAuZm9vdGVyLXAsIC5mb290ZXItcnNzIHtcXHJcXG4gICAgd2lkdGg6IDMzJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1yc3Mge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1naXQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1naXQgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbiNnaXQtaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXHJcXG59XFxyXFxuXFxyXFxuI3Jzcy1pbWcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIFxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtZmlsdGVycy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLXBvcHVwLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgRGF0YUxvYWRlciBmcm9tICcuL2RhdGEtbG9hZGVyJztcclxuaW1wb3J0IFBvcHVwIGZyb20gJy4vcG9wdXAnO1xyXG5jb25zdCBsb2FkID0gbmV3IERhdGFMb2FkZXIoe30pO1xyXG5jb25zdCBjYXJ0ID0gbmV3IENhcnQoKTtcclxuaW1wb3J0IENhcnQgZnJvbSAnLi9jYXJ0JztcclxuY2xhc3MgQ2FyZCB7XHJcbiAgICAvL2NyZWFuZSBPTkUgY2FyZFxyXG4gICAgY3JlYXRlQ2FyZChpdGVtKSB7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgY29uc3QgY2FyZFRlbXBsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBsLWNhcmQnKTtcclxuICAgICAgICBpZiAoY2FyZFRlbXBsICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgY2FyZENsb25lID0gY2FyZFRlbXBsLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkUGhvdG8gPSBjYXJkQ2xvbmUucXVlcnlTZWxlY3RvcignLmNhcmRfX3Bob3RvX2ltZycpO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkTmFtZSA9IGNhcmRDbG9uZS5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fZGVzY3JpcHRpb25fbmFtZScpO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkUHJpY2UgPSBjYXJkQ2xvbmUucXVlcnlTZWxlY3RvcignLmNhcmRfX2Rlc2NyaXB0aW9uX3ByaWNlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcnRBZGQgPSBjYXJkQ2xvbmUucXVlcnlTZWxlY3RvcignLmFkZCcpO1xyXG4gICAgICAgICAgICBpZiAoY2FyZFBob3RvICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNhcmRQaG90by5zcmMgPSBgJHtpdGVtLmltZ3NyY31gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjYXJkTmFtZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJkTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2FyZFByaWNlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnN0b2NrICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJkUHJpY2UudGV4dENvbnRlbnQgPSBgUHJpY2U6ICQke2l0ZW0ucHJpY2V9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRQcmljZS50ZXh0Q29udGVudCA9IGBTb3JyeSwgd2UncmUgb3V0IG9mIHN0b2NrYDtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0QWRkID09PSBudWxsIHx8IGNhcnRBZGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcnRBZGQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kKGNhcmRDbG9uZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jYXJkcycpO1xyXG4gICAgICAgIGlmIChjYXJkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2FyZC5hcHBlbmQoZnJhZ21lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vbW9yZV9pbmZvIGZvciBBTEwgY2FyZHNcclxuICAgIGNhcmRfbW9yZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9fZGVzY3JpcHRpb25fbW9yZScpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGN1cnJlbnRUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IChfYSA9ICRjdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jaGlsZE5vZGVzWzFdO1xyXG4gICAgICAgICAgICAgICAgLy8g0LLRi9Cy0LXQtNC10Lwg0LfQvdCw0YfQtdC90LjRjyDQsiDQutC+0L3RgdC+0LvRjFxyXG4gICAgICAgICAgICAgICAgbGV0IGluVGV4dDtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpblRleHQgPSBub2RlLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZVRleHQgPSBpblRleHQgPT09IG51bGwgfHwgaW5UZXh0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpblRleHQudHJpbSgpLnNwbGl0KCcgICcpWzBdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gbG9hZC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZEZpbHRlciA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVUZXh0ID09PSBpdGVtLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNhcmRGaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9wdXAgPSBuZXcgUG9wdXAoKTtcclxuICAgICAgICAgICAgICAgIHBvcHVwLmNyZWF0ZVBvcHVwKGNhcmRGaWx0ZXJbMF0pO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtb2ZmJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBCVE5fQ0xPU0UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2xvc2UnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsV2lub3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd2luZG93Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kYWxXaW5vdyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbFdpbm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChCVE5fQ0xPU0UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIEJUTl9DTE9TRS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBvcHVwLmRlc3Ryb3kpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vYnRuX2FkZCBmb3IgQUxMIGNhcmRzXHJcbiAgICBjYXJkX2FkZCgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVfY2FyZCA9IChfYSA9IGVsZW0ucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gbG9hZC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkRmlsdGVyID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZV9jYXJkID09PSBpdGVtLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYXJ0LmFkZChjYXJkRmlsdGVyWzBdKTtcclxuICAgICAgICAgICAgICAgIChfYiA9IGVsZW0ucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNsYXNzTGlzdC5hZGQoJ2FkZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnN0IG51bWJlcl9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIC8vbnVtYmVyX2l0ZW0udmFsdWUgPSAnMSc7XHJcbiAgICAgICAgICAgICAgICAvL2VsZW0uYXBwZW5kKG51bWJlcl9pdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjYXJkX2ZpbHRlcigpIHtcclxuICAgICAgICAvL2xldCBkYXRhRmlsdGVyQ2hlY2s6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1bXTtcclxuICAgICAgICAvL2xldCBkYXRhRmlsdGVyQ2hlY2tBcnI7XHJcbiAgICAgICAgLy9jb25zdCBkYXRhID0gZGF0YUpTT04gYXMgeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfVtdO1xyXG4gICAgICAgIC8vdHlwZSBkYXRhID0geyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVtdO1xyXG4gICAgICAgIC8vY29uc3QgZGF0YSA9IGRhdGFKU09OIGFzIEFycmF5PG9iamVjdD47XHJcbiAgICAgICAgLy9jb25zdCBjYXJkc05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9fZGVzY3JpcHRpb25fbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiKTtcclxuICAgICAgICBjb25zdCBjaGVja2JveE9iaiA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBsb2FkLmdldERhdGFPYmooKTtcclxuICAgICAgICAvL2NvbnN0IGNoZWNrYm94VmFsdWVzID0gW107XHJcbiAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKChib3gpID0+IHtcclxuICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vY29uc3QgZGF0YTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVtdID0gbG9hZC5nZXREYXRhT2JqKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlPYmogPSBib3gubmFtZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJveFZhbHVlID0gYm94LmlkLnNwbGl0KCctJylbMF07XHJcbiAgICAgICAgICAgICAgICBpZiAoYm94LmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShib3guaWQsIGJveC5jaGVja2VkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY2hlY2tib3hPYmosIGtleU9iaikgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveE9ialtrZXlPYmpdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hPYmpba2V5T2JqXS5wdXNoKGJveFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGJveC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjaGVja2JveE9iaiwga2V5T2JqKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveE9ialtrZXlPYmpdLnNwbGljZShjaGVja2JveE9ialtrZXlPYmpdLmluZGV4T2YoYm94VmFsdWUpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94T2JqW2tleU9ial0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hlY2tib3hPYmpba2V5T2JqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94S2V5cyA9IE9iamVjdC5rZXlzKGNoZWNrYm94T2JqKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkID0gZGF0YS5maWx0ZXIoKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tib3hLZXlzLmV2ZXJ5KChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94T2JqW2tleV0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoZWNrYm94T2JqW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHByb2R1Y3Rba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tib3hPYmpba2V5XS5pbmNsdWRlcyhwcm9kdWN0W2tleV0udG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ZpbHRlcmVkLnB1c2gocHJvZHVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94T2JqW2tleV0uaW5jbHVkZXMocHJvZHVjdFtrZXldLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlsdGVyJywgSlNPTi5zdHJpbmdpZnkoZmlsdGVyZWQpKTtcclxuICAgICAgICAgICAgICAgIC8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbHRlcicsIEpTT04uc3RyaW5naWZ5KGZpbHRlcmVkKSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdkYXRhZmlsdGVyY2tlY2snLCBkYXRhRmlsdGVyQ2hlY2spXHJcbiAgICAgICAgICAgICAgICAvKiBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhU3RvcmFnZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVtdID0gbG9hZC5nZXREYXRhRmlsdGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBkYXRhU3RvcmFnZS5maWx0ZXIoKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94S2V5cy5ldmVyeSgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tib3hPYmpba2V5XS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hlY2tib3hPYmpba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHByb2R1Y3Rba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94T2JqW2tleV0uaW5jbHVkZXMocHJvZHVjdFtrZXldLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZmlsdGVyZWQucHVzaChwcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGVja2JveE9ialtrZXldLmluY2x1ZGVzKHByb2R1Y3Rba2V5XS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2ZpbHRlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWx0ZXInLCBKU09OLnN0cmluZ2lmeShmaWx0ZXJlZCkpO1xyXG4gICAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qY29uc3QgcmFkaW9TdG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9jaycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgcmFkaW9BbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICByYWRpb1N0b2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnaW5wdXQnKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocmFkaW9BbGwuaWQpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShyYWRpb1N0b2NrLmlkLCByYWRpb1N0b2NrLmNoZWNrZWQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGE6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1bXSA9IGxvYWQuZ2V0RGF0YUxTKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnN0b2NrICE9ICcwJykgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YScsIEpTT04uc3RyaW5naWZ5KGZpbHRlcmVkKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmFkaW9BbGwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShyYWRpb1N0b2NrLmlkKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocmFkaW9BbGwuaWQsIHJhZGlvQWxsLmNoZWNrZWQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGE6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1bXSA9IGxvYWQuZ2V0RGF0YUxTKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShmaWx0ZXJlZCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICovXHJcbiAgICB9XHJcbiAgICBkZWxldGUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0ucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiY2xhc3MgQ2FydCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhZGQoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbXMpKTtcclxuICAgICAgICBjb25zdCBjYXJ0X2NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtY291bnRlcicpO1xyXG4gICAgICAgIGlmIChjYXJ0X2NvdW50ICE9IG51bGwgJiYgY2FydF9jb3VudC5kYXRhc2V0LmNvdW50ZXIgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld192YWx1ZSA9IE51bWJlcihjYXJ0X2NvdW50LnZhbHVlKSArIDE7XHJcbiAgICAgICAgICAgIGNhcnRfY291bnQudmFsdWUgPSBuZXdfdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRfdmFsdWUnLCBjYXJ0X2NvdW50LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NhcnQnKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2FydF92YWx1ZScpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XHJcbiIsImNsYXNzIERhdGFMb2FkZXIge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY2FyZEpTT04gPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFydGljbGU6ICdjYXJkMScsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTGlnaHQgbWlzdHkgZm9yZXN0JyxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiAnTmF0dXJlJyxcclxuICAgICAgICAgICAgICAgIG1vZHVsZXM6IDMsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTgwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjAsXHJcbiAgICAgICAgICAgICAgICBpbWdzcmM6ICcuLy4vaW1nL2NhcmQxLmpwZWcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDQ5Ljk5LFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFydGljbGU6ICdjYXJkMicsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnV29sZnMnLFxyXG4gICAgICAgICAgICAgICAgdGhlbWU6ICdOYXR1cmUnLFxyXG4gICAgICAgICAgICAgICAgbW9kdWxlczogMyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMTAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0MCxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJy4vaW1nL2NhcmQyLmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogNTkuOTksXHJcbiAgICAgICAgICAgICAgICBzdG9jazogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZTogJ2NhcmQzJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEZWVyIG9uIHRoZSBsYWtlJyxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiAnQW5pbWFscycsXHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzOiAzLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4MCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTIwLFxyXG4gICAgICAgICAgICAgICAgaW1nc3JjOiAnLi9pbWcvY2FyZDMuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA0Mi45OSxcclxuICAgICAgICAgICAgICAgIHN0b2NrOiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlOiAnY2FyZDQnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RlZXIgZmlndXJlcycsXHJcbiAgICAgICAgICAgICAgICB0aGVtZTogJ0FuaW1hbHMnLFxyXG4gICAgICAgICAgICAgICAgbW9kdWxlczogMSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxODAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwLFxyXG4gICAgICAgICAgICAgICAgaW1nc3JjOiAnLi9pbWcvY2FyZDQuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA0Mi45OSxcclxuICAgICAgICAgICAgICAgIHN0b2NrOiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlOiAnY2FyZDUnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ9Chb25pZmVyb3VzIGZvcmVzdCcsXHJcbiAgICAgICAgICAgICAgICB0aGVtZTogJ05hdHVyZScsXHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzOiAxLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0MCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjAsXHJcbiAgICAgICAgICAgICAgICBpbWdzcmM6ICcuL2ltZy9jYXJkNS5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDUzLjk5LFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFydGljbGU6ICdjYXJkNicsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRm9nZ3kgZm9yZXN0JyxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiAnTmF0dXJlJyxcclxuICAgICAgICAgICAgICAgIG1vZHVsZXM6IDMsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjQwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjAsXHJcbiAgICAgICAgICAgICAgICBpbWdzcmM6ICcuL2ltZy9jYXJkNi5qcGVnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA1Ny45OSxcclxuICAgICAgICAgICAgICAgIHN0b2NrOiAzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlOiAnY2FyZDcnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1NwcnVjZSBmb3Jlc3QnLFxyXG4gICAgICAgICAgICAgICAgdGhlbWU6ICdOYXR1cmUnLFxyXG4gICAgICAgICAgICAgICAgbW9kdWxlczogMixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxODAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MCxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJy4vaW1nL2NhcmQ3LmpwZWcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDU0Ljk5LFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFydGljbGU6ICdjYXJkOCcsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTGlnaHQgbWlzdGVyeSBmb3Jlc3QnLFxyXG4gICAgICAgICAgICAgICAgdGhlbWU6ICdOYXR1cmUnLFxyXG4gICAgICAgICAgICAgICAgbW9kdWxlczogMyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxODAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMCxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJy4vaW1nL2NhcmQ4LmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogNDkuOTksXHJcbiAgICAgICAgICAgICAgICBzdG9jazogMyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZTogJ2NhcmQ5JyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdUaGUgcm9hZCBpbiB0aGUgZm9yZXN0JyxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiAnTmF0dXJlJyxcclxuICAgICAgICAgICAgICAgIG1vZHVsZXM6IDEsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJy4vaW1nL2NhcmQ5LmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogMzQuOTksXHJcbiAgICAgICAgICAgICAgICBzdG9jazogMyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZTogJ2NhcmQxMCcsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnQW5pbWFscycsXHJcbiAgICAgICAgICAgICAgICB0aGVtZTogJ0FuaW1hbHMnLFxyXG4gICAgICAgICAgICAgICAgbW9kdWxlczogMyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxODAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJy4vaW1nL2NhcmQxMC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDM4Ljk5LFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFydGljbGU6ICdjYXJkMTEnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ01pbmltYWxpc20nLFxyXG4gICAgICAgICAgICAgICAgdGhlbWU6ICdNaW5pbWFsaXNtJyxcclxuICAgICAgICAgICAgICAgIG1vZHVsZXM6IDUsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJy4vaW1nL2NhcmQxMS5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDM1Ljk5LFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFydGljbGU6ICdjYXJkMTInLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0dyZWVuIHBsYW50cycsXHJcbiAgICAgICAgICAgICAgICB0aGVtZTogJ01pbmltYWxpc20nLFxyXG4gICAgICAgICAgICAgICAgbW9kdWxlczogNSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxODAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJy4vaW1nL2NhcmQxMi5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDM3Ljk5LFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFydGljbGU6ICdjYXJkMTMnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1RyYXZlbCcsXHJcbiAgICAgICAgICAgICAgICB0aGVtZTogJ1RyYXZlbCcsXHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzOiA1LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAsXHJcbiAgICAgICAgICAgICAgICBpbWdzcmM6ICcuL2ltZy9jYXJkMTMuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA0MS45OSxcclxuICAgICAgICAgICAgICAgIHN0b2NrOiAzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlOiAnY2FyZDE0JyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdHcmV5bmVzcycsXHJcbiAgICAgICAgICAgICAgICB0aGVtZTogJ01pbmltYWxpc20nLFxyXG4gICAgICAgICAgICAgICAgbW9kdWxlczogMyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxODAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwLFxyXG4gICAgICAgICAgICAgICAgaW1nc3JjOiAnLi9pbWcvY2FyZDE0LmpwZWcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDQyLjk5LFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFydGljbGU6ICdjYXJkMTUnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Fic3RyYWN0aW9uJyxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiAnTWluaW1hbGlzbScsXHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzOiAzLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjAsXHJcbiAgICAgICAgICAgICAgICBpbWdzcmM6ICcuL2ltZy9jYXJkMTUuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiAzMy45OSxcclxuICAgICAgICAgICAgICAgIHN0b2NrOiAzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlOiAnY2FyZDE2JyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdUaGUgb3V0bGluZSBvZiBhIGRlZXInLFxyXG4gICAgICAgICAgICAgICAgdGhlbWU6ICdNaW5pbWFsaXNtJyxcclxuICAgICAgICAgICAgICAgIG1vZHVsZXM6IDEsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwLFxyXG4gICAgICAgICAgICAgICAgaW1nc3JjOiAnLi9pbWcvY2FyZDE2LmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogMjkuOTksXHJcbiAgICAgICAgICAgICAgICBzdG9jazogMyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZTogJ2NhcmQxNycsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGhlIG91dGxpbmUgb2YgYW4gb3dsJyxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiAnTWluaW1hbGlzbScsXHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzOiAxLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJy4vaW1nL2NhcmQxNy5qcGVnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiAyOS45OSxcclxuICAgICAgICAgICAgICAgIHN0b2NrOiAzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlOiAnY2FyZDE4JyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEYXJrIGZvcmVzdCcsXHJcbiAgICAgICAgICAgICAgICB0aGVtZTogJ05hdHVyZScsXHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzOiAyLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAsXHJcbiAgICAgICAgICAgICAgICBpbWdzcmM6ICcuL2ltZy9jYXJkMTguanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA0NS45OSxcclxuICAgICAgICAgICAgICAgIHN0b2NrOiAzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5jYXJkT2JqID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlOiAnY2FyZDEnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0xpZ2h0IG1pc3R5IGZvcmVzdCcsXHJcbiAgICAgICAgICAgICAgICB0aGVtZTogJ05hdHVyZScsXHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzOiAnMycsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzE4MCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMjAnLFxyXG4gICAgICAgICAgICAgICAgaW1nc3JjOiAnLi8uL2ltZy9jYXJkMS5qcGVnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiAnNDkuOTknLFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6ICczJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZTogJ2NhcmQyJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdXb2xmcycsXHJcbiAgICAgICAgICAgICAgICB0aGVtZTogJ05hdHVyZScsXHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzOiAnMycsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzIxMCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNDAnLFxyXG4gICAgICAgICAgICAgICAgaW1nc3JjOiAnLi9pbWcvY2FyZDIuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiAnNTkuOTknLFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6ICcwJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZTogJ2NhcmQzJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEZWVyIG9uIHRoZSBsYWtlJyxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiAnQW5pbWFscycsXHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzOiAnMycsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzE4MCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMjAnLFxyXG4gICAgICAgICAgICAgICAgaW1nc3JjOiAnLi9pbWcvY2FyZDMuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiAnNDIuOTknLFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6ICcxJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZTogJ2NhcmQ0JyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEZWVyIGZpZ3VyZXMnLFxyXG4gICAgICAgICAgICAgICAgdGhlbWU6ICdBbmltYWxzJyxcclxuICAgICAgICAgICAgICAgIG1vZHVsZXM6ICcxJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTgwJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzYwJyxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJy4vaW1nL2NhcmQ0LmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogJzQyLjk5JyxcclxuICAgICAgICAgICAgICAgIHN0b2NrOiAnMCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFydGljbGU6ICdjYXJkNScsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn0KFvbmlmZXJvdXMgZm9yZXN0JyxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiAnTmF0dXJlJyxcclxuICAgICAgICAgICAgICAgIG1vZHVsZXM6ICcxJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMjQwJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzYwJyxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJy4vaW1nL2NhcmQ1LmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogJzUzLjk5JyxcclxuICAgICAgICAgICAgICAgIHN0b2NrOiAnMycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFydGljbGU6ICdjYXJkNicsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRm9nZ3kgZm9yZXN0JyxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiAnTmF0dXJlJyxcclxuICAgICAgICAgICAgICAgIG1vZHVsZXM6ICczJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMjQwJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEyMCcsXHJcbiAgICAgICAgICAgICAgICBpbWdzcmM6ICcuL2ltZy9jYXJkNi5qcGVnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiAnNTcuOTknLFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6ICczJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZTogJ2NhcmQ3JyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdTcHJ1Y2UgZm9yZXN0JyxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiAnTmF0dXJlJyxcclxuICAgICAgICAgICAgICAgIG1vZHVsZXM6ICcyJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTgwJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzE1MCcsXHJcbiAgICAgICAgICAgICAgICBpbWdzcmM6ICcuL2ltZy9jYXJkNy5qcGVnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiAnNTQuOTknLFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6ICczJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZTogJ2NhcmQ4JyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdMaWdodCBtaXN0ZXJ5IGZvcmVzdCcsXHJcbiAgICAgICAgICAgICAgICB0aGVtZTogJ05hdHVyZScsXHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzOiAnMycsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzE4MCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMjAnLFxyXG4gICAgICAgICAgICAgICAgaW1nc3JjOiAnLi9pbWcvY2FyZDguanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiAnNDkuOTknLFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6ICczJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZTogJ2NhcmQ5JyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdUaGUgcm9hZCBpbiB0aGUgZm9yZXN0JyxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiAnTmF0dXJlJyxcclxuICAgICAgICAgICAgICAgIG1vZHVsZXM6ICcxJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnNjAnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJyxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJy4vaW1nL2NhcmQ5LmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogJzM0Ljk5JyxcclxuICAgICAgICAgICAgICAgIHN0b2NrOiAnMycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFydGljbGU6ICdjYXJkMTAnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0FuaW1hbHMnLFxyXG4gICAgICAgICAgICAgICAgdGhlbWU6ICdBbmltYWxzJyxcclxuICAgICAgICAgICAgICAgIG1vZHVsZXM6ICczJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTgwJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCcsXHJcbiAgICAgICAgICAgICAgICBpbWdzcmM6ICcuL2ltZy9jYXJkMTAuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiAnMzguOTknLFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6ICczJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZTogJ2NhcmQxMScsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTWluaW1hbGlzbScsXHJcbiAgICAgICAgICAgICAgICB0aGVtZTogJ01pbmltYWxpc20nLFxyXG4gICAgICAgICAgICAgICAgbW9kdWxlczogJzUnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMjAnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNjAnLFxyXG4gICAgICAgICAgICAgICAgaW1nc3JjOiAnLi9pbWcvY2FyZDExLmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogJzM1Ljk5JyxcclxuICAgICAgICAgICAgICAgIHN0b2NrOiAnMycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFydGljbGU6ICdjYXJkMTInLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0dyZWVuIHBsYW50cycsXHJcbiAgICAgICAgICAgICAgICB0aGVtZTogJ01pbmltYWxpc20nLFxyXG4gICAgICAgICAgICAgICAgbW9kdWxlczogJzUnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxODAnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJyxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJy4vaW1nL2NhcmQxMi5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6ICczNy45OScsXHJcbiAgICAgICAgICAgICAgICBzdG9jazogJzMnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlOiAnY2FyZDEzJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdUcmF2ZWwnLFxyXG4gICAgICAgICAgICAgICAgdGhlbWU6ICdUcmF2ZWwnLFxyXG4gICAgICAgICAgICAgICAgbW9kdWxlczogJzUnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxNTAnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnOTAnLFxyXG4gICAgICAgICAgICAgICAgaW1nc3JjOiAnLi9pbWcvY2FyZDEzLmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogJzQxLjk5JyxcclxuICAgICAgICAgICAgICAgIHN0b2NrOiAnMycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFydGljbGU6ICdjYXJkMTQnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0dyZXluZXNzJyxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiAnTWluaW1hbGlzbScsXHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzOiAnMycsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzE4MCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc5MCcsXHJcbiAgICAgICAgICAgICAgICBpbWdzcmM6ICcuL2ltZy9jYXJkMTQuanBlZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogJzQyLjk5JyxcclxuICAgICAgICAgICAgICAgIHN0b2NrOiAnMycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFydGljbGU6ICdjYXJkMTUnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Fic3RyYWN0aW9uJyxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiAnTWluaW1hbGlzbScsXHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzOiAnMycsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEyMCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc2MCcsXHJcbiAgICAgICAgICAgICAgICBpbWdzcmM6ICcuL2ltZy9jYXJkMTUuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiAnMzMuOTknLFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6ICczJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZTogJ2NhcmQxNicsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGhlIG91dGxpbmUgb2YgYSBkZWVyJyxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiAnTWluaW1hbGlzbScsXHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzOiAnMScsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzYwJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzkwJyxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJy4vaW1nL2NhcmQxNi5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6ICcyOS45OScsXHJcbiAgICAgICAgICAgICAgICBzdG9jazogJzMnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlOiAnY2FyZDE3JyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdUaGUgb3V0bGluZSBvZiBhbiBvd2wnLFxyXG4gICAgICAgICAgICAgICAgdGhlbWU6ICdNaW5pbWFsaXNtJyxcclxuICAgICAgICAgICAgICAgIG1vZHVsZXM6ICcxJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnNjAnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnOTAnLFxyXG4gICAgICAgICAgICAgICAgaW1nc3JjOiAnLi9pbWcvY2FyZDE3LmpwZWcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6ICcyOS45OScsXHJcbiAgICAgICAgICAgICAgICBzdG9jazogJzMnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlOiAnY2FyZDE4JyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEYXJrIGZvcmVzdCcsXHJcbiAgICAgICAgICAgICAgICB0aGVtZTogJ05hdHVyZScsXHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzOiAnMicsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEyMCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc5MCcsXHJcbiAgICAgICAgICAgICAgICBpbWdzcmM6ICcuL2ltZy9jYXJkMTguanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiAnNDUuOTknLFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6ICczJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmRKU09OO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YU9iaigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJkT2JqO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YUxTKCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGFMUyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWx0ZXInKTtcclxuICAgICAgICBpZiAoZGF0YUxTICYmIGRhdGFMUyAhPT0gJ1tdJykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShkYXRhTFMpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhcmRPYmo7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0RGF0YUZpbHRlcigpIHtcclxuICAgICAgICBjb25zdCBkYXRhTFMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlsdGVyJyk7XHJcbiAgICAgICAgaWYgKGRhdGFMUyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IEpTT04ucGFyc2UoZGF0YUxTKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGF0YUxvYWRlcjtcclxuIiwiY2xhc3MgUG9wdXAge1xyXG4gICAgY3JlYXRlUG9wdXAxKHNlbGVjdENhcmQpIHtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Ztb2RhbCcpO1xyXG4gICAgICAgIG1vZGFsLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGA8ZGl2IGNsYXNzPVwibW9kYWwtb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtd2luZG93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbC1jbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICZ0aW1lcztcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibW9kYWxfX2ltZ1wiIHNyYz0ke3NlbGVjdENhcmQuaW1nc3JjfSBhbHQ9XCIke3NlbGVjdENhcmQuYXJ0aWNsZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2NvbnRlbnRcIiBpZD0ncGljdHVyZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz0nbW9kYWxfX2NvbnRlbnRfbmFtZSc+JHtzZWxlY3RDYXJkLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiBQcmljZTogJCR7c2VsZWN0Q2FyZC5wcmljZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+IDxiPlRoZW1lOjwvYj4gJHtzZWxlY3RDYXJkLnRoZW1lfSA8L2g1PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PiA8Yj5OdW1iZXIgb2YgbW9kdWxlczo8L2I+ICR7c2VsZWN0Q2FyZC5tb2R1bGVzfSA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+IDxiPldpZHRoOiA8L2I+ICR7c2VsZWN0Q2FyZC53aWR0aH0gY20gPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PiA8Yj5IZWlnaHQ6IDwvYj4gJHtzZWxlY3RDYXJkLmhlaWdodH0gY20gPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PiA8Yj5TdG9jayBhdmFpbGFiaWxpdHk6IDwvYj4gJHtzZWxlY3RDYXJkLnN0b2NrfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgICAgICByZXR1cm4gbW9kYWw7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVQb3B1cChzZWxlY3RDYXJkKSB7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCd2bW9kYWwnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgICAgICBjb25zdCBwb3B1cFRlbXBsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBsLXBvcHVwJyk7XHJcbiAgICAgICAgaWYgKHBvcHVwVGVtcGwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBwb3B1cENsb25lID0gcG9wdXBUZW1wbC5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgY29uc3QgcG9wdXBQaG90byA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLm1vZGFsX19pbWcnKTtcclxuICAgICAgICAgICAgY29uc3QgcG9wdXBOYW1lID0gcG9wdXBDbG9uZS5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvbnRlbnRfbmFtZScpO1xyXG4gICAgICAgICAgICBjb25zdCBwb3B1cFByaWNlID0gcG9wdXBDbG9uZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfcHJpY2UnKTtcclxuICAgICAgICAgICAgY29uc3QgcG9wdXBUaGVtZSA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLnBvcHVwX3RoZW1lJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwTW9kdWxlcyA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLnBvcHVwX21vZHVsZXMnKTtcclxuICAgICAgICAgICAgY29uc3QgcG9wdXBXaWR0aCA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLnBvcHVwX3dpZHRoJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwSGVpZ2h0ID0gcG9wdXBDbG9uZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfaGVpZ2h0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwU3RvY2sgPSBwb3B1cENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9zdG9jaycpO1xyXG4gICAgICAgICAgICAvL2NvbnN0IGNhcnRBZGQgPSBjYXJkQ2xvbmUucXVlcnlTZWxlY3RvcignLmFkZCcpO1xyXG4gICAgICAgICAgICBpZiAocG9wdXBQaG90byAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cFBob3RvLnNyYyA9IHNlbGVjdENhcmQuaW1nc3JjO1xyXG4gICAgICAgICAgICAgICAgcG9wdXBQaG90by5hbHQgPSBzZWxlY3RDYXJkLmFydGljbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBvcHVwTmFtZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cE5hbWUudGV4dENvbnRlbnQgPSBzZWxlY3RDYXJkLm5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBvcHVwUHJpY2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBQcmljZS50ZXh0Q29udGVudCA9IGBQcmljZTogJCR7c2VsZWN0Q2FyZC5wcmljZX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb3B1cFRoZW1lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwVGhlbWUudGV4dENvbnRlbnQgPSBgVGhlbWU6ICR7c2VsZWN0Q2FyZC50aGVtZX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb3B1cE1vZHVsZXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBNb2R1bGVzLnRleHRDb250ZW50ID0gYE1vZHVsZXM6ICR7c2VsZWN0Q2FyZC5tb2R1bGVzfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBvcHVwV2lkdGggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBXaWR0aC50ZXh0Q29udGVudCA9IGBXaWR0aDogJHtzZWxlY3RDYXJkLndpZHRofSBjbWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBvcHVwSGVpZ2h0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwSGVpZ2h0LnRleHRDb250ZW50ID0gYEhlaWdodDogJHtzZWxlY3RDYXJkLmhlaWdodH0gY21gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb3B1cFN0b2NrICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwU3RvY2sudGV4dENvbnRlbnQgPSBgU3RvY2sgYXZhaWxhYmlsaXR5OjogJHtzZWxlY3RDYXJkLnN0b2NrfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kKHBvcHVwQ2xvbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY2FyZHMnKTtcclxuICAgICAgICBtb2RhbC5hcHBlbmQoZnJhZ21lbnQpO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52bW9kYWwnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1vZmYnKTtcclxuICAgICAgICBwb3B1cCA9PT0gbnVsbCB8fCBwb3B1cCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9wdXAucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUtcG9wdXAuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlLWZpbHRlcnMuY3NzJztcclxuLy9pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vc3JjL3R5cGVzL3R5cGVzJztcclxuaW1wb3J0IERhdGFMb2FkZXIgZnJvbSAnLi9kYXRhLWxvYWRlcic7XHJcbi8vaW1wb3J0IFBvcHVwIGZyb20gJy4vcG9wdXAnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG4vL2ltcG9ydCBjYXJkX2ZpbHRlciBmcm9tICcuL2ZpbHRlcnMnO1xyXG5jb25zdCBsb2FkID0gbmV3IERhdGFMb2FkZXIoe30pO1xyXG5jb25zdCBjYXJkcyA9IG5ldyBDYXJkKCk7XHJcbmNvbnN0IGRhdGEgPSBsb2FkLmdldERhdGFMUygpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgIGNhcmRzLmNyZWF0ZUNhcmQoZGF0YVtpXSk7XHJcbn1cclxuY2FyZHMuY2FyZF9tb3JlKCk7XHJcbmNhcmRzLmNhcmRfYWRkKCk7XHJcbmNhcmRzLmNhcmRfZmlsdGVyKCk7XHJcbmNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiKTtcclxuY2hlY2tib3hlcy5mb3JFYWNoKChib3gpID0+IHtcclxuICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgY2FyZHMuZGVsZXRlKCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnY29uc29sZSBpbmRleHRzJyk7XHJcbiAgICAgICAgY29uc3QgZGF0YUZpbHRlciA9IGxvYWQuZ2V0RGF0YUZpbHRlcigpO1xyXG4gICAgICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY2FyZHMnKT8ucmVtb3ZlQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhRmlsdGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNhcmRzLmNyZWF0ZUNhcmQoZGF0YUZpbHRlcltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhcmRzLmNhcmRfbW9yZSgpO1xyXG4gICAgICAgIGNhcmRzLmNhcmRfYWRkKCk7XHJcbiAgICAgICAgY2FyZHMuY2FyZF9maWx0ZXIoKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZVtib3guaWRdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGJveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgICBib3guY2hlY2tlZCA9IGZhbHNlO1xyXG59KTtcclxuY29uc3QgY2xlYXJfZmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhcl9maWx0ZXJzJyk7XHJcbmlmIChjbGVhcl9maWx0ZXJzICE9IG51bGwpIHtcclxuICAgIGNsZWFyX2ZpbHRlcnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2ZpbHRlcicpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdkYXRhJyk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGxvYWQuZ2V0RGF0YSgpO1xyXG4gICAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJveElEID0gYm94LmlkO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShib3hJRCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2FyZHMuZGVsZXRlKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNhcmRzLmNyZWF0ZUNhcmQoZGF0YVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhcmRzLmNhcmRfbW9yZSgpO1xyXG4gICAgICAgIGNhcmRzLmNhcmRfYWRkKCk7XHJcbiAgICAgICAgY2FyZHMuY2FyZF9maWx0ZXIoKTtcclxuICAgICAgICBjaGVja2JveGVzLmZvckVhY2goKGJveCkgPT4ge1xyXG4gICAgICAgICAgICBib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuY29uc3QgY2FydF9jb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LWNvdW50ZXInKTtcclxuY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydF92YWx1ZScpO1xyXG5pZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NhcnQtdmFsdWUnKTtcclxuICAgIGNhcnRfY291bnQudmFsdWUgPSB2YWx1ZTtcclxufVxyXG5jb25zdCBjbGVhcl9jYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyX2NhcnQnKTtcclxuaWYgKGNsZWFyX2NhcnQgIT0gbnVsbCkge1xyXG4gICAgY2xlYXJfY2FydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2FydCcpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjYXJ0X3ZhbHVlJyk7XHJcbiAgICAgICAgY2FydF9jb3VudC52YWx1ZSA9ICcwJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9fZGVzY3JpcHRpb24nKS5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnYWRkZWQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmNvbnN0IGRhdGFMUyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0Jyk7XHJcbmlmIChkYXRhTFMgJiYgZGF0YUxTICE9PSAnW10nKSB7XHJcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShkYXRhTFMpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2Rlc2NyaXB0aW9uJykuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcmRfbmFtZSA9IGNhcmQuY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcclxuICAgICAgICBkYXRhLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW0ubmFtZSA9PT0gY2FyZF9uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2FkZGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmNvbnN0IGNsZWFyX0xTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyX2FsbCcpO1xyXG5pZiAoY2xlYXJfTFMgIT0gbnVsbCkge1xyXG4gICAgY2xlYXJfTFMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=