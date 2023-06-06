import { useState } from "react";
import Form from "./Components/Form";
import ExpenseList from "./expense-tracker/Components/ExpenseList";
import ExpenseFilter from "./expense-tracker/Components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/Components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", price: 10, category: "Utilites" },
    { id: 2, description: "bbb", price: 10, category: "Utilites" },
    { id: 3, description: "ccc", price: 10, category: "Utilites" },
    { id: 4, description: "ddd", price: 10, category: "Utilites" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
