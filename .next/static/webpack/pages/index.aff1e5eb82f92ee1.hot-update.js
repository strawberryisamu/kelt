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

/***/ "./src/app/components/ImageScroll.tsx":
/*!********************************************!*\
  !*** ./src/app/components/ImageScroll.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/index.mjs\");\n/* harmony import */ var _styles_ImageScroll_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/ImageScroll.css */ \"./src/styles/ImageScroll.css\");\n/* harmony import */ var _styles_ImageScroll_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ImageScroll_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n // 必要なスタイルをインポート\nconst ImageScroll = ()=>{\n    _s();\n    const [isSticky, setIsSticky] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)({\n        threshold: 1\n    });\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        setIsSticky(!inView); // 要素がビューポートに入ったらstickyを無効化\n    }, [\n        inView\n    ]);\n    const [leftContent, setLeftContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        className: \"w-[100%] rounded-md border-2 border-gray-300 \".concat(isSticky ? \"sticky-element\" : \"\"),\n        style: {\n            aspectRatio: \"1 / 1\",\n            objectFit: \"cover\",\n            objectPosition: \"right\"\n        },\n        src: \"./images/akao.png\"\n    }, void 0, false, {\n        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n        lineNumber: 14,\n        columnNumber: 50\n    }, undefined));\n    const [ref1, inView1] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)({\n        threshold: 1\n    });\n    const [ref2, inView2] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)({\n        threshold: 1\n    });\n    const [ref3, inView3] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)({\n        threshold: 1\n    });\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (inView1) setLeftContent(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"w-[100%] rounded-md border-2 border-gray-300 \".concat(isSticky ? \"sticky-element\" : \"\"),\n            style: {\n                aspectRatio: \"1 / 1\",\n                objectFit: \"cover\",\n                objectPosition: \"right\"\n            },\n            src: \"./images/akao.png\"\n        }, void 0, false, {\n            fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n            lineNumber: 21,\n            columnNumber: 33\n        }, undefined));\n        if (inView2) setLeftContent(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"w-[100%] rounded-md border-2 border-gray-300 \".concat(isSticky ? \"sticky-element\" : \"\"),\n            style: {\n                aspectRatio: \"1 / 1\",\n                objectFit: \"cover\"\n            },\n            src: \"./images/shiosaki.png\"\n        }, void 0, false, {\n            fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n            lineNumber: 22,\n            columnNumber: 33\n        }, undefined));\n        if (inView3) setLeftContent(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"w-[100%] rounded-md border-2 border-gray-300 \".concat(isSticky ? \"sticky-element\" : \"\"),\n            style: {\n                aspectRatio: \"1 / 1\",\n                objectFit: \"cover\",\n                objectPosition: \"30%\"\n            },\n            src: \"./images/ogino.png\"\n        }, void 0, false, {\n            fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n            lineNumber: 23,\n            columnNumber: 33\n        }, undefined));\n    }, [\n        inView1,\n        inView2,\n        inView3\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: leftContent\n            }, void 0, false, {\n                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ref,\n                style: {\n                    height: \"240vh\",\n                    width: \"100%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: ref1,\n                        className: \"centered-content\",\n                        style: {\n                            height: \"80vh\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"【思い切って利尻に飛び込んだ】\"\n                            }, void 0, false, {\n                                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"社会人になって数ヶ月、学生に比べると格段に短い夏休みですが今年も利尻に行きました。 今振り返ると学生最後の年、思い切って利尻に飛び込んで良かったと心から思います。\"\n                            }, void 0, false, {\n                                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"【利尻に来るには好奇心だけで充分】\"\n                            }, void 0, false, {\n                                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"利尻での経験が今の仕事に直接役立っているということではありません。これから先、役に立つ日が来るかも今はわかりません。それでも、役に立つ・立たないという土俵を超えて、利尻の山と海に囲まれた毎日は純粋に楽しく、新しい出会いに溢れていました。利尻が気になる、とりあえず暮らしてみたい、その好奇心だけで利尻に来るには充分だと思います。\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    \"赤尾 奏音さん\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    \"（京都大学総合人間学部4回生、2021年度に参加）\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: ref2,\n                        className: \"centered-content\",\n                        style: {\n                            height: \"80vh\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"【京大入学前から昆布を干そうと思っていた】\"\n                            }, void 0, false, {\n                                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"京大生向けに利尻島での昆布干しバイトがあると知ったのは高校生の頃でした。そのときから昆布を干すという作業がなかなかできないものであるという理由で、京大に入ったら参加しようと心に決めていました。 2021年度はコロナの影響で大学の講義がオンラインで行われるものも多く、この機会を逃したら参加するのは難しいだろうと考え、応募しました。\"\n                            }, void 0, false, {\n                                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"【利尻の学びを里山保全に活かす】\"\n                            }, void 0, false, {\n                                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"学部で里山保全に関して学ぼうとしていますが、応募する段になって僻地の現状を現地の方に聞ける貴重な機会であると思いました。町役場で働いている受入先の漁師さんの弟さんや公営塾の講師の方をはじめとして色々な方にお話を聞くことができました。今後様々なフィールドで現地の方にお話を伺う土台となり大変有意義であったと感じています。\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 171\n                                    }, undefined),\n                                    \"塩崎 翔大\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    \"（京都大学農学部1回生、2021年度に参加）\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: ref3,\n                        className: \"centered-content\",\n                        style: {\n                            height: \"80vh\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"【昆布干しは今しかできないと思った】\"\n                            }, void 0, false, {\n                                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"「いま行かないと今後人生で昆布を干すことはない気がする」、そう思い立って参加を決めました。昆布干しは朝3時から。朝起きるのは大変でしたが、利尻島の朝の新鮮な空気を吸い込みながら、島の人たちと一緒に汗を流し交流も楽しみながら昆布干しをすることができました。 　昆布干しで出逢う人たちは本当に暖かく、夏期だけ島に戻ってくるひとも、他の仕事の始業前に昆布を干すひとも、よそものである私たちをとてもやさしく迎え入れてくれました。漁師でないひとも日々天候を気にして昆布干しの有無を話題に出したり、自然とともに生きる島のひとの1日、１年、人生には”昆布”があることはとても新鮮に感じられました。\"\n                            }, void 0, false, {\n                                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"【一生付き合いたいと思える仲間ができた】\"\n                            }, void 0, false, {\n                                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"京大荘に帰ればひとつ屋根の下で同じ釜の飯を食べ、毎日大爆笑して、時に夜な夜な語り合い、時に衝突できる、2時半起床で通じ合った最高の仲間がいます。この仲間たちは一生の宝物です。\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 99\n                                    }, undefined),\n                                    \"荻野 なつれさん\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    \"（京都大学大学院 アジア・アフリカ地域研究研究科 、2022年度に参加）\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/isamu/Desktop/jp/kelt/src/app/components/ImageScroll.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageScroll, \"pPEaLYP7b7hBEPb4iX4hF5D5q7o=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView,\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView,\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView,\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView\n    ];\n});\n_c = ImageScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageScroll);\nvar _c;\n$RefreshReg$(_c, \"ImageScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDRDswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQzs7b0NBQUU7a0RBQXVGLDhEQUFDQzs7Ozs7b0NBQUs7a0RBRWhHLDhEQUFDQTs7Ozs7b0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZDtHQTVETTNCOztRQUVvQkQsa0VBQVNBO1FBU1RBLGtFQUFTQTtRQUNUQSxrRUFBU0E7UUFDVEEsa0VBQVNBOzs7S0FiN0JDO0FBOEROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9JbWFnZVNjcm9sbC50c3g/NDExMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9JbWFnZVNjcm9sbC5jc3MnOyAvLyDlv4XopoHjgarjgrnjgr/jgqTjg6vjgpLjgqTjg7Pjg53jg7zjg4hcblxuY29uc3QgSW1hZ2VTY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgW2lzU3RpY2t5LCBzZXRJc1N0aWNreV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbcmVmLCBpblZpZXddID0gdXNlSW5WaWV3KHtcbiAgICAgIHRocmVzaG9sZDogMSwgLy8gNTAl44Gu6KaB57Sg44GM6KaL44GI44Gf44KJ44OI44Oq44Ks44O8XG4gICAgfSk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRJc1N0aWNreSghaW5WaWV3KTsgLy8g6KaB57Sg44GM44OT44Ol44O844Od44O844OI44Gr5YWl44Gj44Gf44KJc3RpY2t544KS54Sh5Yq55YyWXG4gICAgICB9LCBbaW5WaWV3XSk7XG4gIGNvbnN0IFtsZWZ0Q29udGVudCwgc2V0TGVmdENvbnRlbnRdID0gdXNlU3RhdGUoPGltZyBjbGFzc05hbWU9e2B3LVsxMDAlXSByb3VuZGVkLW1kIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCAke2lzU3RpY2t5ID8gJ3N0aWNreS1lbGVtZW50JyA6ICcnfWB9IHN0eWxlPXt7YXNwZWN0UmF0aW86IFwiMSAvIDFcIiwgIG9iamVjdEZpdDogXCJjb3ZlclwiLCBvYmplY3RQb3NpdGlvbjogJ3JpZ2h0JyB9fSBzcmM9Jy4vaW1hZ2VzL2FrYW8ucG5nJy8+KTtcblxuICBjb25zdCBbcmVmMSwgaW5WaWV3MV0gPSB1c2VJblZpZXcoeyB0aHJlc2hvbGQ6IDEgfSk7XG4gIGNvbnN0IFtyZWYyLCBpblZpZXcyXSA9IHVzZUluVmlldyh7IHRocmVzaG9sZDogMSB9KTtcbiAgY29uc3QgW3JlZjMsIGluVmlldzNdID0gdXNlSW5WaWV3KHsgdGhyZXNob2xkOiAxIH0pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluVmlldzEpIHNldExlZnRDb250ZW50KDxpbWcgY2xhc3NOYW1lPXtgdy1bMTAwJV0gcm91bmRlZC1tZCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgJHtpc1N0aWNreSA/ICdzdGlja3ktZWxlbWVudCcgOiAnJ31gfSBzdHlsZT17e2FzcGVjdFJhdGlvOiBcIjEgLyAxXCIsICBvYmplY3RGaXQ6IFwiY292ZXJcIiwgb2JqZWN0UG9zaXRpb246ICdyaWdodCcgfX0gc3JjPScuL2ltYWdlcy9ha2FvLnBuZycvPik7XG4gICAgaWYgKGluVmlldzIpIHNldExlZnRDb250ZW50KDxpbWcgY2xhc3NOYW1lPXtgdy1bMTAwJV0gcm91bmRlZC1tZCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgJHtpc1N0aWNreSA/ICdzdGlja3ktZWxlbWVudCcgOiAnJ31gfSBzdHlsZT17e2FzcGVjdFJhdGlvOiBcIjEgLyAxXCIsICBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSBzcmM9Jy4vaW1hZ2VzL3NoaW9zYWtpLnBuZycvPik7XG4gICAgaWYgKGluVmlldzMpIHNldExlZnRDb250ZW50KDxpbWcgY2xhc3NOYW1lPXtgdy1bMTAwJV0gcm91bmRlZC1tZCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgJHtpc1N0aWNreSA/ICdzdGlja3ktZWxlbWVudCcgOiAnJ31gfSBzdHlsZT17e2FzcGVjdFJhdGlvOiBcIjEgLyAxXCIsICBvYmplY3RGaXQ6IFwiY292ZXJcIiwgb2JqZWN0UG9zaXRpb246ICczMCUnICB9fSBzcmM9Jy4vaW1hZ2VzL29naW5vLnBuZycvPik7XG4gIH0sIFtpblZpZXcxLCBpblZpZXcyLCBpblZpZXczXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiA+XG4gICAgICAgIHtsZWZ0Q29udGVudH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiByZWY9e3JlZn0gc3R5bGU9e3toZWlnaHQ6IFwiMjQwdmhcIiwgd2lkdGg6IFwiMTAwJVwifX0+XG4gICAgICAgIDxkaXYgcmVmPXtyZWYxfSBjbGFzc05hbWU9eydjZW50ZXJlZC1jb250ZW50J30gc3R5bGU9e3sgaGVpZ2h0OiBcIjgwdmhcIn19PlxuICAgICAgICA8aDI+44CQ5oCd44GE5YiH44Gj44Gm5Yip5bC744Gr6aOb44Gz6L6844KT44Gg44CRPC9oMj5cbiAgICAgICAgPHA+56S+5Lya5Lq644Gr44Gq44Gj44Gm5pWw44O25pyI44CB5a2m55Sf44Gr5q+U44G544KL44Go5qC85q6144Gr55+t44GE5aSP5LyR44G/44Gn44GZ44GM5LuK5bm044KC5Yip5bC744Gr6KGM44GN44G+44GX44Gf44CCXG4gICAgICAgIOS7iuaMr+OCiui/lOOCi+OBqOWtpueUn+acgOW+jOOBruW5tOOAgeaAneOBhOWIh+OBo+OBpuWIqeWwu+OBq+mjm+OBs+i+vOOCk+OBp+iJr+OBi+OBo+OBn+OBqOW/g+OBi+OCieaAneOBhOOBvuOBmeOAgjwvcD5cbiAgICAgICAgPGgyPuOAkOWIqeWwu+OBq+adpeOCi+OBq+OBr+WlveWlh+W/g+OBoOOBkeOBp+WFheWIhuOAkTwvaDI+XG4gICAgICAgIDxwPuWIqeWwu+OBp+OBrue1jOmok+OBjOS7iuOBruS7leS6i+OBq+ebtOaOpeW9ueeri+OBo+OBpuOBhOOCi+OBqOOBhOOBhuOBk+OBqOOBp+OBr+OBguOCiuOBvuOBm+OCk+OAguOBk+OCjOOBi+OCieWFiOOAgeW9ueOBq+eri+OBpOaXpeOBjOadpeOCi+OBi+OCguS7iuOBr+OCj+OBi+OCiuOBvuOBm+OCk+OAguOBneOCjOOBp+OCguOAgeW9ueOBq+eri+OBpOODu+eri+OBn+OBquOBhOOBqOOBhOOBhuWcn+S/teOCkui2heOBiOOBpuOAgeWIqeWwu+OBruWxseOBqOa1t+OBq+WbsuOBvuOCjOOBn+avjuaXpeOBr+e0lOeyi+OBq+alveOBl+OBj+OAgeaWsOOBl+OBhOWHuuS8muOBhOOBq+a6ouOCjOOBpuOBhOOBvuOBl+OBn+OAguWIqeWwu+OBjOawl+OBq+OBquOCi+OAgeOBqOOCiuOBguOBiOOBmuaaruOCieOBl+OBpuOBv+OBn+OBhOOAgeOBneOBruWlveWlh+W/g+OBoOOBkeOBp+WIqeWwu+OBq+adpeOCi+OBq+OBr+WFheWIhuOBoOOBqOaAneOBhOOBvuOBmeOAglxuICAgICAgICA8YnIgLz5cbiAgICAgICAg6LWk5bC+IOWlj+mfs+OBleOCk1xuICAgICAgICA8YnIgLz7vvIjkuqzpg73lpKflrabnt4/lkIjkurrplpPlrabpg6g05Zue55Sf44CBMjAyMeW5tOW6puOBq+WPguWKoO+8iTwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiByZWY9e3JlZjJ9IGNsYXNzTmFtZT17J2NlbnRlcmVkLWNvbnRlbnQnfSBzdHlsZT17eyBoZWlnaHQ6IFwiODB2aFwiIH19PlxuICAgICAgICA8aDI+44CQ5Lqs5aSn5YWl5a2m5YmN44GL44KJ5piG5biD44KS5bmy44Gd44GG44Go5oCd44Gj44Gm44GE44Gf44CRPC9oMj5cbiAgICAgICAgPHA+5Lqs5aSn55Sf5ZCR44GR44Gr5Yip5bC75bO244Gn44Gu5piG5biD5bmy44GX44OQ44Kk44OI44GM44GC44KL44Go55+l44Gj44Gf44Gu44Gv6auY5qCh55Sf44Gu6aCD44Gn44GX44Gf44CC44Gd44Gu44Go44GN44GL44KJ5piG5biD44KS5bmy44GZ44Go44GE44GG5L2c5qWt44GM44Gq44GL44Gq44GL44Gn44GN44Gq44GE44KC44Gu44Gn44GC44KL44Go44GE44GG55CG55Sx44Gn44CB5Lqs5aSn44Gr5YWl44Gj44Gf44KJ5Y+C5Yqg44GX44KI44GG44Go5b+D44Gr5rG644KB44Gm44GE44G+44GX44Gf44CCXG4gICAgICAgIDIwMjHlubTluqbjga/jgrPjg63jg4rjga7lvbHpn7/jgaflpKflrabjga7orJvnvqnjgYzjgqrjg7Pjg6njgqTjg7PjgafooYzjgo/jgozjgovjgoLjga7jgoLlpJrjgY/jgIHjgZPjga7mqZ/kvJrjgpLpgIPjgZfjgZ/jgonlj4LliqDjgZnjgovjga7jga/pm6PjgZfjgYTjgaDjgo3jgYbjgajogIPjgYjjgIHlv5zli5/jgZfjgb7jgZfjgZ/jgII8L3A+XG4gICAgICAgIDxoMj7jgJDliKnlsLvjga7lrabjgbPjgpLph4zlsbHkv53lhajjgavmtLvjgYvjgZnjgJE8L2gyPlxuICAgICAgICA8cD7lrabpg6jjgafph4zlsbHkv53lhajjgavplqLjgZfjgablrabjgbzjgYbjgajjgZfjgabjgYTjgb7jgZnjgYzjgIHlv5zli5/jgZnjgovmrrXjgavjgarjgaPjgablg7vlnLDjga7nj77nirbjgpLnj77lnLDjga7mlrnjgavogZ7jgZHjgovosrTph43jgarmqZ/kvJrjgafjgYLjgovjgajmgJ3jgYTjgb7jgZfjgZ/jgILnlLrlvbnloLTjgaflg43jgYTjgabjgYTjgovlj5flhaXlhYjjga7mvIHluKvjgZXjgpPjga7lvJ/jgZXjgpPjgoTlhazllrblob7jga7orJvluKvjga7mlrnjgpLjga/jgZjjgoHjgajjgZfjgaboibLjgIXjgarmlrnjgavjgYroqbHjgpLogZ7jgY/jgZPjgajjgYzjgafjgY3jgb7jgZfjgZ/jgILku4rlvozmp5jjgIXjgarjg5XjgqPjg7zjg6vjg4njgafnj77lnLDjga7mlrnjgavjgYroqbHjgpLkvLrjgYblnJ/lj7DjgajjgarjgorlpKflpInmnInmhI/nvqnjgafjgYLjgaPjgZ/jgajmhJ/jgZjjgabjgYTjgb7jgZnjgII8YnIgLz5cbiAgICAgICAg5aGp5bSOIOe/lOWkp1xuICAgICAgICA8YnIgLz7vvIjkuqzpg73lpKflrabovrLlrabpg6gx5Zue55Sf44CBMjAyMeW5tOW6puOBq+WPguWKoO+8iTwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiByZWY9e3JlZjN9IGNsYXNzTmFtZT17J2NlbnRlcmVkLWNvbnRlbnQnfSBzdHlsZT17eyBoZWlnaHQ6IFwiODB2aFwiIH19PlxuICAgICAgICA8aDI+44CQ5piG5biD5bmy44GX44Gv5LuK44GX44GL44Gn44GN44Gq44GE44Go5oCd44Gj44Gf44CRPC9oMj5cbiAgICAgICAgPHA+44CM44GE44G+6KGM44GL44Gq44GE44Go5LuK5b6M5Lq655Sf44Gn5piG5biD44KS5bmy44GZ44GT44Go44Gv44Gq44GE5rCX44GM44GZ44KL44CN44CB44Gd44GG5oCd44GE56uL44Gj44Gm5Y+C5Yqg44KS5rG644KB44G+44GX44Gf44CC5piG5biD5bmy44GX44Gv5pydM+aZguOBi+OCieOAguacnei1t+OBjeOCi+OBruOBr+Wkp+WkieOBp+OBl+OBn+OBjOOAgeWIqeWwu+WztuOBruacneOBruaWsOmuruOBquepuuawl+OCkuWQuOOBhOi+vOOBv+OBquOBjOOCieOAgeWztuOBruS6uuOBn+OBoeOBqOS4gOe3kuOBq+axl+OCkua1geOBl+S6pOa1geOCgualveOBl+OBv+OBquOBjOOCieaYhuW4g+W5suOBl+OCkuOBmeOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBl+OBn+OAglxuICAgICAgICDjgIDmmIbluIPlubLjgZfjgaflh7rpgKLjgYbkurrjgZ/jgaHjga/mnKzlvZPjgavmmpbjgYvjgY/jgIHlpI/mnJ/jgaDjgZHls7bjgavmiLvjgaPjgabjgY/jgovjgbLjgajjgoLjgIHku5bjga7ku5Xkuovjga7lp4vmpa3liY3jgavmmIbluIPjgpLlubLjgZnjgbLjgajjgoLjgIHjgojjgZ3jgoLjga7jgafjgYLjgovnp4HjgZ/jgaHjgpLjgajjgabjgoLjgoTjgZXjgZfjgY/ov47jgYjlhaXjgozjgabjgY/jgozjgb7jgZfjgZ/jgILmvIHluKvjgafjgarjgYTjgbLjgajjgoLml6XjgIXlpKnlgJnjgpLmsJfjgavjgZfjgabmmIbluIPlubLjgZfjga7mnInnhKHjgpLoqbHpoYzjgavlh7rjgZfjgZ/jgorjgIHoh6rnhLbjgajjgajjgoLjgavnlJ/jgY3jgovls7bjga7jgbLjgajjga4x5pel44CB77yR5bm044CB5Lq655Sf44Gr44Gv4oCd5piG5biD4oCd44GM44GC44KL44GT44Go44Gv44Go44Gm44KC5paw6a6u44Gr5oSf44GY44KJ44KM44G+44GX44Gf44CCPC9wPlxuICAgICAgICA8aDI+44CQ5LiA55Sf5LuY44GN5ZCI44GE44Gf44GE44Go5oCd44GI44KL5Luy6ZaT44GM44Gn44GN44Gf44CRPC9oMj5cbiAgICAgICAgPHA+5Lqs5aSn6I2Y44Gr5biw44KM44Gw44Gy44Go44Gk5bGL5qC544Gu5LiL44Gn5ZCM44GY6Yec44Gu6aOv44KS6aOf44G544CB5q+O5pel5aSn54iG56yR44GX44Gm44CB5pmC44Gr5aSc44Gq5aSc44Gq6Kqe44KK5ZCI44GE44CB5pmC44Gr6KGd56qB44Gn44GN44KL44CBMuaZguWNiui1t+W6iuOBp+mAmuOBmOWQiOOBo+OBn+acgOmrmOOBruS7sumWk+OBjOOBhOOBvuOBmeOAguOBk+OBruS7sumWk+OBn+OBoeOBr+S4gOeUn+OBruWuneeJqeOBp+OBmeOAgjxiciAvPlxuICAgICAgICDojbvph44g44Gq44Gk44KM44GV44KTXG4gICAgICAgIDxiciAvPu+8iOS6rOmDveWkp+WtpuWkp+WtpumZoiDjgqLjgrjjgqLjg7vjgqLjg5Xjg6rjgqvlnLDln5/noJTnqbbnoJTnqbbnp5Eg44CBMjAyMuW5tOW6puOBq+WPguWKoO+8iTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTY3JvbGw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUluVmlldyIsIkltYWdlU2Nyb2xsIiwiaXNTdGlja3kiLCJzZXRJc1N0aWNreSIsInJlZiIsImluVmlldyIsInRocmVzaG9sZCIsInVzZUVmZmVjdCIsImxlZnRDb250ZW50Iiwic2V0TGVmdENvbnRlbnQiLCJpbWciLCJjbGFzc05hbWUiLCJzdHlsZSIsImFzcGVjdFJhdGlvIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJzcmMiLCJyZWYxIiwiaW5WaWV3MSIsInJlZjIiLCJpblZpZXcyIiwicmVmMyIsImluVmlldzMiLCJkaXYiLCJoZWlnaHQiLCJ3aWR0aCIsImgyIiwicCIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/components/ImageScroll.tsx\n"));

/***/ })

});