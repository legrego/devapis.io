import * as React from "react";
import Container from "../components/Layout/Container";
import { MarkdownRemarkConnection } from "../graphql-types";

interface AboutProps {
  data: {
    intro: MarkdownRemarkConnection;
  };
}
export default (props: AboutProps) => {
  const {html} = props.data.intro.edges[0].node;
  return (
    <Container>
      <div className="content" dangerouslySetInnerHTML={{
          __html: html,
        }} />
    </Container>
  );
};

export const pageQuery = graphql`
query AboutQuery {
  intro: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___updatedDate] },
    filter: {
      frontmatter: { draft: { ne: true } },
      fileAbsolutePath: { regex: "/about/" }
    },
    limit: 1
  ) {
    totalCount
    edges {
      node {
        excerpt
        timeToRead
        html
        fields {
          slug
        }
        frontmatter {
          title
          updatedDate(formatString: "DD MMMM, YYYY")
          image {
            children {
              ... on ImageSharp {
                responsiveResolution(width: 700, height: 100) {
                  src
                  srcSet
                }
              }
            }
          }
          author {
            id
            avatar {
              children {
                ... on ImageSharp {
                  responsiveResolution(width: 35, height: 35) {
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
