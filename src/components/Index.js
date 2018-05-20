import React from "react";
import { Link } from "react-router-dom";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";

const Index = () => (
  <section>
    <h1>Home</h1>
    <ExpenseListFilter />
    <ExpenseList />
  </section>
);

export default Index;
