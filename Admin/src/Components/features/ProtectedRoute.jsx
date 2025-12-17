import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hook";

const ProtectedRoute = ({ children }) => {
  const { user } = useAppSelector((state) => state.user);

  // ❌ Not logged in
  if (!user || !user.token) {
    return <Navigate to="/login" replace />;
  }

  // ❌ Logged in but not approved
  if (user.user?.status !== "approved") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
