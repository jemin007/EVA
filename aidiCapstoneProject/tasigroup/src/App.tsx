import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Tools from "./pages/Tools";
import Share from "./pages/Share";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("user_id");

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex">
        {isAuthenticated && <Sidebar />} {/* Sidebar only when logged in */}
        <div className="flex-1">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/share" element={<Share />} />
            <Route path="/intro" element={<Share />} />

            {/* Protected Dashboard Route */}
            <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />

            {/* Redirect unknown routes to Home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
