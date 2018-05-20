export default (expenses, { text, sortBy, startDate, endDate }) => {
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
