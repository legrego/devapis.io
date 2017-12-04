import * as React from "react";

export interface HeroProps {
    id?: string;
    size?: "small" | "medium" | "large";
    isInfo?: boolean;
    children?: any;
}

const Hero = (props: HeroProps) => {
    const extraProps: any = {};
    if (props.id) {
        extraProps.id = props.id;
    }

    return (
    <div {...extraProps} className={`hero ${props.isInfo ? "is-info" : ""}`}>
        <div className="hero-body">
            {props.children}
        </div>
    </div>
    );
};

export default Hero;
