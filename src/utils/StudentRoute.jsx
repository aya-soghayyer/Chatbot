// components/StudentRoute.js
import { Navigate } from "react-router-dom";
import Cookie from "js-cookie";

const StudentRoute = ({ children }) => {
  const token = Cookie.get("token");
  const role = localStorage.getItem("role");

  if (!token || role !== "student") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default StudentRoute;
