export default function HeroSection() {
  return (
    <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-[#800000] mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-[#2C2C2C] mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Heading with animated underline */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-6">
          <span className="relative inline-block pb-2">
            College Design Collaboration Portal
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#800000] scale-x-0 hover:scale-x-100 origin-center transition-transform duration-500"></span>
          </span>
        </h1>
        
        {/* Paragraph */}
        <p className="text-xl text-[#2C2C2C]/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Streamline content sharing between Brand Managers and Designers with our secure collaboration platform.
        </p>
        
        {/* Action buttons */}
        <div className="flex justify-center gap-6">
          <button className="px-8 py-3 bg-[#800000] text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#700000]">
            Login
          </button>
          <button className="px-8 py-3 border-2 border-[#800000] text-[#800000] rounded-lg hover:bg-[#800000]/5 transition-all duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}