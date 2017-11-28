import * as React from "react";
import Box from "../Layout/Box";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { ImageSharpEdge } from "../../graphql-types";

export interface ApiBoxProps {
    apiName: string;
    apiDisplayName: string;
    apiVersion: string;
    apiTagline: string;
    apiFAIcon: string;
    githubUrl?: string;
    comingSoon?: boolean;
}

const ApiBox = (props: ApiBoxProps) => {
    const apiLogo = (
        <span className="icon is-large">
            <i className={`fa fa-3x ${props.apiFAIcon || "fa-question"}`} title={props.apiName} />
        </span>
    );

    return (
        <Box className="api-box">
            <article className="media">
                <div className="media-left">
                    {
                        props.comingSoon
                            ? apiLogo
                            : linkToDocs(props, apiLogo)
                    }
                </div>
                <div className="media-content">
                    <h4>
                        {props.apiDisplayName}
                        {maybeRenderVersion(props)}
                    </h4>
                    <p>{props.apiTagline}</p>
                    {renderActions(props)}
                </div>
            </article>
        </Box>
    );
};

function maybeRenderVersion(props: ApiBoxProps) {
    if (props.comingSoon) {
        return null;
    }

    return <span className="tag is-success">{props.apiVersion}</span>;
}

function renderActions(props: ApiBoxProps) {
    let contents;

    if (props.comingSoon) {
        contents = <em>Coming Soon!</em>;
    } else {
        contents = (
            <span className="api-box-actions is-pulled-right">
                {linkToDocs(props, <i className="fa fa-book fa-2x" title="View Docs" />)}
                {linkToGithub(props)}
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

function linkToDocs(props: ApiBoxProps, element: React.ReactElement<any>) {
    return (
        <Link to={`/docs/${props.apiName}`} >{element}</Link>
    );
}

function linkToGithub(props: ApiBoxProps) {
    if (!props.githubUrl) {
        return null;
    }

    return (
        <a
            href={props.githubUrl}
            target="_blank"
            title="View Source on Github">
            <i className="fa fa-github fa-2x" />
        </a>
    );
}

export default ApiBox;
