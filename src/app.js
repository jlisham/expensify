import React from "react";
import ReactDOM from "react-dom";
import Moment from "moment";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configStore from "./store/config";
import { addExpense } from "./actions/expenses";
import { filterText, sortbyAmount } from "./actions/filters";
import returnFilteredData from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configStore();

const expenseOne = store.dispatch(
  addExpense({ description: "groceries", amount: 100, createdAt: 1000444400 })
);
const expenseTwo = store.dispatch(
  addExpense({
    description: "electric bill",
    amount: 50000,
    createdAt: -789900009
  })
);

const expenseThree = store.dispatch(
  addExpense({ description: "water bill", amount: 1000, createdAt: 1318787645 })
);

// store.dispatch(sortbyAmount());

// setTimeout(() => {
//   store.dispatch(filterText("water"));
// }, 3000);

store.subscribe(() => {
  const state = store.getState();
  const expenseList = returnFilteredData(state.expenses, state.filters);
  // console.log(store.getState());
  // console.log(expenseList);
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
