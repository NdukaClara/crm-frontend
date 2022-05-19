import React from "react";
import { Navigate } from "react-router-dom";

const isAuth = true;
export const PrivateRoute = ({ children }) => {
  return isAuth ? children : <Navigate to="/" replace />;
};
