// import React, { useState } from 'react';
// import { FaPlus, FaUsers, FaSearch, FaCrown, FaPalette, FaBrush, FaEllipsisV } from 'react-icons/fa';
// import { FiUsers, FiUserPlus, FiHash, FiStar } from 'react-icons/fi';

// export default function Dashboard() {
//   // Simulating URL params
//   const role = 'brand-manager'; // This would come from useSearchParams
//   const [groupName, setGroupName] = useState('');
//   const [joinCode, setJoinCode] = useState('');
//   const [groups, setGroups] = useState([
//     { id: 1, name: 'Brand Identity 2024', members: 8, role: 'owner', lastActive: '2 hours ago' },
//     { id: 2, name: 'Product Launch Campaign', members: 12, role: 'member', lastActive: '1 day ago' },
//   ]);
//   const [activeTab, setActiveTab] = useState('my-groups');
//   const [searchQuery, setSearchQuery] = useState('');

//   const getRoleInfo = (role) => {
//     const roleMap = {
//       'brand-manager': { title: 'Brand Manager', icon: <FaCrown className="text-lg" />, color: 'from-purple-500 to-pink-500' },
//       'graphic-designer': { title: 'Graphic Designer', icon: <FaPalette className="text-lg" />, color: 'from-blue-500 to-cyan-500' },
//       'creative-director': { title: 'Creative Director', icon: <FaBrush className="text-lg" />, color: 'from-orange-500 to-red-500' }
//     };
//     return roleMap[role] || roleMap['brand-manager'];
//   };

//   const roleInfo = getRoleInfo(role);

//   const filteredGroups = groups.filter(group =>
//     group.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleCreateGroup = (e) => {
//     e.preventDefault();
//     if (groupName.trim()) {
//       const newGroup = {
//         id: Date.now(),
//         name: groupName.trim(),
//         members: 1,
//         role: 'owner',
//         lastActive: 'Just now'
//       };
//       setGroups([newGroup, ...groups]);
//       setGroupName('');
//     }
//   };

//   const handleJoinGroup = (e) => {
//     e.preventDefault();
//     if (joinCode.trim()) {
//       const newGroup = {
//         id: Date.now(),
//         name: `Joined Group #${joinCode}`,
//         members: Math.floor(Math.random() * 15) + 3,
//         role: 'member',
//         lastActive: 'Just joined'
//       };
//       setGroups([newGroup, ...groups]);
//       setJoinCode('');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#F7EADE] via-[#F7EADE]/80 to-[#F7EADE]/60 p-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <div className={`w-12 h-12 bg-[#800000] rounded-2xl flex items-center justify-center shadow-lg`}>
//                 <div className="text-white">
//                   {roleInfo.icon}
//                 </div>
//               </div>
//               <div>
//                 <h1 className="text-3xl font-semibold text-[#800000] font-serif">
//                   Welcome back
//                 </h1>
//                 <p className="text-[#800000]/70 font-medium">{roleInfo.title}</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-[#800000]/10 rounded-full flex items-center justify-center">
//                 <FiStar className="text-[#800000] text-lg" />
//               </div>
//               <div className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#800000]/10">
//                 <FaEllipsisV className="text-[#800000]/60 text-sm" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Action Tabs */}
//         <div className="flex gap-2 mb-8">
//           <button
//             onClick={() => setActiveTab('my-groups')}
//             className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
//               activeTab === 'my-groups'
//                 ? 'bg-[#800000] text-white shadow-lg'
//                 : 'bg-white/60 text-[#800000] hover:bg-white/80 border border-[#800000]/10'
//             }`}
//           >
//             <FiUsers className="inline mr-2" />
//             My Groups
//           </button>
//           <button
//             onClick={() => setActiveTab('create')}
//             className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
//               activeTab === 'create'
//                 ? 'bg-[#800000] text-white shadow-lg'
//                 : 'bg-white/60 text-[#800000] hover:bg-white/80 border border-[#800000]/10'
//             }`}
//           >
//             <FaPlus className="inline mr-2" />
//             Create Group
//           </button>
//           <button
//             onClick={() => setActiveTab('join')}
//             className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
//               activeTab === 'join'
//                 ? 'bg-[#800000] text-white shadow-lg'
//                 : 'bg-white/60 text-[#800000] hover:bg-white/80 border border-[#800000]/10'
//             }`}
//           >
//             <FiUserPlus className="inline mr-2" />
//             Join Group
//           </button>
//         </div>

//         {/* Content Area */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2">
//             {activeTab === 'my-groups' && (
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between mb-6">
//                   <h2 className="text-xl font-semibold text-[#800000] font-serif">Your Creative Groups</h2>
//                   <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-[#800000]/10">
//                     <FaSearch className="text-[#800000]/50 text-sm" />
//                     <input
//                       type="text"
//                       placeholder="Search groups..."
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       className="bg-transparent border-none outline-none text-sm text-[#800000] placeholder-[#800000]/50 w-32"
//                     />
//                   </div>
//                 </div>

