// src/hooks/useSignupForm.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const useSignupForm = (authService) => {
  const [formData, setFormData] = useState({
    studentId: "",
    portalPassword: "",
    miloPassword: "",
  });
  const [isInvalid, setInvalid] = useState({
    studentId: false,
    portalPassword: false,
    miloPassword: false,
  });
  const [isSuccess, setSuccess] = useState("");
  const [isError, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showMiloPassword, setShowMiloPassword] = useState(false);
const [showPortalPassword, setShowPortalPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    setLoading(true);

    try {
      const data = await authService.signup(
        formData.studentId,
        formData.portalPassword,
        formData.miloPassword
      );
      setSuccess("Signup successful! Check your email.");
      setTimeout(() => navigate("/userchat"), 2000); // Navigate after success
    } catch (error) {
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleHelp = () => setShowHelp(!showHelp);

  return {
    formData,
    handleChange,
    handleSubmit,
    isInvalid,
    setInvalid,
    isSuccess,
    isError,
    isLoading,
    showHelp,
    toggleHelp,
    showMiloPassword,
    setShowMiloPassword,
    showPortalPassword, 
    setShowPortalPassword
  };
};