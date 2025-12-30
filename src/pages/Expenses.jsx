import { useState } from "react";
import { useExpenses } from "../hooks/useExpenses";
import "../styles/expenses.css";

const CATEGORIES = [
  "All",
  "Food",
  "Transport",
  "Entertainment",
  "Utilities",
  "Shopping",
  "Health",
  "Education",
  "Other",
];

const CATEGORY_EMOJIS = {
  Food: "🍔",
  Transport: "🚗",
  Entertainment: "🎬",
  Utilities: "💡",
  Shopping: "🛍️",
  Health: "💊",
  Education: "📚",
  Other: "📦"
};

const CATEGORY_COLORS = {
  Food: "#ec4899",
  Transport: "#06b6d4",
  Entertainment: "#a78bfa",
  Utilities: "#fbbf24",
  Shopping: "#34d399",
  Health: "#f472b6",
  Education: "#60a5fa",
  Other: "#fb923c"
};

export default function Expenses() {
  const { expenses, addExpense, deleteExpense } = useExpenses();
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const filteredExpenses = expenses.filter((e) => {
    const matchesSearch =
      e.description?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || e.category === filterCategory;
    const matchesFromDate =
      !fromDate || new Date(e.date) >= new Date(fromDate);
    const matchesToDate =
      !toDate || new Date(e.date) <= new Date(toDate);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesFromDate &&
      matchesToDate
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || amount <= 0) {
      alert("Enter a valid amount");
      return;
    }

    addExpense({
      amount: Number(amount),
      category,
      date,
      description,
    });

    setAmount("");
    setDescription("");
  };

  return (
    <div className="expenses-page">
      <h1>💸 Expenses</h1>

      {/* Add Expense Form */}
      <div className="expense-form">
        <div>
          <label>Amount (₹)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
          />
        </div>

        <div>
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.filter(c => c !== "All").map((c) => (
              <option key={c} value={c}>{CATEGORY_EMOJIS[c]} {c}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Optional..."
          />
        </div>

        <button onClick={handleSubmit}>➕ Add Expense</button>
      </div>

      {/* Filters */}
      <h2 className="list-title">🔍 Filters</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Search description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{CATEGORY_EMOJIS[c]} {c}</option>
          ))}
        </select>

        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />

        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </div>

      {/* Expense List */}
      <h2 className="list-title">📝 Expense History</h2>

      {filteredExpenses.length === 0 ? (
        <p>No matching expenses.</p>
      ) : (
        <ul className="expense-list">
          {filteredExpenses.map((e) => (
            <li key={e.id} className="expense-item">
              <div>
                <span>{CATEGORY_EMOJIS[e.category]}</span>
                <strong>₹{e.amount.toLocaleString()}</strong>
                <span className="category-badge" style={{
                  backgroundColor: CATEGORY_COLORS[e.category]
                }}>
                  {e.category}
                </span>
                <div className="expense-meta">
                  📅 {e.date}
                  {e.description && ` • ${e.description}`}
                </div>
              </div>

              <button
                className="delete-btn"
                onClick={() => deleteExpense(e.id)}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}