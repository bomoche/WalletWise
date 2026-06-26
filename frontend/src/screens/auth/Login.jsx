import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { MOCK_CREDENTIALS } from '../../utils/mockData';

// Login screen
// TODO: replace mock auth check with real authService.login() call once backend auth is ready
const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // --- MOCK AUTH LOGIC ---
    // TODO: swap this block for authService.login(formData)
    setTimeout(() => {
      const isValid =
        formData.email === MOCK_CREDENTIALS.email &&
        formData.password === MOCK_CREDENTIALS.password;

      setIsLoading(false);

      if (isValid) {
        navigate('/dashboard');
      } else {
        setError('Invalid email or password. Try the mock credentials.');
      }
    }, 800);
  };

  return (
    <div className="screen screen-login min-h-screen flex flex-col bg-surface text-on-surface">
      {/* Top AppBar */}
      <header className="w-full top-0 sticky bg-surface flex justify-between items-center px-container-margin py-stack-gap-sm z-50">
        <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
          WalletWise
        </span>
        <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-2 rounded-full active:scale-95 transition-transform">
          <span className="material-symbols-outlined">help_outline</span>
        </button>
      </header>

      <main className="flex-grow flex items-center justify-center px-container-margin py-section-margin relative overflow-hidden">
        <div className="w-full max-w-md z-10">
          {/* Brand & Intro */}
          <div className="text-center mb-stack-gap-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-container rounded-2xl mb-4 soft-card-shadow">
              <span className="material-symbols-outlined text-on-primary text-[32px]">
                account_balance_wallet
              </span>
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">
              Welcome Back
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Sign in to manage your financial confidence.
            </p>
          </div>

          {/* Login Form Card */}
          <div className="bg-surface-container-lowest p-card-padding rounded-xl soft-card-shadow border border-surface-container">
            <form
              className="flex flex-col gap-stack-gap-md"
              onSubmit={handleSubmit}
            >
              {error && (
                <p className="text-error text-sm text-center bg-error-container/30 rounded-lg py-2 px-3">
                  {error}
                </p>
              )}

              <Input
                id="email"
                name="email"
                label="EMAIL ADDRESS"
                type="email"
                icon="mail"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center px-1">
                  <label
                    htmlFor="password"
                    className="font-label-caps text-label-caps text-on-surface-variant"
                  >
                    PASSWORD
                  </label>
                  <a className="font-label-caps text-label-caps text-primary hover:underline" href="#">
                    Forgot Password?
                  </a>
                </div>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  icon="lock"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  rightElement={
                    <button
                      type="button"
                      className="text-on-surface-variant hover:text-primary p-1"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      <span className="material-symbols-outlined">
                        {showPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  }
                />
              </div>

              <Button type="submit" isLoading={isLoading} className="mt-2">
                <span>Sign In</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Button>

              <p className="text-center text-xs text-on-surface-variant">
                Mock credentials: {MOCK_CREDENTIALS.email} / {MOCK_CREDENTIALS.password}
              </p>

              {/* Divider */}
              <div className="flex items-center gap-4 my-2">
                <div className="h-[1px] flex-grow bg-outline-variant opacity-30" />
                <span className="font-label-caps text-label-caps text-outline-variant">
                  OR CONTINUE WITH
                </span>
                <div className="h-[1px] flex-grow bg-outline-variant opacity-30" />
              </div>

              {/* Social Login (decorative only) */}
              <div className="grid grid-cols-2 gap-stack-gap-md">
                <button
                  type="button"
                  disabled
                  className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface-variant opacity-60 cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-[18px]">web</span>
                  <span>Google</span>
                </button>
                <button
                  type="button"
                  disabled
                  className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface-variant opacity-60 cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-[18px]">apps</span>
                  <span>Apple</span>
                </button>
              </div>
              <p className="text-center text-[11px] text-outline-variant -mt-2">
                Social sign-in coming soon
              </p>
            </form>
          </div>

          {/* Footer Link */}
          <p className="text-center mt-stack-gap-lg font-body-md text-body-md text-on-surface-variant">
            Don&apos;t have an account?{' '}
            <Link
              to="/register"
              className="text-primary font-body-lg text-body-lg font-semibold hover:underline"
            >
              Register Now
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;