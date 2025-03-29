import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const isAuthenticated = window.localStorage.getItem("authToken") !== null;
      console.log("Is Authenticated:", isAuthenticated);

	return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;
