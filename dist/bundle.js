/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img//main/main.jpg */ \"./src/assets/img/main/main.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/main/main1.jpg */ \"./src/assets/img/main/main1.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/main/main2.jpg */ \"./src/assets/img/main/main2.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: \\\"Open Sans\\\", sans-serif;\\r\\n  background: #fff;\\r\\n  color: #333;\\r\\n  line-height: 1.6;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: #333;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nh1,\\r\\nh2 {\\r\\n  font-weight: 300;\\r\\n  line-height: 1.2;\\r\\n}\\r\\n\\r\\np {\\r\\n  margin: 10px 0;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n/* ------------------------------------------------ */\\r\\n\\r\\n/* Navbar */\\r\\n.navbar {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n\\r\\n  background-color: #333;\\r\\n  color: #fff;\\r\\n  opacity: 0.8;\\r\\n  width: 100%;\\r\\n  height: 70px;\\r\\n  position: fixed;\\r\\n  top: 0px;\\r\\n  padding: 0 30px;\\r\\n  transition: 0.5s;\\r\\n  z-index: 10;\\r\\n}\\r\\n\\r\\n.navbar.top {\\r\\n  background: transparent;\\r\\n}\\r\\n\\r\\n.navbar a {\\r\\n  color: #fff;\\r\\n  padding: 10px 20px;\\r\\n  margin: 0 5px;\\r\\n}\\r\\n\\r\\n.navbar a:hover {\\r\\n  border-bottom: #ffa000 2px solid;\\r\\n}\\r\\n\\r\\n.navbar ul {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.navbar .logo {\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n/* ------------------------------------------------ */\\r\\n\\r\\n/* Header */\\r\\n.hero {\\r\\n  height: 100vh;\\r\\n  position: relative;\\r\\n  color: #fff;\\r\\n  transition: all 0.6s ease-in-out;\\r\\n}\\r\\n\\r\\n.img {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center center/cover;\\r\\n}\\r\\n\\r\\n.img1 {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat center center/cover;\\r\\n}\\r\\n\\r\\n.img2 {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") no-repeat center center/cover;\\r\\n}\\r\\n\\r\\n.hero .content {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  text-align: center;\\r\\n  height: 100%;\\r\\n  padding: 0 20px;\\r\\n}\\r\\n\\r\\n.hero .content h1 {\\r\\n  font-size: 55px;\\r\\n}\\r\\n\\r\\n.hero .content p {\\r\\n  font-size: 23px;\\r\\n  max-width: 600px;\\r\\n  margin: 20px 0 30px;\\r\\n}\\r\\n\\r\\n.hero::before {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background: rgba(0, 0, 0, 0.3);\\r\\n}\\r\\n\\r\\n.hero * {\\r\\n  z-index: 10;\\r\\n}\\r\\n\\r\\n.hero.blog {\\r\\n  height: 30vh;\\r\\n}\\r\\n\\r\\n.menu-hero {\\r\\n  height: 9vh;\\r\\n}\\r\\n\\r\\n.menu-hero::before {\\r\\n  position: absolute;\\r\\n  background: rgba(0, 0, 0, 0);\\r\\n}\\r\\n\\r\\n/* ------------------------------------------------ */\\r\\n\\r\\n/* gallery */\\r\\n#gallery {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  height: 85vh;\\r\\n}\\r\\n\\r\\n#gallery .card_container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  flex-wrap: wrap;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n#gallery .card {\\r\\n  width: 20vw;\\r\\n}\\r\\n\\r\\n.gallery img {\\r\\n  transition: all 0.1s ease-in-out;\\r\\n}\\r\\n\\r\\n.gallery img:hover {\\r\\n  transform: scale(1.05);\\r\\n  opacity: 0.9;\\r\\n}\\r\\n\\r\\n/* ------------------------------------------------ */\\r\\n\\r\\n/* order section */\\r\\n.order {\\r\\n  background-color: #fafafa;\\r\\n  height: 45vh;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.whitebox {\\r\\n  background-color: #fff;\\r\\n  box-shadow: 0px 12px 18px -6px rgb(0 0 0 / 30%);\\r\\n  flex: 1;\\r\\n  max-width: 70rem;\\r\\n  height: 20rem;\\r\\n  gap: 20px;\\r\\n\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  transition: all 0.3s ease-out;\\r\\n}\\r\\n\\r\\n.whitebox:hover {\\r\\n  transform: scale(1.1);\\r\\n}\\r\\n\\r\\n.whitebox_text {\\r\\n  color: #333;\\r\\n}\\r\\n\\r\\n.whitebox_text h2 {\\r\\n  font-size: 50px;\\r\\n  margin-bottom: 15px;\\r\\n}\\r\\n\\r\\n.whitebox_text p {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.order_btn {\\r\\n  background-color: #ff8f00;\\r\\n  padding: 10px 36px;\\r\\n  margin-top: 12px;\\r\\n  border: 2px #fff solid;\\r\\n  transition: all 0.3s ease-out;\\r\\n}\\r\\n\\r\\n.order_btn:hover {\\r\\n  background-color: #c67100;\\r\\n}\\r\\n\\r\\n.btn a {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n/* ------------------------------------------------ */\\r\\n\\r\\n/* Contact */\\r\\n#contact {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  margin-bottom: 50px;\\r\\n}\\r\\n\\r\\n.contact_container {\\r\\n  display: flex;\\r\\n  gap: 4rem;\\r\\n}\\r\\n\\r\\n.contact_container h2 {\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.contact_info {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n.days_hours {\\r\\n  display: flex;\\r\\n  gap: 30px;\\r\\n}\\r\\n.days,\\r\\n.hours {\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n/* ------------------------------------------------ */\\r\\n\\r\\n/* Contact-slides */\\r\\n.slide_container {\\r\\n  width: 30vw;\\r\\n  margin-bottom: 40px;\\r\\n}\\r\\n\\r\\n.swiper {\\r\\n  width: 100%;\\r\\n  height: fit-content;\\r\\n}\\r\\n\\r\\n.swiper-slide img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.swiper .swiper-button-prev,\\r\\n.swiper .swiper-button-next {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.swiper .swiper-pagination-bullet-active {\\r\\n  background: #fff;\\r\\n}\\r\\n\\r\\n/* ------------------------------------------------ */\\r\\n\\r\\n/* Menu */\\r\\nul.list {\\r\\n  list-style-type: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  border-bottom: 1px solid #ccc;\\r\\n}\\r\\nul.list::after {\\r\\n  content: \\\"\\\";\\r\\n  display: block;\\r\\n  clear: both;\\r\\n}\\r\\n.tab-button {\\r\\n  display: block;\\r\\n  padding: 10px 20px 10px 20px;\\r\\n  float: left;\\r\\n  margin-right: -1px;\\r\\n  margin-bottom: -1px;\\r\\n  color: grey;\\r\\n  text-decoration: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.orange {\\r\\n  border-top: 2px solid orange;\\r\\n  border-right: 1px solid #ccc;\\r\\n  border-bottom: 1px solid white;\\r\\n  border-left: 1px solid #ccc;\\r\\n  color: black;\\r\\n  margin-top: -2px;\\r\\n}\\r\\n\\r\\n.tab-content {\\r\\n  display: none;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.outer-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  width: 100vw;\\r\\n  /* height: 50vh; */\\r\\n}\\r\\n\\r\\n.inner-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  width: 80vw;\\r\\n}\\r\\n\\r\\n/* ramen menu */\\r\\n.tab-content .card-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(2, 1fr);\\r\\n  gap: 30px;\\r\\n  margin: 15px 0px 30px 0px;\\r\\n}\\r\\n\\r\\n.tab-content .card {\\r\\n  border: 1px solid #c2c2c2;\\r\\n  border-left: 5px solid #ff9800;\\r\\n  box-shadow: 0px 12px 18px -6px rgb(0 0 0 / 10%);\\r\\n  background-color: #fff;\\r\\n  padding: 20px;\\r\\n  border-radius: 4px;\\r\\n\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.tab-content .card:hover {\\r\\n  transform: scale(1.01);\\r\\n}\\r\\n\\r\\n.tab-content .card h3 {\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.tab-content .btn-container {\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  align-items: flex-end;\\r\\n}\\r\\n\\r\\n.tab-content .card .btn {\\r\\n  background-color: #c2185b;\\r\\n  width: 150px;\\r\\n}\\r\\n\\r\\n.tab-content .card .btn:hover {\\r\\n  background-color: #8c0032;\\r\\n}\\r\\n\\r\\n.tab-content .card div:nth-child(2) {\\r\\n  margin-bottom: 20px;\\r\\n  width: 500px;\\r\\n}\\r\\n\\r\\n/* ------------------------------------------------ */\\r\\n\\r\\n/* Footer */\\r\\n.footer {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  height: 100px;\\r\\n}\\r\\n\\r\\n.footer a {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.footer a:hover {\\r\\n  color: #ffa000;\\r\\n}\\r\\n\\r\\n.footer .social > * {\\r\\n  margin-right: 30px;\\r\\n}\\r\\n/* ------------------------------------------------ */\\r\\n\\r\\n/* Mobile */\\r\\n@media (max-width: 768px) {\\r\\n  .navbar {\\r\\n    flex-direction: column;\\r\\n    height: 120px;\\r\\n    padding: 20px;\\r\\n  }\\r\\n\\r\\n  .navbar a {\\r\\n    padding: 10px 10px;\\r\\n    margin: 0 3px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/utilities.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/utilities.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --main_color: #ffa000;\\r\\n}\\r\\n\\r\\n/* Text colors */\\r\\n.text-primary {\\r\\n  color: var(--main_color);\\r\\n}\\r\\n\\r\\n/* Button */\\r\\n.btn {\\r\\n  cursor: pointer;\\r\\n  display: inline-block;\\r\\n  padding: 10px 30px;\\r\\n  color: #fff;\\r\\n  background-color: #ff8f00;\\r\\n  border: none;\\r\\n  border-radius: 1px;\\r\\n  transition: all 0.3s ease-out;\\r\\n}\\r\\n\\r\\n.btn:hover {\\r\\n  opacity: 0.9;\\r\\n  background-color: #c67100;\\r\\n}\\r\\n\\r\\n.btn-primary,\\r\\n.bg-primary {\\r\\n  background: var(--main_color);\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.btn-dark,\\r\\n.bg-dark {\\r\\n  background: #333;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n/* Section header */\\r\\n.section-header {\\r\\n  padding: 30px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.section-header h2 {\\r\\n  font-size: 40px;\\r\\n  margin: 20px 0;\\r\\n}\\r\\n\\r\\n.section-padding {\\r\\n  padding: 20px 20px 40px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/styles/utilities.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/styles/style.css?");

