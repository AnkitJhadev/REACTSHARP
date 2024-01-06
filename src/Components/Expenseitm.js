import React, { useState } from "react";
import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Expenses from "./Expenses";
import Card from "./Cards";

function ExpenseItem(props) {
  
  const [title,setTitle]  = useState(props.title)
  const clickEvent = () => {
    setTitle('upDated');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <Expenses title={title} amount={props.amount} />

      <button onClick={clickEvent}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
