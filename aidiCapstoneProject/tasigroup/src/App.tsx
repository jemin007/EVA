import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ChatRoom from './pages/ChatRoom';
import UnauthenticatedChatRoom from './pages/UnauthenticatedChatRoom';
import HowEVAWorks from './pages/HowEVAWorks';
import Pricing from './pages/Pricing';
import PromptLibrary from './pages/PromptLibrary';
import ReportCard from './pages/ReportCard';

// ✅ Custom hook for authentication status
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const handleAuthChange = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleAuthChange);
    return () => window.removeEventListener("storage", handleAuthChange);
  }, []);

  return isAuthenticated;
};

// ✅ Protected Route Component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = useAuth();
  //return isAuthenticated ? children : <Navigate to="/login" replace />;
  return isAuthenticated ? children : <UnauthenticatedChatRoom />;

};

const App = () => {
  const isAuthenticated = useAuth(); // Track authentication status

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex">
        {/* ✅ Sidebar only renders if the user is authenticated */}
        {isAuthenticated && <Sidebar />}

        <div className="flex-1">
          <Navbar />
          <Routes>
            {/* ✅ Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/share" element={<Share />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/how-eva-works" element={<HowEVAWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/prompt-library" element={<PromptLibrary />} />
            <Route path="/report-card" element={<ReportCard />} />

            {/* ✅ Protected Route: Dashboard */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

            {/* ✅ Protected Route: Chat Room */}
            <Route path="/chat-room" element={<ProtectedRoute><ChatRoom /></ProtectedRoute>} />

            {/* ✅ Public Route: Unauthenticated Chat Room */}
            <Route path="/unauthenticated-chat-room" element={<UnauthenticatedChatRoom />} />

            {/* ✅ Redirect unknown routes to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
