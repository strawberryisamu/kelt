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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[2]!./src/styles/News.css":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[2]!./src/styles/News.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* スライドショーのコンテナを定義 */\\n.slideshow-container {\\n    position: relative;\\n    max-width: 1000px;\\n    margin: auto;\\n    height: 10vh;\\n    overflow: hidden; /* コンテナ外の要素は非表示に */\\n  }\\n  \\n  /* 各スライド */\\n  .slide {\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    opacity: 0; /* 初期状態を非表示に設定 */\\n    transition: opacity 1.5s ease-in-out; /* トランジション効果を追加 */\\n  }\\n  \\n  /* 各スライドのアニメーション */\\n  @keyframes slideFade {\\n    0%, 100% { opacity: 0; }\\n    5%, 30% { opacity: 1; } /* 1番目のスライド表示 */\\n    35%, 60% { opacity: 1; } /* 2番目のスライド表示 */\\n    65%, 90% { opacity: 1; } /* 3番目のスライド表示 */\\n  }\\n  \\n  アニメーションを各スライドに適用\\n  .slideshow-container .slide {\\n    animation: slideFade 9s infinite; /* 9秒間隔で無限に繰り返し */\\n  }\\n  \\n  /* 各スライドの遅延設定 */\\n  .slideshow-container .slide:nth-child(1) {\\n    animation-delay: -7.5s; /* 1番目のスライドの遅延 */\\n  }\\n  \\n  .slideshow-container .slide:nth-child(2) {\\n    animation-delay: -4.5s; /* 2番目のスライドの遅延 */\\n  }\\n  \\n  .slideshow-container .slide:nth-child(3) {\\n    animation-delay: -1.5s; /* 3番目のスライドの遅延 */\\n  }\\n  \", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/News.css\"],\"names\":[],\"mappings\":\"AAAA,oBAAoB;AACpB;IACI,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,gBAAgB,EAAE,kBAAkB;EACtC;;EAEA,UAAU;EACV;IACE,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,UAAU,EAAE,gBAAgB;IAC5B,oCAAoC,EAAE,iBAAiB;EACzD;;EAEA,kBAAkB;EAClB;IACE,WAAW,UAAU,EAAE;IACvB,UAAU,UAAU,EAAE,EAAE,eAAe;IACvC,WAAW,UAAU,EAAE,EAAE,eAAe;IACxC,WAAW,UAAU,EAAE,EAAE,eAAe;EAC1C;;EAEA;;IAEE,gCAAgC,EAAE,iBAAiB;EACrD;;EAEA,eAAe;EACf;IACE,sBAAsB,EAAE,gBAAgB;EAC1C;;EAEA;IACE,sBAAsB,EAAE,gBAAgB;EAC1C;;EAEA;IACE,sBAAsB,EAAE,gBAAgB;EAC1C\",\"sourcesContent\":[\"/* スライドショーのコンテナを定義 */\\n.slideshow-container {\\n    position: relative;\\n    max-width: 1000px;\\n    margin: auto;\\n    height: 10vh;\\n    overflow: hidden; /* コンテナ外の要素は非表示に */\\n  }\\n  \\n  /* 各スライド */\\n  .slide {\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    opacity: 0; /* 初期状態を非表示に設定 */\\n    transition: opacity 1.5s ease-in-out; /* トランジション効果を追加 */\\n  }\\n  \\n  /* 各スライドのアニメーション */\\n  @keyframes slideFade {\\n    0%, 100% { opacity: 0; }\\n    5%, 30% { opacity: 1; } /* 1番目のスライド表示 */\\n    35%, 60% { opacity: 1; } /* 2番目のスライド表示 */\\n    65%, 90% { opacity: 1; } /* 3番目のスライド表示 */\\n  }\\n  \\n  アニメーションを各スライドに適用\\n  .slideshow-container .slide {\\n    animation: slideFade 9s infinite; /* 9秒間隔で無限に繰り返し */\\n  }\\n  \\n  /* 各スライドの遅延設定 */\\n  .slideshow-container .slide:nth-child(1) {\\n    animation-delay: -7.5s; /* 1番目のスライドの遅延 */\\n  }\\n  \\n  .slideshow-container .slide:nth-child(2) {\\n    animation-delay: -4.5s; /* 2番目のスライドの遅延 */\\n  }\\n  \\n  .slideshow-container .slide:nth-child(3) {\\n    animation-delay: -1.5s; /* 3番目のスライドの遅延 */\\n  }\\n  \"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMl0ub25lT2ZbMTRdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMl0ub25lT2ZbMTRdLnVzZVsyXSEuL3NyYy9zdHlsZXMvTmV3cy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDMkg7QUFDM0gsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHVGQUF1Rix5QkFBeUIsd0JBQXdCLG1CQUFtQixtQkFBbUIsd0JBQXdCLHdCQUF3QiwrQkFBK0IseUJBQXlCLGtCQUFrQixtQkFBbUIsa0JBQWtCLDZEQUE2RCx1QkFBdUIscURBQXFELGlCQUFpQixhQUFhLGdCQUFnQixjQUFjLGlDQUFpQyxjQUFjLGlDQUFpQyxjQUFjLHFCQUFxQix5REFBeUQsd0NBQXdDLHVCQUF1QixzRUFBc0UsOEJBQThCLHNCQUFzQixrREFBa0QsOEJBQThCLHNCQUFzQixrREFBa0QsOEJBQThCLHNCQUFzQixXQUFXLDJGQUEyRixNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsd0JBQXdCLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLHNCQUFzQix5QkFBeUIsT0FBTyxZQUFZLE1BQU0sb0JBQW9CLCtCQUErQiwrQkFBK0IsK0JBQStCLE9BQU8sTUFBTSx3QkFBd0IsT0FBTyxVQUFVLEtBQUssd0JBQXdCLE9BQU8sS0FBSyx3QkFBd0IsT0FBTyxLQUFLLHdCQUF3Qix1RUFBdUUseUJBQXlCLHdCQUF3QixtQkFBbUIsbUJBQW1CLHdCQUF3Qix3QkFBd0IsK0JBQStCLHlCQUF5QixrQkFBa0IsbUJBQW1CLGtCQUFrQiw2REFBNkQsdUJBQXVCLHFEQUFxRCxpQkFBaUIsYUFBYSxnQkFBZ0IsY0FBYyxpQ0FBaUMsY0FBYyxpQ0FBaUMsY0FBYyxxQkFBcUIseURBQXlELHdDQUF3Qyx1QkFBdUIsc0VBQXNFLDhCQUE4QixzQkFBc0Isa0RBQWtELDhCQUE4QixzQkFBc0Isa0RBQWtELDhCQUE4QixzQkFBc0IsdUJBQXVCO0FBQzFzRjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvTmV3cy5jc3M/NDhjNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyog44K544Op44Kk44OJ44K344On44O844Gu44Kz44Oz44OG44OK44KS5a6a576pICovXFxuLnNsaWRlc2hvdy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyog44Kz44Oz44OG44OK5aSW44Gu6KaB57Sg44Gv6Z2e6KGo56S644GrICovXFxuICB9XFxuICBcXG4gIC8qIOWQhOOCueODqeOCpOODiSAqL1xcbiAgLnNsaWRlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvcGFjaXR5OiAwOyAvKiDliJ3mnJ/nirbmhYvjgpLpnZ7ooajnpLrjgavoqK3lrpogKi9cXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2UtaW4tb3V0OyAvKiDjg4jjg6njg7Pjgrjjgrfjg6fjg7PlirnmnpzjgpLov73liqAgKi9cXG4gIH1cXG4gIFxcbiAgLyog5ZCE44K544Op44Kk44OJ44Gu44Ki44OL44Oh44O844K344On44OzICovXFxuICBAa2V5ZnJhbWVzIHNsaWRlRmFkZSB7XFxuICAgIDAlLCAxMDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgICA1JSwgMzAlIHsgb3BhY2l0eTogMTsgfSAvKiAx55Wq55uu44Gu44K544Op44Kk44OJ6KGo56S6ICovXFxuICAgIDM1JSwgNjAlIHsgb3BhY2l0eTogMTsgfSAvKiAy55Wq55uu44Gu44K544Op44Kk44OJ6KGo56S6ICovXFxuICAgIDY1JSwgOTAlIHsgb3BhY2l0eTogMTsgfSAvKiAz55Wq55uu44Gu44K544Op44Kk44OJ6KGo56S6ICovXFxuICB9XFxuICBcXG4gIOOCouODi+ODoeODvOOCt+ODp+ODs+OCkuWQhOOCueODqeOCpOODieOBq+mBqeeUqFxcbiAgLnNsaWRlc2hvdy1jb250YWluZXIgLnNsaWRlIHtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUZhZGUgOXMgaW5maW5pdGU7IC8qIDnnp5LplpPpmpTjgafnhKHpmZDjgavnubDjgorov5TjgZcgKi9cXG4gIH1cXG4gIFxcbiAgLyog5ZCE44K544Op44Kk44OJ44Gu6YGF5bu26Kit5a6aICovXFxuICAuc2xpZGVzaG93LWNvbnRhaW5lciAuc2xpZGU6bnRoLWNoaWxkKDEpIHtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtNy41czsgLyogMeeVquebruOBruOCueODqeOCpOODieOBrumBheW7tiAqL1xcbiAgfVxcbiAgXFxuICAuc2xpZGVzaG93LWNvbnRhaW5lciAuc2xpZGU6bnRoLWNoaWxkKDIpIHtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtNC41czsgLyogMueVquebruOBruOCueODqeOCpOODieOBrumBheW7tiAqL1xcbiAgfVxcbiAgXFxuICAuc2xpZGVzaG93LWNvbnRhaW5lciAuc2xpZGU6bnRoLWNoaWxkKDMpIHtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMS41czsgLyogM+eVquebruOBruOCueODqeOCpOODieOBrumBheW7tiAqL1xcbiAgfVxcbiAgXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvTmV3cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsb0JBQW9CO0FBQ3BCO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQixFQUFFLGtCQUFrQjtFQUN0Qzs7RUFFQSxVQUFVO0VBQ1Y7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVLEVBQUUsZ0JBQWdCO0lBQzVCLG9DQUFvQyxFQUFFLGlCQUFpQjtFQUN6RDs7RUFFQSxrQkFBa0I7RUFDbEI7SUFDRSxXQUFXLFVBQVUsRUFBRTtJQUN2QixVQUFVLFVBQVUsRUFBRSxFQUFFLGVBQWU7SUFDdkMsV0FBVyxVQUFVLEVBQUUsRUFBRSxlQUFlO0lBQ3hDLFdBQVcsVUFBVSxFQUFFLEVBQUUsZUFBZTtFQUMxQzs7RUFFQTs7SUFFRSxnQ0FBZ0MsRUFBRSxpQkFBaUI7RUFDckQ7O0VBRUEsZUFBZTtFQUNmO0lBQ0Usc0JBQXNCLEVBQUUsZ0JBQWdCO0VBQzFDOztFQUVBO0lBQ0Usc0JBQXNCLEVBQUUsZ0JBQWdCO0VBQzFDOztFQUVBO0lBQ0Usc0JBQXNCLEVBQUUsZ0JBQWdCO0VBQzFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIOOCueODqeOCpOODieOCt+ODp+ODvOOBruOCs+ODs+ODhuODiuOCkuWumue+qSAqL1xcbi5zbGlkZXNob3ctY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIOOCs+ODs+ODhuODiuWkluOBruimgee0oOOBr+mdnuihqOekuuOBqyAqL1xcbiAgfVxcbiAgXFxuICAvKiDlkITjgrnjg6njgqTjg4kgKi9cXG4gIC5zbGlkZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3BhY2l0eTogMDsgLyog5Yid5pyf54q25oWL44KS6Z2e6KGo56S644Gr6Kit5a6aICovXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlLWluLW91dDsgLyog44OI44Op44Oz44K444K344On44Oz5Yq55p6c44KS6L+95YqgICovXFxuICB9XFxuICBcXG4gIC8qIOWQhOOCueODqeOCpOODieOBruOCouODi+ODoeODvOOCt+ODp+ODsyAqL1xcbiAgQGtleWZyYW1lcyBzbGlkZUZhZGUge1xcbiAgICAwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gICAgNSUsIDMwJSB7IG9wYWNpdHk6IDE7IH0gLyogMeeVquebruOBruOCueODqeOCpOODieihqOekuiAqL1xcbiAgICAzNSUsIDYwJSB7IG9wYWNpdHk6IDE7IH0gLyogMueVquebruOBruOCueODqeOCpOODieihqOekuiAqL1xcbiAgICA2NSUsIDkwJSB7IG9wYWNpdHk6IDE7IH0gLyogM+eVquebruOBruOCueODqeOCpOODieihqOekuiAqL1xcbiAgfVxcbiAgXFxuICDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgpLlkITjgrnjg6njgqTjg4njgavpgannlKhcXG4gIC5zbGlkZXNob3ctY29udGFpbmVyIC5zbGlkZSB7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVGYWRlIDlzIGluZmluaXRlOyAvKiA556eS6ZaT6ZqU44Gn54Sh6ZmQ44Gr57mw44KK6L+U44GXICovXFxuICB9XFxuICBcXG4gIC8qIOWQhOOCueODqeOCpOODieOBrumBheW7tuioreWumiAqL1xcbiAgLnNsaWRlc2hvdy1jb250YWluZXIgLnNsaWRlOm50aC1jaGlsZCgxKSB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTcuNXM7IC8qIDHnlarnm67jga7jgrnjg6njgqTjg4njga7pgYXlu7YgKi9cXG4gIH1cXG4gIFxcbiAgLnNsaWRlc2hvdy1jb250YWluZXIgLnNsaWRlOm50aC1jaGlsZCgyKSB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTQuNXM7IC8qIDLnlarnm67jga7jgrnjg6njgqTjg4njga7pgYXlu7YgKi9cXG4gIH1cXG4gIFxcbiAgLnNsaWRlc2hvdy1jb250YWluZXIgLnNsaWRlOm50aC1jaGlsZCgzKSB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuNXM7IC8qIDPnlarnm67jga7jgrnjg6njgqTjg4njga7pgYXlu7YgKi9cXG4gIH1cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[2]!./src/styles/News.css\n"));

/***/ })

});