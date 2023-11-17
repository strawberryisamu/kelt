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

/***/ "./src/app/components/FirstView.tsx":
/*!******************************************!*\
  !*** ./src/app/components/FirstView.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_FirstView_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/FirstView.css */ \"./src/styles/FirstView.css\");\n/* harmony import */ var _styles_FirstView_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_FirstView_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst FirstView = (param)=>{\n    let { windowHeight } = param;\n    _s();\n    const playerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const redirectToYouTube = ()=>{\n        window.location.href = \"https://www.youtube.com/watch?v=KdXUgTywSUo\";\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // スクリプトタグの挿入前にnullチェックを行う\n        const firstScriptTag = document.getElementsByTagName(\"script\")[0];\n        if (firstScriptTag.parentNode) {\n            const tag = document.createElement(\"script\");\n            tag.src = \"https://www.youtube.com/iframe_api\";\n            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);\n        }\n        // onYouTubeIframeAPIReady にコールバックを設定\n        window.onYouTubeIframeAPIReady = ()=>{\n            // YouTube プレイヤーを初期化する\n            // 正しい型注釈をイベントハンドラに適用する\n            new YT.Player(playerRef.current, {\n                videoId: \"KdXUgTywSUo\",\n                playerVars: {\n                    playsinline: 1,\n                    autoplay: 1,\n                    fs: 0,\n                    rel: 0,\n                    controls: 0,\n                    modestbranding: 1,\n                    iv_load_policy: 3,\n                    start: 50\n                },\n                events: {\n                    onReady: (event)=>{\n                        event.target.mute();\n                        event.target.playVideo();\n                    },\n                    onStateChange: (event)=>{\n                        if (event.data === YT.PlayerState.ENDED) {\n                            event.target.playVideo();\n                        }\n                    }\n                }\n            });\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full mb-10\",\n        style: {\n            height: \"\".concat(windowHeight, \"px\")\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: playerRef,\n                id: \"player\"\n            }, void 0, false, {\n                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/FirstView.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    position: \"absolute\",\n                    top: \"5%\",\n                    marginLeft: \"50%\",\n                    transform: \"translate(-50%, -50%)\",\n                    padding: \"10px 20px\",\n                    borderRadius: \"10px\",\n                    fontSize: \"3vw\",\n                    color: \"white\",\n                    zIndex: 100\n                },\n                children: \"京大昆布干しインターンシップ\"\n            }, void 0, false, {\n                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/FirstView.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: redirectToYouTube,\n                style: {\n                    position: \"absolute\",\n                    top: \"50%\",\n                    left: \"50%\",\n                    transform: \"translate(-50%, -50%)\",\n                    padding: \"15px\",\n                    cursor: \"pointer\",\n                    zIndex: 100\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"./images/kkrn_icon_saisei_11.svg\",\n                    alt: \"Play\",\n                    style: {\n                        width: \"120px\",\n                        height: \"120px\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/FirstView.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/FirstView.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"scroll-down-prompt\",\n                className: \"scrolldown-animation\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Scroll\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/FirstView.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"arrow\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/FirstView.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/FirstView.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/FirstView.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FirstView, \"acbxrIfK24+Wx044vlsAOaa8STc=\");\n_c = FirstView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FirstView);\nvar _c;\n$RefreshReg$(_c, \"FirstView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvRmlyc3RWaWV3LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpRDtBQUNqQjtBQWFoQyxNQUFNRyxZQUFzQztRQUFDLEVBQUVDLFlBQVksRUFBRTs7SUFDM0QsTUFBTUMsWUFBWUgsNkNBQU1BLENBQWlCO0lBQ3pDLE1BQU1JLG9CQUFvQjtRQUN4QkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7SUFDekI7SUFFQVIsZ0RBQVNBLENBQUM7UUFDUiwwQkFBMEI7UUFDMUIsTUFBTVMsaUJBQWlCQyxTQUFTQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUNqRSxJQUFJRixlQUFlRyxVQUFVLEVBQUU7WUFDN0IsTUFBTUMsTUFBTUgsU0FBU0ksYUFBYSxDQUFDO1lBQ25DRCxJQUFJRSxHQUFHLEdBQUc7WUFDVk4sZUFBZUcsVUFBVSxDQUFDSSxZQUFZLENBQUNILEtBQUtKO1FBQzlDO1FBRUEscUNBQXFDO1FBQ3JDSCxPQUFPVyx1QkFBdUIsR0FBRztZQUMvQixzQkFBc0I7WUFDdEIsdUJBQXVCO1lBQ3ZCLElBQUlDLEdBQUdDLE1BQU0sQ0FBQ2YsVUFBVWdCLE9BQU8sRUFBRztnQkFDaENDLFNBQVM7Z0JBQ1RDLFlBQVk7b0JBQ1ZDLGFBQWE7b0JBQ2JDLFVBQVU7b0JBQ1ZDLElBQUk7b0JBQ0pDLEtBQUs7b0JBQ0xDLFVBQVU7b0JBQ1ZDLGdCQUFnQjtvQkFDaEJDLGdCQUFnQjtvQkFDaEJDLE9BQU87Z0JBQ1Q7Z0JBQ0FDLFFBQVE7b0JBQ05DLFNBQVMsQ0FBQ0M7d0JBQ1JBLE1BQU1DLE1BQU0sQ0FBQ0MsSUFBSTt3QkFDakJGLE1BQU1DLE1BQU0sQ0FBQ0UsU0FBUztvQkFDeEI7b0JBQ0FDLGVBQWUsQ0FBQ0o7d0JBQ2QsSUFBSUEsTUFBTUssSUFBSSxLQUFLcEIsR0FBR3FCLFdBQVcsQ0FBQ0MsS0FBSyxFQUFFOzRCQUN2Q1AsTUFBTUMsTUFBTSxDQUFDRSxTQUFTO3dCQUN4QjtvQkFDRjtnQkFDRjtZQUNGO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTtRQUF3QkMsT0FBTztZQUFFQyxRQUFRLEdBQWdCLE9BQWJ6QyxjQUFhO1FBQUc7OzBCQUV6RSw4REFBQ3NDO2dCQUFJSSxLQUFLekM7Z0JBQVcwQyxJQUFHOzs7Ozs7MEJBRXhCLDhEQUFDQztnQkFBR0osT0FBTztvQkFDVEssVUFBVTtvQkFDVkMsS0FBSztvQkFFTEMsWUFBWTtvQkFDWkMsV0FBVztvQkFDWEMsU0FBUztvQkFDVEMsY0FBYztvQkFDZEMsVUFBVTtvQkFDVkMsT0FBTztvQkFDUEMsUUFBTztnQkFDVDswQkFBRzs7Ozs7OzBCQUdILDhEQUFDQztnQkFDQ0MsU0FBU3JEO2dCQUNUc0MsT0FBTztvQkFDTEssVUFBVTtvQkFDVkMsS0FBSztvQkFDTFUsTUFBTTtvQkFDTlIsV0FBVztvQkFJWEMsU0FBUztvQkFDVFEsUUFBUTtvQkFDUkosUUFBUTtnQkFDVjswQkFFQSw0RUFBQ0s7b0JBQUk5QyxLQUFJO29CQUFtQytDLEtBQUk7b0JBQU9uQixPQUFPO3dCQUFFb0IsT0FBTzt3QkFBU25CLFFBQVE7b0JBQVE7Ozs7Ozs7Ozs7OzBCQU9sRyw4REFBQ0g7Z0JBQUlLLElBQUc7Z0JBQXFCSixXQUFVOztrQ0FDckMsOERBQUNzQjtrQ0FBSzs7Ozs7O2tDQUNOLDhEQUFDdkI7d0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2QjtHQTlGTXhDO0tBQUFBO0FBZ0dOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9GaXJzdFZpZXcudHN4PzczNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdAL3N0eWxlcy9GaXJzdFZpZXcuY3NzJztcblxuLy8gWW91VHViZSBJRnJhbWUgQVBJ44Gu5Z6L5ouh5by1XG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIG9uWW91VHViZUlmcmFtZUFQSVJlYWR5OiAoKSA9PiB2b2lkO1xuICB9XG59XG5cbmludGVyZmFjZSBGaXJzdFZpZXdQcm9wcyB7XG4gIHdpbmRvd0hlaWdodDogbnVtYmVyO1xufVxuXG5jb25zdCBGaXJzdFZpZXc6IFJlYWN0LkZDPEZpcnN0Vmlld1Byb3BzPiA9ICh7IHdpbmRvd0hlaWdodCB9KSA9PiB7XG4gIGNvbnN0IHBsYXllclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHJlZGlyZWN0VG9Zb3VUdWJlID0gKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9S2RYVWdUeXdTVW8nO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8g44K544Kv44Oq44OX44OI44K/44Kw44Gu5oy/5YWl5YmN44GrbnVsbOODgeOCp+ODg+OCr+OCkuihjOOBhlxuICAgIGNvbnN0IGZpcnN0U2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgIGlmIChmaXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlKSB7XG4gICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHRhZy5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGlcIjtcbiAgICAgIGZpcnN0U2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xuICAgIH1cblxuICAgIC8vIG9uWW91VHViZUlmcmFtZUFQSVJlYWR5IOOBq+OCs+ODvOODq+ODkOODg+OCr+OCkuioreWumlxuICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9ICgpID0+IHtcbiAgICAgIC8vIFlvdVR1YmUg44OX44Os44Kk44Ok44O844KS5Yid5pyf5YyW44GZ44KLXG4gICAgICAvLyDmraPjgZfjgYTlnovms6jph4jjgpLjgqTjg5njg7Pjg4jjg4/jg7Pjg4njg6njgavpgannlKjjgZnjgotcbiAgICAgIG5ldyBZVC5QbGF5ZXIocGxheWVyUmVmLmN1cnJlbnQhLCB7XG4gICAgICAgIHZpZGVvSWQ6ICdLZFhVZ1R5d1NVbycsXG4gICAgICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgICBwbGF5c2lubGluZTogMSxcbiAgICAgICAgICBhdXRvcGxheTogMSxcbiAgICAgICAgICBmczogMCxcbiAgICAgICAgICByZWw6IDAsXG4gICAgICAgICAgY29udHJvbHM6IDAsXG4gICAgICAgICAgbW9kZXN0YnJhbmRpbmc6IDEsXG4gICAgICAgICAgaXZfbG9hZF9wb2xpY3k6IDMsXG4gICAgICAgICAgc3RhcnQ6IDUwLFxuICAgICAgICB9LFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBvblJlYWR5OiAoZXZlbnQ6IFlULlBsYXllckV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQubXV0ZSgpO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBsYXlWaWRlbygpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25TdGF0ZUNoYW5nZTogKGV2ZW50OiBZVC5PblN0YXRlQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhID09PSBZVC5QbGF5ZXJTdGF0ZS5FTkRFRCkge1xuICAgICAgICAgICAgICBldmVudC50YXJnZXQucGxheVZpZGVvKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWItMTBcIiBzdHlsZT17eyBoZWlnaHQ6IGAke3dpbmRvd0hlaWdodH1weGB9fT5cbiAgICAgIHsvKiBZb3VUdWJlIOWLleeUu+OCkuihqOekuuOBmeOCi+OBn+OCgeOBruOCs+ODs+ODhuODiiAqL31cbiAgICAgIDxkaXYgcmVmPXtwbGF5ZXJSZWZ9IGlkPVwicGxheWVyXCIgLz5cblxuICAgICAgPGgxIHN0eWxlPXt7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6ICc1JScsXG5cbiAgICAgICAgbWFyZ2luTGVmdDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4IDIwcHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICAgICAgZm9udFNpemU6ICczdncnLFxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgekluZGV4OjEwMCxcbiAgICAgIH19PlxuICAgICAgICDkuqzlpKfmmIbluIPlubLjgZfjgqTjg7Pjgr/jg7zjg7Pjgrfjg4Pjg5dcbiAgICAgIDwvaDE+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e3JlZGlyZWN0VG9Zb3VUdWJlfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcblxuXG5cbiAgICAgICAgICBwYWRkaW5nOiAnMTVweCcsXG4gICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgekluZGV4OiAxMDAsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpbWcgc3JjPScuL2ltYWdlcy9ra3JuX2ljb25fc2Fpc2VpXzExLnN2ZycgYWx0PVwiUGxheVwiIHN0eWxlPXt7IHdpZHRoOiAnMTIwcHgnLCBoZWlnaHQ6ICcxMjBweCcgfX0gLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgey8qIDxpbWdcbiAgICAgICAgc3JjPVwiLi9pbWFnZXMvZmlyc3RWaWV3LnBuZ1wiIC8vIOeUu+WDj+OBruODkeOCueOCkuaMh+WumlxuICAgICAgICBhbHQ9XCJGaXJzdCBWaWV3IEltYWdlXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgLz4gKi99XG4gICAgICA8ZGl2IGlkPVwic2Nyb2xsLWRvd24tcHJvbXB0XCIgY2xhc3NOYW1lPVwic2Nyb2xsZG93bi1hbmltYXRpb25cIj5cbiAgICAgICAgPHNwYW4+U2Nyb2xsPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiAuLi4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaXJzdFZpZXc7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJGaXJzdFZpZXciLCJ3aW5kb3dIZWlnaHQiLCJwbGF5ZXJSZWYiLCJyZWRpcmVjdFRvWW91VHViZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImZpcnN0U2NyaXB0VGFnIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJ0YWciLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiaW5zZXJ0QmVmb3JlIiwib25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkiLCJZVCIsIlBsYXllciIsImN1cnJlbnQiLCJ2aWRlb0lkIiwicGxheWVyVmFycyIsInBsYXlzaW5saW5lIiwiYXV0b3BsYXkiLCJmcyIsInJlbCIsImNvbnRyb2xzIiwibW9kZXN0YnJhbmRpbmciLCJpdl9sb2FkX3BvbGljeSIsInN0YXJ0IiwiZXZlbnRzIiwib25SZWFkeSIsImV2ZW50IiwidGFyZ2V0IiwibXV0ZSIsInBsYXlWaWRlbyIsIm9uU3RhdGVDaGFuZ2UiLCJkYXRhIiwiUGxheWVyU3RhdGUiLCJFTkRFRCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaGVpZ2h0IiwicmVmIiwiaWQiLCJoMSIsInBvc2l0aW9uIiwidG9wIiwibWFyZ2luTGVmdCIsInRyYW5zZm9ybSIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsImNvbG9yIiwiekluZGV4IiwiYnV0dG9uIiwib25DbGljayIsImxlZnQiLCJjdXJzb3IiLCJpbWciLCJhbHQiLCJ3aWR0aCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/components/FirstView.tsx\n"));

/***/ })

});