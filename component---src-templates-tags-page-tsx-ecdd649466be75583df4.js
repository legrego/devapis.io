webpackJsonp([237025395586720,155889786780487],{

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__(1);
	const gatsby_link_1 = __webpack_require__(123);
	const BlogTitle_1 = __webpack_require__(295);
	const Container_1 = __webpack_require__(42);
	const Box_1 = __webpack_require__(296);
	exports.default = props => {
	  const tags = props.data.tags.group;
	  const posts = props.data.posts.edges;
	  const { pathname } = props.location;
	  const pageCount = Math.ceil(props.data.posts.totalCount / 10);
	  // TODO export posts in a proper component
	  const Posts = React.createElement(Container_1.default, null, posts.map(({ node }) => {
	    const { frontmatter, timeToRead, fields: { slug }, excerpt } = node;
	    const avatar = frontmatter.author.avatar.children[0];
	    const cover = frontmatter.image.children[0];
	    const extra = React.createElement(Container_1.default, null, React.createElement(Box_1.default, { className: "comment" }, React.createElement("img", { src: avatar.responsiveResolution.src, srcSet: avatar.responsiveResolution.srcSet }), React.createElement("div", null, React.createElement("div", { style: { fontWeight: 400 } }, frontmatter.author.id), React.createElement("div", { style: { margin: 0 } }, frontmatter.updatedDate, " - ", timeToRead, " min read"))));
	    const description = React.createElement(Container_1.default, null, excerpt, React.createElement("br", null), React.createElement(gatsby_link_1.default, { to: slug }, "Read more\u2026"));
	    return React.createElement(Container_1.default, { key: slug, isFluid: true });
	  }));
	  return React.createElement(Container_1.default, null, React.createElement(BlogTitle_1.default, null), React.createElement("span", null, "content here"));
	};
	exports.pageQuery = "** extracted graphql fragment **";

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const blog_1 = __webpack_require__(168);
	exports.default = blog_1.default;
	exports.pageQuery = "** extracted graphql fragment **";

/***/ })

});
//# sourceMappingURL=component---src-templates-tags-page-tsx-ecdd649466be75583df4.js.map