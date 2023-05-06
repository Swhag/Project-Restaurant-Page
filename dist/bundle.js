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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img//main/main.jpg */ \"./src/assets/img/main/main.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/main/main1.jpg */ \"./src/assets/img/main/main1.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/main/main2.jpg */ \"./src/assets/img/main/main2.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Open Sans', sans-serif;\\r\\n  background: #fff;\\r\\n  color: #333;\\r\\n  line-height: 1.6;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: #333;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nh1,\\r\\nh2 {\\r\\n  font-weight: 300;\\r\\n  line-height: 1.2;\\r\\n}\\r\\n\\r\\np {\\r\\n  margin: 10px 0;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n/* ------------------------------------------------ */\\r\\n\\r\\n/* Navbar */\\r\\n.navbar {\\r\\n  background-color: #333;\\r\\n  color: #fff;\\r\\n  opacity: 0.8;\\r\\n\\r\\n  position: fixed;\\r\\n  top: 0px;\\r\\n\\r\\n  width: 100%;\\r\\n  padding: 20px 30px;\\r\\n\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n\\r\\n  transition: 0.3s;\\r\\n  z-index: 20;\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .navbar {\\r\\n    padding: 15px;\\r\\n  }\\r\\n\\r\\n  .logo {\\r\\n    display: none;\\r\\n  }\\r\\n}\\r\\n\\r\\n.navbar.top {\\r\\n  background: transparent;\\r\\n  background-color: #333;\\r\\n}\\r\\n\\r\\n.menu-navbar {\\r\\n  position: static;\\r\\n}\\r\\n\\r\\n.navbar a {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.navbar .nav-link {\\r\\n  color: #fff;\\r\\n  padding: 10px 20px;\\r\\n  margin: 0 5px;\\r\\n}\\r\\n\\r\\n.navbar .nav-link:hover {\\r\\n  border-bottom: #ffa000 2px solid;\\r\\n}\\r\\n\\r\\n.navbar ul {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.navbar .logo {\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n/* ------------------------------------------------ */\\r\\n\\r\\n/* Header */\\r\\n.hero {\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  position: relative;\\r\\n  color: #fff;\\r\\n  transition: background 0.6s ease-in-out;\\r\\n}\\r\\n\\r\\n.img {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center center/cover;\\r\\n}\\r\\n\\r\\n.img1 {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat center center/cover;\\r\\n}\\r\\n\\r\\n.img2 {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") no-repeat center center/cover;\\r\\n}\\r\\n\\r\\n.hero .content {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  text-align: center;\\r\\n  height: 100%;\\r\\n  padding: 0 20px;\\r\\n}\\r\\n\\r\\n.hero .content h1 {\\r\\n  font-size: 55px;\\r\\n}\\r\\n\\r\\n.hero .content p {\\r\\n  font-size: 23px;\\r\\n  max-width: 600px;\\r\\n  margin: 20px 0 30px;\\r\\n}\\r\\n\\r\\n.hero::before {\\r\\n  content: '';\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background: rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\n.hero * {\\r\\n  z-index: 10;\\r\\n}\\r\\n\\r\\n.hero.blog {\\r\\n  height: 30vh;\\r\\n}\\r\\n\\r\\n/* ------------------------------------------------ */\\r\\n\\r\\n/* gallery */\\r\\n#gallery {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  max-height: 85%;\\r\\n  padding-bottom: 50px;\\r\\n}\\r\\n\\r\\n#gallery .image-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  flex-wrap: wrap;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n#gallery img {\\r\\n  max-width: 320px;\\r\\n  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\n@media (max-width: 1024px) {\\r\\n  #gallery img {\\r\\n    max-width: 300px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  #gallery img {\\r\\n    max-width: 150px;\\r\\n  }\\r\\n}\\r\\n\\r\\n#gallery img:hover {\\r\\n  transform: scale(1.05);\\r\\n  opacity: 0.9;\\r\\n}\\r\\n\\r\\n/* ------------------------------------------------ */\\r\\n\\r\\n/* order section */\\r\\n#order {\\r\\n  background-color: #fafafa;\\r\\n  max-height: 45vh;\\r\\n\\r\\n  margin: 30px 0 30px 0;\\r\\n  padding: 50px;\\r\\n\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#order .whitebox {\\r\\n  background-color: #fff;\\r\\n  box-shadow: 0px 12px 18px -6px rgb(0 0 0 / 30%);\\r\\n  width: 100%;\\r\\n  max-width: 70rem;\\r\\n  height: 20rem;\\r\\n  gap: 20px;\\r\\n\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  transition: all 0.3s ease-out;\\r\\n}\\r\\n\\r\\n#order .whitebox:hover {\\r\\n  transform: scale(1.03);\\r\\n}\\r\\n\\r\\n#order .whitebox_text {\\r\\n  color: #333;\\r\\n}\\r\\n\\r\\n#order .whitebox_text h2 {\\r\\n  font-size: 2.6rem;\\r\\n}\\r\\n\\r\\n#order .whitebox_text p {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#order .order_btn {\\r\\n  background-color: #ff8f00;\\r\\n  padding: 10px 36px;\\r\\n  margin-top: 12px;\\r\\n  border: 2px #fff solid;\\r\\n  transition: all 0.3s ease-out;\\r\\n}\\r\\n\\r\\n#order .order_btn:hover {\\r\\n  background-color: #c67100;\\r\\n}\\r\\n\\r\\n#order .btn a {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  #order {\\r\\n    padding: 50px 0 50px 0;\\r\\n  }\\r\\n\\r\\n  #order .whitebox_text h2 {\\r\\n    font-size: 1.8rem;\\r\\n  }\\r\\n\\r\\n  #order .whitebox_text p {\\r\\n    font-size: 0.9rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* ------------------------------------------------ */\\r\\n\\r\\n/* Contact */\\r\\n#contact {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding-bottom: 50px;\\r\\n}\\r\\n\\r\\n#contact .contact_container {\\r\\n  display: flex;\\r\\n  gap: 4rem;\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  #contact .contact_container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 0.5rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n#contact .contact_container h2 {\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n#contact .contact-info {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  #contact .contact-info {\\r\\n    align-items: center;\\r\\n  }\\r\\n}\\r\\n\\r\\n#contact .days-hours {\\r\\n  display: flex;\\r\\n  gap: 30px;\\r\\n}\\r\\n\\r\\n#contact .days,\\r\\n#contact .hours {\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n/* ------------------------------------------------ */\\r\\n\\r\\n/* Contact-slides */\\r\\n.slide_container {\\r\\n  max-width: 650px;\\r\\n  padding-bottom: 30px;\\r\\n}\\r\\n\\r\\n.swiper {\\r\\n  height: fit-content;\\r\\n}\\r\\n\\r\\n.swiper-slide img {\\r\\n  height: 500px;\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .slide_container {\\r\\n    max-width: 100vw;\\r\\n    padding-bottom: 40px;\\r\\n  }\\r\\n\\r\\n  .swiper-slide img {\\r\\n    height: 350px;\\r\\n  }\\r\\n}\\r\\n\\r\\n.swiper .swiper-button-prev,\\r\\n.swiper .swiper-button-next {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.swiper .swiper-pagination-bullet-active {\\r\\n  background: #fff;\\r\\n}\\r\\n\\r\\n/* ------------------------------------------------ */\\r\\n/* Menu Page Styling */\\r\\n/* ------------------------------------------------ */\\r\\n#menu-navbar {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n\\r\\n  background-color: #333;\\r\\n  color: #fff;\\r\\n  opacity: 0.8;\\r\\n  width: 100%;\\r\\n  height: 70px;\\r\\n  /* position: fixed; */\\r\\n  top: 0px;\\r\\n  padding: 0 30px;\\r\\n  transition: 0.5s;\\r\\n  z-index: 20;\\r\\n}\\r\\n\\r\\n.menu-tabs {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  border-bottom: 1px solid #ccc;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .menu-tabs {\\r\\n    width: 100%;\\r\\n    flex-direction: column;\\r\\n    text-align: center;\\r\\n  }\\r\\n}\\r\\n\\r\\n.tab-buttons {\\r\\n  padding: 10px 20px 10px 20px;\\r\\n  margin-right: -1px;\\r\\n  margin-bottom: -1px;\\r\\n  color: grey;\\r\\n  cursor: pointer;\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.orange {\\r\\n  border-top: 1px solid #ccc;\\r\\n  border-right: 1px solid #ccc;\\r\\n  border-bottom: 3px solid orange;\\r\\n  border-left: 1px solid #ccc;\\r\\n\\r\\n  margin-top: -2px;\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .orange {\\r\\n    color: white;\\r\\n    background-color: #ff8a65;\\r\\n  }\\r\\n\\r\\n  .tab-buttons {\\r\\n    border-bottom: 1px solid #ff8a65;\\r\\n  }\\r\\n}\\r\\n\\r\\n.tab-content {\\r\\n  display: none;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.menu-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  width: 100%;\\r\\n  margin-top: 20px;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n/* ramen menu */\\r\\n\\r\\n.tab-content .product-list {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(2, 1fr);\\r\\n  gap: 30px;\\r\\n  margin: 15px 0px 30px 0px;\\r\\n}\\r\\n\\r\\n.tab-content .product-card {\\r\\n  border: 1px solid #c2c2c2;\\r\\n  border-left: 5px solid #ff9800;\\r\\n  box-shadow: 0px 12px 18px -6px rgb(0 0 0 / 10%);\\r\\n  background-color: #fff;\\r\\n\\r\\n  width: 500px;\\r\\n  padding: 20px;\\r\\n  border-radius: 4px;\\r\\n\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.tab-content .card:hover {\\r\\n  transform: scale(1.01);\\r\\n}\\r\\n\\r\\n.tab-content .card h3 {\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.tab-content .btn-container {\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  align-items: flex-end;\\r\\n}\\r\\n\\r\\n.tab-content .product-card .add-btn {\\r\\n  background-color: #c2185b;\\r\\n  width: 150px;\\r\\n  border-radius: 7px;\\r\\n}\\r\\n\\r\\n.tab-content .product-card .btn:hover {\\r\\n  background-color: #8c0032;\\r\\n}\\r\\n\\r\\n.tab-content .product-card div:nth-child(2) {\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n/* order display / order summary */\\r\\n.order-display {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n\\r\\n  max-width: 500px;\\r\\n  margin: 70px 15px 0px 0px;\\r\\n}\\r\\n\\r\\n.order-notice {\\r\\n  border: 1px solid #c2c2c2;\\r\\n  border-radius: 10px;\\r\\n  padding: 20px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.order-display .checkout-btn {\\r\\n  padding: 15px;\\r\\n  margin: 30px auto 0 auto;\\r\\n  border-radius: 10px;\\r\\n  width: 90%;\\r\\n}\\r\\n\\r\\n.order-summary {\\r\\n  padding: 30px;\\r\\n  border-bottom: 1px solid #ccc;\\r\\n\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.order-summary h3 {\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.cart-items {\\r\\n  max-height: 570px;\\r\\n  overflow-y: auto;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\n.summary-right button {\\r\\n  margin-top: 10px;\\r\\n  border-style: none;\\r\\n  background: none;\\r\\n  color: #c62828;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.summary-right button:hover {\\r\\n  color: #8e0000;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.checkout-btn {\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n.checkout-btn .fa-utensils {\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n@media (max-width: 1600px) {\\r\\n  /* Need to adjust margin-top for the floating top navbar */\\r\\n  .menu-container {\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .tab-content .product-list {\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n  }\\r\\n\\r\\n  .order-display {\\r\\n    max-width: 100%;\\r\\n    height: 480px;\\r\\n    margin: 0px;\\r\\n  }\\r\\n\\r\\n  .tab-content .product-card {\\r\\n    width: none;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 1400px) {\\r\\n  /* Need to adjust margin-top for the floating top navbar */\\r\\n  .menu-container {\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .tab-content .product-list {\\r\\n    max-width: 100%;\\r\\n  }\\r\\n\\r\\n  .tab-content .product-card {\\r\\n    min-width: none;\\r\\n    max-width: none;\\r\\n  }\\r\\n\\r\\n  .order-display {\\r\\n    height: 480px;\\r\\n    padding: 0 30px 0 30px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 960px) {\\r\\n  body {\\r\\n    font-size: 0.8rem;\\r\\n  }\\r\\n  .menu-container {\\r\\n    flex-direction: column;\\r\\n    margin-top: 0px;\\r\\n  }\\r\\n\\r\\n  .tab-content .product-list {\\r\\n    grid-template-columns: repeat(1, 1fr);\\r\\n    max-width: none;\\r\\n  }\\r\\n\\r\\n  .tab-content .product-card {\\r\\n    width: 100%;\\r\\n    max-width: none;\\r\\n  }\\r\\n\\r\\n  .order-display {\\r\\n    width: 100%;\\r\\n    height: 480px;\\r\\n    padding: 0 10px 0 10px;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* ------------------------------------------------ */\\r\\n/* Footer Styling */\\r\\n/* ------------------------------------------------ */\\r\\n\\r\\n.footer {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  flex-wrap: wrap;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .footer {\\r\\n    padding: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n.social {\\r\\n  padding-top: 1rem;\\r\\n}\\r\\n\\r\\n.footer a {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.footer a:hover {\\r\\n  color: #ffa000;\\r\\n}\\r\\n\\r\\n.footer .social > * {\\r\\n  margin-right: 30px;\\r\\n}\\r\\n/* ------------------------------------------------ */\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_utilities_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/utilities.css */ \"./src/styles/utilities.css\");\n/* harmony import */ var _pages_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/images */ \"./src/pages/images.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pages_home__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n// image slides -------------------------------\n\nconst swiper = new Swiper('.swiper', {\n  // Optional parameters\n\n  loop: true,\n\n  // If we need pagination\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n  },\n\n  // Navigation arrows\n  navigation: {\n    nextEl: '.swiper-button-next',\n    prevEl: '.swiper-button-prev',\n  },\n});\n\n// Menu tabs -------------------------------\n\nfunction activateTabs() {\n  const tabs = document.querySelectorAll('.tab-buttons');\n  const tabsContent = document.querySelectorAll('.tab-content');\n\n  tabs.forEach((a) =>\n    a.addEventListener('mousedown', () => displayTabContent(a))\n  );\n\n  function displayTabContent(a) {\n    for (let i = 0; i < tabs.length; i++) {\n      tabs[i].classList.remove('orange');\n      tabsContent[i].classList.remove('show');\n      if (tabs[i] === a) {\n        tabs[i].classList.add('orange');\n        tabsContent[i].classList.add('show');\n      }\n    }\n  }\n}\n\n// Menu data -------------------------------\n\nlet menuArray = [\n  _pages_menu__WEBPACK_IMPORTED_MODULE_3__.teaArray,\n  _pages_menu__WEBPACK_IMPORTED_MODULE_3__.appetizerArray,\n  _pages_menu__WEBPACK_IMPORTED_MODULE_3__.ramenArray,\n  _pages_menu__WEBPACK_IMPORTED_MODULE_3__.noodleArray,\n];\n\n(function render() {\n  document.addEventListener('DOMContentLoaded', () => {\n    const cardSection = document.querySelectorAll('.product-list');\n    for (let k = 0; k < menuArray.length; k++) {\n      for (let i = 0; i < menuArray[k].length; i++) {\n        if (menuArray[k][i].description == undefined) {\n          menuArray[k][i].description = '';\n        }\n        cardSection[k].insertAdjacentHTML(\n          'beforeend',\n          `<div class=\"product-card\">\n          <h3>${menuArray[k][i].title}</h3>\n          <div>${menuArray[k][i].description}</div>\n          <div>$${menuArray[k][i].price}</div>\n          <div class=\"btn-container\">\n          <button data-price=\"${menuArray[k][i].price}\" data-title=\"${menuArray[k][i].title}\" class=\"btn add-btn\">Add to Order</button>\n          </div>\n        </div>`\n        );\n      }\n    }\n\n    activateTabs();\n    updateCart();\n    updateCheckout();\n  });\n})();\n\n// -----------------------------------------\n\nfunction getCart() {\n  let cart = [];\n  if (localStorage.getItem('Ramen-cart')) {\n    cart = JSON.parse(localStorage.getItem('Ramen-cart'));\n  }\n  return cart;\n}\n\n// -----------------------------------------\n\nfunction addToCart(e) {\n  const cart = getCart();\n\n  let price = parseFloat(e.target.dataset.price).toFixed(2);\n  let title = e.target.dataset.title;\n  let item = cart.find((item) => item.title === title);\n\n  console.log(price);\n  if (item) {\n    item.qty++;\n  } else {\n    cart.push({\n      title: title,\n      price: price,\n      qty: 1,\n    });\n  }\n\n  localStorage.setItem('Ramen-cart', JSON.stringify(cart));\n}\n\n// -----------------------------------------\n\nfunction deleteItem(itemName) {\n  const cart = getCart();\n\n  cart.forEach((item, index) => {\n    if (item.title === itemName) {\n      cart.splice(index, 1);\n    }\n  });\n  localStorage.setItem('Ramen-cart', JSON.stringify(cart));\n}\n\n// -----------------------------------------\n\nfunction updateCart() {\n  const cart = getCart();\n  const itemList = document.querySelector('.cart-items');\n  itemList.innerHTML = '';\n\n  for (let item in cart) {\n    itemList.insertAdjacentHTML(\n      'beforeend',\n      `<div class=\"order-summary\">\n\n      <div class=\"summary-left\">\n        <div>x${cart[item].qty}</div>\n       <h4>${cart[item].title}</h4>\n      </div>\n\n      <div class=\"summary-right\">\n        <div>$${cart[item].price}</div>\n        <button class=\"remove-btn\">Remove</button>\n      </div>\n    </div>`\n    );\n  }\n}\n\n// -----------------------------------------\n\nfunction updateCheckout() {\n  const cart = getCart();\n\n  let total = 0;\n  for (let i = 0; i < cart.length; i++) {\n    total += cart[i].price * cart[i].qty;\n  }\n\n  const checkoutBtn = document.querySelector('.checkout-btn');\n  checkoutBtn.innerHTML = `<i class=\"fa fa-utensils\"></i>\n   Checkout • $${parseFloat(total).toFixed(2)}`;\n}\n\n// -----------------------------------------\n\nwindow.addEventListener('click', (e) => {\n  if (e.target.classList.contains('add-btn')) {\n    addToCart(e);\n  }\n\n  if (e.target.classList.contains('remove-btn')) {\n    let itemName =\n      e.target.parentElement.previousElementSibling.lastElementChild.innerHTML;\n    deleteItem(itemName);\n  }\n\n  updateCart();\n  updateCheckout();\n});\n\n// -----------------------------------------\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ (() => {

