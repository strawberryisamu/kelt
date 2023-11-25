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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_News_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/News.css */ \"./src/styles/News.css\");\n/* harmony import */ var _styles_News_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_News_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst newsItems = [\n    {\n        date: \"2021-08\",\n        description: \"2022年度昆布干しインターンシップが終わりました。\"\n    },\n    {\n        date: \"2021-08-02\",\n        description: \"Summer Sale Starts Now!\"\n    },\n    {\n        date: \"2021-08-03\",\n        description: \"Exclusive Interview Released\"\n    }\n];\nconst NewsSection = ()=>{\n    _s();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setActiveIndex((current)=>(current + 1) % newsItems.length);\n        }, 5000); // 3000ミリ秒ごとに切り替える\n        return ()=>clearInterval(interval); // コンポーネントのアンマウント時にインターバルをクリアする\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex flex-col md:flex-row bg-[lightgray] px-20 pt-5 pb-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:w-1/4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-lg font-bold\",\n                    children: \"最新情報\"\n                }, void 0, false, {\n                    fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:w-3/4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slideshow-container\",\n                    children: newsItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"slide fade \".concat(activeIndex === index ? \"active\" : \"\"),\n                            style: {\n                                transition: \"opacity 1s ease-in-out\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"news-date\",\n                                        children: item.date\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"news-description\",\n                                        children: item.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/News.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NewsSection, \"16En7kR7TbAJMjBrm+xutVNIc5Q=\");\n_c = NewsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsSection);\nvar _c;\n$RefreshReg$(_c, \"NewsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvTmV3cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDeEI7QUFFM0IsTUFBTUcsWUFBWTtJQUNoQjtRQUFFQyxNQUFNO1FBQVdDLGFBQWE7SUFBNkI7SUFDN0Q7UUFBRUQsTUFBTTtRQUFjQyxhQUFhO0lBQTBCO0lBQzdEO1FBQUVELE1BQU07UUFBY0MsYUFBYTtJQUErQjtDQUNuRTtBQUVELE1BQU1DLGNBQWM7O0lBQ2xCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUvQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxXQUFXQyxZQUFZO1lBQzNCRixlQUFlLENBQUNHLFVBQVksQ0FBQ0EsVUFBVSxLQUFLUixVQUFVUyxNQUFNO1FBQzlELEdBQUcsT0FBTyxrQkFBa0I7UUFFNUIsT0FBTyxJQUFNQyxjQUFjSixXQUFXLCtCQUErQjtJQUN2RSxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0s7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQUdGLFdBQVU7OEJBQW9COzs7Ozs7Ozs7OzswQkFFcEMsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDQztvQkFBSUQsV0FBVTs4QkFDWlosVUFBVWUsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNwQiw4REFBQ0o7NEJBRUNELFdBQVcsY0FBb0QsT0FBdENSLGdCQUFnQmEsUUFBUSxXQUFXOzRCQUM1REMsT0FBTztnQ0FBRUMsWUFBWTs0QkFBeUI7c0NBRTlDLDRFQUFDTjs7a0RBQ0MsOERBQUNPO3dDQUFFUixXQUFVO2tEQUFhSSxLQUFLZixJQUFJOzs7Ozs7a0RBQ25DLDhEQUFDbUI7d0NBQUVSLFdBQVU7a0RBQW9CSSxLQUFLZCxXQUFXOzs7Ozs7Ozs7Ozs7MkJBTjlDZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY25CO0dBbENNZDtLQUFBQTtBQW9DTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTmV3cy50c3g/NjRlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnQC9zdHlsZXMvTmV3cy5jc3MnO1xuXG5jb25zdCBuZXdzSXRlbXMgPSBbXG4gIHsgZGF0ZTogJzIwMjEtMDgnLCBkZXNjcmlwdGlvbjogJzIwMjLlubTluqbmmIbluIPlubLjgZfjgqTjg7Pjgr/jg7zjg7Pjgrfjg4Pjg5fjgYzntYLjgo/jgorjgb7jgZfjgZ/jgIInIH0sXG4gIHsgZGF0ZTogJzIwMjEtMDgtMDInLCBkZXNjcmlwdGlvbjogJ1N1bW1lciBTYWxlIFN0YXJ0cyBOb3chJyB9LFxuICB7IGRhdGU6ICcyMDIxLTA4LTAzJywgZGVzY3JpcHRpb246ICdFeGNsdXNpdmUgSW50ZXJ2aWV3IFJlbGVhc2VkJyB9XG5dO1xuXG5jb25zdCBOZXdzU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0QWN0aXZlSW5kZXgoKGN1cnJlbnQpID0+IChjdXJyZW50ICsgMSkgJSBuZXdzSXRlbXMubGVuZ3RoKTtcbiAgICB9LCA1MDAwKTsgLy8gMzAwMOODn+ODquenkuOBlOOBqOOBq+WIh+OCiuabv+OBiOOCi1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpOyAvLyDjgrPjg7Pjg53jg7zjg43jg7Pjg4jjga7jgqLjg7Pjg57jgqbjg7Pjg4jmmYLjgavjgqTjg7Pjgr/jg7zjg5Djg6vjgpLjgq/jg6rjgqLjgZnjgotcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBiZy1bbGlnaHRncmF5XSBweC0yMCBwdC01IHBiLTVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzRcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+5pyA5paw5oOF5aCxPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTMvNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlc2hvdy1jb250YWluZXJcIj5cbiAgICAgICAgICB7bmV3c0l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgc2xpZGUgZmFkZSAke2FjdGl2ZUluZGV4ID09PSBpbmRleCA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbjogJ29wYWNpdHkgMXMgZWFzZS1pbi1vdXQnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmV3cy1kYXRlXCI+e2l0ZW0uZGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmV3cy1kZXNjcmlwdGlvblwiPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdzU2VjdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibmV3c0l0ZW1zIiwiZGF0ZSIsImRlc2NyaXB0aW9uIiwiTmV3c1NlY3Rpb24iLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnQiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/components/News.tsx\n"));

/***/ })

});