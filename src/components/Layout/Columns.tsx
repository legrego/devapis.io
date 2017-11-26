import * as React from "react";

export interface ColumnsProps {
    isVCentered?: boolean;
    isMobile?: boolean;
}

export default class Columns extends React.PureComponent<ColumnsProps, any> {
    public render() {
        const classList: string[] = ["columns"];

        if (this.props.isVCentered) {
            classList.push("is-vcentered");
        }

        if (this.props.isMobile) {
            classList.push("is-mobile");
        }

        return (
            <div className={classList.join(" ")}>
                {this.props.children}
            </div>
        );
    }
}
