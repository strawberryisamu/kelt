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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[2]!./src/styles/ImageScroll.css":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[2]!./src/styles/ImageScroll.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container {\\n    position: relative;\\n    display: flex;\\n}\\n\\n.sticky-element {\\n    height: 80vh; /* 高さはお好みで調整 */ /* Safariのためのプレフィックス */\\n    position: sticky;\\n    top: 50px; /* スクロール位置で固定される位置 */\\n    background-color: #f0f0f0; /* 背景色 */\\n    padding: 10px;\\n    box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* 影を追加（オプショナル） */\\n    transition: object-position 0.5s ease-in-out;\\n    transition: object-position 0.5s ease-in-out, -o-object-position 0.5s ease-in-out;\\n}\\n\\n\\n\\n.centered-content {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    height: 80vh;\\n    margin-left: 10%;\\n}\\n\\n.centered-content p {\\n    font-size: 1vw;\\n}\\n\\n.mobile {\\n    display: none;\\n}\\n\\n.pc {\\n    display: block;\\n}\\n\\n@media (max-width: 786px) {\\n    .container {\\n        flex-direction: column;\\n        align-items: center;\\n    }\\n\\n    .sticky-element {\\n        position: relative; /* sticky positioning を無効化 */\\n        height: auto; /* 高さを自動調整 */\\n        top: 0; /* sticky の top 値をリセット */\\n    }\\n\\n    .centered-content {\\n        height: 10vh;\\n        margin-left: 0; /* 余白をリセット */\\n        width: 100%; /* コンテンツの幅を調整 */\\n    }\\n\\n    .centered-content p {\\n        font-size: 1.5vw;\\n    }\\n\\n    .mobile {\\n        display: block;\\n    }\\n    .pc {\\n        display: none;\\n    }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/ImageScroll.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,YAAY,EAAE,cAAc,EACF,sBAAsB;IAChD,gBAAgB;IAChB,SAAS,EAAE,oBAAoB;IAC/B,yBAAyB,EAAE,QAAQ;IACnC,aAAa;IACb,qCAAqC,EAAE,iBAAiB;IACxD,4CAA4C;IAA5C,iFAA4C;AAChD;;;;AAIA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI;QACI,sBAAsB;QACtB,mBAAmB;IACvB;;IAEA;QACI,kBAAkB,EAAE,4BAA4B;QAChD,YAAY,EAAE,YAAY;QAC1B,MAAM,EAAE,wBAAwB;IACpC;;IAEA;QACI,YAAY;QACZ,cAAc,EAAE,YAAY;QAC5B,WAAW,EAAE,eAAe;IAChC;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,cAAc;IAClB;IACA;QACI,aAAa;IACjB;AACJ\",\"sourcesContent\":[\".container {\\n    position: relative;\\n    display: flex;\\n}\\n\\n.sticky-element {\\n    height: 80vh; /* 高さはお好みで調整 */\\n    position: -webkit-sticky; /* Safariのためのプレフィックス */\\n    position: sticky;\\n    top: 50px; /* スクロール位置で固定される位置 */\\n    background-color: #f0f0f0; /* 背景色 */\\n    padding: 10px;\\n    box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* 影を追加（オプショナル） */\\n    transition: object-position 0.5s ease-in-out;\\n}\\n\\n\\n\\n.centered-content {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    height: 80vh;\\n    margin-left: 10%;\\n}\\n\\n.centered-content p {\\n    font-size: 1vw;\\n}\\n\\n.mobile {\\n    display: none;\\n}\\n\\n.pc {\\n    display: block;\\n}\\n\\n@media (max-width: 786px) {\\n    .container {\\n        flex-direction: column;\\n        align-items: center;\\n    }\\n\\n    .sticky-element {\\n        position: relative; /* sticky positioning を無効化 */\\n        height: auto; /* 高さを自動調整 */\\n        top: 0; /* sticky の top 値をリセット */\\n    }\\n\\n    .centered-content {\\n        height: 10vh;\\n        margin-left: 0; /* 余白をリセット */\\n        width: 100%; /* コンテンツの幅を調整 */\\n    }\\n\\n    .centered-content p {\\n        font-size: 1.5vw;\\n    }\\n\\n    .mobile {\\n        display: block;\\n    }\\n    .pc {\\n        display: none;\\n    }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMl0ub25lT2ZbMTRdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMl0ub25lT2ZbMTRdLnVzZVsyXSEuL3NyYy9zdHlsZXMvSW1hZ2VTY3JvbGwuY3NzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSxzREFBc0QseUJBQXlCLG9CQUFvQixHQUFHLHFCQUFxQixvQkFBb0IsOERBQThELGlCQUFpQixzREFBc0QsNkJBQTZCLDZDQUE2QyxxRUFBcUUsd0ZBQXdGLEdBQUcsMkJBQTJCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixtQkFBbUIsdUJBQXVCLEdBQUcseUJBQXlCLHFCQUFxQixHQUFHLGFBQWEsb0JBQW9CLEdBQUcsU0FBUyxxQkFBcUIsR0FBRywrQkFBK0Isa0JBQWtCLGlDQUFpQyw4QkFBOEIsT0FBTyx5QkFBeUIsOEJBQThCLHFEQUFxRCwrQkFBK0IsZ0NBQWdDLDJCQUEyQix1QkFBdUIsMEJBQTBCLG9DQUFvQyx1QkFBdUIsNkJBQTZCLDJCQUEyQixPQUFPLGlCQUFpQix5QkFBeUIsT0FBTyxXQUFXLHdCQUF3QixPQUFPLEdBQUcsU0FBUywyRkFBMkYsWUFBWSxXQUFXLE9BQU8sS0FBSyxnQ0FBZ0MsYUFBYSx1QkFBdUIsdUJBQXVCLFdBQVcsd0JBQXdCLGFBQWEsYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyx3QkFBd0IscUJBQXFCLHVCQUF1QixPQUFPLEtBQUssVUFBVSxvQkFBb0IscUJBQXFCLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0scUNBQXFDLHlCQUF5QixvQkFBb0IsR0FBRyxxQkFBcUIsb0JBQW9CLCtDQUErQyw4Q0FBOEMsaUJBQWlCLHNEQUFzRCw2QkFBNkIsNkNBQTZDLHFFQUFxRSxHQUFHLDJCQUEyQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsbUJBQW1CLHVCQUF1QixHQUFHLHlCQUF5QixxQkFBcUIsR0FBRyxhQUFhLG9CQUFvQixHQUFHLFNBQVMscUJBQXFCLEdBQUcsK0JBQStCLGtCQUFrQixpQ0FBaUMsOEJBQThCLE9BQU8seUJBQXlCLDhCQUE4QixxREFBcUQsK0JBQStCLGdDQUFnQywyQkFBMkIsdUJBQXVCLDBCQUEwQixvQ0FBb0MsdUJBQXVCLDZCQUE2QiwyQkFBMkIsT0FBTyxpQkFBaUIseUJBQXlCLE9BQU8sV0FBVyx3QkFBd0IsT0FBTyxHQUFHLHFCQUFxQjtBQUN6MUc7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL0ltYWdlU2Nyb2xsLmNzcz8wMjZkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc3RpY2t5LWVsZW1lbnQge1xcbiAgICBoZWlnaHQ6IDgwdmg7IC8qIOmrmOOBleOBr+OBiuWlveOBv+OBp+iqv+aVtCAqLyAvKiBTYWZhcmnjga7jgZ/jgoHjga7jg5fjg6zjg5XjgqPjg4Pjgq/jgrkgKi9cXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiA1MHB4OyAvKiDjgrnjgq/jg63jg7zjg6vkvY3nva7jgaflm7rlrprjgZXjgozjgovkvY3nva4gKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDsgLyog6IOM5pmv6ImyICovXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMik7IC8qIOW9seOCkui/veWKoO+8iOOCquODl+OCt+ODp+ODiuODq++8iSAqL1xcbiAgICB0cmFuc2l0aW9uOiBvYmplY3QtcG9zaXRpb24gMC41cyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbjogb2JqZWN0LXBvc2l0aW9uIDAuNXMgZWFzZS1pbi1vdXQsIC1vLW9iamVjdC1wb3NpdGlvbiAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5cXG5cXG4uY2VudGVyZWQtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcblxcbi5jZW50ZXJlZC1jb250ZW50IHAge1xcbiAgICBmb250LXNpemU6IDF2dztcXG59XFxuXFxuLm1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wYyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzg2cHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuc3RpY2t5LWVsZW1lbnQge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBzdGlja3kgcG9zaXRpb25pbmcg44KS54Sh5Yq55YyWICovXFxuICAgICAgICBoZWlnaHQ6IGF1dG87IC8qIOmrmOOBleOCkuiHquWLleiqv+aVtCAqL1xcbiAgICAgICAgdG9wOiAwOyAvKiBzdGlja3kg44GuIHRvcCDlgKTjgpLjg6rjgrvjg4Pjg4ggKi9cXG4gICAgfVxcblxcbiAgICAuY2VudGVyZWQtY29udGVudCB7XFxuICAgICAgICBoZWlnaHQ6IDEwdmg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDsgLyog5L2Z55m944KS44Oq44K744OD44OIICovXFxuICAgICAgICB3aWR0aDogMTAwJTsgLyog44Kz44Oz44OG44Oz44OE44Gu5bmF44KS6Kq/5pW0ICovXFxuICAgIH1cXG5cXG4gICAgLmNlbnRlcmVkLWNvbnRlbnQgcCB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xcbiAgICB9XFxuXFxuICAgIC5tb2JpbGUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgLnBjIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvSW1hZ2VTY3JvbGwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZLEVBQUUsY0FBYyxFQUNGLHNCQUFzQjtJQUNoRCxnQkFBZ0I7SUFDaEIsU0FBUyxFQUFFLG9CQUFvQjtJQUMvQix5QkFBeUIsRUFBRSxRQUFRO0lBQ25DLGFBQWE7SUFDYixxQ0FBcUMsRUFBRSxpQkFBaUI7SUFDeEQsNENBQTRDO0lBQTVDLGlGQUE0QztBQUNoRDs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0IsRUFBRSw0QkFBNEI7UUFDaEQsWUFBWSxFQUFFLFlBQVk7UUFDMUIsTUFBTSxFQUFFLHdCQUF3QjtJQUNwQzs7SUFFQTtRQUNJLFlBQVk7UUFDWixjQUFjLEVBQUUsWUFBWTtRQUM1QixXQUFXLEVBQUUsZUFBZTtJQUNoQzs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc3RpY2t5LWVsZW1lbnQge1xcbiAgICBoZWlnaHQ6IDgwdmg7IC8qIOmrmOOBleOBr+OBiuWlveOBv+OBp+iqv+aVtCAqL1xcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIFNhZmFyaeOBruOBn+OCgeOBruODl+ODrOODleOCo+ODg+OCr+OCuSAqL1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDUwcHg7IC8qIOOCueOCr+ODreODvOODq+S9jee9ruOBp+WbuuWumuOBleOCjOOCi+S9jee9riAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwOyAvKiDog4zmma/oibIgKi9cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4yKTsgLyog5b2x44KS6L+95Yqg77yI44Kq44OX44K344On44OK44Or77yJICovXFxuICAgIHRyYW5zaXRpb246IG9iamVjdC1wb3NpdGlvbiAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5cXG5cXG4uY2VudGVyZWQtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcblxcbi5jZW50ZXJlZC1jb250ZW50IHAge1xcbiAgICBmb250LXNpemU6IDF2dztcXG59XFxuXFxuLm1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wYyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzg2cHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuc3RpY2t5LWVsZW1lbnQge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBzdGlja3kgcG9zaXRpb25pbmcg44KS54Sh5Yq55YyWICovXFxuICAgICAgICBoZWlnaHQ6IGF1dG87IC8qIOmrmOOBleOCkuiHquWLleiqv+aVtCAqL1xcbiAgICAgICAgdG9wOiAwOyAvKiBzdGlja3kg44GuIHRvcCDlgKTjgpLjg6rjgrvjg4Pjg4ggKi9cXG4gICAgfVxcblxcbiAgICAuY2VudGVyZWQtY29udGVudCB7XFxuICAgICAgICBoZWlnaHQ6IDEwdmg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDsgLyog5L2Z55m944KS44Oq44K744OD44OIICovXFxuICAgICAgICB3aWR0aDogMTAwJTsgLyog44Kz44Oz44OG44Oz44OE44Gu5bmF44KS6Kq/5pW0ICovXFxuICAgIH1cXG5cXG4gICAgLmNlbnRlcmVkLWNvbnRlbnQgcCB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xcbiAgICB9XFxuXFxuICAgIC5tb2JpbGUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgLnBjIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[2]!./src/styles/ImageScroll.css\n"));

/***/ })

});