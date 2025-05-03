import { useState, ChangeEvent } from 'react';
import { domainName } from '../App';

interface UsePhotoReturn {
  selectedFile: File | null;
  previewUrl: string | null;
  uploadedImageUrl: string | null;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

export default function usePhoto(): UsePhotoReturn {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file.');
      return resetState();
    }

    if (file.size > MAX_FILE_SIZE) {
      alert('File size exceeds 2MB. Please upload a smaller image.');
      return resetState();
    }

    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch(`${domainName}user/changephoto`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Upload failed');

      const data = await res.json();
      setUploadedImageUrl(`${domainName}${data.url}`);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image.');
      resetState();
    }
  };

  const resetState = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setUploadedImageUrl(null);
  };

  return {
    selectedFile,
    previewUrl,
    uploadedImageUrl,
    handleFileChange,
  };
}
