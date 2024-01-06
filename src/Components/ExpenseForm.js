import "./ExpenseForm.css";
import React,{useState} from "react";
function ExpenseForm() {

  const [enteredTitle,setEnteredTitle]=useState('')
    const titleHandler = (event) =>{
            setEnteredTitle(event.target.value);
    }

    const [enteredAmount,setEnteredAmount] = useState('');

    const amountHandler = (event) =>{
         setEnteredAmount(event.target.value)
    }

    const [enteredDate,setenteredDate] = useState('');

    const dateHandler = (event) =>{
        setenteredDate(event.target.value);
    }
  
    const SubmitEvent = () => {
      // Accessing the values from the component's state
      const submittedTitle = enteredTitle;
      const submittedAmount = enteredAmount;
      const submittedDate = new Date(enteredDate);
  
      // Creating an object with the extracted values
      const formData = {
          title: submittedTitle,
          amount: submittedAmount,
          date: submittedDate
      };
  
      // Logging the object containing the form data
      console.log(formData);
  }
  
  return (
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>TITLE</label>
        <input type="text" onChange={titleHandler}/>
      </div>
      <div className="new-expense__control">
        <label>AMOUNT</label>
        <input type="number" onChange={amountHandler}/>
      </div>
      <div className="new-expense__control">
        <label>DATE</label>
        <input type="text" onChange={dateHandler}/>
      </div>
      <div className="new-expense__actions">

        <button onClick={SubmitEvent}>SUBMIT</button>
      </div>
    </div>
  );
}

export default ExpenseForm;
