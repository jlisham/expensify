import { createStore, combineReducers } from "redux";
import expensesRedux from "../reducers/expenses";
import filtersRedux from "../reducers/filters";

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesRedux,
      filters: filtersRedux
    })
  );
  return store;
};
