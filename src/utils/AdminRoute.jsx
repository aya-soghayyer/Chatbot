// components/AdminRoute.js
import { Navigate } from "react-router-dom";
import Cookie from "js-cookie";

const AdminRoute = ({ children }) => {
  const token = Cookie.get("token");
  const role = localStorage.getItem("role");

  if (!token || role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AdminRoute;
