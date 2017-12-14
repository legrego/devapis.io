import * as React from "react";
import Column from "../components/Layout/Column";
import Columns from "../components/Layout/Columns";
import Container from "../components/Layout/Container";
import Hero from "../components/Layout/Hero";
import { ApisJson } from "../graphql-types";
import { CustomInfoPlugin } from "../components/Swagger/Info/CustomInfoPlugin";
import * as SwaggerUi from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";

export interface IApiDocsProps {
  pathContext: {
    api: ApisJson;
    spec: {};
  };
}

export default class ApiDocs extends React.PureComponent<IApiDocsProps, any> {

    public componentDidMount() {
      const ui = SwaggerUi({
          spec: this.props.pathContext.spec,
          dom_id: "#swagger-ui",
          plugins: [
            CustomInfoPlugin
          ]
      });
    }

    public render() {
      const {api} = this.props.pathContext;
      return (
          <Container>
              <Hero isInfo={true}>
                  <Columns>
                      <Column>
                          <p className="title">{api && api.displayName} Documentation</p>
                          <p className="subtitle">{api && api.tagline}</p>
                      </Column>
                      <Column isNarrow={true}>
                          <div>ad here</div>
                      </Column>
                  </Columns>
              </Hero>
              <div id="swagger-ui" />
          </Container>
      );
    }
}
