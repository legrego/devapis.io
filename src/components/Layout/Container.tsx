import * as React from "react";

export interface ContainerProps {
    isFluid?: boolean;
    className?: string;
}

export default class Container extends React.PureComponent<ContainerProps, any> {
    static defaultProps = {
        className: ""
    };
    public render() {
        return (
            <div className={`container ${this.props.className}`}>
                {this.props.children}
            </div>
        );
    }
}
