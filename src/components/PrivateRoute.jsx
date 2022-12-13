import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, loggedInUser }) => {
  return loggedInUser ? children : <Navigate to="/login"></Navigate>;
};

// logged in user instead of auth.current user
export default PrivateRoute;
