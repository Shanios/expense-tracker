# 💰 Expense Tracker

A modern, vibrant expense management application built with React. Track your spending, control your budget, and visualize your expenses with beautiful charts and animations.

## 🎨 Features

### Dashboard
- **Summary Cards** - Quick overview of your budget, total spent, remaining balance, and percentage used
- **Animated Progress Bar** - Visual representation of budget usage with color-coded alerts
- **Interactive Charts** - Pie chart and bar chart for spending breakdown by category
- **Celebration Effects** - Emoji animations when you stay under budget! 🎉

### Expense Management
- **Add Expenses** - Easy form to add new expenses with amount, category, date, and description
- **Filter & Search** - Search by description, filter by category, and date range filtering
- **Category Emojis** - Visual emojis and color-coded badges for each category
- **Delete Expenses** - Remove expenses with one click
- **Expense History** - View all your past expenses with details

### Budget Control
- **Set Monthly Budget** - Define your monthly spending limit
- **Real-time Tracking** - Automatic calculation of remaining balance
- **Budget Alerts** - Visual warnings when you're running low or over budget

### User Experience
- **Dark Mode** - Beautiful dark theme with vibrant neon colors (Hot Pink, Cyan, Purple, Emerald, Amber, Rose, Blue, Orange)
- **Light Mode** - Clean light theme for daytime use
- **Smooth Animations** - Slide-in, fade-in, bounce, glow, and count-up animations
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Persistent Data** - Your expenses and budget are saved in localStorage

---

## 🛠️ Tech Stack

- **Frontend Framework:** React.js
- **Charts:** Recharts
- **Icons:** Lucide React
- **Styling:** CSS3 with CSS Variables
- **Routing:** React Router DOM
- **State Management:** React Hooks (useState, useEffect)
- **Storage:** Browser localStorage

---

## 📋 Project Structure

```
expense-tracker/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with theme toggle
│   │   ├── PieChartView.jsx    # Pie chart component
│   │   └── BarChartView.jsx    # Bar chart component
│   ├── pages/
│   │   ├── Dashboard.jsx       # Main dashboard with summary cards
│   │   ├── Expenses.jsx        # Expense management page
│   │   └── Budget.jsx          # Budget configuration page
│   ├── hooks/
│   │   ├── useBudget.js        # Budget state management
│   │   ├── useExpenses.js      # Expenses state management
│   │   └── useLocalStorage.js  # localStorage abstraction
│   ├── utils/
│   │   └── calculations.js     # Business logic calculations
│   ├── styles/
│   │   ├── global.css          # Global styles & theme variables
│   │   ├── navbar.css          # Navbar styling
│   │   ├── dashboard.css       # Dashboard styling
│   │   ├── expenses.css        # Expenses page styling
│   │   └── budget.css          # Budget page styling
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Entry point
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/YOUR-USERNAME/expense-tracker.git
cd expense-tracker
```

2. **Install dependencies:**
```bash
npm install
```

3. **Install required packages:**
```bash
npm install recharts lucide-react
```

4. **Start the development server:**
```bash
npm start
```

5. **Open in browser:**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

---

## 📖 How to Use

### Adding an Expense
1. Go to the **Expenses** page
2. Fill in the amount, select a category, and add a description
3. Choose the date
4. Click **"Add Expense"**

### Setting Your Budget
1. Go to the **Budget** page
2. Enter your monthly budget amount
3. Click **"Save Budget"**

### Viewing Your Dashboard
1. Go to **Dashboard** to see:
   - Total budget and remaining balance
   - Spending breakdown by category (pie chart)
   - Category comparison (bar chart)
   - Animated progress bar

### Filtering Expenses
1. On the **Expenses** page, use filters:
   - Search by description
   - Filter by category
   - Filter by date range

### Switching Themes
- Click the **🌙 moon icon** in the navbar to toggle between light and dark modes

---

## 🎨 Color Scheme

### Dark Mode Vibrant Colors
- **Hot Pink:** `#ec4899` - Primary accent
- **Cyan:** `#06b6d4` - Secondary accent
- **Purple:** `#a78bfa` - Tertiary accent
- **Emerald:** `#34d399` - Success color
- **Amber:** `#fbbf24` - Warning color
- **Rose:** `#f472b6` - Danger color
- **Blue:** `#60a5fa` - Info color
- **Orange:** `#fb923c` - Accent color

---

## ✨ Key Features Explained

### Animated Celebrations
When you keep your spending under budget, celebration emojis (🎉✨🎊💚🌟) pop up and animate across your screen!

### Category Emojis
- 🍔 Food
- 🚗 Transport
- 🎬 Entertainment
- 💡 Utilities
- 🛍️ Shopping
- 💊 Health
- 📚 Education
- 📦 Other

### Smart Alerts
- **Green:** Budget is healthy
- **Yellow/Amber:** Approaching budget limit
- **Red:** Budget exceeded

---

## 🔒 Data Privacy

All your data is stored **locally in your browser** using localStorage. No data is sent to any server. Your financial information stays private on your device.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Push code to GitHub
2. Connect GitHub to Netlify
3. Deploy automatically

### Deploy to Replit
1. Create a Replit account
2. Create new Repl → Import from GitHub
3. Run `npm start`

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

---

## 💡 Future Enhancements

- [ ] Monthly/yearly expense reports
- [ ] Multiple budget categories
- [ ] Recurring expenses
- [ ] Expense notes and attachments
- [ ] Export to CSV/PDF
- [ ] Budget alerts and notifications
- [ ] Spending predictions
- [ ] Multi-user support
- [ ] Cloud synchronization

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

Created with ❤️ for better expense management

---

## 📞 Support

For questions or support, please open an issue on GitHub.

---

## 🙏 Acknowledgments

- React community for amazing tools
- Recharts for beautiful charts
- Lucide React for beautiful icons
- All contributors and users!

---

**Happy Tracking! 💰✨**
