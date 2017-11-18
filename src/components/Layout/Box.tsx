import * as React from 'react';

export interface BoxProps {
    className: string;
}

export default class Box extends React.PureComponent<BoxProps, any> {
    public render() {
        return (
            <div className={`box ${this.props.className || ''}`}>
                {this.props.children}
            </div>
        );
    }
};