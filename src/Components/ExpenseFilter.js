// ExpenseFilter.js
import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div id="expenseFilterContainer">
      <label>Filter By Year </label>
      <select value={props.selected} onChange={dropDownChangeHandler}>
        <option value="2023">2023</option>

        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
