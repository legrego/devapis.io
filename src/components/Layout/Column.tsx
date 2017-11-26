import * as React from "react";

export interface ColumnProps {
    isNarrow?: boolean;
    isTwoThirds?: boolean;
    className?: string;
}

export default class Column extends React.PureComponent<ColumnProps, any> {
    static defaultProps = {
        className: "",
        isNarrow: false,
        isTwoThirds: false
    };

    public render() {
        const classList = ["column"];

        if (this.props.isNarrow) {
            classList.push("is-narrow");
        }
        if (this.props.isTwoThirds) {
            classList.push("is-two-thirds");
        }

        return (
            <div className={classList.join(" ") + ` ${this.props.className}`}>
                {this.props.children}
            </div>
        );
    }
}
