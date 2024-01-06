import "./ExpenseForm.css";

function ExpenseForm() {
    const titleHandler = (event) =>{
            console.log(event.target.value)
    }
    const handleSu = (event) =>{
        console.log(event.target.value)

    }
  return (
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>TITLE</label>
        <input type="text" onChange={titleHandler}/>
      </div>
      <div className="new-expense__control">
        <label>AMOUNT</label>
        <input type="number" />
      </div>
      <div className="new-expense__control">
        <label>DATE</label>
        <input type="text" />
      </div>
      <div className="new-expense__actions">

        <button onClick={handleSu}>SUBMIT</button>
      </div>
    </div>
  );
}

export default ExpenseForm;
