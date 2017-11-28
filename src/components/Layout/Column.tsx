import * as React from "react";

export interface ColumnProps {
    isNarrow?: boolean;
    isTwoThirds?: boolean;
    className?: string;
    children?: React.ReactElement<any> | Array<React.ReactElement<any>>;
}

const Column = (props: ColumnProps) => {
    const classList = ["column"];

    if (props.isNarrow) {
        classList.push("is-narrow");
    }
    if (props.isTwoThirds) {
        classList.push("is-two-thirds");
    }

    return (
        <div className={classList.join(" ") + ` ${props.className || ""}`}>
            {props.children}
        </div>
    );
};

export default Column;
