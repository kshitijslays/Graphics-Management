// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import RoleSelect from './pages/RoleSelect';
// import Dashboard from './pages/Dashboard';
// import Home from './pages/Home';
// import Layout from './layout/layout';

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/roles" element={<RoleSelect />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// App.jsx
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RoleSelect from './pages/RoleSelect';
import DesignerDashboard from './pages/DesignerDashboard';
import ManagerDashboard from './pages/BrandManagerDashboard';
import Home from './pages/Home';
import Layout from './layout/layout';
import Group from './pages/Group';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/roles" element={<RoleSelect />} />
      <Route path="/designerdashboard" element={<DesignerDashboard />} />
      <Route path="/managerdashboard" element={<ManagerDashboard />} />
      <Route path="/group" element={<Group />} />
    </Routes>
  );
}
