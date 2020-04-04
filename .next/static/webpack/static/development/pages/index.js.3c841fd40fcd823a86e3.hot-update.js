webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_NewsSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NewsSection */ "./components/NewsSection.js");


var _this = undefined,
    _jsxFileName = "/Users/purandrar/Documents/excercise/technicaltest/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Index = function Index(props) {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_components_NewsSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    headline: props.headlineUs,
    articles: props.newsUs,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), __jsx(_components_NewsSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    headline: props.headlineId,
    articles: props.newsId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx(_components_NewsSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    headline: props.headlineSg,
    articles: props.newsSg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }));
};

Index.getInitialProps = function _callee() {
  var resId, resUs, resSg, dataId, dataUs, dataSg, newsId, newsUs, newsSg;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('http://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=72aa24ac8bbf4a1aa302891fbde1d0ac'));

        case 2:
          resId = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=72aa24ac8bbf4a1aa302891fbde1d0ac'));

        case 5:
          resUs = _context.sent;
          _context.next = 8;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('http://newsapi.org/v2/top-headlines?country=sg&category=business&apiKey=72aa24ac8bbf4a1aa302891fbde1d0ac'));

        case 8:
          resSg = _context.sent;
          _context.next = 11;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(resId.json());

        case 11:
          dataId = _context.sent;
          _context.next = 14;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(resUs.json());

        case 14:
          dataUs = _context.sent;
          _context.next = 17;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(resSg.json());

        case 17:
          dataSg = _context.sent;
          newsId = dataId.articles.slice(1, 8);
          newsUs = dataUs.articles.slice(1, 8);
          newsSg = dataSg.articles.slice(1, 8);
          return _context.abrupt("return", {
            headlineUs: dataUs.articles[0],
            headlineId: dataId.articles[0],
            headlineSg: dataSg.articles[0],
            newsUs: newsUs,
            newsId: newsId,
            newsSg: newsSg
          });

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/***/ })

})
//# sourceMappingURL=index.js.3c841fd40fcd823a86e3.hot-update.js.map