import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", name: "" });
  const [newName, setNewName] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("user_email");
    if (email) {
      setUser({ email, name: "User" }); // Placeholder, replace with API data
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleUpdate = () => {
    if (newName) {
      setUser({ ...user, name: newName });
      setNewName("");
      alert("Profile updated successfully!");
    }
  };

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
        <h1 className="text-3xl font-bold mb-4">Account Settings</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Update Profile</h2>
          <p><strong>Current Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>

          {/* Name Update Form */}
          <div className="mt-4">
            <label className="block text-gray-700">Update Name:</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Enter new name"
            />
            <button
              onClick={handleUpdate}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Update Name
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
