"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/recma-jsx@1.0.0_acorn@8.14.1";
exports.ids = ["vendor-chunks/recma-jsx@1.0.0_acorn@8.14.1"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/recma-jsx@1.0.0_acorn@8.14.1/node_modules/recma-jsx/lib/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/recma-jsx@1.0.0_acorn@8.14.1/node_modules/recma-jsx/lib/index.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ recmaJsx)\n/* harmony export */ });\n/* harmony import */ var acorn_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! acorn-jsx */ \"(rsc)/./node_modules/.pnpm/acorn-jsx@5.3.2_acorn@8.14.1/node_modules/acorn-jsx/index.js\");\n/* harmony import */ var estree_util_to_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! estree-util-to-js */ \"(rsc)/./node_modules/.pnpm/estree-util-to-js@2.0.0/node_modules/estree-util-to-js/lib/jsx.js\");\n/**\n * @import {} from 'recma-parse'\n * @import {} from 'recma-stringify'\n * @import {Processor} from 'unified'\n */\n\n\n\n\n/**\n * Plugin to add support for parsing and serializing JSX.\n *\n * @this {Processor}\n *   Processor.\n * @returns {undefined}\n *   Nothing.\n */\nfunction recmaJsx() {\n  const data = this.data()\n  const settings = data.settings || (data.settings = {})\n  const handlers = settings.handlers || (settings.handlers = {})\n  const plugins = settings.plugins || (settings.plugins = [])\n\n  // No useful options yet.\n  plugins.push(acorn_jsx__WEBPACK_IMPORTED_MODULE_0__())\n  Object.assign(handlers, estree_util_to_js__WEBPACK_IMPORTED_MODULE_1__.jsx)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVjbWEtanN4QDEuMC4wX2Fjb3JuQDguMTQuMS9ub2RlX21vZHVsZXMvcmVjbWEtanN4L2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLGNBQWM7QUFDZCxjQUFjO0FBQ2QsWUFBWSxXQUFXO0FBQ3ZCOztBQUVpQztBQUNtQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDZTtBQUNmO0FBQ0EsdURBQXVEO0FBQ3ZELCtEQUErRDtBQUMvRDs7QUFFQTtBQUNBLGVBQWUsc0NBQVM7QUFDeEIsMEJBQTBCLGtEQUFXO0FBQ3JDIiwic291cmNlcyI6WyIvaG9tZS9icm9uemUvY29kaW5nL2ZzYWttL25vZGVfbW9kdWxlcy8ucG5wbS9yZWNtYS1qc3hAMS4wLjBfYWNvcm5AOC4xNC4xL25vZGVfbW9kdWxlcy9yZWNtYS1qc3gvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGltcG9ydCB7fSBmcm9tICdyZWNtYS1wYXJzZSdcbiAqIEBpbXBvcnQge30gZnJvbSAncmVjbWEtc3RyaW5naWZ5J1xuICogQGltcG9ydCB7UHJvY2Vzc29yfSBmcm9tICd1bmlmaWVkJ1xuICovXG5cbmltcG9ydCBqc3hQbHVnaW4gZnJvbSAnYWNvcm4tanN4J1xuaW1wb3J0IHtqc3ggYXMganN4SGFuZGxlcnN9IGZyb20gJ2VzdHJlZS11dGlsLXRvLWpzJ1xuXG4vKipcbiAqIFBsdWdpbiB0byBhZGQgc3VwcG9ydCBmb3IgcGFyc2luZyBhbmQgc2VyaWFsaXppbmcgSlNYLlxuICpcbiAqIEB0aGlzIHtQcm9jZXNzb3J9XG4gKiAgIFByb2Nlc3Nvci5cbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKiAgIE5vdGhpbmcuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY21hSnN4KCkge1xuICBjb25zdCBkYXRhID0gdGhpcy5kYXRhKClcbiAgY29uc3Qgc2V0dGluZ3MgPSBkYXRhLnNldHRpbmdzIHx8IChkYXRhLnNldHRpbmdzID0ge30pXG4gIGNvbnN0IGhhbmRsZXJzID0gc2V0dGluZ3MuaGFuZGxlcnMgfHwgKHNldHRpbmdzLmhhbmRsZXJzID0ge30pXG4gIGNvbnN0IHBsdWdpbnMgPSBzZXR0aW5ncy5wbHVnaW5zIHx8IChzZXR0aW5ncy5wbHVnaW5zID0gW10pXG5cbiAgLy8gTm8gdXNlZnVsIG9wdGlvbnMgeWV0LlxuICBwbHVnaW5zLnB1c2goanN4UGx1Z2luKCkpXG4gIE9iamVjdC5hc3NpZ24oaGFuZGxlcnMsIGpzeEhhbmRsZXJzKVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/recma-jsx@1.0.0_acorn@8.14.1/node_modules/recma-jsx/lib/index.js\n");

/***/ })

};
;