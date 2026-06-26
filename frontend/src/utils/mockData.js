// Mock data used across screens until the backend is wired up.
// TODO: remove once real API integration is in place.

export const MOCK_USER = {
  id: 'user-1',
  name: 'Jordan Henderson',
  email: 'jordan.h@fintech-design.com',
  avatarUrl: '',
};

export const MOCK_CREDENTIALS = {
  email: 'jordan.h@fintech-design.com',
  password: 'password123',
};

export const MOCK_SUMMARY = {
  totalBalance: 12450.8,
  monthlySpend: 3240.15,
  budgetLeft: 1759.85,
};

export const MOCK_TRANSACTIONS = [
  {
    id: 'txn-1',
    title: 'Whole Foods Market',
    category: 'Groceries',
    icon: 'restaurant',
    amount: -84.2,
    date: 'Today, 2:45 PM',
  },
  {
    id: 'txn-2',
    title: 'Uber Trip',
    category: 'Transport',
    icon: 'commute',
    amount: -24.5,
    date: 'Yesterday, 11:30 PM',
  },
  {
    id: 'txn-3',
    title: 'Salary Deposit',
    category: 'Income',
    icon: 'download',
    amount: 4200.0,
    date: 'Oct 24, 9:00 AM',
  },
  {
    id: 'txn-4',
    title: 'Equinox Gym',
    category: 'Health',
    icon: 'fitness_center',
    amount: -150.0,
    date: 'Oct 23, 6:00 PM',
  },
];