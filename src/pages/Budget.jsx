import { useBudget } from "../hooks/useBudget";
import { useState } from "react";
import "../styles/budget.css";

export default function Budget() {
  const { budget, setBudget } = useBudget();
  const [input, setInput] = useState(budget);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = Number(input);

    if (value < 0 || isNaN(value)) {
      alert("Please enter a valid budget amount");
      return;
    }

    setBudget(value);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="budget-page">
      <h1>💳 Monthly Budget</h1>

      <div className="budget-form">
        <label>Enter Monthly Budget (₹)</label>

        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. 15000"
        />

        <button onClick={handleSubmit}>
          {saved ? '✅ Saved!' : '💾 Save Budget'}
        </button>
      </div>

      <p className="current-budget">
        Current Monthly Budget
        <strong>₹{budget.toLocaleString()}</strong>
      </p>
    </div>
  );
}