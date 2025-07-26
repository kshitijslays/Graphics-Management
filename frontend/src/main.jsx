import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Make sure this is imported
import App from "./App";
import "./index.css"; // Assuming you have some global styles
import { AuthProvider } from "./context/AuthContext"; // or wherever your context is

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ This must wrap the components that use routing */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
