"use client";

import { useState } from "react";
import Sidebar from "../../components/Sidebar";

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: false,
    language: "English",
    twoFactorAuth: false,
  });

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings((prev) => ({
      ...prev,
      language: e.target.value,
    }));
  };

  const handlePasswordUpdate = () => {
    // TODO: Implement password update logic
    alert("Password update functionality will be implemented soon");
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      // TODO: Implement account deletion logic
      alert("Account deletion functionality will be implemented soon");
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Notifications
                  </label>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        checked={settings.emailNotifications}
                        onChange={() => handleToggle("emailNotifications")}
                      />
                      <span className="ml-2">Receive email notifications</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Language
                  </label>
                  <select
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={settings.language}
                    onChange={handleLanguageChange}
                  >
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Security</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Two-Factor Authentication
                  </label>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        checked={settings.twoFactorAuth}
                        onChange={() => handleToggle("twoFactorAuth")}
                      />
                      <span className="ml-2">Enable 2FA</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Change Password
                  </label>
                  <button
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    onClick={handlePasswordUpdate}
                  >
                    Update Password
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
