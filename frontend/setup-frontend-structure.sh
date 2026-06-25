#!/bin/bash
set -e

# Run this from the root of frontend/ (where package.json lives)
echo "Creating folder structure..."

mkdir -p src/components/common src/components/expenses src/components/requests
mkdir -p src/screens/auth src/screens/expenses src/screens/requests src/screens/profile
mkdir -p src/routes src/services src/hooks src/context src/utils src/assets

cd src

# ---- SCREENS ----
cat > screens/auth/Login.jsx << 'EOF'
// Login screen
// TODO: wire up auth form + login service call
const Login = () => {
  return (
    <div className="screen screen-login">
      <h1>Login</h1>
    </div>
  );
};

export default Login;
EOF

cat > screens/auth/Register.jsx << 'EOF'
// Register screen
// TODO: wire up registration form + register service call
const Register = () => {
  return (
    <div className="screen screen-register">
      <h1>Register</h1>
    </div>
  );
};

export default Register;
EOF

cat > screens/Dashboard.jsx << 'EOF'
// Dashboard / Home screen
// TODO: summary card + recent expenses list
const Dashboard = () => {
  return (
    <div className="screen screen-dashboard">
      <h1>Dashboard</h1>
      <div className="bg-primary-container text-on-primary p-card-padding rounded-xl">Test</div>
    </div>
  );
};

export default Dashboard;
EOF

cat > screens/expenses/ExpensesList.jsx << 'EOF'
// Expenses list screen
// TODO: filterable/searchable expense cards
const ExpensesList = () => {
  return (
    <div className="screen screen-expenses-list">
      <h1>Expenses</h1>
    </div>
  );
};

export default ExpensesList;
EOF

cat > screens/expenses/AddEditExpense.jsx << 'EOF'
// Add / Edit expense screen
// TODO: expense form (amount, category, date, notes)
const AddEditExpense = () => {
  return (
    <div className="screen screen-add-edit-expense">
      <h1>Add / Edit Expense</h1>
    </div>
  );
};

export default AddEditExpense;
EOF

cat > screens/requests/RequestsSent.jsx << 'EOF'
// Payment requests sent screen
// TODO: list of sent requests with status badges
const RequestsSent = () => {
  return (
    <div className="screen screen-requests-sent">
      <h1>Requests Sent</h1>
    </div>
  );
};

export default RequestsSent;
EOF

cat > screens/requests/RequestsReceived.jsx << 'EOF'
// Payment requests received screen
// TODO: list of received requests with accept/decline actions
const RequestsReceived = () => {
  return (
    <div className="screen screen-requests-received">
      <h1>Requests Received</h1>
    </div>
  );
};

export default RequestsReceived;
EOF

cat > screens/requests/NewPaymentRequest.jsx << 'EOF'
// New payment request screen
// TODO: recipient select + amount + note form
const NewPaymentRequest = () => {
  return (
    <div className="screen screen-new-payment-request">
      <h1>New Payment Request</h1>
    </div>
  );
};

export default NewPaymentRequest;
EOF

cat > screens/profile/Profile.jsx << 'EOF'
// Profile / settings screen
// TODO: user info + settings list + logout
const Profile = () => {
  return (
    <div className="screen screen-profile">
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;
EOF

# ---- COMMON COMPONENTS ----
cat > components/common/Card.jsx << 'EOF'
// Generic card wrapper used across screens
// TODO: implement shared card styling/props
const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
EOF

cat > components/common/Button.jsx << 'EOF'
// Generic button component
// TODO: variants (primary, secondary, danger)
const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
EOF

cat > components/common/Input.jsx << 'EOF'
// Generic form input component
// TODO: label, error state, icon support
const Input = (props) => {
  return <input {...props} />;
};

export default Input;
EOF

cat > components/common/BottomNav.jsx << 'EOF'
// Bottom tab navigation bar (Home, Expenses, Requests, Profile)
// TODO: active tab highlighting + react-router links
const BottomNav = () => {
  return <nav className="bottom-nav"></nav>;
};

export default BottomNav;
EOF

cat > components/common/StatusBadge.jsx << 'EOF'
// Status badge used on payment request cards (pending/paid/declined)
// TODO: color variants based on status prop
const StatusBadge = ({ status }) => {
  return <span className="status-badge">{status}</span>;
};

export default StatusBadge;
EOF

cat > components/common/ProtectedRoute.jsx << 'EOF'
// Route guard wrapper - redirects unauthenticated users to login
// TODO: hook into AuthContext
const ProtectedRoute = ({ children }) => {
  return children;
};

export default ProtectedRoute;
EOF

# ---- EXPENSE COMPONENTS ----
cat > components/expenses/ExpenseCard.jsx << 'EOF'
// Single expense card (category icon, title, amount, date)
// TODO: receive expense object as prop and render details
const ExpenseCard = ({ expense }) => {
  return <div className="expense-card"></div>;
};

export default ExpenseCard;
EOF

cat > components/expenses/ExpenseSummaryCard.jsx << 'EOF'
// Dashboard summary card (total balance/spend overview)
// TODO: receive summary data as prop
const ExpenseSummaryCard = ({ summary }) => {
  return <div className="expense-summary-card"></div>;
};

export default ExpenseSummaryCard;
EOF

# ---- REQUEST COMPONENTS ----
cat > components/requests/RequestCard.jsx << 'EOF'
// Single payment request card (sent or received)
// TODO: receive request object + variant prop (sent/received)
const RequestCard = ({ request }) => {
  return <div className="request-card"></div>;
};

export default RequestCard;
EOF

# ---- SERVICES ----
cat > services/api.js << 'EOF'
import axios from 'axios';

// Central axios instance pointing to the Spring Boot backend
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
});

