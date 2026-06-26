import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/common/BottomNav';
import RequestCard from '../../components/requests/RequestCard';
import { MOCK_REQUESTS_SENT } from '../../utils/mockData';

const TABS = [
  { id: 'sent', label: 'Sent Requests', to: '/requests/sent' },
  { id: 'received', label: 'Received', to: '/requests/received' },
];

// Payment requests sent screen
// TODO: replace MOCK_REQUESTS_SENT with usePaymentRequests() hook once backend is ready
const RequestsSent = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = MOCK_REQUESTS_SENT.filter(
    (r) =>
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.note.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const active = filtered.filter((r) => r.status === 'PENDING');
  const completed = filtered.filter((r) => r.status !== 'PENDING');

  return (
    <div className="screen screen-requests-sent min-h-screen bg-background text-on-surface pb-32">
      {/* Top App Bar */}
      <header className="w-full top-0 sticky z-50 bg-surface flex justify-between items-center px-container-margin py-stack-gap-sm">
        <div className="flex items-center gap-stack-gap-sm">
          <button
            onClick={() => navigate('/dashboard')}
            className="material-symbols-outlined text-primary p-2 active:scale-95 transition-transform"
          >
            arrow_back
          </button>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">Requests</h1>
        </div>
        <button
          onClick={() => navigate('/profile')}
          className="material-symbols-outlined text-primary p-2 active:scale-95 transition-transform"
        >
          account_circle
        </button>
      </header>

      <main className="px-container-margin pt-stack-gap-md space-y-stack-gap-lg">
        {/* Search */}
        <div className="flex items-center bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3">
          <span className="material-symbols-outlined text-on-surface-variant mr-3">search</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by recipient or note..."
            className="bg-transparent border-none focus:ring-0 w-full text-body-md placeholder:text-on-surface-variant"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-stack-gap-sm overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => navigate(tab.to)}
              className={`px-4 py-1.5 rounded-full text-label-caps whitespace-nowrap border ${
                tab.id === 'sent'
                  ? 'bg-primary-container text-on-primary-container border-primary-container'
                  : 'bg-surface-container-lowest text-on-surface-variant border-outline-variant hover:border-primary transition-colors'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active */}
        <section className="space-y-stack-gap-md">
          {active.length > 0 && (
            <>
              <h2 className="text-label-caps text-on-surface-variant opacity-70 px-1">
                ACTIVE REQUESTS
              </h2>
              {active.map((req) => (
                <RequestCard key={req.id} request={req} variant="sent" />
              ))}
            </>
          )}

          {completed.length > 0 && (
            <>
              <h2 className="text-label-caps text-on-surface-variant opacity-70 px-1 pt-stack-gap-sm">
                RECENTLY COMPLETED
              </h2>
              {completed.map((req) => (
                <RequestCard key={req.id} request={req} variant="sent" />
              ))}
            </>
          )}

          {filtered.length === 0 && (
            <p className="text-center text-on-surface-variant py-stack-gap-lg">
              No sent requests found.
            </p>
          )}
        </section>
      </main>

      {/* FAB */}
      <button
        onClick={() => navigate('/requests/new')}
        className="fixed bottom-24 right-container-margin w-14 h-14 bg-primary text-on-primary rounded-2xl shadow-lg flex items-center justify-center active:scale-90 transition-transform z-40"
      >
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>

      <BottomNav />
    </div>
  );
};

export default RequestsSent;