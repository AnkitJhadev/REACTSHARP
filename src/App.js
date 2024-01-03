import ExpenseItem from "./Components/Expenseitm";
function App() {
  const expenses = [
    {
      id: 1,
      title: "Groceries",
      amount: 50.0,
      date: new Date(2020, 7, 14),
      location: "DELHI",
    },
    {
      id: 2,
      title: "Dinner",
      amount: 30.0,
      date: new Date(2021, 7, 12),
      location: "PUNJA",
    },
    {
      id: 3,
      title: "Movie Tickets",
      amount: 15.0,
      date: new Date(2023, 6, 23),
      location: "KOLKATA",
    },
    {
      id: 4,
      title: "Online Subscription",
      amount: 9.99,
      date: new Date(2019, 7, 16),
      location: "AMRITSAR",
    },
  ];

  // You can then use this array of expenses in your React application as needed.
  return (
  
    <div>
    <h2>LETS GET STARTED</h2>
    {expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location}
      />
    ))}
  </div>
  );
}

export default App;
//check this code figure out why i m unable to render kolkata as location