import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/common/BottomNav';
import ExpenseCard from '../../components/expenses/ExpenseCard';
import { EXPENSE_CATEGORIES, MOCK_EXPENSES } from '../../utils/mockData';

// Expenses list screen
// TODO: replace MOCK_EXPENSES with useExpenses() hook once backend is ready
const ExpensesList = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExpenses = useMemo(() => {
    return MOCK_EXPENSES.filter((expense) => {
      const matchesCategory =
        activeCategory === 'all' || expense.category === activeCategory;
      const matchesSearch = expense.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const groupedExpenses = useMemo(() => {
    return filteredExpenses.reduce((groups, expense) => {
      const group = expense.group || 'Earlier';
      if (!groups[group]) groups[group] = [];
      groups[group].push(expense);
      return groups;
    }, {});
  }, [filteredExpenses]);

  return (
    <div className="screen screen-expenses-list min-h-screen bg-background text-on-surface pb-32">
      {/* Top App Bar */}
      <header className="w-full top-0 sticky z-50 bg-surface flex justify-between items-center px-container-margin py-stack-gap-sm">
        <div className="flex items-center gap-stack-gap-sm">
          <button
            onClick={() => navigate('/dashboard')}
            className="material-symbols-outlined text-primary active:scale-95 transition-transform p-2"
          >
            arrow_back
          </button>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
            WalletWise
          </h1>
        </div>
        <button
          onClick={() => navigate('/profile')}
          className="material-symbols-outlined text-primary active:scale-95 transition-transform p-2"
        >
          account_circle
        </button>
      </header>

      <main className="px-container-margin">
        {/* Search Bar */}
        <div className="mt-stack-gap-md relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-outline">search</span>
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search transactions..."
            className="w-full h-12 pl-12 pr-4 rounded-xl border-none bg-surface-container-low text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary transition-all font-body-md"
          />
        </div>

        {/* Filter Chips */}
        <div
          className="mt-stack-gap-lg flex overflow-x-auto gap-stack-gap-sm py-2"
          style={{ scrollbarWidth: 'none' }}
        >
          {EXPENSE_CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`flex-none px-5 py-2 rounded-full font-label-caps active:scale-95 transition-transform ${
                activeCategory === id
                  ? 'bg-primary-container text-on-primary'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grouped Expense List */}
        <div className="mt-stack-gap-lg flex flex-col gap-stack-gap-md">
          {Object.keys(groupedExpenses).length === 0 && (
            <p className="text-center text-on-surface-variant py-stack-gap-lg">
              No transactions found.
            </p>
          )}

          {Object.entries(groupedExpenses).map(([group, expenses]) => (
            <div key={group}>
              <p className="font-label-caps text-label-caps text-outline uppercase tracking-widest mb-stack-gap-sm">
                {group}
              </p>
              <div className="flex flex-col gap-stack-gap-md">
                {expenses.map((expense) => (
                  <ExpenseCard key={expense.id} expense={expense} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FAB */}
      <button
        onClick={() => navigate('/expenses/new')}
        className="fixed bottom-24 right-container-margin w-14 h-14 bg-primary text-on-primary rounded-2xl shadow-xl flex items-center justify-center hover:opacity-90 active:scale-90 transition-all z-40"
      >
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>

      <BottomNav />
    </div>
  );
};

export default ExpensesList;