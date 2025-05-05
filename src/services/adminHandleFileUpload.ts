import Cookie from "js-cookie";
import {domainName} from "../App";
import { useState } from "react";

export const handleFileUpload = async (event, refetchCourses) => {
  // const [message, setMessage] = useState("");
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  try {
    const token = Cookie.get("token");
    const response = await fetch(`${domainName}admin/uploadsemestercourses`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.detail || "Upload failed");
    }

    console.log("Upload successful:", result.message);

    // setMessage(result.message); // Set success message
    // ✅ Call refetch after successful upload
    if (typeof refetchCourses === "function") {
      refetchCourses();
    }

  } catch (error) {
    console.error("Error uploading file:", error.message);
  }
};
