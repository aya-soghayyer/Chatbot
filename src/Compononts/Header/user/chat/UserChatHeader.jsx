import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Cookie from "js-cookie";
import ChatService from "../../../../services/userChatService";
import MessageFactory from "../../../../utils/messageFactory";
import ChatArea from "../chat/ChatArea";
import ChatInput from "../chat/ChatInput";
import Settings from "../chat/Settings";
import usePhoto from "../../../../hooks/usePhoto";
import Cookie from "js-cookie";
import { domainName } from "../../../../App";
import ChatHistory from "./ChatHistory";


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
  const [isLoading, setIsLoading] = useState(false);

  

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
    window.location.reload(true);
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
    setIsLoading(true);


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
    finally{
      setIsLoading(false);
    }
  };
  // const [messages, setMessages] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  // const messageEndRef = useRef(null);

  const fetchMessages = async (chatId) => {
    try {
      const token = Cookie.get("token");
      const response = await fetch(`${domainName}chat/messages?start=1&end=10&chat_id=${chatId}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      const data = await response.json();
      setMessages(data.Messages || []);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };


  return (
    <div
      className={`flex flex-col md:flex-row md:-ml-12 md:justify-between text-white min-h-screen p-2 md:p-3`}
    >
      <ChatHistory
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
        onNewChat={handleNewChat}
        selectedChatId={fetchMessages}
        setIsActiveChat={setIsActiveChat}
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
          <div className="flex  justify-center items-center h-full">
          <div className="grid justify-stretch item rounded-2xl w-full h-1/3">
            <h2 className="text-white font-extralight text-xl md:text-[28px] flex justify-center items-center">
              {greeting} {userData?.studentId} :) 
            </h2>
            <h2 className="text-white font-bold text-2xl md:text-[28px] flex justify-center items-center">
              What can I help with?
            </h2>
            <div className="relative mx-4 -z-0">
              <ChatInput
                inputValue={inputValue}
                setInputValue={setInputValue}
                language={language}
                setLanguage={setLanguage}
                listening={listening}
                handleToggle={handleToggle}
                handleSubmit={handleSubmit}
                setIsActiveChat={setIsActiveChat}
                className="rounded-2xl bg-white bg-opacity-25"
              />
            </div>
          </div>
          </div>

        ) : (
          <div className="grid grid-rows-[1fr_auto] min-h-[99%] pt-3 w-full rounded-2xl md:min-h-[96%]">
            <ChatArea messages={messages} messageEndRef={messageEndRef} isLoading={isLoading}/>
            <ChatInput
              inputValue={inputValue}
              setInputValue={setInputValue}
              language={language}
              setLanguage={setLanguage}
              listening={listening}
              handleToggle={handleToggle}
              handleSubmit={handleSubmit}
              setIsActiveChat={setIsActiveChat}
              className="bg-white bg-opacity-25"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default UserChatHeader;
