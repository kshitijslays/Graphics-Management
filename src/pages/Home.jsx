import { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Toggle button - always visible */}
      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-[#800000] text-white shadow-lg hover:bg-[#700000] transition-colors"
      >
        {sidebarOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Sidebar - hidden by default on all screens */}
      <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
        <Sidebar />
      </div>

      {/* Main content */}
      <main className={`flex-1 p-6 bg-gray-100 transition-all duration-300 ${sidebarOpen ? 'ml-0 md:ml-72' : 'ml-0'}`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-[#2C2C2C]">Welcome to the College Design Collaboration Portal</h1>
          <p className="text-gray-700 mb-8">
            This platform streamlines content sharing between Brand Managers and Graphic Designers. Log in, choose your role, create groups, upload tasks, and collaborate efficiently — all in one place.
          </p>
          
          {/* Dashboard cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-2 text-[#800000]">For Brand Managers</h2>
              <p className="text-gray-600">Create projects, assign tasks, and review designs from your team.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-2 text-[#800000]">For Designers</h2>
              <p className="text-gray-600">Receive assignments, upload designs, and get feedback in real-time.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}