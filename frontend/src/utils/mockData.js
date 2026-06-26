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

export const EXPENSE_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'food', label: 'Food', icon: 'restaurant' },
  { id: 'travel', label: 'Travel', icon: 'train' },
  { id: 'bills', label: 'Bills', icon: 'receipt_long' },
  { id: 'shopping', label: 'Shopping', icon: 'shopping_bag' },
  { id: 'entertainment', label: 'Entertainment', icon: 'movie' },
];

export const MOCK_EXPENSES = [
  {
    id: 'exp-1',
    title: 'Blueberry Cafe',
    category: 'food',
    categoryLabel: 'Food & Drink',
    icon: 'restaurant',
    amount: -245.5,
    date: 'Today, 2:45 PM',
    status: 'Completed',
    group: 'Today',
  },
  {
    id: 'exp-2',
    title: 'Metropolitan Transit',
    category: 'travel',
    categoryLabel: 'Travel',
    icon: 'train',
    amount: -57.5,
    date: 'Today, 8:12 AM',
    status: 'Completed',
    group: 'Today',
  },
  {
    id: 'exp-3',
    title: 'Electric Co. Monthly',
    category: 'bills',
    categoryLabel: 'Bills',
    icon: 'receipt_long',
    amount: -1420.0,
    date: 'Yesterday, 11:30 PM',
    status: 'Pending',
    group: 'Yesterday',
  },
  {
    id: 'exp-4',
    title: 'Urban Threads',
    category: 'shopping',
    categoryLabel: 'Shopping',
    icon: 'shopping_bag',
    amount: -899.99,
    date: 'Yesterday, 5:15 PM',
    status: 'Completed',
    group: 'Yesterday',
  },
  {
    id: 'exp-5',
    title: 'Interest Credit',
    category: 'income',
    categoryLabel: 'Income',
    icon: 'savings',
    amount: 124.5,
    date: 'Yesterday, 1:00 AM',
    status: 'Completed',
    group: 'Yesterday',
  },
];

export const EXPENSE_FORM_CATEGORIES = [
  { id: 'shopping', label: 'Shopping', icon: 'shopping_cart' },
  { id: 'dining', label: 'Dining', icon: 'restaurant' },
  { id: 'transport', label: 'Transport', icon: 'directions_car' },
  { id: 'bills', label: 'Bills', icon: 'home' },
  { id: 'movies', label: 'Movies', icon: 'movie' },
  { id: 'health', label: 'Health', icon: 'health_and_safety' },
  { id: 'travel', label: 'Travel', icon: 'flight' },
];

export const MOCK_REQUESTS_SENT = [
  {
    id: 'req-sent-1',
    name: 'Elena Rodriguez',
    note: 'Office Lunch',
    amount: 245.5,
    status: 'PENDING',
  },
  {
    id: 'req-sent-2',
    name: 'Marcus Chen',
    note: 'Movie Night Tickets',
    amount: 150.0,
    status: 'PENDING',
  },
  {
    id: 'req-sent-3',
    name: 'Sarah Jenkins',
    note: 'Shared Utilities',
    amount: 1128.0,
    status: 'PAID',
  },
  {
    id: 'req-sent-4',
    name: 'David Wilson',
    note: 'Workshop Fee',
    amount: 450.0,
    status: 'PAID',
  },
];

export const MOCK_REQUESTS_RECEIVED = [
  {
    id: 'req-recv-1',
    name: 'Sarah Jenkins',
    note: 'Dinner at Omakase',
    amount: 425.0,
    timeAgo: '2h ago',
    status: 'PENDING',
  },
  {
    id: 'req-recv-2',
    name: 'Robert Chen',
    note: 'Shared Uber ride',
    amount: 189.0,
    timeAgo: 'Yesterday',
    status: 'PENDING',
  },
  {
    id: 'req-recv-3',
    name: 'Alex Rivera',
    note: 'Paid',
    amount: 1200.0,
    timeAgo: '3d ago',
    status: 'PAID',
  },
  {
    id: 'req-recv-4',
    name: 'Elena Vance',
    note: 'Declined',
    amount: 150.0,
    timeAgo: '1w ago',
    status: 'DECLINED',
  },
];

export const MOCK_CONTACTS = [
  { id: 'contact-1', name: 'Alex' },
  { id: 'contact-2', name: 'Jordan' },
  { id: 'contact-3', name: 'Mia' },
  { id: 'contact-4', name: 'David' },
];

export const REQUEST_CATEGORIES = ['GENERAL', 'DINING', 'UTILITIES', 'RENT'];