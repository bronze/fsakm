"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-reading-time@2.0.2";
exports.ids = ["vendor-chunks/remark-reading-time@2.0.2"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/remark-reading-time@2.0.2/node_modules/remark-reading-time/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/remark-reading-time@2.0.2/node_modules/remark-reading-time/index.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ readingTime)\n/* harmony export */ });\n/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reading-time */ \"(rsc)/./node_modules/.pnpm/reading-time@1.5.0/node_modules/reading-time/index.js\");\n/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unist-util-visit */ \"(rsc)/./node_modules/.pnpm/unist-util-visit@3.1.0/node_modules/unist-util-visit/index.js\");\n\n\n\nfunction readingTime({\n  /**\n   * The attribute name to store the reading time under data.\n   *\n   * @type {string}\n   * @default \"readingTime\"\n   */\n  attribute = \"readingTime\",\n} = {}) {\n  return function (info, file) {\n    let text = \"\";\n\n    (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_1__.visit)(info, [\"text\", \"code\"], (node) => {\n      text += node.value;\n    });\n\n    file.data[attribute] = reading_time__WEBPACK_IMPORTED_MODULE_0__(text);\n  };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVtYXJrLXJlYWRpbmctdGltZUAyLjAuMi9ub2RlX21vZHVsZXMvcmVtYXJrLXJlYWRpbmctdGltZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFDRDs7QUFFMUI7QUFDZjtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJO0FBQ047QUFDQTs7QUFFQSxJQUFJLHVEQUFLO0FBQ1Q7QUFDQSxLQUFLOztBQUVMLDJCQUEyQix5Q0FBYztBQUN6QztBQUNBIiwic291cmNlcyI6WyIvaG9tZS9icm9uemUvY29kaW5nL2ZzYWttL25vZGVfbW9kdWxlcy8ucG5wbS9yZW1hcmstcmVhZGluZy10aW1lQDIuMC4yL25vZGVfbW9kdWxlcy9yZW1hcmstcmVhZGluZy10aW1lL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRSZWFkaW5nVGltZSBmcm9tIFwicmVhZGluZy10aW1lXCI7XG5pbXBvcnQgeyB2aXNpdCB9IGZyb20gXCJ1bmlzdC11dGlsLXZpc2l0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlYWRpbmdUaW1lKHtcbiAgLyoqXG4gICAqIFRoZSBhdHRyaWJ1dGUgbmFtZSB0byBzdG9yZSB0aGUgcmVhZGluZyB0aW1lIHVuZGVyIGRhdGEuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0IFwicmVhZGluZ1RpbWVcIlxuICAgKi9cbiAgYXR0cmlidXRlID0gXCJyZWFkaW5nVGltZVwiLFxufSA9IHt9KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaW5mbywgZmlsZSkge1xuICAgIGxldCB0ZXh0ID0gXCJcIjtcblxuICAgIHZpc2l0KGluZm8sIFtcInRleHRcIiwgXCJjb2RlXCJdLCAobm9kZSkgPT4ge1xuICAgICAgdGV4dCArPSBub2RlLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgZmlsZS5kYXRhW2F0dHJpYnV0ZV0gPSBnZXRSZWFkaW5nVGltZSh0ZXh0KTtcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/remark-reading-time@2.0.2/node_modules/remark-reading-time/index.js\n");

/***/ })

};
;