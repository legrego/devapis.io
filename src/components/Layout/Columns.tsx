import * as React from 'react';

export interface ColumnsProps {
    isVCentered?: boolean;
}

export default class Columns extends React.PureComponent<ColumnsProps, any> {
    public render() {
        return (
            <div className="columns">
                {this.props.children}
            </div>
        );
    }
};