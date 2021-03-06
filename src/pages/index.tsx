import * as React from "react";
import {chunk} from "lodash";
import Link from "gatsby-link";
import Img from "gatsby-image";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { menuItems } from "../layouts";
import ApiBox from "../components/ApiBox/ApiBox";
import Container from "../components/Layout/Container";
import { ApisJsonConnection, ImageSharpConnection } from "../graphql-types";
import Columns from "../components/Layout/Columns";
import Column from "../components/Layout/Column";
import Hero from "../components/Layout/Hero";

interface IndexPageProps {
  data: {
    heroImage: ImageSharpConnection;
    apis: ApisJsonConnection;
  };
  location: {
    pathname: string;
  };
}

export default (props: IndexPageProps) =>
  <Container>
    <Columns isVCentered={true}>
      <Column isTwoThirds={true}>
        <h1 className="title">A collection of friendly & helpful APIs</h1>
        <h3 className="subtitle">for developers, by developers</h3>
      </Column>
      <Column className={`is-hidden-mobile`}>
        <Img sizes={props.data.heroImage.edges[0].node.sizes} />
      </Column>
    </Columns>

    <Container className="api-doc-cards">
    {
      chunk(props.data.apis.edges, 2)
      .map((apiRow, rowIdx) => {
        return (
          <Columns key={rowIdx}>
            {
              apiRow.map((api, idx) => {
                return (
                  <Column key={idx}>
                    <ApiBox
                      apiName={api.node.name}
                      apiDisplayName={api.node.displayName}
                      apiFAIcon={api.node.faIcon}
                      apiVersion={api.node.currentVersion}
                      githubUrl={api.node.githubUrl}
                      comingSoon={!api.node.available}
                      apiTagline={api.node.tagline} />
                  </Column>
                );
              })
            }
          </Columns>
        );
      })
    }
  </Container>
  </Container>;

export const pageQuery = graphql`
query PageIndex {
  heroImage: allImageSharp(filter: {id: {regex: "/data/images/devapis-logo.png/"}}) {
    edges {
      node {
        ... on ImageSharp {
          sizes(maxWidth: 700) {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            ...GatsbyImageSharpSizes_noBase64
          }
        }
      }
    }
  }
  apis: allApisJson {
    edges {
      node {
        name,
        displayName,
        faIcon,
        tagline,
        currentVersion,
        githubUrl,
        available
      }
    }
  }
}
`;
