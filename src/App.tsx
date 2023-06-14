import Form from "./components/Form";
import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      description: "Movie",
      amount: 10.5,
      category: "Entertainment",
    },
    {
      id: 2,
      description: "Dinner",
      amount: 54.67,
      category: "Entertainment",
    },
    {
      id: 3,
      description: "Groceries",
      amount: 160.75,
      category: "Groceries",
    },
    {
      id: 4,
      description: "Electricity bill",
      amount: 170,
      category: "Utilities",
    },
  ]);

  const [filter, setFilter] = useState("");

  const filteredExpenses = filter
    ? list.filter((listItem) => listItem.category === filter)
    : list;

  return (
    <div>
      <div className="mb-5">
        <Form onSubmit={newExpense => setList([...list, {...newExpense, id: list.length + 1}])}/>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelect={(category) => setFilter(category)} />
      </div>
      <ExpenseList
        expenses={filteredExpenses}
        onDelete={(id) =>
          setList(list.filter((listItem) => listItem.id !== id))
        }
      ></ExpenseList>
    </div>
  );
}

export default App;
