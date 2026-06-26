import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/common/BottomNav';
import { MOCK_USER, MOCK_SUMMARY } from '../../utils/mockData';
import { formatCurrency } from '../../utils/formatCurrency';

const SETTINGS_ITEMS = [
  { id: 'notifications', icon: 'notifications', label: 'Notifications' },
  { id: 'currency', icon: 'payments', label: 'Currency', subtitle: 'ZAR (R)' },
  { id: 'payment-methods', icon: 'credit_card', label: 'Payment Methods' },
  { id: 'security', icon: 'shield', label: 'Security' },
];

// Profile / settings screen
// TODO: replace MOCK_USER with real user from AuthContext once auth is implemented
const Profile = () => {
  const navigate = useNavigate();

  // --- MOCK LOGOUT LOGIC ---
  // TODO: swap for authService.logout() + clear AuthContext session
  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="screen screen-profile min-h-screen bg-background text-on-surface pb-32">
      {/* Top App Bar */}
      <header className="w-full top-0 sticky z-40 flex justify-between items-center px-container-margin py-stack-gap-sm bg-surface">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container-high transition-colors active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-primary">arrow_back</span>
        </button>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">WalletWise</h1>
        <div className="w-10 h-10" />
      </header>

      <main className="px-container-margin pt-stack-gap-lg">
        {/* Profile Header */}
        <section className="flex flex-col items-center mb-section-margin">
          <div className="w-32 h-32 rounded-full border-4 border-surface-container-highest p-1 mb-stack-gap-md bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-[64px]">account_circle</span>
          </div>
          <div className="text-center">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background mb-1">
              {MOCK_USER.name}
            </h2>
            <p className="font-body-md text-on-surface-variant">{MOCK_USER.email}</p>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 gap-stack-gap-md mb-stack-gap-lg">
          <div className="bg-surface-container-lowest p-card-padding rounded-xl soft-card-shadow border border-surface-container-high">
            <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">
              MONTHLY SAVED
            </span>
            <span className="font-headline-md text-headline-md text-secondary">
              {formatCurrency(MOCK_SUMMARY.budgetLeft).replace('+', '')}
            </span>
          </div>
          <div className="bg-surface-container-lowest p-card-padding rounded-xl soft-card-shadow border border-surface-container-high">
            <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">
              ACCOUNT TYPE
            </span>
            <span className="font-headline-md text-headline-md text-primary">Premium</span>
          </div>
        </section>

        {/* Settings List */}
        <section className="space-y-stack-gap-md">
          {SETTINGS_ITEMS.map(({ id, icon, label, subtitle }) => (
            <div
              key={id}
              className="transition-transform duration-200 active:scale-[0.97] bg-surface-container-lowest p-card-padding rounded-xl soft-card-shadow flex items-center justify-between cursor-pointer group hover:bg-surface-bright border border-transparent hover:border-surface-container-high"
            >
              <div className="flex items-center gap-stack-gap-md">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">{icon}</span>
                </div>
                <div>
                  <span className="font-body-lg text-body-lg text-on-surface block">{label}</span>
                  {subtitle && (
                    <span className="text-xs text-on-surface-variant font-medium">{subtitle}</span>
                  )}
                </div>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                chevron_right
              </span>
            </div>
          ))}

          {/* Logout */}
          <div
            onClick={handleLogout}
            className="transition-transform duration-200 active:scale-[0.97] bg-surface-container-lowest p-card-padding rounded-xl soft-card-shadow flex items-center justify-between cursor-pointer group hover:bg-error-container/20 border border-transparent hover:border-error-container"
          >
            <div className="flex items-center gap-stack-gap-md">
              <div className="w-10 h-10 rounded-lg bg-error-container flex items-center justify-center text-error">
                <span className="material-symbols-outlined">logout</span>
              </div>
              <span className="font-body-lg text-body-lg text-error">Logout</span>
            </div>
            <span className="material-symbols-outlined text-error opacity-40">chevron_right</span>
          </div>
        </section>

        {/* Help Banner */}
        <section className="mt-section-margin bg-primary p-card-padding rounded-xl flex items-center justify-between overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="font-headline-md text-headline-md text-on-primary">Need Help?</h3>
            <p className="font-body-md text-primary-fixed text-xs opacity-80">Our support team is 24/7</p>
            <button className="mt-stack-gap-sm bg-white text-primary px-4 py-1.5 rounded-full font-label-caps text-label-caps active:scale-95 transition-transform">
              CONTACT US
            </button>
          </div>
          <div className="absolute -right-4 -top-4 opacity-20">
            <span className="material-symbols-outlined text-[100px] text-white">support_agent</span>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;