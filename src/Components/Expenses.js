import "./Expenses.css";
import Card from "./Cards";
function Expenses(props) {
  const title = props.title;
  const amount = props.amount;
  return (
    <Card className="class-item">
    
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
}

export default Expenses;
