// components/StudentRoute.js
import { Navigate } from "react-router-dom";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

const StudentRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = Cookie.get("token");
  const role = localStorage.getItem("role");

  if (!token || role !== "student") {
    // return navigate("/login", { replace: true });
    return <Navigate to="/" replace />;
  }

  return children;
};

export default StudentRoute;
