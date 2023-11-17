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

/***/ "./src/app/components/SectionWithBackground.tsx":
/*!******************************************************!*\
  !*** ./src/app/components/SectionWithBackground.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Section_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Section.css */ \"./src/styles/Section.css\");\n/* harmony import */ var _styles_Section_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Section_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n // 必要なスタイルをインポート\n\nconst SectionWithBackground = (param)=>{\n    let { title, subtitle, backgroundImage, backgroundColor, children, slideFromLeft = false, backgroundLeft = false, back = false, color } = param;\n    _s();\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)({\n        /* オプション: 閾値やトリガー条件を設定 */ threshold: 0.1,\n        triggerOnce: true,\n        delay: 800\n    });\n    const backgroundStyle = backgroundImage ? {\n        backgroundImage: \"url(\".concat(backgroundImage, \")\"),\n        backgroundSize: \"contain\",\n        backgroundAttachment: \"fixed\"\n    } : {\n        backgroundColor\n    };\n    const Color = color ? {\n        backgroundColor: color\n    } : {};\n    const slideFromleft = slideFromLeft ? {\n        right: \"0vw\"\n    } : {\n        left: \"0vw\"\n    };\n    const backgroundleft = backgroundLeft ? {\n        left: \"0%\"\n    } : {\n        left: \"-30%\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"relative \",\n        style: {\n            ...Color\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pt-[6.8376068376%] pb-[5.1282051282%] \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ref,\n                className: \"top-0 left-0 \".concat(back ? \"visionsss\" : \"\"),\n                style: {\n                    padding: \"0 10%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"animated-title \".concat(inView ? \"animate\" : \"\"),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/SectionWithBackground.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, undefined),\n                    subtitle && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"subtitle \".concat(inView ? \"animate\" : \"\"),\n                        children: subtitle\n                    }, void 0, false, {\n                        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/SectionWithBackground.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 26\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"zIndex-10 absolute background \".concat(inView ? \"visible\" : \"\"),\n                        style: {\n                            ...backgroundleft\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                ...slideFromleft,\n                                ...backgroundStyle\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/SectionWithBackground.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/SectionWithBackground.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(subtitle ? \"children\" : \"\", \" \"),\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/SectionWithBackground.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/SectionWithBackground.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/SectionWithBackground.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/SectionWithBackground.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SectionWithBackground, \"oyd/E8SD7Fx4uOp6P7gVV2pVlaE=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView\n    ];\n});\n_c = SectionWithBackground;\n{}/* harmony default export */ __webpack_exports__[\"default\"] = (SectionWithBackground);\nvar _c;\n$RefreshReg$(_c, \"SectionWithBackground\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvU2VjdGlvbldpdGhCYWNrZ3JvdW5kLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0U7QUFDcEMsQ0FBQyxnQkFBZ0I7QUFDSztBQWV4RCxNQUFNRSx3QkFBOEQ7UUFBQyxFQUNuRUMsS0FBSyxFQUNMQyxRQUFRLEVBQ1JDLGVBQWUsRUFDZkMsZUFBZSxFQUNmQyxRQUFRLEVBQ1JDLGdCQUFnQixLQUFLLEVBQ3JCQyxpQkFBaUIsS0FBSyxFQUN0QkMsT0FBTyxLQUFLLEVBQ1pDLEtBQUssRUFDTjs7SUFFQyxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsTUFBTSxFQUFFLEdBQUdaLHNFQUFTQSxDQUFDO1FBQ2hDLHVCQUF1QixHQUN2QmEsV0FBVztRQUNYQyxhQUFhO1FBQ2JDLE9BQU87SUFDVDtJQUVBLE1BQU1DLGtCQUFrQlosa0JBQ3BCO1FBQUVBLGlCQUFpQixPQUF1QixPQUFoQkEsaUJBQWdCO1FBQUlhLGdCQUFnQjtRQUFXQyxzQkFBc0I7SUFBUSxJQUN2RztRQUFFYjtJQUFnQjtJQUV0QixNQUFNYyxRQUFRVCxRQUFRO1FBQUNMLGlCQUFpQks7SUFBSyxJQUFJLENBQUM7SUFFbEQsTUFBTVUsZ0JBQWdCYixnQkFDbEI7UUFBQ2MsT0FBTztJQUFLLElBQ2I7UUFBQ0MsTUFBTTtJQUFLO0lBRWhCLE1BQU1DLGlCQUFpQmYsaUJBQ25CO1FBQUNjLE1BQU07SUFBSSxJQUNYO1FBQUNBLE1BQU07SUFBTTtJQUVqQixxQkFDRSw4REFBQ0U7UUFBUUMsV0FBVTtRQUFZQyxPQUFPO1lBQUMsR0FBR1AsS0FBSztRQUFBO2tCQUM3Qyw0RUFBQ1E7WUFBSUYsV0FBWTtzQkFDZiw0RUFBQ0U7Z0JBQUloQixLQUFLQTtnQkFBS2MsV0FBVyxnQkFBc0MsT0FBdEJoQixPQUFNLGNBQWE7Z0JBQU1pQixPQUFPO29CQUFDRSxTQUFTO2dCQUFPOztrQ0FDdkYsOERBQUNDO3dCQUFJSixXQUFXLGtCQUEwQyxPQUF4QmIsU0FBUyxZQUFZO2tDQUFPVjs7Ozs7O29CQUM3REMsMEJBQVksOERBQUMyQjt3QkFBR0wsV0FBVyxZQUFvQyxPQUF4QmIsU0FBUyxZQUFZO2tDQUFPVDs7Ozs7O2tDQUNwRSw4REFBQ3dCO3dCQUFJRixXQUFXLGlDQUF5RCxPQUF4QmIsU0FBUyxZQUFZO3dCQUFNYyxPQUFPOzRCQUFDLEdBQUdILGNBQWM7d0JBQUE7a0NBQ2pHLDRFQUFDSTs0QkFBSUQsT0FBTztnQ0FBQyxHQUFHTixhQUFhO2dDQUFFLEdBQUdKLGVBQWU7NEJBQUE7Ozs7Ozs7Ozs7O2tDQUVyRCw4REFBQ1c7d0JBQUlGLFdBQVcsR0FBOEIsT0FBM0J0QixXQUFXLGFBQWEsSUFBRztrQ0FDM0NHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWY7R0FqRE1MOztRQVlvQkQsa0VBQVNBOzs7S0FaN0JDO0FBbUROLENBQTZGLENBRTdGLCtEQUFlQSxxQkFBcUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1NlY3Rpb25XaXRoQmFja2dyb3VuZC50c3g/NTU3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9TZWN0aW9uLmNzcyc7IC8vIOW/heimgeOBquOCueOCv+OCpOODq+OCkuOCpOODs+ODneODvOODiFxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcblxuXG5pbnRlcmZhY2UgU2VjdGlvbldpdGhCYWNrZ3JvdW5kUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZT86IHN0cmluZztcbiAgYmFja2dyb3VuZEltYWdlPzogc3RyaW5nO1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICBzbGlkZUZyb21MZWZ0PzogYm9vbGVhbjtcbiAgYmFja2dyb3VuZExlZnQ/OiBib29sZWFuO1xuICBiYWNrPzogYm9vbGVhbjtcbiAgY29sb3I/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFNlY3Rpb25XaXRoQmFja2dyb3VuZDogUmVhY3QuRkM8U2VjdGlvbldpdGhCYWNrZ3JvdW5kUHJvcHM+ID0gKHtcbiAgdGl0bGUsXG4gIHN1YnRpdGxlLFxuICBiYWNrZ3JvdW5kSW1hZ2UsXG4gIGJhY2tncm91bmRDb2xvcixcbiAgY2hpbGRyZW4sIFxuICBzbGlkZUZyb21MZWZ0ID0gZmFsc2UsXG4gIGJhY2tncm91bmRMZWZ0ID0gZmFsc2UsXG4gIGJhY2sgPSBmYWxzZSxcbiAgY29sb3Jcbn0pID0+IHtcblxuICBjb25zdCB7IHJlZiwgaW5WaWV3IH0gPSB1c2VJblZpZXcoe1xuICAgIC8qIOOCquODl+OCt+ODp+ODszog6Za+5YCk44KE44OI44Oq44Ks44O85p2h5Lu244KS6Kit5a6aICovXG4gICAgdGhyZXNob2xkOiAwLjEsIC8vIOS+izog6KaB57Sg44GMNTAl6KGo56S644GV44KM44Gf5pmC44Gr44OI44Oq44Ks44O8XG4gICAgdHJpZ2dlck9uY2U6IHRydWUsIFxuICAgIGRlbGF5OiA4MDBcbiAgfSk7XG5cbiAgY29uc3QgYmFja2dyb3VuZFN0eWxlID0gYmFja2dyb3VuZEltYWdlXG4gICAgPyB7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmRJbWFnZX0pYCwgYmFja2dyb3VuZFNpemU6ICdjb250YWluJywgYmFja2dyb3VuZEF0dGFjaG1lbnQ6ICdmaXhlZCcgfVxuICAgIDogeyBiYWNrZ3JvdW5kQ29sb3IgfTtcblxuICBjb25zdCBDb2xvciA9IGNvbG9yID8ge2JhY2tncm91bmRDb2xvcjogY29sb3J9IDoge31cblxuICBjb25zdCBzbGlkZUZyb21sZWZ0ID0gc2xpZGVGcm9tTGVmdFxuICAgID8ge3JpZ2h0OiBcIjB2d1wifSBcbiAgICA6IHtsZWZ0OiBcIjB2d1wifTtcblxuICBjb25zdCBiYWNrZ3JvdW5kbGVmdCA9IGJhY2tncm91bmRMZWZ0XG4gICAgPyB7bGVmdDogXCIwJVwifSBcbiAgICA6IHtsZWZ0OiBcIi0zMCVcIn07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBcIiBzdHlsZT17ey4uLkNvbG9yfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHB0LVs2LjgzNzYwNjgzNzYlXSBwYi1bNS4xMjgyMDUxMjgyJV0gYH0+XG4gICAgICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT17YHRvcC0wIGxlZnQtMCAke2JhY2s/ICd2aXNpb25zc3MnOiAnJ31gIH1zdHlsZT17e3BhZGRpbmc6ICcwIDEwJSd9fT5cbiAgICAgICAgICAgIDxoMyAgY2xhc3NOYW1lPXtgYW5pbWF0ZWQtdGl0bGUgJHtpblZpZXcgPyAnYW5pbWF0ZScgOiAnJ31gfT57dGl0bGV9PC9oMz5cbiAgICAgICAgICAgIHtzdWJ0aXRsZSAmJiA8cCAgY2xhc3NOYW1lPXtgc3VidGl0bGUgJHtpblZpZXcgPyAnYW5pbWF0ZScgOiAnJ31gfT57c3VidGl0bGV9PC9wPn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgekluZGV4LTEwIGFic29sdXRlIGJhY2tncm91bmQgJHtpblZpZXcgPyAndmlzaWJsZScgOiAnJ31gfSBzdHlsZT17ey4uLmJhY2tncm91bmRsZWZ0fX0gPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3suLi5zbGlkZUZyb21sZWZ0ICwuLi5iYWNrZ3JvdW5kU3R5bGV9fT48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N1YnRpdGxlID8gJ2NoaWxkcmVuJyA6ICcnfSBgfT5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG57LyogPGgyIHJlZj17dGl0bGVSZWZ9IGNsYXNzTmFtZT1cInRleHQtMnhsIHRpdGxlLXdpdGgtdW5kZXJsaW5lXCI+PHNwYW4+e3RpdGxlfTwvc3Bhbj48L2gyPiAqL31cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbldpdGhCYWNrZ3JvdW5kO1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VJblZpZXciLCJTZWN0aW9uV2l0aEJhY2tncm91bmQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZENvbG9yIiwiY2hpbGRyZW4iLCJzbGlkZUZyb21MZWZ0IiwiYmFja2dyb3VuZExlZnQiLCJiYWNrIiwiY29sb3IiLCJyZWYiLCJpblZpZXciLCJ0aHJlc2hvbGQiLCJ0cmlnZ2VyT25jZSIsImRlbGF5IiwiYmFja2dyb3VuZFN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQXR0YWNobWVudCIsIkNvbG9yIiwic2xpZGVGcm9tbGVmdCIsInJpZ2h0IiwibGVmdCIsImJhY2tncm91bmRsZWZ0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInN0eWxlIiwiZGl2IiwicGFkZGluZyIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/components/SectionWithBackground.tsx\n"));

/***/ })

});