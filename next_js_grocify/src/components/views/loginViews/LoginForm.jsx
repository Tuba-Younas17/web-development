"use client"
import React, { useState } from "react";

const LoginForm = () => {
    const [first, setfirst] = useState({
        email: ``,
        password: ``
    })
    return (
    <>
      <form className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="you@example.com"
            value={FormData.email}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="********"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg font-semibold transition-all"
        >
          Sign In
        </button>
      </form>
    </>
  );
};

export default LoginForm;
