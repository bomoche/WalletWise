import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/common/Button';
import { EXPENSE_FORM_CATEGORIES } from '../../utils/mockData';

// Add / Edit expense screen
// TODO: replace mock save with expenseService.createExpense()/updateExpense() once backend is ready
const AddEditExpense = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('dining');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [notes, setNotes] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);

    // --- MOCK SAVE LOGIC ---
    // TODO: swap for real expenseService call, passing { amount, category, date, notes }
    setTimeout(() => {
      setIsSaving(false);
      navigate('/expenses');
    }, 600);
  };

  return (
    <div className="screen screen-add-edit-expense min-h-screen bg-background text-on-surface pb-32">
      {/* Top App Bar */}
      <header className="bg-surface w-full top-0 sticky z-40">
        <div className="flex justify-between items-center px-container-margin py-stack-gap-sm w-full">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
              {isEditMode ? 'Edit Expense' : 'Add Expense'}
            </h1>
          </div>
        </div>
      </header>

      <main className="px-container-margin mt-stack-gap-lg">
        {/* Amount Input */}
        <section className="flex flex-col items-center justify-center py-section-margin">
          <label className="font-label-caps text-label-caps text-on-surface-variant mb-2">
            AMOUNT SPENT
          </label>
          <div className="relative flex items-center justify-center">
            <span className="font-display-amount text-display-amount text-primary mr-1">R</span>
            <input
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="font-display-amount text-display-amount text-primary bg-transparent border-none focus:ring-0 text-center w-full max-w-[240px] p-0"
            />
          </div>
          <div className="w-32 h-0.5 bg-outline-variant mt-2 opacity-50" />
        </section>

        <div className="flex flex-col gap-stack-gap-lg">
          {/* Category Selector */}
          <section className="bg-surface-container-lowest rounded-xl p-card-padding soft-card-shadow">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-gap-md">
              Category
            </h2>
            <div className="grid grid-cols-4 gap-stack-gap-md">
              {EXPENSE_FORM_CATEGORIES.map(({ id: catId, label, icon }) => {
                const isSelected = category === catId;
                return (
                  <button
                    key={catId}
                    type="button"
                    onClick={() => setCategory(catId)}
                    className="flex flex-col items-center gap-2 transition-all"
                  >
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-primary text-on-primary'
                          : 'bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[28px]">{icon}</span>
                    </div>
                    <span
                      className={`font-label-caps text-[10px] ${
                        isSelected ? 'text-primary' : 'text-on-surface-variant'
                      }`}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Date & Notes */}
          <section className="bg-surface-container-lowest rounded-xl p-card-padding soft-card-shadow">
            <div className="flex flex-col gap-stack-gap-md">
              <div className="flex flex-col gap-1">
                <label className="font-label-caps text-label-caps text-on-surface-variant">
                  DATE
                </label>
                <div className="flex items-center gap-3 py-2 border-b border-surface-container-high">
                  <span className="material-symbols-outlined text-primary">calendar_today</span>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-transparent border-none focus:ring-0 font-body-lg text-body-lg text-on-surface p-0"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-caps text-label-caps text-on-surface-variant">
                  DESCRIPTION
                </label>
                <div className="flex items-start gap-3 py-2">
                  <span className="material-symbols-outlined text-primary mt-1">notes</span>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="What was this for?"
                    className="w-full bg-transparent border-none focus:ring-0 font-body-md text-body-md text-on-surface p-0 resize-none"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Receipt (decorative) */}
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">receipt_long</span>
              </div>
              <div>
                <p className="font-body-md font-semibold text-on-surface">Add Receipt</p>
                <p className="text-[12px] text-on-surface-variant">Keep a copy for your records</p>
              </div>
            </div>
            <button type="button" disabled className="text-primary opacity-50 font-label-caps text-label-caps cursor-not-allowed">
              UPLOAD
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-stack-gap-lg px-2">
          <Button onClick={handleSave} isLoading={isSaving} className="!rounded-xl">
            Save Expense
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AddEditExpense;