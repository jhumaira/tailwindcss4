import React from "react";
import logo from "../assets/logo.svg";

export default function Login({ setIsAuthenticated }) {
  const handleLogin = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    // ✅ Updated credentials
    if (username === "midwife" && password === "birth123") {
      setIsAuthenticated(true);
      // ✅ Fix: Redirect includes basename
      window.location.href = "/tailwindcss4/home";
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-accent/20 to-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Logo" className="h-16 mb-3" />
          <h1 className="text-3xl font-heading font-bold text-dark">Welcome</h1>
        </div>

        {/* Mission Statement */}
        <p className="text-center text-muted mb-6">
          Our mission is to empower women worldwide through holistic doula 
          and midwifery training, combining tradition, compassion, and 
          education for safe, natural births.
        </p>

        {/* Login Form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-semibold text-dark mb-2">
              Username
            </label>
            <input
              name="username"
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-dark mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-white font-bold py-3 rounded-xl hover:bg-dark transition"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
