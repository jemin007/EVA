import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import Profile from "./pages/Profile";
import Account from "./pages/Account";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isDashboardPage = ["/dashboard", "/profile", "/account"].includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      {!isDashboardPage && <Navbar />} {/* Navbar only on public pages */}
      {!isDashboardPage && <Sidebar />} {/* Sidebar only on public pages */}
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("user_id"));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("user_id"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />} />
          <Route path="/signup" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <SignUp />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/share" element={<Share />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" replace />} />
          <Route path="/account" element={isAuthenticated ? <Account /> : <Navigate to="/login" replace />} />

          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
