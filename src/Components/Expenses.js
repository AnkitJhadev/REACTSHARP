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

  return (
    <Card className="class-item">
    
       <ExpenseFilter selected ={filteredYear} onChangeFilter = {filterChange}/>
        {props.items.map((expense) => (
      <Expenseitem
      
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}

    </Card>
  );
}

export default Expenses;
