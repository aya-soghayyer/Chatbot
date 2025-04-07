import { useState, useRef } from "react";

export const useChatsHistory = (chatsHistory) => {
  const [messages, setMessages] = useState([]);
  const [activeChat, setActiveChat] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messageEndRef = useRef(null);

  

  

  // Auto-scroll to latest message
  

  const handleSubmit = async (e) => {
  
    setActiveChat(true);
    setIsLoading(true);

    try {
      const data = await chatsHistory;
      
      console.log(data);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [...prev, { text: "Error: Could not get response", sender: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    activeChat,
    isLoading,
    messageEndRef,
    setActiveChat,
    handleSubmit
  };
};