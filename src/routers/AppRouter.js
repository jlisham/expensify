import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Index from "./../components/Index";
import CreateExpense from "./../components/CreateExpense";
import Edit from "./../components/Edit";
import Help from "./../components/Help";
import NotFound from "./../components/NotFound";

const AppRouter = () => (
  <BrowserRouter>
    <main>
      <Header />
      <Switch>
        <Route path="/" component={Index} exact={true} />
        <Route path="/createExpense" component={CreateExpense} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </main>
  </BrowserRouter>
);

export default AppRouter;