/***/ }),

/***/ "./src/styles/utilities.css":
/*!**********************************!*\
  !*** ./src/styles/utilities.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_utilities_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./utilities.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/utilities.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_utilities_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_utilities_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_utilities_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_utilities_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/styles/utilities.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_utilities_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/utilities.css */ \"./src/styles/utilities.css\");\n/* harmony import */ var _pages_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/images */ \"./src/pages/images.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_home__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// image slides -------------------------------\r\n\r\nconst swiper = new Swiper(\".swiper\", {\r\n  // Optional parameters\r\n\r\n  loop: true,\r\n\r\n  // If we need pagination\r\n  pagination: {\r\n    el: \".swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n\r\n  // Navigation arrows\r\n  navigation: {\r\n    nextEl: \".swiper-button-next\",\r\n    prevEl: \".swiper-button-prev\",\r\n  },\r\n});\r\n\r\n// Menu tabs -------------------------------\r\n\r\n(function activateTabs() {\r\n  const tabs = document.querySelectorAll(\".tab-button\");\r\n  const tabsContent = document.querySelectorAll(\".tab-content\");\r\n\r\n  tabs.forEach((a) =>\r\n    a.addEventListener(\"mousedown\", () => displayTabContent(a))\r\n  );\r\n\r\n  function displayTabContent(a) {\r\n    for (let i = 0; i < tabs.length; i++) {\r\n      tabs[i].classList.remove(\"orange\");\r\n      tabsContent[i].classList.remove(\"show\");\r\n      if (tabs[i] == a) {\r\n        tabs[i].classList.add(\"orange\");\r\n        tabsContent[i].classList.add(\"show\");\r\n      }\r\n    }\r\n  }\r\n})();\r\n\r\n// Menu data -------------------------------\r\n\r\nlet menuArray = [\r\n  _pages_menu__WEBPACK_IMPORTED_MODULE_4__.teaArray,\r\n  _pages_menu__WEBPACK_IMPORTED_MODULE_4__.appetizerArray,\r\n  _pages_menu__WEBPACK_IMPORTED_MODULE_4__.ramenArray,\r\n  _pages_menu__WEBPACK_IMPORTED_MODULE_4__.noodleArray,\r\n];\r\nconst cardSection = document.querySelectorAll(\".card-container\");\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  for (let k = 0; k < menuArray.length; k++) {\r\n    for (let i = 0; i < menuArray[k].length; i++) {\r\n      if (menuArray[k][i].description == undefined) {\r\n        menuArray[k][i].description = \"\";\r\n      }\r\n      cardSection[k].insertAdjacentHTML(\r\n        \"beforeend\",\r\n        `<div class=\"card\">\r\n        <h3>${menuArray[k][i].title}</h3>\r\n        <div>${menuArray[k][i].description}</div>\r\n        <div>$${menuArray[k][i].price}</div>\r\n        <div class=\"btn-container\">\r\n        <button data-price=${menuArray[k][i].price} data-title=${menuArray[k][i].title} class=\"btn add-btn\">Add to Order</button>\r\n        </div>\r\n      </div>`\r\n      );\r\n    }\r\n  }\r\n});\r\n\r\n// -----------------------------------------\r\n\r\nlet cart = {};\r\nif (localStorage.getItem(\"cart\")) {\r\n  cart = JSON.parse(localStorage.getItem(\"cart\"));\r\n}\r\nconst addToCartBtn = document.querySelectorAll(\".card-container\");\r\n\r\naddToCartBtn.forEach((card) =>\r\n  card.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"add-btn\")) {\r\n      let price = parseInt(e.target.dataset.price);\r\n      let title = e.target.dataset.title;\r\n\r\n      if (title in cart) {\r\n        cart[title].qty++;\r\n      } else {\r\n        let cartItem = {\r\n          title: title,\r\n          price: price,\r\n          qty: 1,\r\n        };\r\n        cart[title] = cartItem;\r\n      }\r\n      localStorage.setItem(\"cart\", JSON.stringify(cart));\r\n    }\r\n  })\r\n);\r\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ (() => {

