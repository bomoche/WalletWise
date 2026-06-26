import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

// Register screen
// TODO: replace mock registration with real authService.register() call once backend auth is ready
const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!formData.name || !formData.email || !formData.password) {
      return 'Please fill in all fields.';
    }
    if (formData.password.length < 6) {
      return 'Password must be at least 6 characters.';
    }
    if (formData.password !== formData.confirmPassword) {
      return 'Passwords do not match.';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    setIsLoading(true);

    // --- MOCK REGISTRATION LOGIC ---
    // TODO: swap this block for authService.register(formData)
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 800);
  };

  return (
    <div className="screen screen-register min-h-screen flex flex-col bg-surface text-on-surface">
      {/* Top AppBar */}
      <header className="w-full top-0 sticky bg-surface flex justify-between items-center px-container-margin py-stack-gap-sm z-10">
        <Link
          to="/"
          className="p-2 -ml-2 hover:bg-surface-container-high transition-colors rounded-full active:scale-95 duration-200"
        >
          <span className="material-symbols-outlined text-primary">arrow_back</span>
        </Link>
        <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
          WalletWise
        </span>
        <div className="w-10" />
      </header>

      <main className="flex-1 flex flex-col px-container-margin pb-stack-gap-lg pt-stack-gap-sm">
        {/* Hero */}
        <div className="mt-stack-gap-lg mb-section-margin text-center">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background mb-2">
            Join WalletWise
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Transform your financial habits today.
          </p>
        </div>

        {/* Registration Card */}
        <div className="bg-surface-container-lowest rounded-xl soft-card-shadow p-card-padding flex flex-col gap-stack-gap-lg max-w-md mx-auto w-full border border-surface-container">
          <form className="flex flex-col gap-stack-gap-md" onSubmit={handleSubmit}>
            {error && (
              <p className="text-error text-sm text-center bg-error-container/30 rounded-lg py-2 px-3">
                {error}
              </p>
            )}

            <Input
              id="name"
              name="name"
              label="NAME"
              icon="person"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <Input
              id="email"
              name="email"
              label="EMAIL ADDRESS"
              type="email"
              icon="mail"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Input
              id="password"
              name="password"
              label="PASSWORD"
              type={showPassword ? 'text' : 'password'}
              icon="lock"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              rightElement={
                <button
                  type="button"
                  className="text-outline hover:text-primary active:scale-95 transition-transform"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              }
            />

            <Input
              id="confirm-password"
              name="confirmPassword"
              label="CONFIRM PASSWORD"
              type={showPassword ? 'text' : 'password'}
              icon="verified_user"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <Button type="submit" isLoading={isLoading} className="mt-2 !rounded-lg">
              Create Account
            </Button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-outline-variant" />
            <span className="flex-shrink mx-4 font-label-caps text-label-caps text-on-surface-variant">
              OR SIGN UP WITH
            </span>
            <div className="flex-grow border-t border-outline-variant" />
          </div>

          {/* Social Login (decorative only) */}
          <div className="grid grid-cols-2 gap-stack-gap-md">
            <button
              type="button"
              disabled
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-outline-variant text-on-surface opacity-60 cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-[18px]">web</span>
              <span className="font-label-caps text-label-caps">GOOGLE</span>
            </button>
            <button
              type="button"
              disabled
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-outline-variant text-on-surface opacity-60 cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-[18px]">face_nod</span>
              <span className="font-label-caps text-label-caps">FACEBOOK</span>
            </button>
          </div>
          <p className="text-center text-[11px] text-outline-variant">
            Social sign-up coming soon
          </p>

          {/* Link back to Login */}
          <div className="text-center pt-stack-gap-sm">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-primary-container font-semibold hover:underline transition-all"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>

        {/* Trust banner */}
        <div className="mt-auto pt-section-margin pb-stack-gap-lg max-w-md mx-auto w-full">
          <div className="relative h-48 w-full overflow-hidden rounded-xl bg-surface-container shadow-inner border border-surface-container-high flex items-center justify-center">
            <div className="text-center space-y-2 max-w-xs px-4">
              <span
                className="material-symbols-outlined text-primary text-4xl mb-2"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                security
              </span>
              <h3 className="font-headline-md text-headline-md text-primary">
                Bank-Grade Security
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Your data is encrypted and protected with industry-leading protocols.
              </p>
            </div>
          </div>
          <p className="mt-stack-gap-lg text-center font-label-caps text-label-caps text-outline-variant">
            By joining, you agree to our{' '}
            <a className="underline" href="#">Terms of Service</a> and{' '}
            <a className="underline" href="#">Privacy Policy</a>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;