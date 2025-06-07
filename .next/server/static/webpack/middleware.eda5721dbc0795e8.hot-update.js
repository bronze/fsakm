"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0/node_modules/next/dist/esm/api/server.js\");\n\nconst PUBLIC_FILE = /\\.(.*)$/;\nasync function middleware(req) {\n    if (req.nextUrl.pathname.startsWith('/_next') || req.nextUrl.pathname.includes('/api/') || PUBLIC_FILE.test(req.nextUrl.pathname)) {\n        return;\n    }\n    if (req.nextUrl.locale === 'default') {\n        const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en';\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBdUQ7QUFFdkQsTUFBTUMsY0FBYztBQUViLGVBQWVDLFdBQVdDLEdBQWdCO0lBQy9DLElBQ0VBLElBQUlDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsYUFDaENILElBQUlDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRSxRQUFRLENBQUMsWUFDOUJOLFlBQVlPLElBQUksQ0FBQ0wsSUFBSUMsT0FBTyxDQUFDQyxRQUFRLEdBQ3JDO1FBQ0E7SUFDRjtJQUVBLElBQUlGLElBQUlDLE9BQU8sQ0FBQ0ssTUFBTSxLQUFLLFdBQVc7UUFDcEMsTUFBTUEsU0FBU04sSUFBSU8sT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCQyxTQUFTO1FBRXhELE9BQU9aLHFEQUFZQSxDQUFDYSxRQUFRLENBQzFCLElBQUlDLElBQUksQ0FBQyxDQUFDLEVBQUVMLFNBQVNOLElBQUlDLE9BQU8sQ0FBQ0MsUUFBUSxHQUFHRixJQUFJQyxPQUFPLENBQUNXLE1BQU0sRUFBRSxFQUFFWixJQUFJYSxHQUFHO0lBRTdFO0FBQ0YiLCJzb3VyY2VzIjpbIi9ob21lL2Jyb256ZS9jb2RpbmcvZnNha20vc3JjL21pZGRsZXdhcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuXG5jb25zdCBQVUJMSUNfRklMRSA9IC9cXC4oLiopJC9cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxOiBOZXh0UmVxdWVzdCkge1xuICBpZiAoXG4gICAgcmVxLm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aCgnL19uZXh0JykgfHxcbiAgICByZXEubmV4dFVybC5wYXRobmFtZS5pbmNsdWRlcygnL2FwaS8nKSB8fFxuICAgIFBVQkxJQ19GSUxFLnRlc3QocmVxLm5leHRVcmwucGF0aG5hbWUpXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHJlcS5uZXh0VXJsLmxvY2FsZSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgY29uc3QgbG9jYWxlID0gcmVxLmNvb2tpZXMuZ2V0KCdORVhUX0xPQ0FMRScpPy52YWx1ZSB8fCAnZW4nXG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KFxuICAgICAgbmV3IFVSTChgLyR7bG9jYWxlfSR7cmVxLm5leHRVcmwucGF0aG5hbWV9JHtyZXEubmV4dFVybC5zZWFyY2h9YCwgcmVxLnVybClcbiAgICApXG4gIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiUFVCTElDX0ZJTEUiLCJtaWRkbGV3YXJlIiwicmVxIiwibmV4dFVybCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImluY2x1ZGVzIiwidGVzdCIsImxvY2FsZSIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsInJlZGlyZWN0IiwiVVJMIiwic2VhcmNoIiwidXJsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});