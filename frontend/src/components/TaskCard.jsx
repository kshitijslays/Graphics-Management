import StatusBadge from "./StatusBadge";
import FeedbackForm from "./FeedbackForm";

export default function TaskCard({ task, tasks, setTasks }) {
  const handleStatusChange = (id, status) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, status } : t))
    );
  };

  const handleFeedbackSubmit = (id, feedback) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, feedback: [...t.feedback, feedback] } : t
      )
    );
  };

  return (
    <div className="p-4 bg-white shadow-xl rounded-2xl">
      <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
      <p className="mb-2 text-sm text-gray-600">{task.content}</p>
      <StatusBadge status={task.status} />
      <div className="flex gap-2 my-3">
        <button
          onClick={() => handleStatusChange(task.id, "done")}
          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
        >
          Mark Done
        </button>
        <button
          onClick={() => handleStatusChange(task.id, "urgent")}
          className="border border-red-600 text-red-600 hover:bg-red-50 px-3 py-1 rounded"
        >
          Mark Urgent
        </button>
      </div>
      <div className="mt-2">
        <h3 className="font-semibold text-sm mb-1">Feedback:</h3>
        <ul className="list-disc ml-5 text-sm mb-2">
          {task.feedback.map((fb, i) => (
            <li key={i}>{fb}</li>
          ))}
        </ul>
        <FeedbackForm taskId={task.id} onSubmit={handleFeedbackSubmit} />
      </div>
    </div>
  );
}