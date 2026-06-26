// Generic button with variant + loading state support
const VARIANT_CLASSES = {
  primary:
    'bg-primary-container text-on-primary hover:bg-primary',
  secondary:
    'border border-outline-variant text-on-surface-variant hover:bg-surface',
  danger:
    'bg-error text-on-error hover:opacity-90',
};

const Button = ({
  children,
  variant = 'primary',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <button
      className={`w-full py-4 rounded-lg font-body-lg text-body-lg flex items-center justify-center gap-2 active:scale-95 transition-all soft-card-shadow ${VARIANT_CLASSES[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="material-symbols-outlined animate-spin">progress_activity</span>
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;