// TODO: request interceptor to attach JWT token
// TODO: response interceptor to handle 401s (logout / redirect)

export default api;
EOF

cat > services/authService.js << 'EOF'
// Auth-related API calls
// TODO: login(credentials), register(userData), logout()
EOF

cat > services/expenseService.js << 'EOF'
// Expense-related API calls
// TODO: getExpenses(), getExpenseById(id), createExpense(data), updateExpense(id, data), deleteExpense(id)
EOF

cat > services/requestService.js << 'EOF'
// Payment request API calls
// TODO: getSentRequests(), getReceivedRequests(), createRequest(data), respondToRequest(id, status)
EOF

# ---- HOOKS ----
cat > hooks/useAuth.js << 'EOF'
// Custom hook to access auth state/actions from AuthContext
// TODO: return { user, login, register, logout, isAuthenticated }
EOF

cat > hooks/useExpenses.js << 'EOF'
// Custom hook to fetch/manage expenses state
// TODO: return { expenses, loading, error, refetch }
EOF

cat > hooks/usePaymentRequests.js << 'EOF'
// Custom hook to fetch/manage payment requests (sent/received) state
// TODO: return { sentRequests, receivedRequests, loading, error, refetch }
EOF

# ---- CONTEXT ----
cat > context/AuthContext.jsx << 'EOF'
import { createContext, useContext } from 'react';

// Holds the authenticated user + auth actions, available app-wide
const AuthContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext);

export default AuthContext;
EOF

# ---- UTILS ----
cat > utils/formatCurrency.js << 'EOF'
// Currency formatting helper
// TODO: implement Intl.NumberFormat based formatter
EOF

cat > utils/formatDate.js << 'EOF'
// Date formatting helper
// TODO: implement consistent date display formatting
EOF

cat > utils/constants.js << 'EOF'
// App-wide constants (expense categories, request statuses, etc.)
// TODO: fill in category list, status enums
EOF

# ---- ROUTER ----
cat > routes/AppRouter.jsx << 'EOF'
import { Routes, Route } from 'react-router-dom';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Dashboard from '../screens/Dashboard';
import ExpensesList from '../screens/expenses/ExpensesList';
import AddEditExpense from '../screens/expenses/AddEditExpense';
import RequestsSent from '../screens/requests/RequestsSent';
import RequestsReceived from '../screens/requests/RequestsReceived';
import NewPaymentRequest from '../screens/requests/NewPaymentRequest';
import Profile from '../screens/profile/Profile';
import ProtectedRoute from '../components/common/ProtectedRoute';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/expenses" element={<ProtectedRoute><ExpensesList /></ProtectedRoute>} />
      <Route path="/expenses/new" element={<ProtectedRoute><AddEditExpense /></ProtectedRoute>} />
      <Route path="/expenses/:id/edit" element={<ProtectedRoute><AddEditExpense /></ProtectedRoute>} />
      <Route path="/requests/sent" element={<ProtectedRoute><RequestsSent /></ProtectedRoute>} />
      <Route path="/requests/received" element={<ProtectedRoute><RequestsReceived /></ProtectedRoute>} />
      <Route path="/requests/new" element={<ProtectedRoute><NewPaymentRequest /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRouter;
EOF

# ---- APP.JSX ----
cat > App.jsx << 'EOF'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
EOF

cd ..

echo "Done. Folder structure created."
echo ""
echo "NOTE: this script overwrites src/App.jsx and assumes you already have"
echo "tailwindcss + react-router-dom + axios installed. If react-router-dom or"
echo "axios are missing, run: npm install axios react-router-dom"
