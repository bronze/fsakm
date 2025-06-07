"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-from-html-isomorphic@2.0.0";
exports.ids = ["vendor-chunks/hast-util-from-html-isomorphic@2.0.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/hast-util-from-html-isomorphic@2.0.0/node_modules/hast-util-from-html-isomorphic/lib/index.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/hast-util-from-html-isomorphic@2.0.0/node_modules/hast-util-from-html-isomorphic/lib/index.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromHtmlIsomorphic: () => (/* binding */ fromHtmlIsomorphic)\n/* harmony export */ });\n/* harmony import */ var hast_util_from_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-from-html */ \"(rsc)/./node_modules/.pnpm/hast-util-from-html@2.0.3/node_modules/hast-util-from-html/lib/index.js\");\n/* harmony import */ var unist_util_remove_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unist-util-remove-position */ \"(rsc)/./node_modules/.pnpm/unist-util-remove-position@5.0.0/node_modules/unist-util-remove-position/lib/index.js\");\n/**\n * @typedef {import('hast').Root} Root\n *\n * @typedef {Pick<import('hast-util-from-html').Options, 'fragment'>} Options\n */\n\n\n\n\n/**\n * Turn HTML into a syntax tree, using browser APIs when available, so it has\n * a smaller bundle size there.\n *\n * @param {string} value\n *   Serialized HTML to parse.\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns {Root}\n *   Tree.\n */\nfunction fromHtmlIsomorphic(value, options) {\n  const tree = (0,hast_util_from_html__WEBPACK_IMPORTED_MODULE_0__.fromHtml)(value, options)\n  ;(0,unist_util_remove_position__WEBPACK_IMPORTED_MODULE_1__.removePosition)(tree, {force: true})\n  delete tree.data\n  return tree\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vaGFzdC11dGlsLWZyb20taHRtbC1pc29tb3JwaGljQDIuMC4wL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtZnJvbS1odG1sLWlzb21vcnBoaWMvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsYUFBYSxxQkFBcUI7QUFDbEM7QUFDQSxhQUFhLHlEQUF5RDtBQUN0RTs7QUFFNEM7QUFDYTs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLDRCQUE0QjtBQUN2QztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCxlQUFlLDZEQUFRO0FBQ3ZCLEVBQUUsMkVBQWMsUUFBUSxZQUFZO0FBQ3BDO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL2hvbWUvYnJvbnplL2NvZGluZy9mc2FrbS9ub2RlX21vZHVsZXMvLnBucG0vaGFzdC11dGlsLWZyb20taHRtbC1pc29tb3JwaGljQDIuMC4wL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtZnJvbS1odG1sLWlzb21vcnBoaWMvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IFJvb3RcbiAqXG4gKiBAdHlwZWRlZiB7UGljazxpbXBvcnQoJ2hhc3QtdXRpbC1mcm9tLWh0bWwnKS5PcHRpb25zLCAnZnJhZ21lbnQnPn0gT3B0aW9uc1xuICovXG5cbmltcG9ydCB7ZnJvbUh0bWx9IGZyb20gJ2hhc3QtdXRpbC1mcm9tLWh0bWwnXG5pbXBvcnQge3JlbW92ZVBvc2l0aW9ufSBmcm9tICd1bmlzdC11dGlsLXJlbW92ZS1wb3NpdGlvbidcblxuLyoqXG4gKiBUdXJuIEhUTUwgaW50byBhIHN5bnRheCB0cmVlLCB1c2luZyBicm93c2VyIEFQSXMgd2hlbiBhdmFpbGFibGUsIHNvIGl0IGhhc1xuICogYSBzbWFsbGVyIGJ1bmRsZSBzaXplIHRoZXJlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBTZXJpYWxpemVkIEhUTUwgdG8gcGFyc2UuXG4gKiBAcGFyYW0ge09wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0aW9uc11cbiAqICAgQ29uZmlndXJhdGlvbiAob3B0aW9uYWwpLlxuICogQHJldHVybnMge1Jvb3R9XG4gKiAgIFRyZWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tSHRtbElzb21vcnBoaWModmFsdWUsIG9wdGlvbnMpIHtcbiAgY29uc3QgdHJlZSA9IGZyb21IdG1sKHZhbHVlLCBvcHRpb25zKVxuICByZW1vdmVQb3NpdGlvbih0cmVlLCB7Zm9yY2U6IHRydWV9KVxuICBkZWxldGUgdHJlZS5kYXRhXG4gIHJldHVybiB0cmVlXG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/hast-util-from-html-isomorphic@2.0.0/node_modules/hast-util-from-html-isomorphic/lib/index.js\n");

/***/ })

};
;