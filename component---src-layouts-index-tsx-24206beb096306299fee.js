webpackJsonp([22676092666560,60335399758886],{

/***/ 504:
/***/ (function(module, exports) {

	module.exports = {"layoutContext":{}}

/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(796);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _layoutIndex = __webpack_require__(504);
	
	var _layoutIndex2 = _interopRequireDefault(_layoutIndex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(_index2.default, _extends({}, props, _layoutIndex2.default));
	};
	
	module.exports = exports["default"];

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__(1);
	const react_redux_1 = __webpack_require__(96);
	const MenuItem_1 = __webpack_require__(795);
	const Container_1 = __webpack_require__(42);
	exports.HeaderMenu = ({ items, pathname, Link, inverted, dispatch }) => React.createElement(Container_1.default, { className: "header-menu", isFluid: true }, React.createElement("nav", { className: "navbar", role: "navigation", "aria-label": "main navigation" }, React.createElement("div", { className: "navbar-brand" }, items.map((item, idx) => React.createElement(MenuItem_1.default, Object.assign({ key: idx }, item))))));
	exports.default = react_redux_1.connect()(exports.HeaderMenu);

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__(1);
	const gatsby_link_1 = __webpack_require__(123);
	class HeaderMenuItem extends React.Component {
	    render() {
	        let content;
	        const hasSubItems = this.props.items && this.props.items.length > 0;
	        if (hasSubItems) {
	            content = React.createElement("div", { className: "navbar-item has-dropdown is-hoverable" }, React.createElement("a", { className: "navbar-link", href: "#" }, this.props.name), React.createElement("div", { className: "navbar-dropdown" }, this.props.items.map((subItem, index) => React.createElement(HeaderMenuItem, Object.assign({ key: index }, subItem)))));
	        } else {
	            content = React.createElement(gatsby_link_1.default, { to: this.props.path, className: "navbar-item" }, this.props.name);
	        }
	        return content;
	    }
	}
	exports.default = HeaderMenuItem;

/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const gatsby_link_1 = __webpack_require__(123);
	const React = __webpack_require__(1);
	const HeaderMenu_1 = __webpack_require__(794);
	const Container_1 = __webpack_require__(42);
	__webpack_require__(925);
	__webpack_require__(869);
	__webpack_require__(868);
	exports.menuItems = [{ name: "Home", path: "/", exact: true, icon: "home", inverted: true }, { name: "Documentation",
	    path: "/docs",
	    exact: true,
	    icon: "info circle",
	    items: [{
	        name: "Holiday API",
	        path: "/docs/holiday",
	        exact: true,
	        icon: ""
	    }]
	}, { name: "About", path: "/about/", exact: true, icon: "info circle" }, { name: "Blog", path: "/blog/", exact: false, icon: "newspaper" }];
	class DefaultLayout extends React.Component {
	    render() {
	        const { pathname } = this.props.location;
	        const isHome = pathname === "/";
	        return [this.renderHeader(pathname), this.renderBody(), this.renderFooter()];
	    }
	    renderHeader(pathname) {
	        return React.createElement("section", { key: "header" }, React.createElement(HeaderMenu_1.default, { Link: gatsby_link_1.default, pathname: pathname, items: exports.menuItems }));
	    }
	    renderBody() {
	        return React.createElement("section", { key: "PageBody" }, this.props.children());
	    }
	    renderFooter() {
	        return React.createElement("section", { key: "Footer" }, React.createElement(Container_1.default, null, React.createElement("p", null, "Powered  by Gatsby 1.0")));
	    }
	}
	exports.default = DefaultLayout;

/***/ }),

/***/ 925:
/***/ (function(module, exports) {

	// empty (null-loader)

/***/ })

});
//# sourceMappingURL=component---src-layouts-index-tsx-24206beb096306299fee.js.map