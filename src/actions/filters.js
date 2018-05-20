export const filterText = (text = "") => ({
  type: "TEXT_FILTER",
  text
});

export const sortby = (sortBy = "date") => ({
  type: "SORTBY",
  sortBy
});

export const sortbyAmount = (sortBy = "amount") => ({
  type: "SORTBY_AMOUNT",
  sortBy
});

export const sortbyDate = (sortBy = "date") => ({
  type: "SORTBY_DATE",
  sortBy
});

export const setDates = (startDate, endDate) => ({
  type: "SET_DATES",
  startDate,
  endDate
});
