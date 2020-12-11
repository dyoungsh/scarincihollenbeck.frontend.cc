webpackHotUpdate_N_E("pages/author/[slug]",{

/***/ "./pages/author/[slug].js":
/*!********************************!*\
  !*** ./pages/author/[slug].js ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Author; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-request */ "./node_modules/graphql-request/dist/index.js");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/footer */ "./components/footer.js");
/* harmony import */ var components_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/breadcrumbs */ "./components/breadcrumbs.js");
/* harmony import */ var layouts_archive_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! layouts/archive-layout */ "./layouts/archive-layout.js");
/* harmony import */ var components_archives_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/archives/body */ "./components/archives/body.js");
/* harmony import */ var components_author_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/author/sidebar */ "./components/author/sidebar.js");
/* harmony import */ var components_site_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/site-loader */ "./components/site-loader.js");
/* harmony import */ var components_error_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/error-message */ "./components/error-message.js");
/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/helpers */ "./utils/helpers.js");
var _jsxFileName = "C:\\Users\\ptumulty\\sites\\scarincihollenbeck.frontend.cc\\client\\pages\\author\\[slug].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var __N_SSP = true;
function Author(_ref) {
  var firmNews = _ref.firmNews,
      firmEvents = _ref.firmEvents,
      firmInsights = _ref.firmInsights;

  if (results.length <= 0) {
    return __jsx("div", {
      className: "py-5 my-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, __jsx(components_site_loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 10
      }
    }));
  } // page: query.page || 1,
  // pages: response.pages || 1,
  // results: response.results || [],
  // authorBio


  return __jsx("div", {
    className: "mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, "Well get back to this...", __jsx(components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }));
}
_c = Author;

var _c;

$RefreshReg$(_c, "Author");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aG9yL1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJBdXRob3IiLCJmaXJtTmV3cyIsImZpcm1FdmVudHMiLCJmaXJtSW5zaWdodHMiLCJyZXN1bHRzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNZSxTQUFTQSxNQUFULE9BSVo7QUFBQSxNQUhEQyxRQUdDLFFBSERBLFFBR0M7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQUREQyxZQUNDLFFBRERBLFlBQ0M7O0FBRUQsTUFBR0MsT0FBTyxDQUFDQyxNQUFSLElBQWlCLENBQXBCLEVBQXVCO0FBQ3JCLFdBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0csTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREgsQ0FERjtBQUtELEdBUkEsQ0FXRDtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBc0JFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCRixDQURGO0FBMEJEO0tBOUN1QkwsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRob3IvW3NsdWddLjhlZTAwYmI0NjY2MmY4NTIwMjBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL2Zvb3Rlcic7XHJcbmltcG9ydCBCcmVhZGNydW1icyBmcm9tICdjb21wb25lbnRzL2JyZWFkY3J1bWJzJztcclxuaW1wb3J0IEFyY2hpdmVMYXlvdXQgZnJvbSAnbGF5b3V0cy9hcmNoaXZlLWxheW91dCc7XHJcbmltcG9ydCBCb2R5IGZyb20gJ2NvbXBvbmVudHMvYXJjaGl2ZXMvYm9keSc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJ2NvbXBvbmVudHMvYXV0aG9yL3NpZGViYXInO1xyXG5pbXBvcnQgU2l0ZUxvYWRlciBmcm9tICdjb21wb25lbnRzL3NpdGUtbG9hZGVyJztcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICdjb21wb25lbnRzL2Vycm9yLW1lc3NhZ2UnO1xyXG5pbXBvcnQgeyBoZWFkZXJzIH0gZnJvbSAndXRpbHMvaGVscGVycyc7XHJcbmltcG9ydCBjbGllbnQgZnJvbSAndXRpbHMvZ3JhcGhxbC1jbGllbnQnO1xyXG5pbXBvcnQgeyBibG9nQXJ0aWNsZXNRdWVyeSB9IGZyb20gJ3F1ZXJpZXMvaG9tZSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhvcih7XHJcbiAgZmlybU5ld3MsXHJcbiAgZmlybUV2ZW50cyxcclxuICBmaXJtSW5zaWdodHNcclxufSkge1xyXG5cclxuICBpZihyZXN1bHRzLmxlbmd0aCA8PTApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNSBteS01XCI+XHJcbiAgICAgICAgIDxTaXRlTG9hZGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgLy8gcGFnZTogcXVlcnkucGFnZSB8fCAxLFxyXG4gIC8vIHBhZ2VzOiByZXNwb25zZS5wYWdlcyB8fCAxLFxyXG4gIC8vIHJlc3VsdHM6IHJlc3BvbnNlLnJlc3VsdHMgfHwgW10sXHJcbiAgLy8gYXV0aG9yQmlvXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICB7LyogPE5leHRTZW8gbm9mb2xsb3cgLz5cclxuICAgICAgPEFyY2hpdmVMYXlvdXRcclxuICAgICAgICBoZWFkZXI9eyg8QnJlYWRjcnVtYnNcclxuICAgICAgICAgIGJyZWFkQ3J1bWI9e1tjdXJyZW50VXNlciwgcGFnZV19XHJcbiAgICAgICAgICBjYXRlZ29yeVNsdWc9e2N1cnJlbnRVc2VyfVxyXG4gICAgICAgIC8+KX1cclxuICAgICAgICBib2R5PXsoXHJcbiAgICAgICAgICA8Qm9keVxyXG4gICAgICAgICAgICByZXN1bHRzPXtyZXN1bHRzfVxyXG4gICAgICAgICAgICB0ZXJtPXtjdXJyZW50VXNlcn1cclxuICAgICAgICAgICAgcGFnZXM9e3BhZ2VzfVxyXG4gICAgICAgICAgICBjdXJyZW50UGFnZT17cGFnZX1cclxuICAgICAgICAgICAgbmV3cz17ZmlybU5ld3N9XHJcbiAgICAgICAgICAgIGV2ZW50cz17ZmlybUV2ZW50c31cclxuICAgICAgICAgICAgaW5zaWdodD17ZmlybUluc2lnaHRzfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwYXRobmFtZT17YC9hdXRob3IvJHtjdXJyZW50VXNlcn1gfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHNpZGViYXI9eyg8U2lkZWJhciBiaW89e2Jpb30gcHJhY3RpY2VzPXtwcmFjdGljZXN9IC8+KX1cclxuICAgICAgLz4gKi99XHJcbiAgICAgIFdlbGwgZ2V0IGJhY2sgdG8gdGhpcy4uLlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIGNvbnN0IGZpcm1OZXdzQ29udGVudCA9IGF3YWl0IGNsaWVudC5xdWVyeShibG9nQXJ0aWNsZXNRdWVyeSg5OCksIHt9KTtcclxuICBjb25zdCBmaXJtRXZlbnRzQ29udGVudCA9IGF3YWl0IGNsaWVudC5xdWVyeShibG9nQXJ0aWNsZXNRdWVyeSg5OSksIHt9KTtcclxuICBjb25zdCBmaXJtSW5zaWdodHNDb250ZW50ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KGJsb2dBcnRpY2xlc1F1ZXJ5KDU5OSksIHt9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGZpcm1OZXdzOiBmaXJtTmV3c0NvbnRlbnQgfHwgW10sXHJcbiAgICAgIGZpcm1FdmVudHM6IGZpcm1FdmVudHNDb250ZW50IHx8IFtdLFxyXG4gICAgICBmaXJtSW5zaWdodHM6IGZpcm1JbnNpZ2h0c0NvbnRlbnQgfHwgW10sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==