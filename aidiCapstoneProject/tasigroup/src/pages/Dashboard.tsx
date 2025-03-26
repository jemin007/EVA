import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Home, Settings, LogOut } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found, redirecting to login...");
        navigate("/login");
        return;
      }

      try {
        console.log("Fetching user data...");
        const response = await fetch("http://localhost:8000/chat/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        console.log("Response status:", response.status, "Data:", data);

        if (response.ok) {
          setUserName(data.name || "User");
        } else {
          console.error("Error:", data.detail);
          navigate("/login");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        navigate("/login");
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8000/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        console.error("Logout failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-purple-900 to-purple-700 text-white flex flex-col p-6 h-full shadow-lg">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Dashboard
        </h2>
        <nav className="space-y-4 flex-1">
          <button
            className="flex items-center gap-3 p-3 w-full text-left hover:bg-purple-600 rounded-lg transition-all duration-300 hover:scale-105"
            onClick={() => navigate("/dashboard")}
          >
            <Home size={20} className="text-purple-300" /> Home
          </button>
          <button
            className="flex items-center gap-3 p-3 w-full text-left hover:bg-purple-600 rounded-lg transition-all duration-300 hover:scale-105"
            onClick={() => navigate("/profile")}
          >
            <User size={20} className="text-purple-300" /> Profile
          </button>
          <button
            className="flex items-center gap-3 p-3 w-full text-left hover:bg-purple-600 rounded-lg transition-all duration-300 hover:scale-105"
            onClick={() => navigate("/account")}
          >
            <Settings size={20} className="text-purple-300" /> Account
          </button>
        </nav>
        {/* Logout Button */}
        <button
          className="flex items-center gap-3 p-3 w-full text-left hover:bg-red-600 rounded-lg transition-all duration-300 hover:scale-105"
          onClick={handleLogout}
        >
          <LogOut size={20} className="text-red-300" /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Welcome, {userName || "User"}!
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-xl font-semibold mb-4 text-purple-700">Profile Overview</h2>
            <p className="text-gray-600">
              Manage your profile settings and update your personal information.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-xl font-semibold mb-4 text-purple-700">Recent Activity</h2>
            <p className="text-gray-600">
              View your recent activities and interactions on the platform.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-xl font-semibold mb-4 text-purple-700">Account Settings</h2>
            <p className="text-gray-600">
              Update your account preferences and security settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;