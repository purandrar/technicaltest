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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 8,
    className: "headline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, __jsx(_components_Headline__WEBPACK_IMPORTED_MODULE_5__["default"], {
    headline: props.headline,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("ol", {
    className: "jsx-776215276",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, props.articles.map(function (article) {
    return __jsx(_NewsCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      article: article,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 33
      }
    });
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "776215276",
    __self: this
  }, ".headline.jsx-776215276{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wdXJhbmRyYXIvRG9jdW1lbnRzL2V4Y2VyY2lzZS90ZWNobmljYWx0ZXN0L2NvbXBvbmVudHMvTmV3c1NlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUIyQixBQUlZLFlBQUMiLCJmaWxlIjoiL1VzZXJzL3B1cmFuZHJhci9Eb2N1bWVudHMvZXhjZXJjaXNlL3RlY2huaWNhbHRlc3QvY29tcG9uZW50cy9OZXdzU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgTmV3c0NhcmQgZnJvbSAnLi9OZXdzQ2FyZCdcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgSGVhZGxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkbGluZSdcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NTZWN0aW9uKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17OH0gY2xhc3NOYW1lPVwiaGVhZGxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkbGluZSBoZWFkbGluZT17cHJvcHMuaGVhZGxpbmV9ID48L0hlYWRsaW5lPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmFydGljbGVzLm1hcChhcnRpY2xlID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5ld3NDYXJkIGFydGljbGU9e2FydGljbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPCBzdHlsZSBqc3ggPiB7YFxuICAgICAgICAgICAgLmhlYWRsaW5lIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH0gPC9zdHlsZSA+XG4gICAgICAgIDwvPlxuXG4gICAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/purandrar/Documents/excercise/technicaltest/components/NewsSection.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.0863b747b8d8b7757cd1.hot-update.js.map