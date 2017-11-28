import * as React from "react";

export interface ColumnsProps {
    isVCentered?: boolean;
    isMobile?: boolean;
    className?: string;
    children?: any[];
}

const Columns = (props: ColumnsProps) => {
    const classList: string[] = ["columns"];

    if (props.isVCentered) {
        classList.push("is-vcentered");
    }

    if (props.isMobile) {
        classList.push("is-mobile");
    }

    return (
        <div className={`${classList.join(" ")} ${props.className || ""}`}>
            {props.children}
        </div>
    );
};

export default Columns;
