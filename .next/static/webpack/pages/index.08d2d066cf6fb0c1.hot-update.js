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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container {\\n    position: relative;\\n    display: flex;\\n}\\n\\n.sticky-element {\\n    height: 80vh; /* 高さはお好みで調整 */ /* Safariのためのプレフィックス */\\n    position: sticky;\\n    top: 50px; /* スクロール位置で固定される位置 */\\n    background-color: #f0f0f0; /* 背景色 */\\n    padding: 10px;\\n    box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* 影を追加（オプショナル） */\\n    transition: object-position 0.5s ease-in-out;\\n    transition: object-position 0.5s ease-in-out, -o-object-position 0.5s ease-in-out;\\n}\\n\\n\\n\\n.centered-content {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    height: 100%;\\n    margin-left: 10%;\\n}\\n\\n.centered-content p {\\n    font-size: 1vw;\\n}\\n\\n.mobile {\\n    display: none;\\n}\\n\\n@media (max-width: 786px) {\\n    .container {\\n        flex-direction: column;\\n        align-items: center;\\n    }\\n\\n    .sticky-element {\\n        position: relative; /* sticky positioning を無効化 */\\n        height: auto; /* 高さを自動調整 */\\n        top: 0; /* sticky の top 値をリセット */\\n    }\\n\\n    .centered-content {\\n        margin-left: 0; /* 余白をリセット */\\n        width: 100%; /* コンテンツの幅を調整 */\\n    }\\n\\n    .mobile {\\n        display: block;\\n    }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/ImageScroll.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,YAAY,EAAE,cAAc,EACF,sBAAsB;IAChD,gBAAgB;IAChB,SAAS,EAAE,oBAAoB;IAC/B,yBAAyB,EAAE,QAAQ;IACnC,aAAa;IACb,qCAAqC,EAAE,iBAAiB;IACxD,4CAA4C;IAA5C,iFAA4C;AAChD;;;;AAIA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI;QACI,sBAAsB;QACtB,mBAAmB;IACvB;;IAEA;QACI,kBAAkB,EAAE,4BAA4B;QAChD,YAAY,EAAE,YAAY;QAC1B,MAAM,EAAE,wBAAwB;IACpC;;IAEA;QACI,cAAc,EAAE,YAAY;QAC5B,WAAW,EAAE,eAAe;IAChC;;IAEA;QACI,cAAc;IAClB;AACJ\",\"sourcesContent\":[\".container {\\n    position: relative;\\n    display: flex;\\n}\\n\\n.sticky-element {\\n    height: 80vh; /* 高さはお好みで調整 */\\n    position: -webkit-sticky; /* Safariのためのプレフィックス */\\n    position: sticky;\\n    top: 50px; /* スクロール位置で固定される位置 */\\n    background-color: #f0f0f0; /* 背景色 */\\n    padding: 10px;\\n    box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* 影を追加（オプショナル） */\\n    transition: object-position 0.5s ease-in-out;\\n}\\n\\n\\n\\n.centered-content {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    height: 100%;\\n    margin-left: 10%;\\n}\\n\\n.centered-content p {\\n    font-size: 1vw;\\n}\\n\\n.mobile {\\n    display: none;\\n}\\n\\n@media (max-width: 786px) {\\n    .container {\\n        flex-direction: column;\\n        align-items: center;\\n    }\\n\\n    .sticky-element {\\n        position: relative; /* sticky positioning を無効化 */\\n        height: auto; /* 高さを自動調整 */\\n        top: 0; /* sticky の top 値をリセット */\\n    }\\n\\n    .centered-content {\\n        margin-left: 0; /* 余白をリセット */\\n        width: 100%; /* コンテンツの幅を調整 */\\n    }\\n\\n    .mobile {\\n        display: block;\\n    }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMl0ub25lT2ZbMTRdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMl0ub25lT2ZbMTRdLnVzZVsyXSEuL3NyYy9zdHlsZXMvSW1hZ2VTY3JvbGwuY3NzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSxzREFBc0QseUJBQXlCLG9CQUFvQixHQUFHLHFCQUFxQixvQkFBb0IsOERBQThELGlCQUFpQixzREFBc0QsNkJBQTZCLDZDQUE2QyxxRUFBcUUsd0ZBQXdGLEdBQUcsMkJBQTJCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixtQkFBbUIsdUJBQXVCLEdBQUcseUJBQXlCLHFCQUFxQixHQUFHLGFBQWEsb0JBQW9CLEdBQUcsK0JBQStCLGtCQUFrQixpQ0FBaUMsOEJBQThCLE9BQU8seUJBQXlCLDhCQUE4QixxREFBcUQsK0JBQStCLGdDQUFnQywyQkFBMkIsMEJBQTBCLG9DQUFvQyx1QkFBdUIsaUJBQWlCLHlCQUF5QixPQUFPLEdBQUcsU0FBUywyRkFBMkYsWUFBWSxXQUFXLE9BQU8sS0FBSyxnQ0FBZ0MsYUFBYSx1QkFBdUIsdUJBQXVCLFdBQVcsd0JBQXdCLGFBQWEsYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyx3QkFBd0IscUJBQXFCLHVCQUF1QixPQUFPLEtBQUssb0JBQW9CLHFCQUFxQixPQUFPLEtBQUssVUFBVSxNQUFNLHFDQUFxQyx5QkFBeUIsb0JBQW9CLEdBQUcscUJBQXFCLG9CQUFvQiwrQ0FBK0MsOENBQThDLGlCQUFpQixzREFBc0QsNkJBQTZCLDZDQUE2QyxxRUFBcUUsR0FBRywyQkFBMkIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLG1CQUFtQix1QkFBdUIsR0FBRyx5QkFBeUIscUJBQXFCLEdBQUcsYUFBYSxvQkFBb0IsR0FBRywrQkFBK0Isa0JBQWtCLGlDQUFpQyw4QkFBOEIsT0FBTyx5QkFBeUIsOEJBQThCLHFEQUFxRCwrQkFBK0IsZ0NBQWdDLDJCQUEyQiwwQkFBMEIsb0NBQW9DLHVCQUF1QixpQkFBaUIseUJBQXlCLE9BQU8sR0FBRyxxQkFBcUI7QUFDMThGO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9JbWFnZVNjcm9sbC5jc3M/MDI2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnN0aWNreS1lbGVtZW50IHtcXG4gICAgaGVpZ2h0OiA4MHZoOyAvKiDpq5jjgZXjga/jgYrlpb3jgb/jgafoqr/mlbQgKi8gLyogU2FmYXJp44Gu44Gf44KB44Gu44OX44Os44OV44Kj44OD44Kv44K5ICovXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogNTBweDsgLyog44K544Kv44Ot44O844Or5L2N572u44Gn5Zu65a6a44GV44KM44KL5L2N572uICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7IC8qIOiDjOaZr+iJsiAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjIpOyAvKiDlvbHjgpLov73liqDvvIjjgqrjg5fjgrfjg6fjg4rjg6vvvIkgKi9cXG4gICAgdHJhbnNpdGlvbjogb2JqZWN0LXBvc2l0aW9uIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zaXRpb246IG9iamVjdC1wb3NpdGlvbiAwLjVzIGVhc2UtaW4tb3V0LCAtby1vYmplY3QtcG9zaXRpb24gMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuXFxuXFxuLmNlbnRlcmVkLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG5cXG4uY2VudGVyZWQtY29udGVudCBwIHtcXG4gICAgZm9udC1zaXplOiAxdnc7XFxufVxcblxcbi5tb2JpbGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzg2cHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuc3RpY2t5LWVsZW1lbnQge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBzdGlja3kgcG9zaXRpb25pbmcg44KS54Sh5Yq55YyWICovXFxuICAgICAgICBoZWlnaHQ6IGF1dG87IC8qIOmrmOOBleOCkuiHquWLleiqv+aVtCAqL1xcbiAgICAgICAgdG9wOiAwOyAvKiBzdGlja3kg44GuIHRvcCDlgKTjgpLjg6rjgrvjg4Pjg4ggKi9cXG4gICAgfVxcblxcbiAgICAuY2VudGVyZWQtY29udGVudCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDsgLyog5L2Z55m944KS44Oq44K744OD44OIICovXFxuICAgICAgICB3aWR0aDogMTAwJTsgLyog44Kz44Oz44OG44Oz44OE44Gu5bmF44KS6Kq/5pW0ICovXFxuICAgIH1cXG5cXG4gICAgLm1vYmlsZSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9JbWFnZVNjcm9sbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVksRUFBRSxjQUFjLEVBQ0Ysc0JBQXNCO0lBQ2hELGdCQUFnQjtJQUNoQixTQUFTLEVBQUUsb0JBQW9CO0lBQy9CLHlCQUF5QixFQUFFLFFBQVE7SUFDbkMsYUFBYTtJQUNiLHFDQUFxQyxFQUFFLGlCQUFpQjtJQUN4RCw0Q0FBNEM7SUFBNUMsaUZBQTRDO0FBQ2hEOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksa0JBQWtCLEVBQUUsNEJBQTRCO1FBQ2hELFlBQVksRUFBRSxZQUFZO1FBQzFCLE1BQU0sRUFBRSx3QkFBd0I7SUFDcEM7O0lBRUE7UUFDSSxjQUFjLEVBQUUsWUFBWTtRQUM1QixXQUFXLEVBQUUsZUFBZTtJQUNoQzs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc3RpY2t5LWVsZW1lbnQge1xcbiAgICBoZWlnaHQ6IDgwdmg7IC8qIOmrmOOBleOBr+OBiuWlveOBv+OBp+iqv+aVtCAqL1xcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIFNhZmFyaeOBruOBn+OCgeOBruODl+ODrOODleOCo+ODg+OCr+OCuSAqL1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDUwcHg7IC8qIOOCueOCr+ODreODvOODq+S9jee9ruOBp+WbuuWumuOBleOCjOOCi+S9jee9riAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwOyAvKiDog4zmma/oibIgKi9cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4yKTsgLyog5b2x44KS6L+95Yqg77yI44Kq44OX44K344On44OK44Or77yJICovXFxuICAgIHRyYW5zaXRpb246IG9iamVjdC1wb3NpdGlvbiAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5cXG5cXG4uY2VudGVyZWQtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcblxcbi5jZW50ZXJlZC1jb250ZW50IHAge1xcbiAgICBmb250LXNpemU6IDF2dztcXG59XFxuXFxuLm1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3ODZweCkge1xcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5zdGlja3ktZWxlbWVudCB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHN0aWNreSBwb3NpdGlvbmluZyDjgpLnhKHlirnljJYgKi9cXG4gICAgICAgIGhlaWdodDogYXV0bzsgLyog6auY44GV44KS6Ieq5YuV6Kq/5pW0ICovXFxuICAgICAgICB0b3A6IDA7IC8qIHN0aWNreSDjga4gdG9wIOWApOOCkuODquOCu+ODg+ODiCAqL1xcbiAgICB9XFxuXFxuICAgIC5jZW50ZXJlZC1jb250ZW50IHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwOyAvKiDkvZnnmb3jgpLjg6rjgrvjg4Pjg4ggKi9cXG4gICAgICAgIHdpZHRoOiAxMDAlOyAvKiDjgrPjg7Pjg4bjg7Pjg4Tjga7luYXjgpLoqr/mlbQgKi9cXG4gICAgfVxcblxcbiAgICAubW9iaWxlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[2]!./src/styles/ImageScroll.css\n"));

/***/ })

});