import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const Nav = () => (
  <nav>
    <NavLink to="/" activeClassName="isActive" exact={true}>
      Dashboard
    </NavLink>{" "}
    |&nbsp;
    <NavLink to="/help" activeClassName="isActive">
      Help
    </NavLink>{" "}
    |&nbsp;
    <NavLink to="/createExpense" activeClassName="isActive">
      create expense
    </NavLink>{" "}
  </nav>
);

export default Nav;
