export default function StatusBadge({ status }) {
  const statusMap = {
    done: "bg-green-200 text-green-800",
    urgent: "bg-red-200 text-red-800",
    pending: "bg-yellow-200 text-yellow-800"
  };
  return (
    <p className={`text-xs font-semibold px-2 py-1 rounded w-fit ${statusMap[status]}`}> 
      {status.toUpperCase()}
    </p>
  );
}