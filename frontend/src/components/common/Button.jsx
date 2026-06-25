// Generic button component
// TODO: variants (primary, secondary, danger)
const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
