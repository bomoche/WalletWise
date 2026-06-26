// Currency formatting helper
export const formatCurrency = (amount) => {
  const formatted = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
  }).format(Math.abs(amount));

  return amount < 0 ? `-${formatted}` : `+${formatted}`;
};