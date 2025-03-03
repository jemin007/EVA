import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", name: "User" });

  useEffect(() => {
    const email = localStorage.getItem("user_email");
    if (email) {
      setUser({ ...user, email });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <button
            className="p-3 w-full text-left hover:bg-gray-700 rounded-lg"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>
          <button
            className="p-3 w-full text-left hover:bg-gray-700 rounded-lg"
            onClick={() => navigate("/profile")}
          >
            Profile
          </button>
          <button
            className="p-3 w-full text-left hover:bg-gray-700 rounded-lg"
            onClick={() => navigate("/account")}
          >
            Account
          </button>
          <button
            className="p-3 w-full text-left hover:bg-red-600 rounded-lg mt-auto"
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">User Information</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
