// src/hooks/useChangePassword.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { domainName } from "../App";

export const useChangePassword = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isInvalidPassword, setInvalidPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState("");
  const [isError, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(isSuccess);
    setError(isError);

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("New password and confirm password do not match.");
      setLoading(false);
      return;
    }

    try {
      const token = Cookie.get("token");
      const response = await fetch(`${domainName}user/changepassword`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          password: passwordData.newPassword,
          old_password: passwordData.currentPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message || "Password changed successfully.");
        Cookie.remove("token");
        localStorage.removeItem("users");
        navigate("/login");
      } else {
        setError(data.message || "Password change failed.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    passwordData,
    showPassword,
    showNewPassword,
    setShowNewPassword,
    showConfirmPassword,
    setShowConfirmPassword,
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