eval("const heroImage = document.querySelector('#hero');\n\nfunction switchImage() {\n  if (heroImage.classList.contains('menu-hero')) {\n    return;\n  }\n\n  if (heroImage.classList.contains('img')) {\n    heroImage.classList.remove('img');\n    heroImage.classList.add('img1');\n    return;\n  }\n\n  if (heroImage.classList.contains('img1')) {\n    heroImage.classList.remove('img1');\n    heroImage.classList.add('img2');\n    return;\n  }\n  if (heroImage.classList.contains('img2')) {\n    heroImage.classList.remove('img2');\n    heroImage.classList.add('img');\n    return;\n  }\n}\n\nsetInterval(() => {\n  switchImage();\n}, 8000);\n\n// JQuery navbar & scrolling -------------------------\n\nconst navbar = document.querySelector('.navbar');\nlet scrolled = false;\n\nwindow.onscroll = function () {\n  if (window.pageYOffset > 100) {\n    navbar.classList.remove('top');\n    if (!scrolled) {\n      navbar.style.transform = 'translateY(-70px)';\n    }\n    setTimeout(function () {\n      navbar.style.transform = 'translateY(0)';\n      scrolled = true;\n    }, 200);\n  } else {\n    navbar.classList.add('top');\n    scrolled = false;\n  }\n};\n\n// Smooth Scrolling\n$('#navbar a, .btn').on('click', function (e) {\n  if (this.hash !== '') {\n    // e.preventDefault();\n\n    const hash = this.hash;\n\n    $('html, body').animate(\n      {\n        scrollTop: $(hash).offset().top,\n      },\n      400\n    );\n  }\n});\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/images.js":
/*!*****************************!*\
  !*** ./src/pages/images.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_img_food_slide1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/food/slide1.jpg */ \"./src/assets/img/food/slide1.jpg\");\n/* harmony import */ var _assets_img_food_slide2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/food/slide2.jpg */ \"./src/assets/img/food/slide2.jpg\");\n/* harmony import */ var _assets_img_food_slide3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/food/slide3.jpg */ \"./src/assets/img/food/slide3.jpg\");\n/* harmony import */ var _assets_img_food_slide4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/food/slide4.jpg */ \"./src/assets/img/food/slide4.jpg\");\n/* harmony import */ var _assets_img_food_slide5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/food/slide5.jpg */ \"./src/assets/img/food/slide5.jpg\");\n/* harmony import */ var _assets_img_food_gallery1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/food/gallery1.jpg */ \"./src/assets/img/food/gallery1.jpg\");\n/* harmony import */ var _assets_img_food_gallery2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/img/food/gallery2.jpg */ \"./src/assets/img/food/gallery2.jpg\");\n/* harmony import */ var _assets_img_food_gallery3_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/img/food/gallery3.jpg */ \"./src/assets/img/food/gallery3.jpg\");\n/* harmony import */ var _assets_img_food_gallery4_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/img/food/gallery4.jpg */ \"./src/assets/img/food/gallery4.jpg\");\n/* harmony import */ var _assets_img_main_contact_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/img/main/contact.jpg */ \"./src/assets/img/main/contact.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/pages/images.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appetizerArray\": () => (/* binding */ appetizerArray),\n/* harmony export */   \"noodleArray\": () => (/* binding */ noodleArray),\n/* harmony export */   \"ramenArray\": () => (/* binding */ ramenArray),\n/* harmony export */   \"teaArray\": () => (/* binding */ teaArray)\n/* harmony export */ });\n\n\nclass MenuItem {\n  constructor(price, title, description) {\n    this.price = price;\n    this.title = title;\n    this.description = description;\n  }\n}\n\nlet ramen1 = new MenuItem(\n  '14.00',\n  'R1. Tonkotsu',\n  'Classic pork broth, topped w. egg, chashu pork, bamboo shoots, red ginger, scallion.'\n);\n\nlet ramen2 = new MenuItem(\n  '14.00',\n  'R2. Shoyu',\n  'Soy sauce pork broth, topped w. kikurage, egg, chashu pork, bamboo shoots, scallion.'\n);\n\nlet ramen3 = new MenuItem(\n  '14.00',\n  'R3. Miso',\n  'Pork broth w. miso, topped w. corn, egg, chashu pork, bamboo shoots, scallion.'\n);\n\nlet ramen4 = new MenuItem(\n  '17.00',\n  'R4. Spicy Miso',\n  'Soy sauce pork broth, topped w. kikurage, egg, chashu pork, bamboo shoots, scallion.'\n);\nlet ramen5 = new MenuItem(\n  '14.00',\n  'R5. Negi',\n  'Soy sauce pork broth, topped w. kikurage, egg, chashu pork, bamboo shoots, scallion.'\n);\nlet ramen6 = new MenuItem(\n  '20.00',\n  'R6. Gomoku',\n  'Chef picked seafood, vegetable, egg in pork broth.'\n);\nlet ramen7 = new MenuItem(\n  '16.00',\n  'R7. Touchucha',\n  'Tochucha tea broth, w. tochucha noodles, topped w. egg, pork chashu, bamboo shoots.'\n);\n\nlet ramen8 = new MenuItem(\n  '16.00',\n  'R8. Cold Tochucha',\n  'Cold tochucha ramen topped w. kaiware, nori egg, wild mushrooms, in tochucha dressing.'\n);\n\nlet ramenArray = [\n  ramen1,\n  ramen2,\n  ramen3,\n  ramen4,\n  ramen5,\n  ramen6,\n  ramen7,\n  ramen8,\n];\n\n// ---------------------------------------------------\n\nlet tea1 = new MenuItem('6.50', 'Matcha Latte');\nlet tea2 = new MenuItem('6.50', 'Brown Sugar Matcha Latte');\nlet tea3 = new MenuItem('6.50', 'Matcha Yuzu Lemonade');\nlet tea4 = new MenuItem('6.00', 'Touchucha Yuzu Lemonade');\nlet tea5 = new MenuItem('5.00', 'Touchucha w. Ginger');\nlet tea6 = new MenuItem('6.00', 'Koucha Orange');\nlet tea7 = new MenuItem('12.00', 'Matcha Tiramisu');\nlet tea8 = new MenuItem('4.00', 'Touchucha Americano');\n\nlet teaArray = [tea1, tea2, tea3, tea4, tea5, tea6, tea7, tea8];\n\n// ---------------------------------------------------\n\nlet appetizer1 = new MenuItem(\n  '8.00',\n  'A1. Edamame',\n  'Steamed soybeans w. matcha salt.'\n);\nlet appetizer2 = new MenuItem(\n  '9.00',\n  'A2. Gyoza',\n  'Japanese Pan fried pork dumplings.'\n);\n\nlet appetizer3 = new MenuItem(\n  '9.00',\n  'A3. Takoyaki',\n  'Octopus balls w. bonito flakes.'\n);\nlet appetizer4 = new MenuItem(\n  '10.00',\n  'A4. Pork Bun',\n  'Chashu pork in buns w. lettuce & cucumber.'\n);\nlet appetizer5 = new MenuItem(\n  '10.00',\n  'A5. Shishito pepper',\n  'Sautéed shishito pepper w. matcha salt.'\n);\nlet appetizer6 = new MenuItem(\n  '10.00',\n  'A6. Agedashi Tofu',\n  'Deep fried tofu with tensuyu sauce.'\n);\nlet appetizer7 = new MenuItem(\n  '14.00',\n  'A7. Geso Fry',\n  'Japanese style fried calamari.'\n);\nlet appetizer8 = new MenuItem(\n  '11.00',\n  'A8. Yuzu Tebasaki',\n  'Japanese fried chicken wings w. yuzu & lemon sauce.'\n);\n\nlet appetizerArray = [\n  appetizer1,\n  appetizer2,\n  appetizer3,\n  appetizer4,\n  appetizer5,\n  appetizer6,\n  appetizer7,\n  appetizer8,\n];\n\n// ---------------------------------------------------\n\nlet noodle1 = new MenuItem(\n  '15.00',\n  'Y1. Yaki Soba',\n  'Pan fried soba noodles w. pork & veggies in okonomi sauce'\n);\nlet noodle2 = new MenuItem(\n  '18.00',\n  'Y2. Seafood Yaki Soba',\n  'Pan fried soba noodles w. shrimp, squid, veggies, salt & pepper'\n);\nlet noodle3 = new MenuItem(\n  '15.00',\n  'Y3. Yaki Udon',\n  'Pan fried udon w. pork veggies in okonomi sauce'\n);\nlet noodle4 = new MenuItem(\n  '16.00',\n  'Y4. Kimchi Yaki Udon',\n  'Pan fried udon w. kimchi, pork, veggies in okonomi sauce'\n);\nlet noodle5 = new MenuItem('16.00', 'Y5. Curry Udon w. Beef', '');\n\nlet noodleArray = [noodle1, noodle2, noodle3, noodle4, noodle5];\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/pages/menu.js?");

