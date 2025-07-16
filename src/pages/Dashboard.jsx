import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role');
  const [groupName, setGroupName] = useState('');
  const [groups, setGroups] = useState([]);

  const handleCreateGroup = (e) => {
    e.preventDefault();
    if (groupName.trim()) {
      setGroups([...groups, groupName.trim()]);
      setGroupName('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">
        Welcome {role === 'designer' ? 'Designer' : 'Manager'}
      </h1>

      <div className="bg-white p-4 rounded shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-2">Create Group</h2>
        <form onSubmit={handleCreateGroup} className="flex gap-2">
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Group Name"
            className="px-3 py-2 border rounded w-full"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Create
          </button>
        </form>
      </div>

      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-semibold mb-2">Your Groups</h2>
        {groups.length === 0 ? (
          <p className="text-sm text-gray-600">No groups created yet.</p>
        ) : (
          <ul className="list-disc ml-5 text-sm">
            {groups.map((group, index) => (
              <li key={index}>{group}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
