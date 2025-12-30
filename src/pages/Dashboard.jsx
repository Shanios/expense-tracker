import { useExpenses } from "../hooks/useExpenses";
import { useBudget } from "../hooks/useBudget";
import {
  getTotalSpent,
  getRemainingBudget,
  getPercentageUsed,
  groupByCategory
} from "../utils/calculations";
import PieChartView from "../components/PieChartView";
import BarChartView from "../components/BarChartView";
import { useState, useEffect } from "react";
import "../styles/dashboard.css";

// Category Emojis
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

export default function Dashboard() {
  const { expenses } = useExpenses();
  const { budget } = useBudget();
  const [celebrations, setCelebrations] = useState([]);

  const totalSpent = getTotalSpent(expenses);
  const remaining = getRemainingBudget(budget, totalSpent);
  const percentUsed = getPercentageUsed(budget, totalSpent);
  const categoryData = groupByCategory(expenses);

  // Celebration effect when under budget
  useEffect(() => {
    if (remaining > 0 && remaining > budget * 0.1) {
      triggerCelebration();
    }
  }, [remaining]);

  const triggerCelebration = () => {
    const emojis = ["🎉", "🌟", "✨", "💚", "🎊"];
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const id = Math.random();
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        setCelebrations(prev => [...prev, { id, emoji }]);
        
        setTimeout(() => {
          setCelebrations(prev => prev.filter(c => c.id !== id));
        }, 1500);
      }, i * 100);
    }
  };

  const progressPercentage = Math.min(percentUsed, 100);

  return (
    <div className="dashboard">
      <h1>💰 Dashboard</h1>

      {/* Summary Cards */}
      <div className="summary-grid">
        <div className="card">
          <h3>Budget</h3>
          <p>₹{budget.toLocaleString()}</p>
        </div>

        <div className="card">
          <h3>Total Spent</h3>
          <p>₹{totalSpent.toLocaleString()}</p>
        </div>

        <div className={`card ${remaining < 0 ? "danger" : ""}`}>
          <h3>Remaining</h3>
          <p>₹{remaining.toLocaleString()}</p>
        </div>

        <div className="card">
          <h3>Used</h3>
          <p>{percentUsed}%</p>
          <div className="progress-bar">
            <div 
              className={`progress-fill ${
                percentUsed > 100 ? 'danger' : 
                percentUsed > 80 ? 'warning' : ''
              }`}
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Charts */}
      {expenses.length > 0 && (
        <div className="charts">
          <PieChartView data={categoryData} />
          <BarChartView data={categoryData} />
        </div>
      )}

      {/* Celebration Animations */}
      {celebrations.map(c => (
        <div 
          key={c.id} 
          className="celebration"
          style={{
            '--tx': `${Math.random() * 200 - 100}px`,
            '--ty': `${Math.random() * 300 - 150}px`
          }}
        >
          {c.emoji}
        </div>
      ))}

      {expenses.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '60px', opacity: 0.6 }}>
          <p style={{ fontSize: '18px' }}>📊 No expenses yet. Add one to see your dashboard!</p>
        </div>
      )}
    </div>
  );
}
