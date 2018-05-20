const expenseDefault = [];

export default (state = expenseDefault, action) => {
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
