import React from "react";

export default function LogoutButton({ setIsAuthenticated }) {
  const handleLogout = () => {
    setIsAuthenticated(false);
    window.location.href = "/tailwindcss4/"; // Redirect to login page
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
    >
      Logout
    </button>
  );
}
