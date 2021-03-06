import * as React from "react";
import { GatsbyLinkProps } from "gatsby-link";

export interface MenuItem {
  name: string;
  path: string;
  exact: boolean;
  active: boolean;
  icon?: string;
  inverted?: boolean;
  items?: MenuItem[];
}

export interface MenuProps extends React.HTMLProps<HTMLDivElement> {
  items: MenuItem[];
  pathname: string;
  Link: React.ComponentClass<GatsbyLinkProps> | any;
}
