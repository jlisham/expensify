const filterDefault = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

export default (state = filterDefault, action) => {
  switch (action.type) {
    case "TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    // case "SORTBY_AMOUNT":
    //   return {
    //     ...state,
    //     sortBy: action.sortBy
    //   };
    // case "SORTBY_DATE":
    //   return {
    //     ...state,
    //     sortBy: action.sortBy
    //   };
    case "SORTBY":
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
