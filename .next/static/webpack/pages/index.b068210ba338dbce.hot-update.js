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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[2]!./src/styles/FirstView.css":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[2]!./src/styles/FirstView.css ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* スクロールダウンのアニメーション */\\n@keyframes bounce {\\n    0%, 100% {\\n      transform: translateX(-50%) translateY(0); /* translateX(-50%) を追加 */\\n    }\\n    50% {\\n      transform: translateX(-50%) translateY(15px); /* translateX(-50%) を追加 */\\n    }\\n  }\\n  \\n  .title {\\n    position: 'absolute';\\n    top: 5%;\\n    margin-left: 50%;\\n    transform: translate(-50%, -50%);\\n    padding: 10px 0;\\n    border-radius: 10px;\\n    font-size: 3vw;\\n    color: white;\\n    z-index:30;\\n  }\\n\\n  /* スクロールダウンのプロンプト全体のスタイル */\\n  .scrolldown-animation {\\n    position: absolute;\\n    bottom: 5%;\\n    left: 50%; /* ビューポートの中央 */\\n    transform: translateX(-50%); /* 要素の幅の半分だけ左に移動 */\\n    animation: bounce 2s infinite;\\n    z-index: 10;\\n  }\\n  \\n  /* スクロールテキストのスタイル */\\n  .scrolldown-animation span {\\n    display: block;\\n    margin-bottom: 10px; /* テキストと矢印の間隔 */\\n    color: #fff;\\n    font-size: 1.5rem; /* テキストのサイズ */\\n  }\\n  \\n  /* 矢印のスタイル */\\n  .arrow {\\n    display: block;\\n    width: 30px;\\n    height: 30px;\\n    border-bottom: 5px solid #fff;\\n    border-right: 5px solid #fff;\\n    transform: rotate(45deg);\\n    margin: 0 auto; /* ブロック要素の中央揃え */\\n  }\\n  \\n  #player {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    pointer-events: none; /* プレイヤーのコントロールを無効にする */\\n    overflow: hidden;\\n    z-index: -1; /* 他のコンテンツの背後に配置 */\\n  }\\n  \\n  #player iframe {\\n    width: 100%;\\n    height: 100%;\\n  }\\n\\n  .video {\\n    z-index: 10;\\n    position: absolute;\\n    margin-top: 5%;\\n    width: 100%;\\n    height: 75%;\\n  }\\n\\n  @media screen and (max-width: 768px) {\\n    .video {\\n      z-index: 10;\\n      position: absolute;\\n      margin-top: 0;\\n      width: 100%;\\n      height: 100%;\\n    }\\n    .scrolldown-animation span {\\n      display: block;\\n      margin-bottom: 10px; /* テキストと矢印の間隔 */\\n      color: #fff;\\n      font-size: 0.95rem; /* テキストのサイズ */\\n    }\\n    .arrow {\\n      display: block;\\n      width: 15px;\\n      height: 15px;\\n      border-bottom: 5px solid #fff;\\n      border-right: 5px solid #fff;\\n      transform: rotate(45deg);\\n      margin: 0 auto; /* ブロック要素の中央揃え */\\n    }\\n  }\\n  \\n  @media (min-width: 768px) {\\n    \\n    \\n  }\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/FirstView.css\"],\"names\":[],\"mappings\":\"AAAA,qBAAqB;AACrB;IACI;MACE,yCAAyC,EAAE,yBAAyB;IACtE;IACA;MACE,4CAA4C,EAAE,yBAAyB;IACzE;EACF;;EAEA;IACE,oBAAoB;IACpB,OAAO;IACP,gBAAgB;IAChB,gCAAgC;IAChC,eAAe;IACf,mBAAmB;IACnB,cAAc;IACd,YAAY;IACZ,UAAU;EACZ;;EAEA,0BAA0B;EAC1B;IACE,kBAAkB;IAClB,UAAU;IACV,SAAS,EAAE,cAAc;IACzB,2BAA2B,EAAE,kBAAkB;IAC/C,6BAA6B;IAC7B,WAAW;EACb;;EAEA,mBAAmB;EACnB;IACE,cAAc;IACd,mBAAmB,EAAE,eAAe;IACpC,WAAW;IACX,iBAAiB,EAAE,aAAa;EAClC;;EAEA,YAAY;EACZ;IACE,cAAc;IACd,WAAW;IACX,YAAY;IACZ,6BAA6B;IAC7B,4BAA4B;IAC5B,wBAAwB;IACxB,cAAc,EAAE,gBAAgB;EAClC;;EAEA;IACE,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oBAAoB,EAAE,uBAAuB;IAC7C,gBAAgB;IAChB,WAAW,EAAE,kBAAkB;EACjC;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,WAAW;EACb;;EAEA;IACE;MACE,WAAW;MACX,kBAAkB;MAClB,aAAa;MACb,WAAW;MACX,YAAY;IACd;IACA;MACE,cAAc;MACd,mBAAmB,EAAE,eAAe;MACpC,WAAW;MACX,kBAAkB,EAAE,aAAa;IACnC;IACA;MACE,cAAc;MACd,WAAW;MACX,YAAY;MACZ,6BAA6B;MAC7B,4BAA4B;MAC5B,wBAAwB;MACxB,cAAc,EAAE,gBAAgB;IAClC;EACF;;EAEA;;;EAGA\",\"sourcesContent\":[\"/* スクロールダウンのアニメーション */\\n@keyframes bounce {\\n    0%, 100% {\\n      transform: translateX(-50%) translateY(0); /* translateX(-50%) を追加 */\\n    }\\n    50% {\\n      transform: translateX(-50%) translateY(15px); /* translateX(-50%) を追加 */\\n    }\\n  }\\n  \\n  .title {\\n    position: 'absolute';\\n    top: 5%;\\n    margin-left: 50%;\\n    transform: translate(-50%, -50%);\\n    padding: 10px 0;\\n    border-radius: 10px;\\n    font-size: 3vw;\\n    color: white;\\n    z-index:30;\\n  }\\n\\n  /* スクロールダウンのプロンプト全体のスタイル */\\n  .scrolldown-animation {\\n    position: absolute;\\n    bottom: 5%;\\n    left: 50%; /* ビューポートの中央 */\\n    transform: translateX(-50%); /* 要素の幅の半分だけ左に移動 */\\n    animation: bounce 2s infinite;\\n    z-index: 10;\\n  }\\n  \\n  /* スクロールテキストのスタイル */\\n  .scrolldown-animation span {\\n    display: block;\\n    margin-bottom: 10px; /* テキストと矢印の間隔 */\\n    color: #fff;\\n    font-size: 1.5rem; /* テキストのサイズ */\\n  }\\n  \\n  /* 矢印のスタイル */\\n  .arrow {\\n    display: block;\\n    width: 30px;\\n    height: 30px;\\n    border-bottom: 5px solid #fff;\\n    border-right: 5px solid #fff;\\n    transform: rotate(45deg);\\n    margin: 0 auto; /* ブロック要素の中央揃え */\\n  }\\n  \\n  #player {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    pointer-events: none; /* プレイヤーのコントロールを無効にする */\\n    overflow: hidden;\\n    z-index: -1; /* 他のコンテンツの背後に配置 */\\n  }\\n  \\n  #player iframe {\\n    width: 100%;\\n    height: 100%;\\n  }\\n\\n  .video {\\n    z-index: 10;\\n    position: absolute;\\n    margin-top: 5%;\\n    width: 100%;\\n    height: 75%;\\n  }\\n\\n  @media screen and (max-width: 768px) {\\n    .video {\\n      z-index: 10;\\n      position: absolute;\\n      margin-top: 0;\\n      width: 100%;\\n      height: 100%;\\n    }\\n    .scrolldown-animation span {\\n      display: block;\\n      margin-bottom: 10px; /* テキストと矢印の間隔 */\\n      color: #fff;\\n      font-size: 0.95rem; /* テキストのサイズ */\\n    }\\n    .arrow {\\n      display: block;\\n      width: 15px;\\n      height: 15px;\\n      border-bottom: 5px solid #fff;\\n      border-right: 5px solid #fff;\\n      transform: rotate(45deg);\\n      margin: 0 auto; /* ブロック要素の中央揃え */\\n    }\\n  }\\n  \\n  @media (min-width: 768px) {\\n    \\n    \\n  }\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMl0ub25lT2ZbMTRdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMl0ub25lT2ZbMTRdLnVzZVsyXSEuL3NyYy9zdHlsZXMvRmlyc3RWaWV3LmNzcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMySDtBQUMzSCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EscUZBQXFGLGdCQUFnQixtREFBbUQsaUNBQWlDLFdBQVcsc0RBQXNELGlDQUFpQyxLQUFLLGdCQUFnQiwyQkFBMkIsY0FBYyx1QkFBdUIsdUNBQXVDLHNCQUFzQiwwQkFBMEIscUJBQXFCLG1CQUFtQixpQkFBaUIsS0FBSyw0REFBNEQseUJBQXlCLGlCQUFpQixpQkFBaUIsa0RBQWtELHVEQUF1RCxrQkFBa0IsS0FBSyw0REFBNEQscUJBQXFCLDJCQUEyQixrQ0FBa0MseUJBQXlCLG1CQUFtQixpQ0FBaUMscUJBQXFCLGtCQUFrQixtQkFBbUIsb0NBQW9DLG1DQUFtQywrQkFBK0Isc0JBQXNCLHNCQUFzQixpQkFBaUIseUJBQXlCLGFBQWEsY0FBYyxrQkFBa0IsbUJBQW1CLDRCQUE0QiwrQ0FBK0MsbUJBQW1CLHdCQUF3Qix3QkFBd0Isa0JBQWtCLG1CQUFtQixLQUFLLGNBQWMsa0JBQWtCLHlCQUF5QixxQkFBcUIsa0JBQWtCLGtCQUFrQixLQUFLLDRDQUE0QyxjQUFjLG9CQUFvQiwyQkFBMkIsc0JBQXNCLG9CQUFvQixxQkFBcUIsT0FBTyxrQ0FBa0MsdUJBQXVCLDZCQUE2QixvQ0FBb0MsNEJBQTRCLHFCQUFxQixjQUFjLHVCQUF1QixvQkFBb0IscUJBQXFCLHNDQUFzQyxxQ0FBcUMsaUNBQWlDLHdCQUF3Qix3QkFBd0IsS0FBSyxtQ0FBbUMsaUJBQWlCLE9BQU8sZ0dBQWdHLE1BQU0sS0FBSyx3QkFBd0IsTUFBTSxLQUFLLHdCQUF3QixNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsb0JBQW9CLHlCQUF5QixhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxzQkFBc0IsV0FBVyxzQkFBc0IsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsdUJBQXVCLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsd0JBQXdCLGFBQWEsdUJBQXVCLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsc0JBQXNCLFdBQVcsc0JBQXNCLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSx1QkFBdUIsTUFBTSxNQUFNLE9BQU8sb0VBQW9FLGdCQUFnQixtREFBbUQsaUNBQWlDLFdBQVcsc0RBQXNELGlDQUFpQyxLQUFLLGdCQUFnQiwyQkFBMkIsY0FBYyx1QkFBdUIsdUNBQXVDLHNCQUFzQiwwQkFBMEIscUJBQXFCLG1CQUFtQixpQkFBaUIsS0FBSyw0REFBNEQseUJBQXlCLGlCQUFpQixpQkFBaUIsa0RBQWtELHVEQUF1RCxrQkFBa0IsS0FBSyw0REFBNEQscUJBQXFCLDJCQUEyQixrQ0FBa0MseUJBQXlCLG1CQUFtQixpQ0FBaUMscUJBQXFCLGtCQUFrQixtQkFBbUIsb0NBQW9DLG1DQUFtQywrQkFBK0Isc0JBQXNCLHNCQUFzQixpQkFBaUIseUJBQXlCLGFBQWEsY0FBYyxrQkFBa0IsbUJBQW1CLDRCQUE0QiwrQ0FBK0MsbUJBQW1CLHdCQUF3Qix3QkFBd0Isa0JBQWtCLG1CQUFtQixLQUFLLGNBQWMsa0JBQWtCLHlCQUF5QixxQkFBcUIsa0JBQWtCLGtCQUFrQixLQUFLLDRDQUE0QyxjQUFjLG9CQUFvQiwyQkFBMkIsc0JBQXNCLG9CQUFvQixxQkFBcUIsT0FBTyxrQ0FBa0MsdUJBQXVCLDZCQUE2QixvQ0FBb0MsNEJBQTRCLHFCQUFxQixjQUFjLHVCQUF1QixvQkFBb0IscUJBQXFCLHNDQUFzQyxxQ0FBcUMsaUNBQWlDLHdCQUF3Qix3QkFBd0IsS0FBSyxtQ0FBbUMsaUJBQWlCLG1CQUFtQjtBQUM1N0s7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL0ZpcnN0Vmlldy5jc3M/YzliNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyog44K544Kv44Ot44O844Or44OA44Km44Oz44Gu44Ki44OL44Oh44O844K344On44OzICovXFxuQGtleWZyYW1lcyBib3VuY2Uge1xcbiAgICAwJSwgMTAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoMCk7IC8qIHRyYW5zbGF0ZVgoLTUwJSkg44KS6L+95YqgICovXFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgxNXB4KTsgLyogdHJhbnNsYXRlWCgtNTAlKSDjgpLov73liqAgKi9cXG4gICAgfVxcbiAgfVxcbiAgXFxuICAudGl0bGUge1xcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJztcXG4gICAgdG9wOiA1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAzdnc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDozMDtcXG4gIH1cXG5cXG4gIC8qIOOCueOCr+ODreODvOODq+ODgOOCpuODs+OBruODl+ODreODs+ODl+ODiOWFqOS9k+OBruOCueOCv+OCpOODqyAqL1xcbiAgLnNjcm9sbGRvd24tYW5pbWF0aW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDUlO1xcbiAgICBsZWZ0OiA1MCU7IC8qIOODk+ODpeODvOODneODvOODiOOBruS4reWkriAqL1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IC8qIOimgee0oOOBruW5heOBruWNiuWIhuOBoOOBkeW3puOBq+enu+WLlSAqL1xcbiAgICBhbmltYXRpb246IGJvdW5jZSAycyBpbmZpbml0ZTtcXG4gICAgei1pbmRleDogMTA7XFxuICB9XFxuICBcXG4gIC8qIOOCueOCr+ODreODvOODq+ODhuOCreOCueODiOOBruOCueOCv+OCpOODqyAqL1xcbiAgLnNjcm9sbGRvd24tYW5pbWF0aW9uIHNwYW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgLyog44OG44Kt44K544OI44Go55+i5Y2w44Gu6ZaT6ZqUICovXFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTsgLyog44OG44Kt44K544OI44Gu44K144Kk44K6ICovXFxuICB9XFxuICBcXG4gIC8qIOefouWNsOOBruOCueOCv+OCpOODqyAqL1xcbiAgLmFycm93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZmO1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjZmZmO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIG1hcmdpbjogMCBhdXRvOyAvKiDjg5bjg63jg4Pjgq/opoHntKDjga7kuK3lpK7mj4PjgYggKi9cXG4gIH1cXG4gIFxcbiAgI3BsYXllciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyog44OX44Os44Kk44Ok44O844Gu44Kz44Oz44OI44Ot44O844Or44KS54Sh5Yq544Gr44GZ44KLICovXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IC0xOyAvKiDku5bjga7jgrPjg7Pjg4bjg7Pjg4Tjga7og4zlvozjgavphY3nva4gKi9cXG4gIH1cXG4gIFxcbiAgI3BsYXllciBpZnJhbWUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgLnZpZGVvIHtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDc1JTtcXG4gIH1cXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC52aWRlbyB7XFxuICAgICAgei1pbmRleDogMTA7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuICAgIC5zY3JvbGxkb3duLWFuaW1hdGlvbiBzcGFuIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvKiDjg4bjgq3jgrnjg4jjgajnn6LljbDjga7plpPpmpQgKi9cXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICBmb250LXNpemU6IDAuOTVyZW07IC8qIOODhuOCreOCueODiOOBruOCteOCpOOCuiAqL1xcbiAgICB9XFxuICAgIC5hcnJvdyB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgd2lkdGg6IDE1cHg7XFxuICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZmO1xcbiAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNmZmY7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgIG1hcmdpbjogMCBhdXRvOyAvKiDjg5bjg63jg4Pjgq/opoHntKDjga7kuK3lpK7mj4PjgYggKi9cXG4gICAgfVxcbiAgfVxcbiAgXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgXFxuICAgIFxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL0ZpcnN0Vmlldy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCO0FBQ3JCO0lBQ0k7TUFDRSx5Q0FBeUMsRUFBRSx5QkFBeUI7SUFDdEU7SUFDQTtNQUNFLDRDQUE0QyxFQUFFLHlCQUF5QjtJQUN6RTtFQUNGOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFlBQVk7SUFDWixVQUFVO0VBQ1o7O0VBRUEsMEJBQTBCO0VBQzFCO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTLEVBQUUsY0FBYztJQUN6QiwyQkFBMkIsRUFBRSxrQkFBa0I7SUFDL0MsNkJBQTZCO0lBQzdCLFdBQVc7RUFDYjs7RUFFQSxtQkFBbUI7RUFDbkI7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CLEVBQUUsZUFBZTtJQUNwQyxXQUFXO0lBQ1gsaUJBQWlCLEVBQUUsYUFBYTtFQUNsQzs7RUFFQSxZQUFZO0VBQ1o7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixjQUFjLEVBQUUsZ0JBQWdCO0VBQ2xDOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0IsRUFBRSx1QkFBdUI7SUFDN0MsZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBRSxrQkFBa0I7RUFDakM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFO01BQ0UsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsV0FBVztNQUNYLFlBQVk7SUFDZDtJQUNBO01BQ0UsY0FBYztNQUNkLG1CQUFtQixFQUFFLGVBQWU7TUFDcEMsV0FBVztNQUNYLGtCQUFrQixFQUFFLGFBQWE7SUFDbkM7SUFDQTtNQUNFLGNBQWM7TUFDZCxXQUFXO01BQ1gsWUFBWTtNQUNaLDZCQUE2QjtNQUM3Qiw0QkFBNEI7TUFDNUIsd0JBQXdCO01BQ3hCLGNBQWMsRUFBRSxnQkFBZ0I7SUFDbEM7RUFDRjs7RUFFQTs7O0VBR0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyog44K544Kv44Ot44O844Or44OA44Km44Oz44Gu44Ki44OL44Oh44O844K344On44OzICovXFxuQGtleWZyYW1lcyBib3VuY2Uge1xcbiAgICAwJSwgMTAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoMCk7IC8qIHRyYW5zbGF0ZVgoLTUwJSkg44KS6L+95YqgICovXFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgxNXB4KTsgLyogdHJhbnNsYXRlWCgtNTAlKSDjgpLov73liqAgKi9cXG4gICAgfVxcbiAgfVxcbiAgXFxuICAudGl0bGUge1xcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJztcXG4gICAgdG9wOiA1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAzdnc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDozMDtcXG4gIH1cXG5cXG4gIC8qIOOCueOCr+ODreODvOODq+ODgOOCpuODs+OBruODl+ODreODs+ODl+ODiOWFqOS9k+OBruOCueOCv+OCpOODqyAqL1xcbiAgLnNjcm9sbGRvd24tYW5pbWF0aW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDUlO1xcbiAgICBsZWZ0OiA1MCU7IC8qIOODk+ODpeODvOODneODvOODiOOBruS4reWkriAqL1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IC8qIOimgee0oOOBruW5heOBruWNiuWIhuOBoOOBkeW3puOBq+enu+WLlSAqL1xcbiAgICBhbmltYXRpb246IGJvdW5jZSAycyBpbmZpbml0ZTtcXG4gICAgei1pbmRleDogMTA7XFxuICB9XFxuICBcXG4gIC8qIOOCueOCr+ODreODvOODq+ODhuOCreOCueODiOOBruOCueOCv+OCpOODqyAqL1xcbiAgLnNjcm9sbGRvd24tYW5pbWF0aW9uIHNwYW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgLyog44OG44Kt44K544OI44Go55+i5Y2w44Gu6ZaT6ZqUICovXFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTsgLyog44OG44Kt44K544OI44Gu44K144Kk44K6ICovXFxuICB9XFxuICBcXG4gIC8qIOefouWNsOOBruOCueOCv+OCpOODqyAqL1xcbiAgLmFycm93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZmO1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjZmZmO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIG1hcmdpbjogMCBhdXRvOyAvKiDjg5bjg63jg4Pjgq/opoHntKDjga7kuK3lpK7mj4PjgYggKi9cXG4gIH1cXG4gIFxcbiAgI3BsYXllciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyog44OX44Os44Kk44Ok44O844Gu44Kz44Oz44OI44Ot44O844Or44KS54Sh5Yq544Gr44GZ44KLICovXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IC0xOyAvKiDku5bjga7jgrPjg7Pjg4bjg7Pjg4Tjga7og4zlvozjgavphY3nva4gKi9cXG4gIH1cXG4gIFxcbiAgI3BsYXllciBpZnJhbWUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgLnZpZGVvIHtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDc1JTtcXG4gIH1cXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC52aWRlbyB7XFxuICAgICAgei1pbmRleDogMTA7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuICAgIC5zY3JvbGxkb3duLWFuaW1hdGlvbiBzcGFuIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvKiDjg4bjgq3jgrnjg4jjgajnn6LljbDjga7plpPpmpQgKi9cXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICBmb250LXNpemU6IDAuOTVyZW07IC8qIOODhuOCreOCueODiOOBruOCteOCpOOCuiAqL1xcbiAgICB9XFxuICAgIC5hcnJvdyB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgd2lkdGg6IDE1cHg7XFxuICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZmO1xcbiAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNmZmY7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgIG1hcmdpbjogMCBhdXRvOyAvKiDjg5bjg63jg4Pjgq/opoHntKDjga7kuK3lpK7mj4PjgYggKi9cXG4gICAgfVxcbiAgfVxcbiAgXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgXFxuICAgIFxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[12].oneOf[14].use[2]!./src/styles/FirstView.css\n"));

/***/ })

});