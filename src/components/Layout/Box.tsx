import * as React from "react";

export interface BoxProps {
    className: string;
    children?: React.ReactElement<any>;
}

const Box = (props: BoxProps) => {
    return (
        <div className={`box ${props.className || ""}`}>
            {props.children}
        </div>
    );
};

export default Box;
