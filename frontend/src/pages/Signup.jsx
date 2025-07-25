// import { useAuth } from "../context/AuthContext"; 
// import { useNavigate } from 'react-router-dom';

// export default function Signup() {
//   const navigate = useNavigate();
//     const { signup } = useAuth();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#FDF6F0] p-4">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-[#e0e0e0]">
//         <div className="flex justify-center mb-6">
//           <div className="bg-[#800000] p-3 rounded-full">
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               className="h-8 w-8 text-white" 
//               fill="none" 
//               viewBox="0 0 24 24" 
//               stroke="currentColor"
//             >
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth={2} 
//                 d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" 
//               />
//             </svg>
//           </div>
//         </div>
        
//         <h2 className="text-3xl font-bold mb-6 text-center text-[#800000]">
//           Create Account
//         </h2>
        
//        <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         const name = e.target.name.value;
//         const email = e.target.email.value;
//         signup(name, email);
//         navigate("/roles");
//       }}
//     >
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name
//             </label>
//             <input
//               id="name"
//               type="text"
//               placeholder="Enter your full name"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-[#800000] outline-none transition"
//               required
//             />
//           </div>
          
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-[#800000] outline-none transition"
//               required
//             />
//           </div>
          
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               placeholder="Create a password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-[#800000] outline-none transition"
//               required
//             />
//           </div>
          
//           <div>
//             <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
//               Confirm Password
//             </label>
//             <input
//               id="confirm-password"
//               type="password"
//               placeholder="Confirm your password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-[#800000] outline-none transition"
//               required
//             />
//           </div>
          
//           <div className="flex items-start">
//             <div className="flex items-center h-5">
//               <input
//                 id="terms"
//                 type="checkbox"
//                 className="h-4 w-4 text-[#800000] focus:ring-[#800000] border-gray-300 rounded"
//                 required
//               />
//             </div>
//             <div className="ml-3 text-sm">
//               <label htmlFor="terms" className="font-medium text-gray-700">
//                 I agree to the <a href="#" className="text-[#800000] hover:underline">Terms of Service</a> and <a href="#" className="text-[#800000] hover:underline">Privacy Policy</a>
//               </label>
//             </div>
//           </div>
          
//           <button 
//             type="submit"
//             className="w-full bg-[#800000] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#6a0000] transition duration-300 shadow-md mt-2"
//           >
//             Create Account
//           </button>
//         </form>
        
//         <div className="mt-6">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">
//                 Or sign up with
//               </span>
//             </div>
//           </div>
          
//           <div className="mt-6 grid grid-cols-2 gap-3">
//             <button
//               type="button"
//               className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
//             >
//               <svg className="w-5 h-5" viewBox="0 0 24 24">
//                 <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
//                 <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
//                 <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
//                 <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
//               </svg>
//             </button>
            
//             <button
//               type="button"
//               className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
//             >
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
//               </svg>
//             </button>
//           </div>
//         </div>
        
//         <p className="mt-6 text-center text-sm text-gray-600">
//           Already have an account?{' '}
//           <a href="/login" className="text-[#800000] font-medium hover:underline">
//             Sign in
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiPenTool, FiArrowRight } from "react-icons/fi";
import { FaPalette, FaBrush } from "react-icons/fa";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    setIsLoading(true);
    setError("");
    
    try {
      await signup(name, email, password);
      navigate("/roles");
    } catch (error) {
      setError(error.response?.data?.message || error.message || "Signup failed");
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
              <FiPenTool className="text-white text-xl" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-[#800000] font-serif">Join DesignHub</h2>
          <p className="text-gray-600 mt-2">Create your creative space</p>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm flex items-center">
            <FiArrowRight className="mr-2" /> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#800000]">
              <FiUser />
            </div>
            <input
              type="text"
              name="name"
              required
              className="pl-10 mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000]/50 focus:border-[#800000] bg-white/50"
              placeholder="Your creative name"
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#800000]">
              <FiMail />
            </div>
            <input
              type="email"
              name="email"
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
              name="password"
              required
              minLength="6"
              className="pl-10 mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000]/50 focus:border-[#800000] bg-white/50"
              placeholder="Your secret palette"
            />
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
                Creating your canvas...
              </>
            ) : (
              <>
                <FiPenTool /> Start Designing
              </>
            )}
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-600">
          <p className="flex items-center justify-center gap-1">
            Already have an account?{" "}
            <Link 
              to="/login" 
              className="font-medium text-[#800000] hover:text-[#800000]/80 hover:underline flex items-center gap-1"
            >
              Paint here <FiArrowRight />
            </Link>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-[#800000]/10">
          <p className="text-xs text-center text-gray-500">
            By joining, you agree to our <span className="text-[#800000] cursor-pointer">Creative Terms</span> and <span className="text-[#800000] cursor-pointer">Color Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
