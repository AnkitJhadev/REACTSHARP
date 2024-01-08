import "./ExpenseForm.css";
import React, { useState } from "react";
function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setenteredDate] = useState("");

  const dateHandler = (event) => {
    setenteredDate(event.target.value);
  };

  const SubmitEvent = (event) => {
    event.preventDefault();
    // Accessing the values from the component's state
    const submittedTitle = enteredTitle;
    const submittedAmount = enteredAmount;
    const submittedDate = new Date(enteredDate);

    // Creating an object with the extracted values
    const formData = {
      title: submittedTitle,
      amount: submittedAmount,
      date: submittedDate,
    };

    props.onSum(formData);
    console.log(formData);

    setEnteredTitle('')
    setEnteredAmount('');
    setenteredDate ('');

    console.log(enteredTitle);
    // Logging the object containing the form data
  };

  return (
    <form onSubmit={SubmitEvent}>    
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>TITLE</label>
        <input type="text" value={enteredTitle} onChange={titleHandler} />
      </div>
      <div className="new-expense__control">
        <label>AMOUNT</label>
        <input type="number" value={enteredAmount} onChange={amountHandler} />
      </div>
      <div className="new-expense__control">
        <label>DATE</label>
        <input type="date" value={enteredDate} onChange={dateHandler} />
      </div>
      <div className="new-expense__actions">
        <button>SUBMIT</button>
      </div>
    </div>
    </form>
  );
}

export default ExpenseForm;
