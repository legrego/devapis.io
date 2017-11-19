import * as React from "react";
import Box from "./Layout/Box";
import Link from "gatsby-link";

export interface ApiBoxProps {
    apiName: string;
    apiDisplayName: string;
    apiVersion: string;
    apiTagline: string;
    apiLogoUrl: string;
    comingSoon?: boolean;
}

export default class ApiBox extends React.Component<ApiBoxProps, any> {
    public render() {
        const apiLogo = <img src={this.props.apiLogoUrl} width="100" height="100" />;

        return (
            <Box className="api-box">
                <article className="media">
                    <div className="media-left">
                        {
                            this.props.comingSoon
                                ? apiLogo
                                : this.linkToDocs(apiLogo)
                        }
                    </div>
                    <div className="media-content">
                        <h4>
                            {this.props.apiDisplayName}
                            {this.maybeRenderVersion()}
                        </h4>
                        <p>{this.props.apiTagline}</p>
                        {this.renderActions()}
                    </div>
                </article>
            </Box>
        );
    }

    private maybeRenderVersion() {
        if (this.props.comingSoon) {
            return null;
        }

        return <span className="tag is-success">{this.props.apiVersion}</span>;
    }

    private renderActions() {
        let contents;

        if (this.props.comingSoon) {
            contents = <em>Coming Soon!</em>;
        } else {
            contents = this.linkToDocs(<span>View Docs</span>);
        }

        return (
            <div className="api-box-actions">
                {contents}
            </div>
        );
    }

    private linkToDocs(element: React.ReactElement<any>) {
        return (
            <Link to={`/docs/${this.props.apiName}`} >{element}</Link>
        );
    }
}
