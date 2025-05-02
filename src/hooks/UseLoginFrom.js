// src/hooks/useLoginForm.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

export const useLoginForm = (authService) => {
  const [formData, setFormData] = useState({
    studentId: "",
    miloPassword: "",
  });
  const [username, setUsername] = useState("");
  const [isInvalidID, setInvalidID] = useState(false);
  const [isInvalidMilo, setInvalidMilo] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState("");
  const [isError, setError] = useState("");
  const [showMiloPassword, setShowMiloPassword] = useState(false);
  const navigate = useNavigate(AuthService);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const data = await authService.login(formData.studentId, formData.miloPassword);
      setSuccess("Login successful!");
      // const userData = localStorage.setItem("users", JSON.stringify(formData));
      // console.log(token)
      setUsername(data.user.user.name)
      localStorage.setItem("name", data.user.user.name);
      localStorage.setItem("role", data.user.user.role);
      
      if (data.user.user.role === "admin") {
        navigate("/admin");
      }
      else if (data.user.user.role === "student") { 
        navigate("/userchat");
        setUsername(data.user.user.name)

      }
      // console.log("user "+ localStorage.getItem("name"))
      
      // const tokenCoockie = 
      // navigate("/userchat");
    } catch (error) {
      setError("Login failed. Please check your student id and password.");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isInvalidID,
    setInvalidID,
    isInvalidMilo,
    setInvalidMilo,
    isLoading,
    isSuccess,
    isError,
    showMiloPassword,
    setShowMiloPassword,
    username,
  };
};