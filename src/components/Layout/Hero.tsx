import * as React from "react";

export interface HeroProps {
    size?: "small" | "medium" | "large";
    isInfo?: boolean;
}
export default class Hero extends React.PureComponent<HeroProps, any> {
    public render() {
        return (
        <div className={`hero ${this.props.isInfo ? "is-info" : ""}`}>
            <div className="hero-body">
                {this.props.children}
            </div>
        </div>
        );
    }
}
