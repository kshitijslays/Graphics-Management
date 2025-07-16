export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#800000] text-white p-6 shadow-2xl border-r border-[#6a0000] flex flex-col h-screen">
      {/* Header with creative elements */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-white/10 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#f0f0f0]">
            Design Portal
          </h2>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      </div>

      {/* Navigation with creative icons and effects */}
      <nav className="space-y-2 flex-1">
        <NavItem 
          href="/login" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
          }
          text="Login"
        />
        
        <NavItem 
          href="/signup" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          }
          text="Signup"
        />
        
        <NavItem 
          href="/roles" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
          text="Choose Role"
        />
        
        <NavItem 
          href="/dashboard" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
          text="Dashboard"
        />
      </nav>

      {/* Creative footer */}
      <div className="mt-auto">
        <div className="relative p-4 rounded-lg bg-white/5 backdrop-blur-sm overflow-hidden">
          <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-white/10"></div>
          <div className="relative z-10">
            <p className="text-xs font-light text-white/70 mb-1">New features available</p>
            <p className="text-sm font-medium">v2.4.1</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavItem({ href, icon, text }) {
  return (
    <a 
      href={href} 
      className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg group"
    >
      <span className="p-1.5 bg-white/10 rounded-md group-hover:bg-white/20 group-hover:scale-110 transition-all">
        {icon}
      </span>
      <span className="text-white/90 group-hover:text-white font-medium">{text}</span>
      <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </a>
  );
}