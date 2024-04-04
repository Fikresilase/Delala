import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        
        
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-full mb-2 focus:outline-none focus:border-red-400"
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-3 py-2 border rounded-full mb-4 focus:outline-none focus:border-red-400"
          placeholder="Enter your password"
          required
        />
        <button
          type="submit"
          className="w-full bg-red-500 text-white font-semibold px-4 py-2 rounded-full mb-4 hover:bg-red-500 focus:outline-none focus:bg-red-600"
        >
          Login
        </button>
        <div className="font-semibold">
          Don't you have an account?{" "}
          <Link className="underline" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;