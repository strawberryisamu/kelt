"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/app/components/News.tsx":
/*!*************************************!*\
  !*** ./src/app/components/News.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_News_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/News.css */ \"./src/styles/News.css\");\n/* harmony import */ var _styles_News_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_News_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst newsItems = [\n    {\n        date: \"2022-08\",\n        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: \"2022年度昆布干しインターンシップが終わりました。\"\n        }, void 0, false, {\n            fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n            lineNumber: 5,\n            columnNumber: 35\n        }, undefined)\n    },\n    {\n        date: \"2022-07\",\n        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: \"共同通信社から取材を受けました\"\n        }, void 0, false, {\n            fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n            lineNumber: 6,\n            columnNumber: 35\n        }, undefined)\n    },\n    {\n        date: \"2022-02\",\n        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"https://www.thats.pr.kyoto-u.ac.jp/2022/02/24/11932/\",\n            children: \"京都大学から取材を受けました。\"\n        }, void 0, false, {\n            fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n            lineNumber: 7,\n            columnNumber: 35\n        }, undefined)\n    }\n];\nconst NewsSection = ()=>{\n    _s();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setActiveIndex((current)=>(current + 1) % newsItems.length);\n        }, 5000); // 3000ミリ秒ごとに切り替える\n        return ()=>clearInterval(interval); // コンポーネントのアンマウント時にインターバルをクリアする\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex flex-col md:flex-row bg-[lightgray] px-20 pt-5 pb-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:w-1/4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-lg font-bold\",\n                    children: \"最新情報\"\n                }, void 0, false, {\n                    fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:w-3/4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slideshow-container\",\n                    children: newsItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"slide fade \".concat(activeIndex === index ? \"active\" : \"\"),\n                            style: {\n                                transition: \"opacity 1s ease-in-out\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"news-date\",\n                                        children: item.date\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"news-description\",\n                                        children: item.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NewsSection, \"16En7kR7TbAJMjBrm+xutVNIc5Q=\");\n_c = NewsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsSection);\nvar _c;\n$RefreshReg$(_c, \"NewsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvTmV3cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDeEI7QUFFM0IsTUFBTUcsWUFBWTtJQUNoQjtRQUFFQyxNQUFNO1FBQVdDLDJCQUFhLDhEQUFDQztzQkFBRTs7Ozs7O0lBQStCO0lBQ2xFO1FBQUVGLE1BQU07UUFBV0MsMkJBQWEsOERBQUNDO3NCQUFFOzs7Ozs7SUFBb0I7SUFDdkQ7UUFBRUYsTUFBTTtRQUFXQywyQkFBYSw4REFBQ0M7WUFBRUMsTUFBSztzQkFBdUQ7Ozs7OztJQUFvQjtDQUNwSDtBQUVELE1BQU1DLGNBQWM7O0lBQ2xCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUvQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxXQUFXQyxZQUFZO1lBQzNCRixlQUFlLENBQUNHLFVBQVksQ0FBQ0EsVUFBVSxLQUFLVixVQUFVVyxNQUFNO1FBQzlELEdBQUcsT0FBTyxrQkFBa0I7UUFFNUIsT0FBTyxJQUFNQyxjQUFjSixXQUFXLCtCQUErQjtJQUN2RSxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0s7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQUdGLFdBQVU7OEJBQW9COzs7Ozs7Ozs7OzswQkFFcEMsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDQztvQkFBSUQsV0FBVTs4QkFDWmQsVUFBVWlCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDcEIsOERBQUNKOzRCQUVDRCxXQUFXLGNBQW9ELE9BQXRDUixnQkFBZ0JhLFFBQVEsV0FBVzs0QkFDNURDLE9BQU87Z0NBQUVDLFlBQVk7NEJBQXlCO3NDQUU5Qyw0RUFBQ047O2tEQUNDLDhEQUFDTzt3Q0FBRVIsV0FBVTtrREFBYUksS0FBS2pCLElBQUk7Ozs7OztrREFDbkMsOERBQUNxQjt3Q0FBRVIsV0FBVTtrREFBb0JJLEtBQUtoQixXQUFXOzs7Ozs7Ozs7Ozs7MkJBTjlDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNuQjtHQWxDTWQ7S0FBQUE7QUFvQ04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL05ld3MudHN4PzY0ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ0Avc3R5bGVzL05ld3MuY3NzJztcblxuY29uc3QgbmV3c0l0ZW1zID0gW1xuICB7IGRhdGU6ICcyMDIyLTA4JywgZGVzY3JpcHRpb246IDxhPjIwMjLlubTluqbmmIbluIPlubLjgZfjgqTjg7Pjgr/jg7zjg7Pjgrfjg4Pjg5fjgYzntYLjgo/jgorjgb7jgZfjgZ/jgII8L2E+IH0sXG4gIHsgZGF0ZTogJzIwMjItMDcnLCBkZXNjcmlwdGlvbjogPGE+5YWx5ZCM6YCa5L+h56S+44GL44KJ5Y+W5p2Q44KS5Y+X44GR44G+44GX44GfPC9hPiB9LFxuICB7IGRhdGU6ICcyMDIyLTAyJywgZGVzY3JpcHRpb246IDxhIGhyZWY9J2h0dHBzOi8vd3d3LnRoYXRzLnByLmt5b3RvLXUuYWMuanAvMjAyMi8wMi8yNC8xMTkzMi8nPuS6rOmDveWkp+WtpuOBi+OCieWPluadkOOCkuWPl+OBkeOBvuOBl+OBn+OAgjwvYT4gfVxuXTtcblxuY29uc3QgTmV3c1NlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldEFjdGl2ZUluZGV4KChjdXJyZW50KSA9PiAoY3VycmVudCArIDEpICUgbmV3c0l0ZW1zLmxlbmd0aCk7XG4gICAgfSwgNTAwMCk7IC8vIDMwMDDjg5/jg6rnp5LjgZTjgajjgavliIfjgormm7/jgYjjgotcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTsgLy8g44Kz44Oz44Od44O844ON44Oz44OI44Gu44Ki44Oz44Oe44Km44Oz44OI5pmC44Gr44Kk44Oz44K/44O844OQ44Or44KS44Kv44Oq44Ki44GZ44KLXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgYmctW2xpZ2h0Z3JheV0gcHgtMjAgcHQtNSBwYi01XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMS80XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPuacgOaWsOaDheWgsTwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0zLzRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXNob3ctY29udGFpbmVyXCI+XG4gICAgICAgICAge25ld3NJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNsaWRlIGZhZGUgJHthY3RpdmVJbmRleCA9PT0gaW5kZXggPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zaXRpb246ICdvcGFjaXR5IDFzIGVhc2UtaW4tb3V0JyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5ld3MtZGF0ZVwiPntpdGVtLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5ld3MtZGVzY3JpcHRpb25cIj57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3c1NlY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm5ld3NJdGVtcyIsImRhdGUiLCJkZXNjcmlwdGlvbiIsImEiLCJocmVmIiwiTmV3c1NlY3Rpb24iLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnQiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/components/News.tsx\n"));

/***/ })

});