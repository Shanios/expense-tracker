export function getTotalSpent(expenses) {
  return expenses.reduce((sum, e) => sum + e.amount, 0);
}

export function getRemainingBudget(budget, totalSpent) {
  return budget - totalSpent;
}

export function getPercentageUsed(budget, totalSpent) {
  if (budget === 0) return 0;
  return ((totalSpent / budget) * 100).toFixed(1);
}

export function groupByCategory(expenses) {
  const map = {};
  expenses.forEach(e => {
    map[e.category] = (map[e.category] || 0) + e.amount;
  });

  return Object.entries(map).map(([name, value]) => ({
    name,
    value
  }));
}