eval("const heroImage = document.querySelector(\"#hero\");\r\n\r\nfunction switchImage() {\r\n  if (heroImage.classList.contains(\"menu-hero\")) {\r\n    return;\r\n  }\r\n\r\n  if (heroImage.classList.contains(\"img\")) {\r\n    heroImage.classList.remove(\"img\");\r\n    heroImage.classList.add(\"img1\");\r\n    return;\r\n  }\r\n\r\n  if (heroImage.classList.contains(\"img1\")) {\r\n    heroImage.classList.remove(\"img1\");\r\n    heroImage.classList.add(\"img2\");\r\n    return;\r\n  }\r\n  if (heroImage.classList.contains(\"img2\")) {\r\n    heroImage.classList.remove(\"img2\");\r\n    heroImage.classList.add(\"img\");\r\n    return;\r\n  }\r\n}\r\n\r\nsetInterval(() => {\r\n  switchImage();\r\n}, 5000);\r\n\r\n// JQuery navbar & scrolling -------------------------\r\n\r\nconst navbar = document.querySelector(\".navbar\");\r\nlet scrolled = false;\r\n\r\nwindow.onscroll = function () {\r\n  if (navbar.classList.contains(\"menu\")) {\r\n    return;\r\n  }\r\n  if (window.pageYOffset > 100) {\r\n    navbar.classList.remove(\"top\");\r\n    if (!scrolled) {\r\n      navbar.style.transform = \"translateY(-70px)\";\r\n    }\r\n    setTimeout(function () {\r\n      navbar.style.transform = \"translateY(0)\";\r\n      scrolled = true;\r\n    }, 200);\r\n  } else {\r\n    navbar.classList.add(\"top\");\r\n    scrolled = false;\r\n  }\r\n};\r\n\r\n// Smooth Scrolling\r\n$(\"#navbar a, .btn\").on(\"click\", function (e) {\r\n  if (this.hash !== \"\") {\r\n    e.preventDefault();\r\n\r\n    const hash = this.hash;\r\n\r\n    $(\"html, body\").animate(\r\n      {\r\n        scrollTop: $(hash).offset().top,\r\n      },\r\n      400\r\n    );\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/images.js":
/*!*****************************!*\
  !*** ./src/pages/images.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_img_food_food_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/food/food.jpg */ \"./src/assets/img/food/food.jpg\");\n/* harmony import */ var _assets_img_food_food1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/food/food1.jpg */ \"./src/assets/img/food/food1.jpg\");\n/* harmony import */ var _assets_img_food_food2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/food/food2.jpg */ \"./src/assets/img/food/food2.jpg\");\n/* harmony import */ var _assets_img_food_food3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/food/food3.jpg */ \"./src/assets/img/food/food3.jpg\");\n/* harmony import */ var _assets_img_food_food4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/food/food4.jpg */ \"./src/assets/img/food/food4.jpg\");\n/* harmony import */ var _assets_img_food_dish_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/food/dish.jpg */ \"./src/assets/img/food/dish.jpg\");\n/* harmony import */ var _assets_img_food_dish1_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/img/food/dish1.jpg */ \"./src/assets/img/food/dish1.jpg\");\n/* harmony import */ var _assets_img_food_dish2_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/img/food/dish2.jpg */ \"./src/assets/img/food/dish2.jpg\");\n/* harmony import */ var _assets_img_main_contact_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/img/main/contact.jpg */ \"./src/assets/img/main/contact.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/pages/images.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appetizerArray\": () => (/* binding */ appetizerArray),\n/* harmony export */   \"noodleArray\": () => (/* binding */ noodleArray),\n/* harmony export */   \"ramenArray\": () => (/* binding */ ramenArray),\n/* harmony export */   \"teaArray\": () => (/* binding */ teaArray)\n/* harmony export */ });\n\r\n\r\nclass Item {\r\n  constructor(price, title, description) {\r\n    this.price = price;\r\n    this.title = title;\r\n    this.description = description;\r\n  }\r\n}\r\n\r\nlet ramen1 = new Item(\r\n  \"14.00\",\r\n  \"R1. Tonkotsu\",\r\n  \"Classic pork broth, topped w. egg, chashu pork, bamboo shoots, red ginger, scallion.\"\r\n);\r\n\r\nlet ramen2 = new Item(\r\n  \"14.00\",\r\n  \"R2. Shoyu\",\r\n  \"Soy sauce pork broth, topped w. kikurage, egg, chashu pork, bamboo shoots, scallion.\"\r\n);\r\n\r\nlet ramen3 = new Item(\r\n  \"14.00\",\r\n  \"R3. Miso\",\r\n  \"Pork broth w. miso, topped w. corn, egg, chashu pork, bamboo shoots, scallion.\"\r\n);\r\n\r\nlet ramen4 = new Item(\r\n  \"17.00\",\r\n  \"R4. Spicy Miso\",\r\n  \"Soy sauce pork broth, topped w. kikurage, egg, chashu pork, bamboo shoots, scallion.\"\r\n);\r\nlet ramen5 = new Item(\r\n  \"14.00\",\r\n  \"R5. Negi\",\r\n  \"Soy sauce pork broth, topped w. kikurage, egg, chashu pork, bamboo shoots, scallion.\"\r\n);\r\nlet ramen6 = new Item(\r\n  \"20.00\",\r\n  \"Gomoku\",\r\n  \"Chef picked seafood, vegetable, egg in pork broth.\"\r\n);\r\nlet ramen7 = new Item(\r\n  \"16.00\",\r\n  \"Touchucha\",\r\n  \"Tochucha tea broth, w. tochucha noodles, topped w. egg, pork chashu, bamboo shoots.\"\r\n);\r\n\r\nlet ramen8 = new Item(\r\n  \"16.00\",\r\n  \"Cold Tochucha\",\r\n  \"Cold tochucha ramen topped w. kaiware, nori egg, wild mushrooms, in tochucha dressing.\"\r\n);\r\n\r\nlet ramenArray = [\r\n  ramen1,\r\n  ramen2,\r\n  ramen3,\r\n  ramen4,\r\n  ramen5,\r\n  ramen6,\r\n  ramen7,\r\n  ramen8,\r\n];\r\n\r\n// ---------------------------------------------------\r\n\r\nlet tea1 = new Item(\"6.50\", \"Matcha Latte\");\r\nlet tea2 = new Item(\"6.50\", \"Brown Sugar Matcha Latte\");\r\nlet tea3 = new Item(\"6.50\", \"Matcha Yuzu Lemonade\");\r\nlet tea4 = new Item(\"6.00\", \"Touchucha Yuzu Lemonade\");\r\nlet tea5 = new Item(\"5.00\", \"Touchucha w. Ginger\");\r\nlet tea6 = new Item(\"6.00\", \"Koucha Orange\");\r\nlet tea7 = new Item(\"12.00\", \"Matcha Tiramisu\");\r\nlet tea8 = new Item(\"4.00\", \"Touchucha Americano\");\r\n\r\nlet teaArray = [tea1, tea2, tea3, tea4, tea5, tea6, tea7, tea8];\r\n\r\n// ---------------------------------------------------\r\n\r\nlet appetizer1 = new Item(\r\n  \"8.00\",\r\n  \"A1. Edamame\",\r\n  \"Steamed soybeans w. matcha salt.\"\r\n);\r\nlet appetizer2 = new Item(\r\n  \"9.00\",\r\n  \"A2. Gyoza\",\r\n  \"Japanese Pan fried pork dumplings.\"\r\n);\r\n\r\nlet appetizer3 = new Item(\r\n  \"9.00\",\r\n  \"A3. Takoyaki\",\r\n  \"Octopus balls w. bonito flakes.\"\r\n);\r\nlet appetizer4 = new Item(\r\n  \"10.00\",\r\n  \"A4. Pork Bun\",\r\n  \"Chashu pork in buns w. lettuce & cucumber.\"\r\n);\r\nlet appetizer5 = new Item(\r\n  \"10.00\",\r\n  \"A5. Shishito pepper\",\r\n  \"Sautéed shishito pepper w. matcha salt.\"\r\n);\r\nlet appetizer6 = new Item(\r\n  \"10.00\",\r\n  \"A6. Agedashi Tofu\",\r\n  \"Deep fried tofu with tensuyu sauce.\"\r\n);\r\nlet appetizer7 = new Item(\r\n  \"14.00\",\r\n  \"A7. Geso Fry\",\r\n  \"Japanese style fried calamari.\"\r\n);\r\nlet appetizer8 = new Item(\r\n  \"11.00\",\r\n  \"A.8 Yuzu Tebasaki\",\r\n  \"Japanese fried chicken wings w. yuzu & lemon sauce.\"\r\n);\r\n\r\nlet appetizerArray = [\r\n  appetizer1,\r\n  appetizer2,\r\n  appetizer3,\r\n  appetizer4,\r\n  appetizer5,\r\n  appetizer6,\r\n  appetizer7,\r\n  appetizer8,\r\n];\r\n\r\n// ---------------------------------------------------\r\n\r\nlet noodle1 = new Item(\r\n  \"15.00\",\r\n  \"Y1. Yaki Soa\",\r\n  \"Pan fried soba noodles w. pork & veggies in okonomi sauce\"\r\n);\r\nlet noodle2 = new Item(\r\n  \"18.00\",\r\n  \"Y2. Seafood Yaki Soba\",\r\n  \"Pan fried soba noodles w. shrimp, squid, veggies, salt & pepper\"\r\n);\r\nlet noodle3 = new Item(\r\n  \"15.00\",\r\n  \"Y3. Yaki Udon\",\r\n  \"Pan fried udon w. pork veggies in okonomi sauce\"\r\n);\r\nlet noodle4 = new Item(\r\n  \"16.00\",\r\n  \"Y4. Kimchi Yaki Udon\",\r\n  \"Pan fried udon w. kimchi, pork, veggies in okonomi sauce\"\r\n);\r\nlet noodle5 = new Item(\"16.00\", \"Y5. Curry Udon w. Beef\", \"\");\r\n\r\nlet noodleArray = [noodle1, noodle2, noodle3, noodle4, noodle5];\r\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/pages/menu.js?");

