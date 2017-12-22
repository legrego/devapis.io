import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleSidebar } from "../../store";
import { MenuProps } from "../Menu";
import HeaderMenuItem from "./MenuItem";
import Container from "../Layout/Container";

interface HeaderMenuProps extends MenuProps {
  dispatch: Dispatch<any>;
  inverted?: boolean;
}

interface HeaderMenuState {
  isBurgerActive: boolean;
}

export class HeaderMenu extends React.PureComponent<HeaderMenuProps, HeaderMenuState> {
  constructor(props: HeaderMenuProps) {
    super(props);
    this.state = {
      isBurgerActive: false
    };
  }

  public render() {
    const {items, pathname} = this.props;

    return (
      <Container className="header-menu" isFluid={true}>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href={`/`}>
              <img src={`/images/devapis-logo-menu-sm.png`} width={`25px`} alt="DevAPIs.io" />
            </a>
            <button
              onClick={() => {this.setState({isBurgerActive: !this.state.isBurgerActive}); }}
              className={`button navbar-burger ${this.state.isBurgerActive ? "is-active" : ""}`} >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className={`navbar-menu ${this.state.isBurgerActive ? "is-active" : ""}`}>
            <div className="navbar-start">
              {items.map((item, idx) => {
                const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
                return (
                  <HeaderMenuItem key={idx} active={active} {...item} />
                );
              })}
            </div>
          </div>
        </nav>
      </Container>
    );
  }
}
export default connect()(HeaderMenu);
