import * as React from "react";

export interface HeroProps {
    id?: string;
    size?: "small" | "medium" | "large";
    isInfo?: boolean;
}
export default class Hero extends React.PureComponent<HeroProps, any> {
    public render() {
        const props: any = {};
        if (this.props.id) {
            props.id = this.props.id;
        }

        return (
        <div {...props} className={`hero ${this.props.isInfo ? "is-info" : ""}`}>
            <div className="hero-body">
                {this.props.children}
            </div>
        </div>
        );
    }
}
