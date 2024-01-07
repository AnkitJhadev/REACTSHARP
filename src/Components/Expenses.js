import "./Expenses.css";
import Card from "./Cards";
import Expenseitem from './Expenseitem'
function Expenses(props) {
  return (
    <Card className="class-item">
    
      {/* <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div> */}
        {props.items.map((expense) => (
      <Expenseitem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}

    </Card>
  );
}

export default Expenses;
