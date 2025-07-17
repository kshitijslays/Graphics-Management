import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";

export default function Layout() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div className="fixed top-0 left-0 h-screen z-20">
        <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      </div>
      <div
        className={`transition-all duration-300 ${
          isExpanded ? "ml-72" : "ml-20"
        }`}
      >
        <Home />
      </div>
    </div>
  );
}