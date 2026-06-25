// Status badge used on payment request cards (pending/paid/declined)
// TODO: color variants based on status prop
const StatusBadge = ({ status }) => {
  return <span className="status-badge">{status}</span>;
};

export default StatusBadge;
