import * as React from "react";
import Link from "gatsby-link";
import { MenuItem } from "../Menu";

export default class HeaderMenuItem extends React.Component<MenuItem, any> {
    public render() {
        let content: React.ReactElement<any>;

        const hasSubItems = this.props.items && this.props.items.length > 0;
        if (hasSubItems) {
            content = (
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link" href="#">{this.props.name}</a>
                    <div className="navbar-dropdown">
                        {this.props.items.map((subItem, index) =>
                            <HeaderMenuItem key={index} {...subItem} />
                        )}
                    </div>
                </div>
            );
        } else {
            content = (
                <Link to={this.props.path} className="navbar-item">{this.props.name}</Link>
            );
        }

        return content;
    }
}