//                 {filteredGroups.length === 0 ? (
//                   <div className="text-center py-12 bg-white/40 backdrop-blur-sm rounded-2xl border border-[#800000]/10">
//                     <FiUsers className="text-4xl text-[#800000]/30 mx-auto mb-4" />
//                     <p className="text-[#800000]/60">
//                       {searchQuery ? `No groups found for "${searchQuery}"` : 'No groups yet. Create your first group to get started!'}
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="space-y-3">
//                     {filteredGroups.map((group) => (
//                       <div
//                         key={group.id}
//                         className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#800000]/10 hover:border-[#800000]/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
//                       >
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center gap-4">
//                             <div className="w-12 h-12 bg-gradient-to-br from-[#800000] to-[#800000]/80 rounded-xl flex items-center justify-center shadow-md">
//                               <FaUsers className="text-white text-lg" />
//                             </div>
//                             <div>
//                               <h3 className="font-semibold text-[#800000] font-serif">{group.name}</h3>
//                               <div className="flex items-center gap-4 text-sm text-[#800000]/60">
//                                 <span>{group.members} members</span>
//                                 <span>•</span>
//                                 <span>{group.lastActive}</span>
//                                 <span className={`px-2 py-1 rounded-full text-xs ${
//                                   group.role === 'owner' 
//                                     ? 'bg-[#800000]/10 text-[#800000]' 
//                                     : 'bg-gray-100 text-gray-600'
//                                 }`}>
//                                   {group.role}
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                           <button className="px-4 py-2 bg-[#800000]/10 hover:bg-[#800000]/20 text-[#800000] rounded-lg transition-colors duration-200 font-medium">
//                             Open
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}

//             {activeTab === 'create' && (
//               <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-[#800000]/10">
//                 <div className="text-center mb-8">
//                   <div className="w-16 h-16 bg-gradient-to-br from-[#800000] to-[#800000]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
//                     <FaPlus className="text-white text-2xl" />
//                   </div>
//                   <h2 className="text-2xl font-semibold text-[#800000] font-serif mb-2">Create New Group</h2>
//                   <p className="text-[#800000]/60">Start a new creative collaboration space</p>
//                 </div>

//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium text-[#800000] mb-2">Group Name</label>
//                     <input
//                       type="text"
//                       value={groupName}
//                       onChange={(e) => setGroupName(e.target.value)}
//                       placeholder="Enter a creative group name..."
//                       className="w-full px-4 py-3 bg-white/80 border border-[#800000]/20 rounded-xl focus:outline-none focus:border-[#800000]/40 focus:bg-white transition-all duration-200 text-[#800000] placeholder-[#800000]/40"
//                       onKeyPress={(e) => e.key === 'Enter' && handleCreateGroup(e)}
//                     />
//                   </div>
//                   <button
//                     onClick={handleCreateGroup}
//                     className="w-full bg-gradient-to-r from-[#800000] to-[#800000]/90 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
//                   >
//                     <FaPlus className="text-sm" />
//                     Create Group
//                   </button>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'join' && (
//               <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-[#800000]/10">
//                 <div className="text-center mb-8">
//                   <div className="w-16 h-16 bg-gradient-to-br from-[#800000] to-[#800000]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
//                     <FiUserPlus className="text-white text-2xl" />
//                   </div>
//                   <h2 className="text-2xl font-semibold text-[#800000] font-serif mb-2">Join Existing Group</h2>
//                   <p className="text-[#800000]/60">Enter a group code to join a creative team</p>
//                 </div>

//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium text-[#800000] mb-2">Group Code</label>
//                     <div className="relative">
//                       <FiHash className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#800000]/40" />
//                       <input
//                         type="text"
//                         value={joinCode}
//                         onChange={(e) => setJoinCode(e.target.value)}
//                         placeholder="Enter group invitation code..."
//                         className="w-full pl-12 pr-4 py-3 bg-white/80 border border-[#800000]/20 rounded-xl focus:outline-none focus:border-[#800000]/40 focus:bg-white transition-all duration-200 text-[#800000] placeholder-[#800000]/40"
//                         onKeyPress={(e) => e.key === 'Enter' && handleJoinGroup(e)}
//                       />
//                     </div>
//                   </div>
//                   <button
//                     onClick={handleJoinGroup}
//                     className="w-full bg-gradient-to-r from-[#800000] to-[#800000]/90 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
//                   >
//                     <FiUserPlus className="text-sm" />
//                     Join Group
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Quick Stats */}
//             <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#800000]/10">
//               <h3 className="font-semibold text-[#800000] font-serif mb-4">Quick Stats</h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <span className="text-[#800000]/70 text-sm">Total Groups</span>
//                   <span className="font-semibold text-[#800000]">{groups.length}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-[#800000]/70 text-sm">Groups Owned</span>
//                   <span className="font-semibold text-[#800000]">{groups.filter(g => g.role === 'owner').length}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-[#800000]/70 text-sm">Active Projects</span>
//                   <span className="font-semibold text-[#800000]">4</span>
//                 </div>
//               </div>
//             </div>