/***/ }),

/***/ "./src/assets/img/food/dish.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/food/dish.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/dish.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/food/dish.jpg?");

/***/ }),

/***/ "./src/assets/img/food/dish1.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/food/dish1.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/dish1.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/food/dish1.jpg?");

/***/ }),

/***/ "./src/assets/img/food/dish2.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/food/dish2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/dish2.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/food/dish2.jpg?");

/***/ }),

/***/ "./src/assets/img/food/food.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/food/food.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/food.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/food/food.jpg?");

/***/ }),

/***/ "./src/assets/img/food/food1.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/food/food1.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/food1.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/food/food1.jpg?");

/***/ }),

/***/ "./src/assets/img/food/food2.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/food/food2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/food2.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/food/food2.jpg?");

/***/ }),

/***/ "./src/assets/img/food/food3.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/food/food3.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/food3.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/food/food3.jpg?");

/***/ }),

/***/ "./src/assets/img/food/food4.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/food/food4.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/food4.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/food/food4.jpg?");

/***/ }),

/***/ "./src/assets/img/main/contact.jpg":
/*!*****************************************!*\
  !*** ./src/assets/img/main/contact.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/contact.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/main/contact.jpg?");

/***/ }),

/***/ "./src/assets/img/main/main.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/main/main.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/main.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/main/main.jpg?");

/***/ }),

/***/ "./src/assets/img/main/main1.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/main/main1.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/main1.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/main/main1.jpg?");

/***/ }),

/***/ "./src/assets/img/main/main2.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/main/main2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/main2.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/main/main2.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;