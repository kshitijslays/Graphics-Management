import { useNavigate } from 'react-router-dom';

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-xl font-bold mb-4">Select Your Role</h2>
        <div className="flex flex-col gap-4">
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={() => navigate('/dashboard?role=designer')}
          >
            Graphic Designer
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => navigate('/dashboard?role=manager')}
          >
            Brand Manager
          </button>
        </div>
      </div>
    </div>
  );
}