//             {/* Recent Activity */}
//             <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#800000]/10">
//               <h3 className="font-semibold text-[#800000] font-serif mb-4">Recent Activity</h3>
//               <div className="space-y-3 text-sm">
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-[#800000]/60 rounded-full"></div>
//                   <span className="text-[#800000]/70">New member joined Brand Identity 2024</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-[#800000]/40 rounded-full"></div>
//                   <span className="text-[#800000]/70">Project updated in Product Launch</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-[#800000]/80 rounded-full"></div>
//                   <span className="text-[#800000]/70">New task assigned to you</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';

const flyersData = [
  { id: 1, title: 'Poster Day', status: 'Pending', lastUpdated: '2023-05-15' },
  { id: 2, title: 'Event XYZ', status: 'Needs Changes', lastUpdated: '2023-05-10' },
  { id: 3, title: 'Hackathon', status: 'Approved', lastUpdated: '2023-05-01' },
  { id: 4, title: 'Product Launch', status: 'Approved', lastUpdated: '2023-04-28' },
  { id: 5, title: 'Annual Conference', status: 'Pending', lastUpdated: '2023-05-18' },
];

const statusColors = {
  Pending: 'bg-amber-100 text-amber-800',
  'Needs Changes': 'bg-red-100 text-red-800',
  Approved: 'bg-green-100 text-green-800'
};

const Dashboard = ({ role }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredFlyers = flyersData.filter(flyer => {
    const matchesSearch = flyer.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || flyer.status === filter;
    return matchesSearch && matchesFilter;
  });

  const actionLabel = (status) => {
    if (role === 'manager') return 'Review';
    if (status === 'Approved') return 'View';
    return 'Edit';
  };

  return (
    <div className="min-h-screen bg-[#FDF6F0] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#800000] mb-2">
              {role === 'manager' ? 'Brand Management' : 'Designer Workspace'}
            </h1>
            <p className="text-gray-600">
              {role === 'manager' 
                ? 'Review and approve design submissions' 
                : 'Manage your design projects'}
            </p>
          </div>
          
          {role === 'manager' && (
            <button className="bg-[#800000] hover:bg-[#600000] text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 mt-4 md:mt-0">
              + Create New Project
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <select
              className="border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#800000] focus:border-transparent"
              value={filter}
              onChange={e => setFilter(e.target.value)}
            >
              <option>All Statuses</option>
              <option>Pending</option>
              <option>Needs Changes</option>
              <option>Approved</option>
            </select>
          </div>
        </div>

        {/* Projects Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-12 bg-[#800000] text-white px-6 py-4 font-medium">
            <div className="col-span-5">Project</div>
            <div className="col-span-3">Status</div>
            <div className="col-span-2">Last Updated</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>
          
          {filteredFlyers.length > 0 ? (
            filteredFlyers.map(flyer => (
              <div key={flyer.id} className="grid grid-cols-12 border-b border-gray-100 px-6 py-4 hover:bg-gray-50 transition-colors duration-150">
                <div className="col-span-5 font-medium text-gray-800">{flyer.title}</div>
                <div className="col-span-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[flyer.status]}`}>
                    {flyer.status}
                  </span>
                </div>
                <div className="col-span-2 text-gray-500 text-sm">{flyer.lastUpdated}</div>
                <div className="col-span-2 text-right">
                  <button className="text-[#800000] hover:text-[#600000] font-medium px-3 py-1 rounded hover:bg-[#FDF6F0] transition-colors duration-300">
                    {actionLabel(flyer.status)}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              No projects found matching your criteria
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-amber-500">
            <h3 className="text-gray-500 font-medium">Pending Review</h3>
            <p className="text-3xl font-bold text-[#800000] mt-2">
              {flyersData.filter(f => f.status === 'Pending').length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-red-500">
            <h3 className="text-gray-500 font-medium">Needs Changes</h3>
            <p className="text-3xl font-bold text-[#800000] mt-2">
              {flyersData.filter(f => f.status === 'Needs Changes').length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-500">
            <h3 className="text-gray-500 font-medium">Approved</h3>
            <p className="text-3xl font-bold text-[#800000] mt-2">
              {flyersData.filter(f => f.status === 'Approved').length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;