import React, { useState } from "react";
import { FaPalette, FaBrush, FaCrown, FaChevronRight } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";

const DepartmentSelect = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const departments = [
    { 
      id: "brand-manager", 
      name: "Brand Manager", 
      description: "Shape brand identity & strategy",
      illustration: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mb-6">
          <circle cx="40" cy="25" r="15" stroke="#800000" strokeWidth="2" fill="none"/>
          <path d="M25 35 L40 45 L55 35" stroke="#800000" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <rect x="30" y="50" width="20" height="15" stroke="#800000" strokeWidth="2" fill="none" rx="2"/>
          <circle cx="20" cy="20" r="3" stroke="#800000" strokeWidth="1.5" fill="none"/>
          <circle cx="60" cy="30" r="2" stroke="#800000" strokeWidth="1.5" fill="none"/>
          <path d="M15 55 Q20 50 25 55" stroke="#800000" strokeWidth="1.5" fill="none"/>
        </svg>
      )
    },
    { 
      id: "graphic-designer", 
      name: "Graphic Designer", 
      description: "Create visual masterpieces",
      illustration: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mb-6">
          <rect x="20" y="20" width="40" height="30" stroke="#800000" strokeWidth="2" fill="none" rx="4"/>
          <circle cx="30" cy="35" r="6" stroke="#800000" strokeWidth="2" fill="none"/>
          <path d="M45 30 L55 30 M45 35 L50 35 M45 40 L55 40" stroke="#800000" strokeWidth="2" strokeLinecap="round"/>
          <path d="M25 55 L35 65 L55 45" stroke="#800000" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <circle cx="15" cy="15" r="2" stroke="#800000" strokeWidth="1.5" fill="none"/>
          <circle cx="65" cy="25" r="2.5" stroke="#800000" strokeWidth="1.5" fill="none"/>
          <path d="M60 60 Q65 55 70 60" stroke="#800000" strokeWidth="1.5" fill="none"/>
        </svg>
      )
    },
    { 
      id: "creative-director", 
      name: "Creative Director", 
      description: "Lead creative vision & teams",
      illustration: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mb-6">
          <path d="M40 15 L45 25 L55 25 L47 33 L50 43 L40 38 L30 43 L33 33 L25 25 L35 25 Z" stroke="#800000" strokeWidth="2" fill="none"/>
          <circle cx="25" cy="55" r="8" stroke="#800000" strokeWidth="2" fill="none"/>
          <circle cx="55" cy="55" r="8" stroke="#800000" strokeWidth="2" fill="none"/>
          <path d="M33 55 L47 55" stroke="#800000" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="15" cy="25" r="2" stroke="#800000" strokeWidth="1.5" fill="none"/>
          <circle cx="65" cy="35" r="2" stroke="#800000" strokeWidth="1.5" fill="none"/>
          <path d="M10 65 Q15 60 20 65" stroke="#800000" strokeWidth="1.5" fill="none"/>
        </svg>
      )
    }
  ];

  const handleSelect = (deptId) => {
    console.log(`Navigating to /dashboard/${deptId}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F7EADE] via-[#F7EADE]/80 to-[#F7EADE]/60 p-4">
      <div className="max-w-5xl w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-[#800000]/10 p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#800000] to-[#800000]/90 rounded-2xl mb-6 shadow-lg">
            <FaCrown className="text-2xl text-white" />
          </div>
          <h1 className="text-4xl font-semibold text-[#800000] mb-4 font-serif">
            Select Your Creative Space
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose your department to begin creating extraordinary work
          </p>
        </div>

        {/* Department Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => handleSelect(dept.id)}
              onMouseEnter={() => setHoveredCard(dept.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative flex flex-col items-center p-8 bg-gradient-to-br from-white to-[#F7EADE]/20 rounded-2xl border border-[#800000]/10 hover:border-[#800000]/25 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/3 to-[#F7EADE]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              {/* Custom illustration */}
              <div className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                {dept.illustration}
              </div>
              
              {/* Department name */}
              <h3 className="relative z-10 text-xl font-medium text-[#800000] mb-3 font-serif group-hover:text-[#800000]/90 transition-colors duration-300">
                {dept.name}
              </h3>
              
              {/* Description */}
              <p className="relative z-10 text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300 text-center mb-4">
                {dept.description}
              </p>
              
              {/* Enter arrow */}
              <div className="relative z-10 flex items-center text-xs text-[#800000]/60 group-hover:text-[#800000] transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                <span className="mr-1">Enter</span>
                <FaChevronRight className="text-xs" />
              </div>
              
              {/* Decorative dots */}
              <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#800000]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 w-1 h-1 bg-[#F7EADE] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          ))}
        </div>

        {/* Back button */}
        <div className="text-center">
          <button 
            onClick={() => console.log('Navigate back')}
            className="inline-flex items-center gap-3 px-6 py-3 text-[#800000]/70 hover:text-[#800000] bg-[#F7EADE]/30 hover:bg-[#F7EADE]/50 rounded-xl border border-[#800000]/20 hover:border-[#800000]/40 transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-sm"
          >
            <FiArrowLeft className="text-base" />
            <span className="font-medium">Back to login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentSelect;