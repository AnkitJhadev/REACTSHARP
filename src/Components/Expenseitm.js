import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Expenses from "./Expenses";
import Card from "./Cards";
function ExpenseItem(props) {


  return (
    <Card className="expense-item">
    
    <ExpenseDate date = {props.date}/>
   
      <Expenses title = {props.title} amount = {props.amount}/>
      
    </Card>
  );
}

export default ExpenseItem;
