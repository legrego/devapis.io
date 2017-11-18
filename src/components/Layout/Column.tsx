import * as React from 'react';

export interface ColumnProps {
    isNarrow?: boolean;
}

export default class Column extends React.PureComponent<ColumnProps, any> {
    public render() {
        const classList = ["column"];

        if (this.props.isNarrow) {
            classList.push("is-narrow");
        }

        return (
            <div className={classList.join(',')}>
                {this.props.children}
            </div>
        );
    }
};