import * as React from "react";
import Box from "./Layout/Box";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { ImageSharpEdge } from "../graphql-types";

export interface ApiBoxProps {
    apiName: string;
    apiDisplayName: string;
    apiVersion: string;
    apiTagline: string;
    apiLogo: string | ImageSharpEdge;
    githubUrl?: string;
    comingSoon?: boolean;
}

export default class ApiBox extends React.Component<ApiBoxProps, any> {
    public render() {
        let apiLogo;
        if (typeof this.props.apiLogo === "string") {
            apiLogo = <img src={this.props.apiLogo} width="100" height="100" />;
        } else {
            apiLogo = <img
                src={this.props.apiLogo.node.resize.src}
                width={this.props.apiLogo.node.resize.width}
                height={this.props.apiLogo.node.resize.height} />;
        }

        return (
            <Box className="api-box">
                <article className="media">
                    <div className="media-left" style={{width: "150px"}}>
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
            contents = (
                <span className="api-box-actions">
                    {this.linkToDocs(<i className="fa fa-book fa-2x" title="View Docs" />)}
                    {this.linkToGithub()}
                </span>
            );
        }

        return (
            <div className="api-box-actions">
                <hr className="api-box-action-divider" />
                {contents}
            </div>
        );
    }

    private linkToDocs(element: React.ReactElement<any>) {
        return (
            <Link to={`/docs/${this.props.apiName}`} >{element}</Link>
        );
    }

    private linkToGithub() {
        if (!this.props.githubUrl) {
            return null;
        }

        return (
            <a
                href={this.props.githubUrl}
                target="_blank"
                title="View Source on Github">
                <i className="fa fa-github fa-2x" />
            </a>
        );
    }
}
