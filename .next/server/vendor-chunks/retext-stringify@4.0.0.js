"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/retext-stringify@4.0.0";
exports.ids = ["vendor-chunks/retext-stringify@4.0.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/retext-stringify@4.0.0/node_modules/retext-stringify/lib/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/retext-stringify@4.0.0/node_modules/retext-stringify/lib/index.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ retextStringify)\n/* harmony export */ });\n/* harmony import */ var nlcst_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nlcst-to-string */ \"(rsc)/./node_modules/.pnpm/nlcst-to-string@4.0.0/node_modules/nlcst-to-string/lib/index.js\");\n/**\n * @typedef {import('nlcst').Root} Root\n */\n\n\n\n/**\n * Add support for serializing natural language.\n *\n * @returns {undefined}\n *   Nothing.\n */\nfunction retextStringify() {\n  // eslint-disable-next-line unicorn/no-this-assignment\n  const self =\n    /** @type {import('unified').Processor<undefined, undefined, undefined, Root, string>} */ (\n      // @ts-expect-error -- TS in JSDoc doesn’t understand `this`.\n      this\n    )\n\n  self.compiler = compiler\n}\n\n/** @type {import('unified').Compiler<Root, string>} */\nfunction compiler(tree) {\n  return (0,nlcst_to_string__WEBPACK_IMPORTED_MODULE_0__.toString)(tree)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vcmV0ZXh0LXN0cmluZ2lmeUA0LjAuMC9ub2RlX21vZHVsZXMvcmV0ZXh0LXN0cmluZ2lmeS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DOztBQUV3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQSxlQUFlLDRFQUE0RTtBQUMzRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxXQUFXLDBDQUEwQztBQUNyRDtBQUNBLFNBQVMseURBQVE7QUFDakIiLCJzb3VyY2VzIjpbIi9ob21lL2Jyb256ZS9jb2RpbmcvZnNha20vbm9kZV9tb2R1bGVzLy5wbnBtL3JldGV4dC1zdHJpbmdpZnlANC4wLjAvbm9kZV9tb2R1bGVzL3JldGV4dC1zdHJpbmdpZnkvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbmxjc3QnKS5Sb290fSBSb290XG4gKi9cblxuaW1wb3J0IHt0b1N0cmluZ30gZnJvbSAnbmxjc3QtdG8tc3RyaW5nJ1xuXG4vKipcbiAqIEFkZCBzdXBwb3J0IGZvciBzZXJpYWxpemluZyBuYXR1cmFsIGxhbmd1YWdlLlxuICpcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKiAgIE5vdGhpbmcuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldGV4dFN0cmluZ2lmeSgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdGhpcy1hc3NpZ25tZW50XG4gIGNvbnN0IHNlbGYgPVxuICAgIC8qKiBAdHlwZSB7aW1wb3J0KCd1bmlmaWVkJykuUHJvY2Vzc29yPHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFJvb3QsIHN0cmluZz59ICovIChcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLS0gVFMgaW4gSlNEb2MgZG9lc27igJl0IHVuZGVyc3RhbmQgYHRoaXNgLlxuICAgICAgdGhpc1xuICAgIClcblxuICBzZWxmLmNvbXBpbGVyID0gY29tcGlsZXJcbn1cblxuLyoqIEB0eXBlIHtpbXBvcnQoJ3VuaWZpZWQnKS5Db21waWxlcjxSb290LCBzdHJpbmc+fSAqL1xuZnVuY3Rpb24gY29tcGlsZXIodHJlZSkge1xuICByZXR1cm4gdG9TdHJpbmcodHJlZSlcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/retext-stringify@4.0.0/node_modules/retext-stringify/lib/index.js\n");

/***/ })

};
;