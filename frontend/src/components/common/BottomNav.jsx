import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { to: '/dashboard', icon: 'home', label: 'Home' },
  { to: '/expenses', icon: 'account_balance_wallet', label: 'Expenses' },
  { to: '/requests/received', icon: 'swap_horiz', label: 'Requests' },
  { to: '/profile', icon: 'person', label: 'Profile' },
];

// Bottom tab navigation bar shown on all authenticated screens
const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe bg-surface-container-lowest shadow-[0_-4px_12px_rgba(26,83,92,0.08)] rounded-t-xl">
      {NAV_ITEMS.map(({ to, icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center transition-opacity active:scale-90 duration-200 ${
              isActive
                ? "text-primary after:content-[''] after:w-1 after:h-1 after:bg-primary after:rounded-full after:mt-1"
                : 'text-on-surface-variant hover:opacity-80'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span
                className="material-symbols-outlined"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {icon}
              </span>
              <span className="font-label-caps text-label-caps mt-1">{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;