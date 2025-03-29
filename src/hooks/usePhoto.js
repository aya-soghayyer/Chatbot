import { React, useState } from 'react';

function usePhoto() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB limit

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        setSelectedFile(null);
        setPreview(null);
        return;
      }

      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        alert("File size exceeds 2MB. Please upload a smaller image.");
        setSelectedFile(null);
        setPreview(null);
        return;
      }

      setSelectedFile(file);
      setPreview(URL.createObjectURL(file)); // Generate preview URL
    }
  };

  // Log the updated preview and selectedFile after state updates
  console.log("Selected File:", selectedFile);
  console.log("Preview URL:", preview);

  return {
    selectedFile,
    preview,
    handleFileChange,
  };
}

export default usePhoto;
