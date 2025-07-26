import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiMail, FiLock, FiArrowRight, FiLogIn } from "react-icons/fi";
import { FaPalette, FaBrush } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const success = await login({ email, password });
      if (success) {
        navigate("/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError(error.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FDF6F0] to-[#f5e6d8] px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-[#800000]/10">
        <FaPalette size={80} />
      </div>
      <div className="absolute bottom-20 right-10 text-[#800000]/10">
        <FaBrush size={80} />
      </div>
      
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#800000]/10 relative z-10">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <div className="bg-[#800000] p-3 rounded-full inline-flex">
              <FiLogIn className="text-white text-xl" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-[#800000] font-serif">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Continue your creative journey</p>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm flex items-center">
            <FiArrowRight className="mr-2" /> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#800000]">
              <FiMail />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-10 mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000]/50 focus:border-[#800000] bg-white/50"
              placeholder="designer@example.com"
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#800000]">
              <FiLock />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="pl-10 mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000]/50 focus:border-[#800000] bg-white/50"
              placeholder="Your secret palette"
            />
          </div>

          <div className="flex justify-end">
            <Link 
              to="/forgot-password" 
              className="text-sm text-[#800000] hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all flex items-center justify-center gap-2 ${
              isLoading 
                ? "bg-[#800000]/70 cursor-not-allowed" 
                : "bg-[#800000] hover:bg-[#800000]/90 hover:shadow-md"
            }`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Authenticating...
              </>
            ) : (
              <>
                <FiLogIn /> Continue Creating
              </>
            )}
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-600">
          <p className="flex items-center justify-center gap-1">
            New to DesignHub?{" "}
            <Link 
              to="/signup" 
              className="font-medium text-[#800000] hover:text-[#800000]/80 hover:underline flex items-center gap-1"
            >
              Join our studio <FiArrowRight />
            </Link>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-[#800000]/10">
          <p className="text-xs text-center text-gray-500">
            By continuing, you agree to our <span className="text-[#800000] cursor-pointer">Creative Terms</span> and <span className="text-[#800000] cursor-pointer">Color Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;