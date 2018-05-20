import React from "react";
import { connect } from "react-redux";
import filteredExpenses from "../selectors/expenses";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = props => (
  <section>
    <h3>Expense List</h3>
    <hr />
    {props.expenses.length === 0 && <em>no expenses yet - add the first!</em>}
    {props.expenses &&
      props.expenses.map(expense => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))}
  </section>
);

const MapStateToProps = state => {
  return {
    expenses: filteredExpenses(state.expenses, state.filters)
  };
};
export default connect(MapStateToProps)(ExpenseList);
