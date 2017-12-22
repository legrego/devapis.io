import * as React from "react";

export interface ContainerProps {
    isFluid?: boolean;
    className?: string;
    children?: any | any[];
}

const Container = (props: ContainerProps) => {
    return (
        <div className={`container ${props.className || ""}`}>
            {props.children}
        </div>
    );
};

export default Container;
