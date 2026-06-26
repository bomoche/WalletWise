import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import { MOCK_CONTACTS, REQUEST_CATEGORIES } from '../../utils/mockData';

// New payment request screen
// TODO: replace mock send logic with requestService.createRequest() once backend is ready
const NewPaymentRequest = () => {
  const navigate = useNavigate();

  const [amount, setAmount] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [note, setNote] = useState('');
  const [category, setCategory] = useState('GENERAL');
  const [isSending, setIsSending] = useState(false);

  const handleSend = () => {
    setIsSending(true);

    // --- MOCK SEND LOGIC ---
    // TODO: swap for requestService.createRequest({ recipient, amount, note, category })
    setTimeout(() => {
      setIsSending(false);
      navigate('/requests/sent');
    }, 600);
  };

  return (
    <div className="screen screen-new-payment-request min-h-screen bg-surface text-on-surface pb-32">
      {/* Top App Bar */}
      <header className="w-full top-0 sticky z-50 bg-surface flex justify-between items-center px-container-margin py-stack-gap-sm">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 rounded-full hover:bg-surface-container-high transition-colors active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-primary">arrow_back</span>
        </button>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">New Request</h1>
        <div className="w-10" />
      </header>

      <main className="px-container-margin mt-stack-gap-lg max-w-lg mx-auto">
        {/* Amount */}
        <section className="bg-surface-container-lowest rounded-xl p-stack-gap-lg soft-card-shadow text-center mb-stack-gap-lg">
          <label className="font-label-caps text-label-caps text-on-surface-variant block mb-stack-gap-sm">
            REQUEST AMOUNT
          </label>
          <div className="flex items-center justify-center text-primary">
            <span className="font-display-amount text-display-amount mr-1">R</span>
            <input
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-transparent border-none text-center font-display-amount text-display-amount p-0 focus:ring-0 text-primary"
            />
          </div>
        </section>

        {/* Recipient */}
        <section className="mb-stack-gap-lg">
          <h2 className="font-headline-md text-headline-md text-primary mb-stack-gap-md">
            Recipient
          </h2>
          <div className="flex overflow-x-auto gap-4 py-2" style={{ scrollbarWidth: 'none' }}>
            {MOCK_CONTACTS.map((contact) => {
              const isSelected = selectedContact === contact.id;
              return (
                <div
                  key={contact.id}
                  onClick={() => setSelectedContact(contact.id)}
                  className="flex flex-col items-center flex-shrink-0 space-y-2 cursor-pointer"
                >
                  <div
                    className={`w-16 h-16 rounded-full border-2 flex items-center justify-center bg-surface-container transition-transform active:scale-90 ${
                      isSelected ? 'border-primary-fixed-dim' : 'border-transparent'
                    }`}
                  >
                    <span className="material-symbols-outlined text-primary">person</span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface">{contact.name}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Note + Category */}
        <section className="space-y-stack-gap-md">
          <div className="bg-surface-container-lowest rounded-xl p-card-padding soft-card-shadow">
            <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">
              NOTE / REASON
            </label>
            <textarea
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="What is this request for? (e.g. Dinner, Rent, Gift)"
              className="w-full bg-transparent border-none p-0 focus:ring-0 text-body-md resize-none text-on-surface placeholder:text-outline-variant"
            />
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-card-padding soft-card-shadow">
            <label className="font-label-caps text-label-caps text-on-surface-variant block mb-stack-gap-md">
              CATEGORY
            </label>
            <div className="flex flex-wrap gap-2">
              {REQUEST_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-label-caps font-label-caps border ${
                    category === cat
                      ? 'border-primary text-primary bg-primary/5'
                      : 'border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Send */}
        <div className="mt-section-margin">
          <Button onClick={handleSend} isLoading={isSending} className="!rounded-xl">
            <span>Send Request</span>
            <span className="material-symbols-outlined">send</span>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default NewPaymentRequest;