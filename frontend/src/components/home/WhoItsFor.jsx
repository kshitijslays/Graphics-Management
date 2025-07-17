export default function WhoItsFor() {
  const personas = [
    {
      role: "Brand Managers",
      description: "Upload references, content & review designs with ease",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      color: "bg-[#800000]/10 text-[#800000]",
      image: "/images/brand-manager.jpg"
    },
    {
      role: "Graphic Designers",
      description: "Receive tasks, design creatives & collaborate on changes",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      color: "bg-[#2C2C2C]/10 text-[#2C2C2C]",
      image: "/images/graphic-designer.jpg"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#FDF6F0] to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#800000]/10 text-[#800000] text-sm font-medium mb-4">
            Perfect For
          </span>
          <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4">
            Designed for <span className="text-[#800000]">Creative Teams</span>
          </h2>
          <div className="w-20 h-1 bg-[#800000] mx-auto mb-6"></div>
          <p className="text-lg text-[#7B6F66] max-w-2xl mx-auto">
            Tailored solutions for both sides of the creative process
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {personas.map((persona, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-[400px]"
            >
              {/* Background image - replace with actual image */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">📷</div>
                  <p className="text-[#7B6F66]">Visual of {persona.role.toLowerCase()}</p>
                </div>
                {/* Actual implementation would use: */}
                {/* <img src={persona.image} alt={persona.role} className="w-full h-full object-cover" /> */}
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <div className={`w-14 h-14 ${persona.color} rounded-lg flex items-center justify-center mb-4`}>
                  {persona.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{persona.role}</h3>
                <p className="text-white/90 mb-6">{persona.description}</p>
                <button className="self-start px-6 py-2 bg-white text-[#800000] rounded-lg font-medium hover:bg-[#800000] hover:text-white transition-colors duration-300">
                  Join →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}