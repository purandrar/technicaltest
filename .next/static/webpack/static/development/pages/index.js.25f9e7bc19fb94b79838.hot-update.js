webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NewsSection.js":
/*!***********************************!*\
  !*** ./components/NewsSection.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsSection; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _NewsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewsCard */ "./components/NewsCard.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_Headline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Headline */ "./components/Headline.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/purandrar/Documents/excercise/technicaltest/components/NewsSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function NewsSection(props) {
  var _this = this;

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 8,
    className: "headline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx(_components_Headline__WEBPACK_IMPORTED_MODULE_5__["default"], {
    headline: props.headline,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("ol", {
    className: "jsx-2758636333",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, props.articles.map(function (article) {
    return __jsx(_NewsCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      article: article,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 29
      }
    });
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2758636333",
    __self: this
  }, ".col-lg-8.jsx-2758636333{height:100%, display:flex, justifyContent:center, alignItems:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wdXJhbmRyYXIvRG9jdW1lbnRzL2V4Y2VyY2lzZS90ZWNobmljYWx0ZXN0L2NvbXBvbmVudHMvTmV3c1NlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUIyQixBQU9ZLG9FQUFDIiwiZmlsZSI6Ii9Vc2Vycy9wdXJhbmRyYXIvRG9jdW1lbnRzL2V4Y2VyY2lzZS90ZWNobmljYWx0ZXN0L2NvbXBvbmVudHMvTmV3c1NlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IE5ld3NDYXJkIGZyb20gJy4vTmV3c0NhcmQnXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IEhlYWRsaW5lIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGxpbmUnXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzU2VjdGlvbihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezh9IGNsYXNzTmFtZT1cImhlYWRsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkbGluZSBoZWFkbGluZT17cHJvcHMuaGVhZGxpbmV9ID48L0hlYWRsaW5lPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezR9PlxuICAgICAgICAgICAgICAgICAgICA8b2w+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuYXJ0aWNsZXMubWFwKGFydGljbGUgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdzQ2FyZCBhcnRpY2xlPXthcnRpY2xlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwgc3R5bGUganN4ID4ge2BcbiAgICAgICAgICAgIC5jb2wtbGctOHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCUsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleCxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogY2VudGVyLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IGNlbnRlclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH0gPC9zdHlsZSA+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/purandrar/Documents/excercise/technicaltest/components/NewsSection.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.25f9e7bc19fb94b79838.hot-update.js.map