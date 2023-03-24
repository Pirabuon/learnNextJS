"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Welcome to our homepage.\"\n            }, void 0, false, {\n                fileName: \"/project/learnNextJS/pages/index.js\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"This is the best home page in the world. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur illum architecto cumque recusandae fuga sequi necessitatibus deleniti repellat harum nobis, dolor veniam vero deserunt. Voluptatibus, ducimus deserunt. Recusandae, dolore.\"\n            }, void 0, false, {\n                fileName: \"/project/learnNextJS/pages/index.js\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"The weather: \",\n                    props.forecast\n                ]\n            }, void 0, true, {\n                fileName: \"/project/learnNextJS/pages/index.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/project/learnNextJS/pages/index.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\nasync function getServerSideProps() {\n    const response = await fetch(\"https://api.weather.gov/gridpoints/MFL/109,49/forecast\");\n    const data = await response.json();\n    return {\n        props: {\n            forecast: data.properties.periods[0].detailedForecast\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBZSxTQUFTQSxLQUFLQyxLQUFLLEVBQUU7SUFDbEMscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0E7O29CQUFFO29CQUFjSCxNQUFNSSxRQUFROzs7Ozs7Ozs7Ozs7O0FBR3JDLENBQUM7QUFFTSxlQUFlQyxxQkFBcUI7SUFDekMsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO0lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtJQUVoQyxPQUFPO1FBQ0xULE9BQU87WUFDTEksVUFBVUksS0FBS0UsVUFBVSxDQUFDQyxPQUFPLENBQUMsRUFBRSxDQUFDQyxnQkFBZ0I7UUFDdkQ7SUFDRjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctY2xlYW4tbWluaW1hbC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+V2VsY29tZSB0byBvdXIgaG9tZXBhZ2UuPC9oMj5cbiAgICAgIDxwPlRoaXMgaXMgdGhlIGJlc3QgaG9tZSBwYWdlIGluIHRoZSB3b3JsZC4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVhcnVtIGFzcGVybmF0dXIgaWxsdW0gYXJjaGl0ZWN0byBjdW1xdWUgcmVjdXNhbmRhZSBmdWdhIHNlcXVpIG5lY2Vzc2l0YXRpYnVzIGRlbGVuaXRpIHJlcGVsbGF0IGhhcnVtIG5vYmlzLCBkb2xvciB2ZW5pYW0gdmVybyBkZXNlcnVudC4gVm9sdXB0YXRpYnVzLCBkdWNpbXVzIGRlc2VydW50LiBSZWN1c2FuZGFlLCBkb2xvcmUuPC9wPlxuICAgICAgPHA+VGhlIHdlYXRoZXI6IHtwcm9wcy5mb3JlY2FzdH08L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLndlYXRoZXIuZ292L2dyaWRwb2ludHMvTUZMLzEwOSw0OS9mb3JlY2FzdFwiKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZm9yZWNhc3Q6IGRhdGEucHJvcGVydGllcy5wZXJpb2RzWzBdLmRldGFpbGVkRm9yZWNhc3RcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJkaXYiLCJoMiIsInAiLCJmb3JlY2FzdCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInByb3BlcnRpZXMiLCJwZXJpb2RzIiwiZGV0YWlsZWRGb3JlY2FzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();