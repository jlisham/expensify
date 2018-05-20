import { createStore } from "redux";

//logging changes to the state/store

// const add = ({ a, b }) => {
//   return a + b;
// };

// console.log(add({ a: 1, b: 12 }));

const inc = ({ incrementBy = 1 }) => ({
  type: "INCREMENT",
  incrementBy
});

const dec = ({ decrementBy = 1 }) => ({
  type: "DECREMENT",
  decrementBy
});

const reset = ({ count = 0 }) => ({
  type: "RESET"
});

const setVal = ({ count }) => ({
  type: "SET",
  count
});

const cntReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
    case "DECREMENT":
      return { count: state.count - action.decrementBy };
    case "RESET":
      return { count: 0 };
    case "SET":
      return { count: action.count };
    default:
      return state;
  }
};

const store = createStore(cntReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(inc({ incrementBy: 3 }));
store.dispatch(dec({ decrementBy: 1 }));
// unsubscribe();
store.dispatch(reset({}));
store.dispatch(setVal({ count: 25 }));

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

// store.dispatch({
//   type: "INCREMENT"
// });

// store.dispatch({
//   type: "RESET"
// });

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 3
// });

// store.dispatch({
//   type: "SET",
//   count: 25
// });
