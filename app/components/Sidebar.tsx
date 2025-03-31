"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", path: "/user_dash", icon: "📊" },
    { name: "Products", path: "/user_dash/products", icon: "📦" },
    { name: "Orders", path: "/user_dash/orders", icon: "🛍️" },
    { name: "Profile", path: "/user_dash/profile", icon: "👤" },
    { name: "Settings", path: "/user_dash/settings", icon: "⚙️" },
  ];

  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-4">
      <div className="text-xl font-bold mb-8">Admin Panel</div>
      <nav>
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
    </div>
  );
};

export default Sidebar;
