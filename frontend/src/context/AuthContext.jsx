import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", credentials);
      if (res.data?.token) {
        localStorage.setItem('token', res.data.token);
        setUser({ token: res.data.token });
        toast.success("Login successful!");
        return true;
      } else {
        toast.error("Login failed. Please check your credentials.");
        return false;
      }
    } catch (err) {
      toast.error("Login failed. Please try again.");
      console.error("Login failed", err);
      return false;
    }
  };

  const signup = async (name, email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/users/register", { name, email, password });
      setUser(res.data);
      toast.success("Registration successful!");
      return res.data;
    } catch (err) {
      toast.error("Signup failed. Please try again.");
      console.error("Signup failed", err);
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup }}>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
