"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/nlcst-to-string@4.0.0";
exports.ids = ["vendor-chunks/nlcst-to-string@4.0.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/nlcst-to-string@4.0.0/node_modules/nlcst-to-string/lib/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/nlcst-to-string@4.0.0/node_modules/nlcst-to-string/lib/index.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toString: () => (/* binding */ toString)\n/* harmony export */ });\n/**\n * @typedef {import('nlcst').Nodes} Nodes\n */\n\n/** @type {Readonly<Array<Nodes>>} */\nconst emptyNodes = []\n\n/**\n * Get the text content of a node or list of nodes.\n *\n * Prefers the node’s plain-text fields, otherwise serializes its children, and\n * if the given value is an array, serialize the nodes in it.\n *\n * @param {Array<Nodes> | Nodes} value\n *   Node or list of nodes to serialize.\n * @returns {string}\n *   Result.\n */\nfunction toString(value) {\n  let index = -1\n\n  if (!value || (!Array.isArray(value) && !value.type)) {\n    throw new Error('Expected node, not `' + value + '`')\n  }\n\n  if ('value' in value) return value.value\n\n  const children = (Array.isArray(value) ? value : value.children) || emptyNodes\n\n  /** @type {Array<string>} */\n  const values = []\n\n  while (++index < children.length) {\n    values[index] = toString(children[index])\n  }\n\n  return values.join('')\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmxjc3QtdG8tc3RyaW5nQDQuMC4wL25vZGVfbW9kdWxlcy9ubGNzdC10by1zdHJpbmcvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDOztBQUVBLFdBQVcsd0JBQXdCO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxhQUFhLGVBQWU7QUFDNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIi9ob21lL2Jyb256ZS9jb2RpbmcvZnNha20vbm9kZV9tb2R1bGVzLy5wbnBtL25sY3N0LXRvLXN0cmluZ0A0LjAuMC9ub2RlX21vZHVsZXMvbmxjc3QtdG8tc3RyaW5nL2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ25sY3N0JykuTm9kZXN9IE5vZGVzXG4gKi9cblxuLyoqIEB0eXBlIHtSZWFkb25seTxBcnJheTxOb2Rlcz4+fSAqL1xuY29uc3QgZW1wdHlOb2RlcyA9IFtdXG5cbi8qKlxuICogR2V0IHRoZSB0ZXh0IGNvbnRlbnQgb2YgYSBub2RlIG9yIGxpc3Qgb2Ygbm9kZXMuXG4gKlxuICogUHJlZmVycyB0aGUgbm9kZeKAmXMgcGxhaW4tdGV4dCBmaWVsZHMsIG90aGVyd2lzZSBzZXJpYWxpemVzIGl0cyBjaGlsZHJlbiwgYW5kXG4gKiBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gYXJyYXksIHNlcmlhbGl6ZSB0aGUgbm9kZXMgaW4gaXQuXG4gKlxuICogQHBhcmFtIHtBcnJheTxOb2Rlcz4gfCBOb2Rlc30gdmFsdWVcbiAqICAgTm9kZSBvciBsaXN0IG9mIG5vZGVzIHRvIHNlcmlhbGl6ZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIFJlc3VsdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIGxldCBpbmRleCA9IC0xXG5cbiAgaWYgKCF2YWx1ZSB8fCAoIUFycmF5LmlzQXJyYXkodmFsdWUpICYmICF2YWx1ZS50eXBlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgbm9kZSwgbm90IGAnICsgdmFsdWUgKyAnYCcpXG4gIH1cblxuICBpZiAoJ3ZhbHVlJyBpbiB2YWx1ZSkgcmV0dXJuIHZhbHVlLnZhbHVlXG5cbiAgY29uc3QgY2hpbGRyZW4gPSAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IHZhbHVlLmNoaWxkcmVuKSB8fCBlbXB0eU5vZGVzXG5cbiAgLyoqIEB0eXBlIHtBcnJheTxzdHJpbmc+fSAqL1xuICBjb25zdCB2YWx1ZXMgPSBbXVxuXG4gIHdoaWxlICgrK2luZGV4IDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgdmFsdWVzW2luZGV4XSA9IHRvU3RyaW5nKGNoaWxkcmVuW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiB2YWx1ZXMuam9pbignJylcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/nlcst-to-string@4.0.0/node_modules/nlcst-to-string/lib/index.js\n");

/***/ })

};
;