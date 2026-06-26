import StatusBadge from '../common/StatusBadge';
import { formatCurrency } from '../../utils/formatCurrency';

// Single payment request card used on both Sent and Received screens
// variant="sent"     -> shows name + note + amount + status
// variant="received" -> adds Accept/Decline actions when status is PENDING
const RequestCard = ({ request, variant = 'sent', onAccept, onDecline }) => {
  const { name, note, amount, status, timeAgo } = request;
  const isPending = status === 'PENDING';

  return (
    <div className="bg-surface-container-lowest p-card-padding rounded-xl soft-card-shadow active:scale-[0.98] transition-transform">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-stack-gap-md">
          <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">person</span>
          </div>
          <div>
            <p className="font-body-lg text-body-lg text-on-surface">{name}</p>
            <p className="font-body-md text-body-md text-on-surface-variant">{note}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-headline-md text-headline-md text-on-surface">
            {formatCurrency(amount).replace('+', '')}
          </p>
          {timeAgo ? (
            <p className="font-label-caps text-[10px] text-outline uppercase mt-1">{timeAgo}</p>
          ) : (
            <StatusBadge status={status} />
          )}
        </div>
      </div>

      {variant === 'received' && isPending && (
        <div className="flex gap-stack-gap-sm mt-4">
          <button
            onClick={onAccept}
            className="flex-1 bg-secondary text-on-secondary py-3 rounded-lg font-label-caps text-label-caps flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            Accept
          </button>
          <button
            onClick={onDecline}
            className="flex-1 border border-outline text-on-surface-variant py-3 rounded-lg font-label-caps text-label-caps flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[18px]">cancel</span>
            Decline
          </button>
        </div>
      )}
    </div>
  );
};

export default RequestCard;