import React from "react";
import { connect } from "react-redux";
import {
  filterText,
  sortbyDate,
  sortbyAmount,
  sortby
} from "../actions/filters";

const ExpenseListFilter = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => {
        props.dispatch(filterText(e.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={e => {
        props.dispatch(sortby(e.target.value));
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
      <option value="description">Description</option>
    </select>
  </div>
);

const MapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(MapStateToProps)(ExpenseListFilter);
