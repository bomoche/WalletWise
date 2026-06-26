import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/common/BottomNav';
import RequestCard from '../../components/requests/RequestCard';
import { MOCK_REQUESTS_RECEIVED } from '../../utils/mockData';

// Payment requests received screen
// TODO: replace MOCK_REQUESTS_RECEIVED with usePaymentRequests() hook once backend is ready
const RequestsReceived = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState(MOCK_REQUESTS_RECEIVED);

  const pending = requests.filter((r) => r.status === 'PENDING');
  const settled = requests.filter((r) => r.status !== 'PENDING');

  // --- MOCK ACCEPT/DECLINE LOGIC ---
  // TODO: swap for requestService.respondToRequest(id, status)
  const handleAccept = (id) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'PAID', timeAgo: 'Just now' } : r))
    );
  };

  const handleDecline = (id) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'DECLINED', timeAgo: 'Just now' } : r))
    );
  };

  return (
    <div className="screen screen-requests-received min-h-screen bg-background text-on-surface pb-32">
      {/* Top App Bar */}
      <header className="w-full top-0 sticky z-50 bg-surface flex justify-between items-center px-container-margin py-stack-gap-sm">
        <button
          onClick={() => navigate('/dashboard')}
          className="material-symbols-outlined text-primary p-2 active:scale-95 transition-transform"
        >
          arrow_back
        </button>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">WalletWise</h1>
        <button
          onClick={() => navigate('/profile')}
          className="material-symbols-outlined text-primary p-2 active:scale-95 transition-transform"
        >
          account_circle
        </button>
      </header>

      <main className="px-container-margin pt-stack-gap-lg pb-32 max-w-lg mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-stack-gap-lg">
          <div>
            <p className="font-label-caps text-label-caps text-outline uppercase tracking-wider mb-1">
              Incoming
            </p>
            <h2 className="font-headline-lg text-headline-lg text-on-background">
              Payment Requests
            </h2>
          </div>
          <div className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-label-caps text-label-caps">
            {pending.length} Pending
          </div>
        </div>

        <div className="flex flex-col gap-stack-gap-md">
          {pending.map((req) => (
            <RequestCard
              key={req.id}
              request={req}
              variant="received"
              onAccept={() => handleAccept(req.id)}
              onDecline={() => handleDecline(req.id)}
            />
          ))}

          {pending.length === 0 && (
            <div className="text-center py-10 text-outline">
              <span className="material-symbols-outlined text-4xl mb-2">check_circle</span>
              <p className="font-body-md">All caught up!</p>
            </div>
          )}

          {settled.length > 0 && (
            <>
              <h3 className="font-label-caps text-label-caps text-outline uppercase mt-stack-gap-lg mb-stack-gap-sm">
                Recently Settled
              </h3>
              {settled.map((req) => (
                <div
                  key={req.id}
                  className="bg-surface-container-low opacity-80 rounded-xl p-card-padding flex items-center justify-between border border-outline-variant/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px]">person</span>
                    </div>
                    <div>
                      <h4 className="font-body-md text-body-md text-on-surface font-semibold">
                        {req.name}
                      </h4>
                      <p
                        className={`font-label-caps text-[11px] px-2 py-0.5 rounded inline-block ${
                          req.status === 'PAID'
                            ? 'text-on-secondary-container bg-secondary-container/30'
                            : 'text-error bg-error-container/30'
                        }`}
                      >
                        {req.status === 'PAID' ? 'Paid' : 'Declined'} • {req.timeAgo}
                      </p>
                    </div>
                  </div>
                  <span className="font-headline-md text-headline-md text-outline">
                    R {req.amount.toFixed(2)}
                  </span>
                </div>
              ))}
            </>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default RequestsReceived;