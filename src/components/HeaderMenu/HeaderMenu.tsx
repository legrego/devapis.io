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

export const HeaderMenu = ({ items, pathname, Link, inverted, dispatch }: HeaderMenuProps) =>
  <Container className="header-menu" isFluid={true}>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href={`/index.html`}>
          <img src={`/images/devapis-logo-menu-sm.png`} width={`25px`} alt="DevAPIs.io" />
        </a>
        <button className="button navbar-burger">
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="navbar-menu">
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
  </Container>;

export default connect()(HeaderMenu);
