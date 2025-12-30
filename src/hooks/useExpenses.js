import { useLocalStorage } from "./useLocalStorage";

export function useExpenses() {
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  const addExpense = (expense) => {
    setExpenses(prev => [
      ...prev,
      { ...expense, id: crypto.randomUUID() }
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses(prev => prev.filter(e => e.id !== id));
  };

  return {
    expenses,
    addExpense,
    deleteExpense
  };
}
