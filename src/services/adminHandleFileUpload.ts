import Cookie from "js-cookie";
import {domainName} from "../App";

export const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append("file", file);
  
    try {
            const token = Cookie.get("token"); 
            const response = await fetch(`${domainName}admin/uploadsemestercourses`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`, // Replace with actual admin token
        },
        body: formData,
      });
  
      const result = await response.json();
      console.log("result", result);
      console.log("response", result.Message);
  
      if (!response.ok) {
        throw new Error(result.detail || "Upload failed");
      }
      
      console.log("Upload successful:", result);
      // Optionally refetch the courses here
    } catch (error) {
      console.error("Error uploading file:", error.message);
    }
  };
  