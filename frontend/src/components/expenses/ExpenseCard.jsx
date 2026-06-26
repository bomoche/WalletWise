import { formatCurrency } from '../../utils/formatCurrency';

// Single transaction/expense row used on Dashboard recent activity + Expenses list
const ExpenseCard = ({ expense, onClick }) => {
  const { title, category, categoryLabel, icon, amount, date, status } = expense;
  const isIncome = amount > 0;

  return (
    <div
      onClick={onClick}
      className="bg-surface-container-lowest rounded-xl p-4 flex items-center gap-4 shadow-[0_4px_12px_rgba(26,83,92,0.04)] active:scale-[0.98] transition-transform cursor-pointer"
    >
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${
          isIncome ? 'bg-secondary-container/20 text-secondary' : 'bg-surface-container-high text-primary'
        }`}
      >
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className="flex-1">
        <h4 className="font-body-lg text-body-lg text-on-surface">{title}</h4>
        <p className="text-on-surface-variant text-xs">{date}</p>
      </div>
      <div className="text-right">
        <p
          className={`font-headline-md text-headline-md ${
            isIncome ? 'text-secondary' : 'text-on-surface'
          }`}
        >
          {formatCurrency(amount)}
        </p>
        {status ? (
          <span
            className={`text-[10px] font-label-caps px-2 py-0.5 rounded-full ${
              status === 'Pending'
                ? 'bg-error-container text-on-error-container'
                : 'bg-secondary-container/30 text-on-secondary-container'
            }`}
          >
            {status}
          </span>
        ) : (
          <p className="text-[10px] font-label-caps text-on-surface-variant uppercase">
            {categoryLabel || category}
          </p>
        )}
      </div>
    </div>
  );
};

export default ExpenseCard;