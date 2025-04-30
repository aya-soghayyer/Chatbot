// src/hooks/useLoginForm.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLoginForm = (authAdminService) => {
  const [formData, setFormData] = useState({
    studentId: "",
    miloPassword: "",
  });
  const [isInvalidID, setInvalidID] = useState(false);
  const [isInvalidMilo, setInvalidMilo] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState("");
  const [isError, setError] = useState("");
  const [showMiloPassword, setShowMiloPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const data = await authAdminService.login(formData.studentId, formData.miloPassword);
      setSuccess("Login successful!");
      // const userData = localStorage.setItem("users", JSON.stringify(formData));
      // console.log(token)
      // const tokenCoockie = 
      navigate("/admin");
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
  };
};