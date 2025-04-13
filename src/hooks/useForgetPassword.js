// // src/hooks/useForgetPassword.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { domainName } from "../App";

export const useForgetPassword = () => {
  const [userData, setUserData] = useState({
    userId: "",
    portalPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isInvalidPassword, setInvalidPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState("");
  const [isError, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(isSuccess);
    setError(isError);


    try {
      const response = await fetch(`${domainName}user/forgetpassword`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          portal_id: userData.userId,
          portal_password: userData.portalPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message || "Got the data successfully.");
        navigate("/resetpassword");
      } else {
        setError(data.message || "Operation failed.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    userData,
    showPassword,
    setShowPassword,
    handleChange,
    handleSubmit,
    isInvalidPassword,
    setInvalidPassword,
    isLoading,
    isSuccess,
    isError,
  };
};
