// src/hooks/useChangePassword.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { domainName } from "../App";
import { useForgetPassword } from "./useForgetPassword";
import { useToken } from "../store/TokenContext";


export const useResetPassword = () => {


  const [passwordData, setPasswordData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isInvalidNewPassword, setInvalidNewPassword] = useState(false);
  const [isInvalidConfirmPassword, setInvalidConfirmPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState("");
  const [isError, setError] = useState("");
  const navigate = useNavigate();
  const {token} = useToken()

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
      const response = await fetch(`${domainName}user/resetpassword`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          password: passwordData.newPassword,
        }),
      });
      console.log(token)
      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message || "Password changed successfully.");
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
    showNewPassword,
    setShowNewPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isInvalidNewPassword,
    setInvalidNewPassword,
    isInvalidConfirmPassword,
    setInvalidConfirmPassword,
    handleChange,
    handleSubmit,
    isLoading,
    isSuccess,
    isError,
  };
};
