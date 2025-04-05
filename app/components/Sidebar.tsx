"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    contact: "",
    age: "",
    gender: "",
    password: "",
  });

  const menuItems = [
    { name: "Dashboard", path: "/user_dash", icon: "📊" },
    { name: "Products", path: "/user_dash/products", icon: "📦" },
    { name: "Orders", path: "/user_dash/orders", icon: "🛍️" },
    { name: "Profile", path: "/user_dash/profile", icon: "👤" },
    { name: "Settings", path: "/user_dash/settings", icon: "⚙️" },
  ];

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to update the profile
    setIsProfileModalOpen(false);
  };

  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-4 flex flex-col">
      <div className="text-xl font-bold mb-8">Admin Panel</div>
      <nav className="flex-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center space-x-2 p-3 rounded-lg mb-2 transition-colors ${
              pathname === item.path ? "bg-blue-600" : "hover:bg-gray-700"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Profile Button */}
      <div className="mt-auto mb-4">
        <button
          onClick={() => setIsProfileModalOpen(true)}
          className="w-full flex items-center space-x-2 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
        >
          <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            👤
          </span>
          <span>Edit Profile</span>
        </button>
      </div>

      {/* Profile Modal */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Edit Profile
            </h2>
            <form onSubmit={handleProfileUpdate}>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Contact</label>
                  <input
                    type="text"
                    value={profileData.contact}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        contact: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Age</label>
                  <input
                    type="number"
                    value={profileData.age}
                    onChange={(e) =>
                      setProfileData({ ...profileData, age: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Gender</label>
                  <select
                    value={profileData.gender}
                    onChange={(e) =>
                      setProfileData({ ...profileData, gender: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    value={profileData.password}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        password: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsProfileModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
