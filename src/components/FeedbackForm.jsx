export default function FeedbackForm({ taskId, onSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const feedback = e.target.feedback.value.trim();
        if (feedback) onSubmit(taskId, feedback);
        e.target.reset();
      }}
    >
      <textarea
        name="feedback"
        placeholder="Suggest a change..."
        className="mb-2 w-full border px-2 py-1 rounded"
        rows={2}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
      >
        Submit Feedback
      </button>
    </form>
  );
}
