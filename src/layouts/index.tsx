import Link from "gatsby-link";
import * as React from "react";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import Container from "../components/Layout/Container";
import "../scss/styles.scss";
import "prismjs/themes/prism-okaidia.css";
import "font-awesome/css/font-awesome.min.css";

export const menuItems = [
  { name: "Home", path: "/", exact: true, icon: "info circle" },
  { name: "Documentation",
    path: "/docs",
    exact: true,
    icon: "info circle",
    items: [{
      name: "Holiday API",
      path: "/docs/holiday",
      exact: true,
      icon: ""
    }]
  },
  { name: "About", path: "/about/", exact: true, icon: "info circle" }
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
            <hr />
            <nav className="level">
              <p className="level-item">
                <a className="link is-info" href="/index.html">Home</a>
              </p>
              <p className="level-item">
                <a className="link is-info" href="/about">About</a>
              </p>

              <p className="level-item is-hidden-mobile">
                <img
                  src="/images/devapis-logo-menu-sm.png"
                  width="50px"
                  height="50px"
                  alt="DevAPIs Logo"
                  title="DevAPIs.io - A collection of friendly and helpful APIs"
                  />
              </p>

              <p className="level-item">
                <a className="link is-info" href="/privacy">Privacy</a>
              </p>
              <p className="level-item">
                <a className="link is-info" href="/terms">Terms</a>
              </p>
            </nav>
        </Container>
      </section>
    );
  }
}
