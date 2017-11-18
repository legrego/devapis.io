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
          {items.map((item, idx) =>
            <HeaderMenuItem key={idx} {...item} />
          )}
      </div>
    </nav>
  </Container>;

export default connect()(HeaderMenu);
