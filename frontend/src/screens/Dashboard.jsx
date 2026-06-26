import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/common/BottomNav';
import ExpenseCard from '../components/expenses/ExpenseCard';
import { formatCurrency } from '../utils/formatCurrency';
import { MOCK_SUMMARY, MOCK_TRANSACTIONS } from '../utils/mockData';

const QUICK_ACTIONS = [
  { icon: 'send', label: 'Send', to: '/requests/new' },
  { icon: 'payments', label: 'Bills', to: '/expenses/new' },
  { icon: 'receipt_long', label: 'History', to: '/expenses' },
  { icon: 'more_horiz', label: 'More', to: '/profile' },
];

// Dashboard / Home screen
// TODO: replace MOCK_SUMMARY / MOCK_TRANSACTIONS with useExpenses() hook once backend is ready
const Dashboard = () => {
  const navigate = useNavigate();
  const { totalBalance, monthlySpend, budgetLeft } = MOCK_SUMMARY;

  return (
    <div className="screen screen-dashboard min-h-screen flex flex-col bg-background text-on-surface pb-32">
      {/* Top App Bar */}
      <header className="w-full top-0 sticky z-40 bg-surface flex justify-between items-center px-container-margin py-stack-gap-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">wallet</span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight">
            WalletWise
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors active:scale-95">
            <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
          </button>
          <button
            onClick={() => navigate('/profile')}
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary-fixed bg-surface-container active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-primary text-[20px]">person</span>
          </button>
        </div>
      </header>

      <main className="flex-1 px-container-margin py-stack-gap-lg">
        {/* Summary Card */}
        <section>
          <div className="relative overflow-hidden bg-primary-container rounded-xl p-card-padding shadow-[0_4px_12px_rgba(26,83,92,0.08)] text-on-primary">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="font-label-caps text-label-caps text-on-primary-container/80 uppercase mb-1">
                    Total Balance
                  </p>
                  <h2 className="font-display-amount text-display-amount text-on-primary">
                    {formatCurrency(totalBalance).replace('+', '')}
                  </h2>
                </div>
                <span className="material-symbols-outlined text-on-primary-container bg-surface-container-highest/20 p-2 rounded-lg">
                  trending_up
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-on-primary-container/20">
                <div>
                  <p className="font-label-caps text-label-caps text-on-primary-container/80 uppercase mb-1">
                    Monthly Spend
                  </p>
                  <p className="font-headline-md text-headline-md text-on-primary">
                    {formatCurrency(-monthlySpend).replace('-', '')}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-label-caps text-label-caps text-on-primary-container/80 uppercase mb-1">
                    Budget Left
                  </p>
                  <p className="font-headline-md text-headline-md text-secondary-fixed-dim">
                    {formatCurrency(budgetLeft).replace('+', '')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mt-section-margin">
          <h3 className="font-headline-md text-headline-md text-on-background mb-stack-gap-md">
            Quick Actions
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {QUICK_ACTIONS.map(({ icon, label, to }) => (
              <button
                key={label}
                onClick={() => navigate(to)}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-14 h-14 bg-surface-container-lowest rounded-2xl flex items-center justify-center shadow-sm group-active:scale-90 transition-all text-primary">
                  <span className="material-symbols-outlined">{icon}</span>
                </div>
                <span className="font-label-caps text-[10px] text-on-surface-variant">{label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mt-section-margin">
          <div className="flex items-center justify-between mb-stack-gap-md">
            <h3 className="font-headline-md text-headline-md text-on-background">Recent Activity</h3>
            <button
              onClick={() => navigate('/expenses')}
              className="text-primary font-label-caps text-label-caps hover:underline"
            >
              View All
            </button>
          </div>
          <div className="space-y-3">
            {MOCK_TRANSACTIONS.map((txn) => (
              <ExpenseCard key={txn.id} expense={txn} />
            ))}
          </div>
        </section>
      </main>

      {/* FAB */}
      <button
        onClick={() => navigate('/expenses/new')}
        className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-all z-50"
      >
        <span className="material-symbols-outlined text-[32px]">add</span>
      </button>

      <BottomNav />
    </div>
  );
};

export default Dashboard;