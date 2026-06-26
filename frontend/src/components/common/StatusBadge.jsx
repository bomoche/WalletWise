// Status badge used on payment request cards (PENDING / PAID / DECLINED)
const STATUS_STYLES = {
  PENDING: 'bg-tertiary-fixed text-on-tertiary-fixed',
  PAID: 'bg-secondary-container text-on-secondary-container',
  DECLINED: 'bg-error-container text-on-error-container',
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-label-caps font-label-caps ${
        STATUS_STYLES[status] || 'bg-surface-container text-on-surface-variant'
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;