/***/ }),

/***/ "./src/assets/img/food/gallery1.jpg":
/*!******************************************!*\
  !*** ./src/assets/img/food/gallery1.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/gallery1.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/food/gallery1.jpg?");

/***/ }),

/***/ "./src/assets/img/food/gallery2.jpg":
/*!******************************************!*\
  !*** ./src/assets/img/food/gallery2.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/gallery2.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/food/gallery2.jpg?");

/***/ }),

/***/ "./src/assets/img/food/gallery3.jpg":
/*!******************************************!*\
  !*** ./src/assets/img/food/gallery3.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/gallery3.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/food/gallery3.jpg?");

/***/ }),

/***/ "./src/assets/img/food/gallery4.jpg":
/*!******************************************!*\
  !*** ./src/assets/img/food/gallery4.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/gallery4.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/food/gallery4.jpg?");

/***/ }),

/***/ "./src/assets/img/food/slide1.jpg":
/*!****************************************!*\
  !*** ./src/assets/img/food/slide1.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/slide1.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/food/slide1.jpg?");

/***/ }),

/***/ "./src/assets/img/food/slide2.jpg":
/*!****************************************!*\
  !*** ./src/assets/img/food/slide2.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/slide2.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/food/slide2.jpg?");

/***/ }),

/***/ "./src/assets/img/food/slide3.jpg":
/*!****************************************!*\
  !*** ./src/assets/img/food/slide3.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/slide3.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/food/slide3.jpg?");

/***/ }),

/***/ "./src/assets/img/food/slide4.jpg":
/*!****************************************!*\
  !*** ./src/assets/img/food/slide4.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/slide4.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/food/slide4.jpg?");

/***/ }),

/***/ "./src/assets/img/food/slide5.jpg":
/*!****************************************!*\
  !*** ./src/assets/img/food/slide5.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/img/slide5.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/img/food/slide5.jpg?");

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