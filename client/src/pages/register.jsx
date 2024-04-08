import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function RegisterUser(ev) {
    ev.preventDefault();
    axios.post('/register', {
      name,
      email,
      password,
    })}
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>

        <input
          type="name"
          id="nmae"
          name="nmae"
          className="w-full px-3 py-2 border rounded-full mb-2 focus:outline-none focus:border-red-400"
          placeholder="Enter your nmae"
          required
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          onSubmit={RegisterUser}
        />
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-full mb-2 focus:outline-none focus:border-red-400"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-3 py-2 border rounded-full mb-4 focus:outline-none focus:border-red-400"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button
          onSubmit={RegisterUser}
          type="submit"
          className="w-full bg-red-500 text-white font-semibold px-4 py-2 rounded-full mb-4 hover:bg-red-500 focus:outline-none focus:bg-red-600"
        >
          Register
        </button>
        <div className="font-semibold">
          Don't you have an account?{" "}
          <Link className="underline" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
