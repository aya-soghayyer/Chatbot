import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import domainName from "../../../src/App.jsx";
import Cookie from "js-cookie";

const useAdminService = () => {
    const [isLoading, setLoading] = useState(false);
    const [isSuccess, setSuccess] = useState("");
    const [isError, setError] = useState("");
    const [value, setValue] = useState("");
    const [confirmChange, setConfirmChange] = useState(false);
    const token = Cookie.get("token");
  
    const getAdminService = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${domainName}admin/services/BUILD_TABLE_QUESTION/toggle`,
          {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ action: value }),
          }
        );
  
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Unknown error");
  
        setSuccess(data.message || "Service toggled successfully.");
        setError("");
      } catch (error) {
        console.error("Error fetching admin service:", error);
        setError(error.message || "Unexpected error");
      } finally {
        setLoading(false);
        setConfirmChange(false); // auto-close confirmation modal
      }
    };
  
    return {
      getAdminService,
      isLoading,
      isSuccess,
      isError,
      setLoading,
      setSuccess,
      setError,
      confirmChange,
      setConfirmChange,
      setValue,
      value,
    };
  };
  
  export default useAdminService;
  
