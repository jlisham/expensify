import uuid from "uuid";

export const addExpense = ({
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

export const updateExpense = (id, updates) => ({
  type: "UPDATE_EXPENSE",
  id,
  updates
});

export const removeExpense = ({ id } = {}) => ({
  type: "DEL_EXPENSE",
  id
});
