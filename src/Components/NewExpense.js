import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const formHandler = (data) =>{
     
    const obj = {
      ...data,
       id : Math.random
    }
    console.log(obj)
    props.onReq(obj);
  }
  return <div className="new-expense">
    <ExpenseForm onSum = {formHandler}/>
  </div>;
}

export default NewExpense;
