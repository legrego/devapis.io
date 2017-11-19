import * as React from "react";
import Column from "../components/Layout/Column";
import Columns from "../components/Layout/Columns";
import Container from "../components/Layout/Container";
import Hero from "../components/Layout/Hero";
import "swagger-ui/dist/swagger-ui.css";

import { ApisJson } from "../graphql-types";

export interface IApiDocsProps {
  pathContext: {
    api: ApisJson;
  };
}

export default class ApiDocs extends React.PureComponent<IApiDocsProps, any> {

    public componentDidMount() {
      const apiName = this.props.pathContext.api.name.toLowerCase();

      const SwaggerUi = require("swagger-ui");
      const CustomLayout = require("../components/Swagger/DevAPIsLayout");

      const DevAPIsLayoutPlugin = () => {
          return {
              components: {
                  CustomLayout: CustomLayout.default
              }
          };
      };

      const NoTryItOutPlugin = () => {
          return {
              components: {
                  TryItOutButton: (props: any): any => {
                      return null;
                  }
              }
          };
      };

      const ui = SwaggerUi({
          url: `/apis/${apiName}/openapi-spec.yaml`,
          dom_id: "#swagger-ui",
          plugins: [
              DevAPIsLayoutPlugin,
              NoTryItOutPlugin
          ],
          layout: "CustomLayout"
      });
    }

    public render() {
      const {api} = this.props.pathContext;
      return (
          <Container>
              <Hero isInfo={true}>
                  <Columns>
                      <Column>
                          <p className="title">{api.displayName} Documentation</p>
                          <p className="subtitle">{api.tagline}</p>
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
