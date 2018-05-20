import { createStore, combineReducers } from "redux";
import uuid from "uuid";
let cnt = 0;

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const updateExpense = (id, updates) => ({
  type: "UPDATE_EXPENSE",
  id,
  updates
});

const removeExpense = ({ id } = {}) => ({
  type: "DEL_EXPENSE",
  id
});

const filterText = (text = "") => ({
  type: "TEXT_FILTER",
  text
});

const sortbyAmount = (sortBy = "amount") => ({
  type: "SORTBY_AMOUNT",
  sortBy
});

const sortbyDate = (sortBy = "date") => ({
  type: "SORTBY_DATE",
  sortBy
});

const setDates = (startDate, endDate) => ({
  type: "SET_DATES",
  startDate,
  endDate
});

const expenseDefault = [];

const expensesRedux = (state = expenseDefault, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "DEL_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "UPDATE_EXPENSE":
      return state.map(({ id }) => {
        id === action.id ? { ...state, ...action.updates } : state;
      });
    default:
      return state;
  }
};

const filterDefault = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersRedux = (state = filterDefault, action) => {
  switch (action.type) {
    case "TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORTBY_AMOUNT":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SORTBY_DATE":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SET_DATES":
      return {
        ...state,
        startDate: action.startDate,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

const returnFilteredData = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const start =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const end = typeof endDate !== "number" || expense.createdAt <= endDate;
      const filtered = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return start && end && filtered;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

const store = createStore(
  combineReducers({
    expenses: expensesRedux,
    filters: filtersRedux
  })
);

store.subscribe(() => {
  const state = store.getState();
  const filteredData = returnFilteredData(state.expenses, state.filters);
  // console.log(store.getState());
  console.log(filteredData);
});

const expenseThree = store.dispatch(
  addExpense({ description: "coffee", amount: 1000, createdAt: 150 })
);

const expenseTwo = store.dispatch(
  addExpense({ description: "lunch", amount: 10, createdAt: 10 })
);

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 100, createdAt: 1000 })
);

// store.dispatch(filterText("n"));
store.dispatch(sortbyAmount());
// store.dispatch(filterText());
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(updateExpense(expenseTwo.expense.id, { amount: 400 }));
store.dispatch(sortbyAmount());
// store.dispatch(sortbyDate());

// store.dispatch(setDates(20, 170));

// const demoState = {
//   expenses: [
//     {
//       id: "4kjl3",
//       description: "rent",
//       note: "final month",
//       amount: 54870,
//       createdAt: 0
//     }
//   ],
//   filters: {
//     text: "rent",
//     sortBy: "amount",
//     startDate: undefined,
//     endDate: undefined
//   }
// };

// const user = {
//   name: "tperson",
//   age: 21
// };
// console.log({ ...user, location: "anytown", age: 50 });
