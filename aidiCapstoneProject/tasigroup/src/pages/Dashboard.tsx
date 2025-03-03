import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Home, Settings, LogOut } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    // Fetch user email from localStorage
    const email = localStorage.getItem("user_email");
    if (email) {
      setUserEmail(email);
    } else {
      navigate("/login"); // Redirect if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_email");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <button
            className="flex items-center gap-3 p-3 w-full text-left hover:bg-gray-700 rounded-lg"
            onClick={() => navigate("/dashboard")}
          >
            <Home size={20} /> Home
          </button>
          <button
            className="flex items-center gap-3 p-3 w-full text-left hover:bg-gray-700 rounded-lg"
            onClick={() => navigate("/profile")}
          >
            <User size={20} /> Profile
          </button>
          <button
            className="flex items-center gap-3 p-3 w-full text-left hover:bg-gray-700 rounded-lg"
            onClick={() => navigate("/account")}
          >
            <Settings size={20} /> Account
          </button>
          <button
            className="flex items-center gap-3 p-3 w-full text-left hover:bg-red-600 rounded-lg mt-auto"
            onClick={handleLogout}
          >
            <LogOut size={20} /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8">
        {/* Top bar with user info */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Welcome, {userEmail || "User"}!</h1>
        </div>

        {/* Dashboard Content */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
          <p className="text-gray-600">Here you can manage your profile, account settings, and more.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
