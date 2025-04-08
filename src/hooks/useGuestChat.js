// src/hooks/useGuestChat.js
import { useState, useEffect, useRef } from "react";

export const useGuestChat = (chatService, SpeechService) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [listening, setListening] = useState(false);
  const [language, setLanguage] = useState("en-US");
  const [activeChat, setActiveChat] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messageEndRef = useRef(null);
  const speechServiceRef = useRef(null);
  const [greeting, setGreeting] = useState("");


  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon");
    } else if (currentHour >= 18 && currentHour < 22) {
      setGreeting("Good Evening");
    } else {
      setGreeting("Good Night");
    }
  }, []);

  // Initialize Speech Service
  useEffect(() => {
    try {
      speechServiceRef.current = new SpeechService();
      speechServiceRef.current.setLanguage(language);
    } catch (error) {
      console.error("Speech recognition not supported:", error);
    }

    return () => {
      if (speechServiceRef.current) {
        speechServiceRef.current.cleanup();
      }
    };
  }, []);

  // Update language
  useEffect(() => {
    if (speechServiceRef.current) {
      speechServiceRef.current.setLanguage(language);
    }
  }, [language]);

  // Auto-scroll to latest message
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleToggleSpeech = () => {
    if (!speechServiceRef.current) return;

    if (!listening) {
      speechServiceRef.current.start(
        (text) => setInputValue((prev) => prev + " " + text),
        (error) => console.error("Speech recognition error:", error)
      );
      setListening(true);
    } else {
      speechServiceRef.current.stop();
      setListening(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setActiveChat(true);
    setIsLoading(true);

    try {
      const data = await chatService.sendGuestMessage(userMessage.text);
      const botMessage = { text: data["AI Response"], sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [...prev, { text: "Error: Could not get response", sender: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestion = (suggestion) => {
    setInputValue(suggestion);
  };

  return {
    greeting,
    messages,
    inputValue,
    listening,
    language,
    activeChat,
    isLoading,
    messageEndRef,
    setLanguage,
    setActiveChat,
    setInputValue,
    handleToggleSpeech,
    handleSubmit,
    handleSuggestion,
  };
};