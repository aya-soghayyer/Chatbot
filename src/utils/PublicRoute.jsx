// components/PublicRoute.js
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie"; // or use universal-cookie

const PublicRoute = ({ children }) => {
  const token = Cookies.get("token");

  if (token) {
    return <Navigate to="/userchat" replace />;
  }

  return children;
};

export default PublicRoute;
