import * as React from "react";
import {chunk} from 'lodash';
import Link from "gatsby-link";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { menuItems } from "../layouts";
import ApiBox from "../components/ApiBox";
import Container from "../components/Layout/Container";
import { ApisJsonConnection } from "../graphql-types";
import Columns from "../components/Layout/Columns";
import Column from "../components/Layout/Column";

interface IndexPageProps {
  data: {
    apis: ApisJsonConnection
  },
  location: {
    pathname: string;
  };
}

export default (props: IndexPageProps) =>
  <Container>
    <div className="hero is-primary is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 id="bulma" className="title heading-one">DevAPIs.io</h1>
          <h2 id="modern-framework" className="subtitle">
            A collection of helpful & friendly APIs
          </h2>
        </div>
      </div>
    </div>

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
                      apiLogoUrl={api.node.logoUrl}
                      apiVersion={api.node.currentVersion}
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

  <Container>
    <div className="hero is-info">
      <div className="hero-body">
      <nav className="columns">
      <a className="column has-text-centered" href="/documentation/overview/responsiveness/">
        <span className="icon is-large" style={{marginRight: "-15px"}}>
          <i className="fa fa-mobile"></i>
        </span>
        <span className="icon is-large">
          <i className="fa fa-tablet"></i>
        </span>
        <span className="icon is-large"  style={{marginRight: "10px"}}>
          <i className="fa fa-desktop"></i>
        </span>
        <p className="title is-4"><strong>Something</strong></p>
        <p className="subtitle">should go here</p>
      </a>
      <a className="column has-text-centered" href="/documentation/overview/modular/">
        <span className="icon is-large">
          <i className="fa fa-cubes"></i>
        </span>
        <p className="title is-4"><strong>Modular</strong></p>
        <p className="subtitle">Just import what you <strong>need</strong></p>
      </a>
      <a className="column has-text-centered" href="/documentation/columns/basics/">
        <span className="icon is-large">
          <i className="fa fa-css3"></i>
        </span>
        <p className="title is-4"><strong>Modern</strong></p>
        <p className="subtitle">Built with <strong>Flexbox</strong></p>
      </a>
      <a className="column has-text-centered" href="">
        <span className="icon is-large">
          <i className="fa fa-3x fa-github"></i>
        </span>
        <p className="title is-4"><strong>Free</strong></p>
        <p className="subtitle">Open source on <strong>GitHub</strong></p>
      </a>
    </nav>
      </div>
    </div>
  </Container>
  <hr className="is-marginless" />

  </Container>;


export const pageQuery = graphql`
query PageIndex {
  apis: allApisJson {
    edges {
      node {
        name,
        displayName,
        logoUrl,
        tagline,
        currentVersion,
        available
      }
    }
  }
}
`