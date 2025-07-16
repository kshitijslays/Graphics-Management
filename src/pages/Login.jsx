import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate('/roles');
          }}
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 px-3 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-3 py-2 border rounded"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don’t have an account? <a href="/signup" className="text-blue-600">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
