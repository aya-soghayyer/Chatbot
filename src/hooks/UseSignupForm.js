// src/hooks/useSignupForm.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const useSignupForm = (authService) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    studentId: "",
    portalPassword: "",
    miloPassword: "",
    confirmPassword: "",
  });

  // console.log(formData)

  const [isSuccess, setSuccess] = useState("");
  const [isError, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showMiloPassword, setShowMiloPassword] = useState(false);
  const [showPortalPassword, setShowPortalPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isInvalidID, setInvalidID] = useState(false);
  const [isInvalidMilo, setInvalidMilo] = useState(false);
  const [isInvalidFirst, setInvalidFirst] = useState(false);
  const [isInvalidLast, setInvalidLast] = useState(false);
  const [isInvalidConfirm, setInvalidConfirm] = useState(false);
  const [isInvalidPortal, setInvalidPortal] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    setLoading(true);

    // Validate passwords match
    if (formData.miloPassword !== formData.confirmPassword) {
      setInvalidConfirm(true)
      setError("Milo password and confirm paassword didn't match !");
      setLoading(false);
      return;
    }

    try {
      const data = await authService.signup(
        formData.studentId,
        formData.portalPassword,
        formData.miloPassword,
        formData.firstName,
        formData.lastName
      );
      console.log("useSignupForm: "+ data)
      // if (data.Token) {
      //   const expiresAt = new Date(new Date().getTime() + 30 * 60 * 1000); // 30 mins
      //   Cookies.set("token", data.Token, {
      //     expires: expiresAt,
      //     secure: true,
      //     sameSite: "Strict",
      //   });
      // if(response.ok){
      //   navigate("/userchat")
      // }
      if(data){
        console.log("Navigating to userchat...");
        navigate("/userchat");
        console.log("Navigation called.");
      }
      //       } else {
      //   setError("Signup succeeded but no token returned.");
      // }
    } catch (error) {
      console.log("Error in useSignupForm: " + error)
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
    isSuccess,
    isError,
    isLoading,
    showHelp,
    toggleHelp,
    showMiloPassword,
    setShowMiloPassword,
    showPortalPassword,
    setShowPortalPassword,
    setShowConfirmPassword,
    showConfirmPassword,
    isInvalidID,
    setInvalidID,
    isInvalidMilo,
    setInvalidMilo,
    isInvalidFirst,
    setInvalidFirst,
    isInvalidLast,
    setInvalidLast,
    isInvalidConfirm,
    setInvalidConfirm,
    isInvalidPortal,
    setInvalidPortal,
  };
};
