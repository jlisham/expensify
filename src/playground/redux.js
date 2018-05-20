import { createStore } from "redux";

//logging changes to the state/store

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return { count: state.count + incBy };
    case "DECREMENT":
      const decBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return { count: state.count - decBy };
    case "RESET":
      return { count: 0 };
    case "SET":
      return {
        count: action.count
      };
    default:
      return state;
  }
});

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "INCREMENT",
  incrementBy: 5
});
store.dispatch({
  type: "INCREMENT"
});

// unsubscribe();

store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 3
});

store.dispatch({
  type: "SET",
  count: 25
});
