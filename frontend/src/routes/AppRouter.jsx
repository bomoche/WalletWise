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
