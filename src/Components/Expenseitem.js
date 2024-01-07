// ExpenseItem.js
import React, { useState } from "react";
import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Cards";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickEvent = () => {
    setTitle('upDated');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickEvent}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
