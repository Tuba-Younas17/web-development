import LoginForm from "@/components/views/loginViews/LoginForm";
import React, { useEffect } from "react";

const LoginPage = () => {	
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Login
        </h2>

        {/* client side form start */}
        <LoginForm />
        {/* client side form end */}

        <p className="mt-6 text-gray-600 text-sm text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-indigo-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
