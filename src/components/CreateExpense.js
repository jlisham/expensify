import React from "react";

export default class ExpenseForm extends React.Component {
  state = {
    description: "",
    note: "",
    amount: ""
  };
  onInputChange = e => {
    const fieldName = e.target.name;
    const fieldVal = e.target.value;
    if (e.target.type !== "number" || fieldVal.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ [fieldName]: fieldVal }));
    }
  };
  render() {
    return (
      <section>
        <form>
          <input
            name="description"
            type="description"
            placeholder="description"
            value={this.state.description}
            autoFocus
            onChange={this.onInputChange}
          />
          <input
            name="amount"
            type="number"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onInputChange}
          />
          <textarea
            name="note"
            placeholder="expense memo"
            value={this.state.note}
            onChange={this.onInputChange}
          />
          <button>Add Expense</button>
        </form>
      </section>
    );
  }
}
