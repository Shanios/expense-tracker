import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {

  // ✅ function must be here
  const toggleTheme = () => {
    const current =
      document.documentElement.getAttribute("data-theme");

    document.documentElement.setAttribute(
      "data-theme",
      current === "dark" ? "light" : "dark"
    );
  };

  return (
    <nav className="navbar">
      <h2 className="logo">ExpenseTracker</h2>

      <div className="nav-links">
        <NavLink to="/" end className="nav-item">
          Dashboard
        </NavLink>

        <NavLink to="/expenses" className="nav-item">
          Expenses
        </NavLink>

        <NavLink to="/budget" className="nav-item">
          Budget
        </NavLink>

        {/* Dark mode toggle */}
        <button className="theme-btn" onClick={toggleTheme}>
          🌙
        </button>
      </div>
    </nav>
  );
}
