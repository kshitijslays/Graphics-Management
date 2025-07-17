export default function Features() {
  const features = [
    {
      title: "Centralized Content",
      description: "All assets in one secure, organized hub",
      icon: "🗂️"
    },
    {
      title: "Real-Time Feedback",
      description: "Instant comments and annotations",
      icon: "💬"
    },
    {
      title: "Version Control",
      description: "Full history with visual comparisons",
      icon: "🔄"
    },
    {
      title: "Secure Workspaces",
      description: "Private groups with permissions",
      icon: "🔒"
    },
    {
      title: "Optimized Workflow",
      description: "Automated approvals and tasks",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#800000]/10 text-[#800000] text-sm font-medium mb-4">
          Why DesignSync?
        </span>
        <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4">
          Designed for <span className="text-[#800000]">creative</span> collaboration
        </h2>
        <div className="w-24 h-1 bg-[#800000] mx-auto mb-6"></div>
        <p className="text-lg text-[#7B6F66] max-w-2xl mx-auto">
          Professional tools that streamline your creative workflow
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="relative p-8 rounded-2xl bg-white border border-[#f0f0f0] hover:border-[#800000]/30 transition-all duration-300 group overflow-hidden"
          >
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <span className="text-4xl mb-4 inline-block">{feature.icon}</span>
              <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">{feature.title}</h3>
              <p className="text-[#7B6F66]">{feature.description}</p>
              
              {/* Animated arrow */}
              <div className="mt-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-[#800000] opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300"
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}   