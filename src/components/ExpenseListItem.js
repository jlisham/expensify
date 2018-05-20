import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3>
      {description}
      &nbsp;&nbsp;<button
        onClick={e => {
          dispatch(removeExpense({ id }));
        }}
      >
        X
      </button>
    </h3>
    <p>
      ${amount.toFixed(2) / 100} on{" "}
      {moment.unix(createdAt).format("MMM Do, YYYY h:mm:ss A")}
    </p>
  </div>
);

export default connect()(ExpenseListItem);
