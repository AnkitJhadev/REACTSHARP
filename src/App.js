import { useState } from "react";
import NewExpense from "./Components/NewExpense";
import Expenses from "./Components/Expenses";

const Dummyexpenses = [

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
  

  
];

function App() {
  const [expenses, setExpenses] = useState(Dummyexpenses);

  const takeData = (data) => {
    // Update the state correctly by spreading the existing expenses and adding the new one
    setExpenses((prevExpenses) => [...prevExpenses, data]);
  };

  return (
    <div>
      <NewExpense onReq={takeData} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
