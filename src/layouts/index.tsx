import Link from "gatsby-link";
import * as React from "react";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import Container from "../components/Layout/Container";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import "../css/styles.scss";
import "../css/responsive.css";
import "prismjs/themes/prism-okaidia.css";
import "font-awesome/css/font-awesome.min.css";

export const menuItems = [
  { name: "Home", path: "/", exact: true, icon: "home", inverted: true },
  { name: "Documentation",
    path: "/api-docs", 
    exact: true, 
    icon: "info circle",
    items: [{
      name: 'Holiday API',
      path: '/api-docs/holiday',
      exact: true,
      icon: ''
    }]
  },
  { name: "About", path: "/about/", exact: true, icon: "info circle" },
  { name: "Blog", path: "/blog/", exact: false, icon: "newspaper" },
];

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

export default class DefaultLayout extends React.Component<DefaultLayoutProps, void> {
  render() {
    const { pathname } = this.props.location;
    const isHome = pathname === "/";

    return [
      this.renderHeader(pathname),
      this.renderBody(),
      this.renderFooter()
    ];
  }

  renderHeader(pathname: string) {
    return (
      <section key="header">
        <HeaderMenu Link={Link} pathname={pathname} items={menuItems} />
      </section>
    );
  }

  renderBody() {
    return (
      <section key="PageBody">
        {this.props.children()}
      </section>
    );
  }

  renderFooter() {
    return (
      <section key="Footer">
        <Container>
            <p>Powered  by Gatsby 1.0</p>
        </Container>
      </section>
    );
  }
}
