import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Cookie from "js-cookie";
import ChatService from "../../../../services/userChatService";
import MessageFactory from "../../../../utils/messageFactory";
import Header from "../chat/Header";
import ChatArea from "../chat/ChatArea";
import ChatInput from "../chat/ChatInput";
import Settings from "../chat/Settings";
import usePhoto from "../../../../hooks/usePhoto";

function UserChatHeader() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [listening, setListening] = useState(false);
  const [language, setLanguage] = useState("en-US");
  const [chatHistory, setChatHistory] = useState(false);
  const [chatId, setChatId] = useState("newchat");
  const [showSettings, setSettings] = useState(false);
  const [isActiveChat, setIsActiveChat] = useState(true);
  const [greeting, setGreeting] = useState("");
  const [isChangePhoto, setChangePhoto] = useState(false);
  const { preview, handleFileChange } = usePhoto(); // use hook for file and preview

  const navigate = useNavigate();
  const recognitionRef = useRef(null);
  const messageEndRef = useRef(null);
  const userData = JSON.parse(localStorage.getItem("users"));

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

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = language;

    recognition.onresult = (event) => {
      const lastIndex = event.results.length - 1;
      const resultText = event.results[lastIndex][0].transcript;
      setInputValue((prev) => prev + " " + resultText);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (recognitionRef.current) {
      recognitionRef.current.lang = language;
    }
  }, [language]);

  const handleToggle = () => {
    if (!recognitionRef.current) return;

    if (!listening) {
      try {
        recognitionRef.current.start();
        setListening(true);
      } catch (error) {
        console.error("Error starting speech recognition:", error);
      }
    } else {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  const handleNewChat = () => {
    setChatId("newchat");
    setMessages([]);
    setIsActiveChat(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = MessageFactory.createUserMessage(inputValue);
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");

    try {
      const data = await ChatService.addMessage(userMessage.text, chatId);
      const botMessage = MessageFactory.createBotMessage(data["AI Response"]);
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setChatId(data.chat_id);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      if (error.message.includes("Unauthorized")) {
        alert("Unauthorized. Please log in again.");
        navigate("/login");
      } else {
        const errorMessage = MessageFactory.createBotMessage(
          "Sorry, something went wrong. Please try again."
        );
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    }
  };

  return (
    <div className={`flex flex-col md:flex-row justify-between gap-4 text-white min-h-screen p-2 md:p-0`}>
      <Header
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
        onNewChat={handleNewChat}
      />
      <div className="relative w-full md:w-[70vw] m-2 md:m-5 h-[80vh] md:h-screen">
        <div className="text-white fixed top-5 right-5">
          <button
            className="md:w-14 md:h-14 rounded-full border"
            onClick={() => setSettings(!showSettings)}
          >
            {isChangePhoto ? (
              <div>
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-14 h-14 object-cover rounded-full shadow-md"
                  />
                )}
              </div>
            ) : (
              <FontAwesomeIcon icon="fa-solid fa-user" size="xl" />
            )}
          </button>
        </div>

        <Settings showSettings={showSettings} setSettings={setSettings} />

        {isActiveChat ? (
          <div className="grid items-center rounded-2xl w-full h-full">
            <h2 className="text-white font-extralight text-xl md:text-[28px] flex justify-center items-center">
              {greeting} {userData?.studentId} :) !
            </h2>
            <h2 className="text-white font-bold text-xl md:text-[28px] flex justify-center items-center">
              What can I help with?
            </h2>
            <div className="relative mt-4">
              <ChatInput
                inputValue={inputValue}
                setInputValue={setInputValue}
                language={language}
                setLanguage={setLanguage}
                listening={listening}
                handleToggle={handleToggle}
                handleSubmit={handleSubmit}
                setIsActiveChat={setIsActiveChat}
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-rows-[1fr_auto] mb-8 pt-3 w-full rounded-2xl min-h-[60vh] md:min-h-[470px]">
            <ChatArea messages={messages} messageEndRef={messageEndRef} />
            <ChatInput
              inputValue={inputValue}
              setInputValue={setInputValue}
              language={language}
              setLanguage={setLanguage}
              listening={listening}
              handleToggle={handleToggle}
              handleSubmit={handleSubmit}
              setIsActiveChat={setIsActiveChat}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default UserChatHeader;
