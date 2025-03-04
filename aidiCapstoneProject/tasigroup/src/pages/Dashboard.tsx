import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Home, Settings, LogOut } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("user_email");
    if (!email) {
      navigate("/login"); // Redirect if not logged in
    } else {
      setUserEmail(email);
    }
  }, [navigate]);

  // Logout function
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      // Make an API call to logout
      const response = await fetch("http://localhost:8000/logout", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        // Clear frontend storage
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_email");
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
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-6 h-full">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-4 flex-1">
          <button className="flex items-center gap-3 p-3 w-full text-left hover:bg-gray-700 rounded-lg"
            onClick={() => navigate("/dashboard")}>
            <Home size={20} /> Home
          </button>
          <button className="flex items-center gap-3 p-3 w-full text-left hover:bg-gray-700 rounded-lg"
            onClick={() => navigate("/profile")}>
            <User size={20} /> Profile
          </button>
          <button className="flex items-center gap-3 p-3 w-full text-left hover:bg-gray-700 rounded-lg"
            onClick={() => navigate("/account")}>
            <Settings size={20} /> Account
          </button>
        </nav>
        <button className="flex items-center gap-3 p-3 w-full text-left hover:bg-red-600 rounded-lg"
          onClick={handleLogout}>
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Welcome, {userEmail || "User"}!</h1>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
          <p className="text-gray-600">
            Here you can manage your profile, account settings, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
