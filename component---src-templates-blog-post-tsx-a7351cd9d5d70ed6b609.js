webpackJsonp([221169156629308],{

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__(1);
	const gatsby_link_1 = __webpack_require__(123);
	const BlogTitle_1 = __webpack_require__(295);
	const Container_1 = __webpack_require__(42);
	exports.default = props => {
	  if (!props.data) {
	    return React.createElement("span", null, "nada");
	  }
	  const { frontmatter, html, timeToRead } = props.data.post;
	  const avatar = frontmatter.author.avatar.children[0];
	  const tags = props.data.post.frontmatter.tags.map(tag => React.createElement("h1", { key: tag }, React.createElement(gatsby_link_1.default, { to: `/blog/tags/${tag}/` }, tag)));
	  const recents = props.data.recents.edges.map(({ node }) => {
	    const recentAvatar = node.frontmatter.author.avatar.children[0];
	    const recentCover = node.frontmatter.image.children[0];
	    const extra = React.createElement("div", null, "extra here");
	    return React.createElement("div", { key: node.fields.slug, style: { paddingBottom: "1em" } }, React.createElement("span", null, "I think a card goes here instead of whatever this is "));
	  });
	  return React.createElement(Container_1.default, null, React.createElement(BlogTitle_1.default, null), React.createElement("div", null, "Blog content here?"));
	};
	exports.pageQuery = "** extracted graphql fragment **";

/***/ })

});
//# sourceMappingURL=component---src-templates-blog-post-tsx-a7351cd9d5d70ed6b609.js.map