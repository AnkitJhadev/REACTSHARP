import "./Expenses.css";
import Card from "./Cards";
import Expenseitem from './Expenseitem'
import ExpenseFilter from './ExpenseFilter';
import { useState } from "react";
function Expenses(props) {

  const [filteredYear,setFilteredYear] = useState('2019')
   
  const filterChange = (selectedYear) => {
     setFilteredYear(selectedYear)
  }

  const filteredExpense = props.items.filter((expense) =>{
          return expense.date.getFullYear().toString() === filteredYear ;
  })

  return (
    <Card className="class-item">
    
       <ExpenseFilter selected ={filteredYear} onChangeFilter = {filterChange}/>
       {filteredExpense.length === 0 ? <p className="para">NO EXPENSE FOUND</p> : filteredExpense.map((expense) => (
      <Expenseitem
        key ={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))} 
  

    </Card>
  );
}

export default Expenses;
