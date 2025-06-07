"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/recma-build-jsx@1.0.0";
exports.ids = ["vendor-chunks/recma-build-jsx@1.0.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/recma-build-jsx@1.0.0/node_modules/recma-build-jsx/lib/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/recma-build-jsx@1.0.0/node_modules/recma-build-jsx/lib/index.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ recmaJsx)\n/* harmony export */ });\n/* harmony import */ var estree_util_build_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! estree-util-build-jsx */ \"(rsc)/./node_modules/.pnpm/estree-util-build-jsx@3.0.1/node_modules/estree-util-build-jsx/lib/index.js\");\n/**\n * @import {Program} from 'estree'\n * @import {Options} from 'recma-build-jsx'\n * @import {VFile} from 'vfile'\n */\n\n\n\n/**\n * Plugin to build JSX.\n *\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns\n *   Transform.\n */\nfunction recmaJsx(options) {\n  /**\n   * @param {Program} tree\n   *   Tree.\n   * @param {VFile} file\n   *   File.\n   * @returns {undefined}\n   *   Nothing.\n   */\n  return function (tree, file) {\n    (0,estree_util_build_jsx__WEBPACK_IMPORTED_MODULE_0__.buildJsx)(tree, {filePath: file.history[0], ...options})\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVjbWEtYnVpbGQtanN4QDEuMC4wL25vZGVfbW9kdWxlcy9yZWNtYS1idWlsZC1qc3gvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxZQUFZLFNBQVM7QUFDckIsWUFBWSxTQUFTO0FBQ3JCLFlBQVksT0FBTztBQUNuQjs7QUFFOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNEJBQTRCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFRLFFBQVEsc0NBQXNDO0FBQzFEO0FBQ0EiLCJzb3VyY2VzIjpbIi9ob21lL2Jyb256ZS9jb2RpbmcvZnNha20vbm9kZV9tb2R1bGVzLy5wbnBtL3JlY21hLWJ1aWxkLWpzeEAxLjAuMC9ub2RlX21vZHVsZXMvcmVjbWEtYnVpbGQtanN4L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBpbXBvcnQge1Byb2dyYW19IGZyb20gJ2VzdHJlZSdcbiAqIEBpbXBvcnQge09wdGlvbnN9IGZyb20gJ3JlY21hLWJ1aWxkLWpzeCdcbiAqIEBpbXBvcnQge1ZGaWxlfSBmcm9tICd2ZmlsZSdcbiAqL1xuXG5pbXBvcnQge2J1aWxkSnN4fSBmcm9tICdlc3RyZWUtdXRpbC1idWlsZC1qc3gnXG5cbi8qKlxuICogUGx1Z2luIHRvIGJ1aWxkIEpTWC5cbiAqXG4gKiBAcGFyYW0ge09wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0aW9uc11cbiAqICAgQ29uZmlndXJhdGlvbiAob3B0aW9uYWwpLlxuICogQHJldHVybnNcbiAqICAgVHJhbnNmb3JtLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWNtYUpzeChvcHRpb25zKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge1Byb2dyYW19IHRyZWVcbiAgICogICBUcmVlLlxuICAgKiBAcGFyYW0ge1ZGaWxlfSBmaWxlXG4gICAqICAgRmlsZS5cbiAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICogICBOb3RoaW5nLlxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uICh0cmVlLCBmaWxlKSB7XG4gICAgYnVpbGRKc3godHJlZSwge2ZpbGVQYXRoOiBmaWxlLmhpc3RvcnlbMF0sIC4uLm9wdGlvbnN9KVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/recma-build-jsx@1.0.0/node_modules/recma-build-jsx/lib/index.js\n");

/***/ })

};
;