import * as React from 'react';
import Column from '../../components/Layout/Column';
import Columns from '../../components/Layout/Columns';
import Container from '../../components/Layout/Container';
import Hero from '../../components/Layout/Hero';

import 'swagger-ui/dist/swagger-ui.css';


export default class HolidayDocs extends React.PureComponent<any, any> {

    public componentDidMount() {
        const apiDoc = require('../../../data/apis/holiday/openapi-spec.yaml');
        const SwaggerUi = require('swagger-ui');
        const CustomLayout = require('../../components/Swagger/DevAPIsLayout');

        console.log(CustomLayout)

        const DevAPIsLayoutPlugin = function() {
            return {
                components: {
                    CustomLayout: CustomLayout.default
                }
            }
        }

        const NoTryItOutPlugin = function() {
            return {
                components: {
                    TryItOutButton: (props: any): any => {
                        return null;
                    }
                }
            }
        }
        
        const ui = SwaggerUi({
            spec: apiDoc,
            dom_id: '#swagger-ui',
            plugins: [
                DevAPIsLayoutPlugin,
                NoTryItOutPlugin
            ],
            layout: "CustomLayout"
          })
    }

    public render() {
        return (
            <Container>
                <Hero isInfo={true}>
                    <Columns>
                        <Column>
                            <p className="title">Holiday API Documentation</p>
                            <p className="subtitle">The easiest way to work with National holidays!</p>
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