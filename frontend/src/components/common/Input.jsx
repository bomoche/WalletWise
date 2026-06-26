// Generic form input with label, icon, and error support
const Input = ({
  id,
  label,
  type = 'text',
  icon,
  error,
  rightElement,
  className = '',
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id}
          className="font-label-caps text-label-caps text-on-surface-variant px-1"
        >
          {label}
        </label>
      )}
      <div
        className={`relative flex items-center bg-surface rounded-lg border transition-all ${
          error ? 'border-error' : 'border-outline-variant focus-within:border-primary'
        } ${className}`}
      >
        {icon && (
          <span className="material-symbols-outlined absolute left-3 text-on-surface-variant">
            {icon}
          </span>
        )}
        <input
          id={id}
          type={type}
          className={`w-full bg-transparent border-none py-3 ${
            icon ? 'pl-10' : 'pl-4'
          } ${rightElement ? 'pr-12' : 'pr-4'} focus:ring-0 text-body-md placeholder:text-outline-variant`}
          {...props}
        />
        {rightElement && (
          <div className="absolute right-3">{rightElement}</div>
        )}
      </div>
      {error && (
        <span className="text-error text-xs px-1">{error}</span>
      )}
    </div>
  );
};

export default Input;