import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatService from "../../../../services/userChatService";
import MessageFactory from "../../../../utils/messageFactory";
import ChatArea from "../chat/ChatArea";
import ChatInput from "../chat/ChatInput";
import Settings from "../chat/Settings";
import usePhoto from "../../../../hooks/usePhoto";
import Cookie from "js-cookie";
import { domainName } from "../../../../App";
import ChatHistory from "./ChatHistory";
import { useLoginForm } from "../../../../hooks/UseLoginFrom";
import AuthService from "../../../../services/AuthService";

function UserChatHeader({ chatid, onChatIdChange }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [listening, setListening] = useState(false);
  const [language, setLanguage] = useState("en-US");
  const [chatHistory, setChatHistory] = useState(false);
  const [chatId, setChatId] = useState("newchat");
  const [showSettings, setSettings] = useState(false);
  const [settingsDetails, setSettingsDetails] = useState(false);
  const [isActiveChat, setIsActiveChat] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [isChangePhoto, setChangePhoto] = useState(false);
  // const { preview, handleFileChange } = usePhoto();
  const [isLoading, setIsLoading] = useState(false);
  const [showPhotos, setPhoto] = useState(false)
  const [botBuffer, setBotBuffer] = useState("");
  const [showLogoutScreen, setShowLogoutScreen] = useState(false);
  const {username} = useLoginForm(AuthService)
  const navigate = useNavigate();
  const recognitionRef = useRef(null);
  const messageEndRef = useRef(null);

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
    setIsActiveChat(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = MessageFactory.createUserMessage(inputValue);
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setIsActiveChat(true);

    let streamedText = "";

    try {
      const data = await ChatService.addMessage(
        userMessage.text,
        chatId,
        (chunk) => {
          streamedText += chunk;
          const streamingBotMessage =
            MessageFactory.createBotMessage(streamedText);
          setMessages((prev) => {
            const updated = [...prev];
            if (updated[updated.length - 1]?.sender === "bot") {
              updated[updated.length - 1] = streamingBotMessage;
            } else {
              updated.push(streamingBotMessage);
            }
            return updated;
          });
        }
      );

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
    } finally {
      setIsLoading(false);
    }
  };    

  const [selectedChatId, setSelectedChatId] = useState(null);

  const fetchMessages = async (chatId) => {
    try {
      const token = Cookie.get("token");
      if (!token) {
        throw new Error("No authentication token found.");
      }
  
      const response = await fetch(
        `${domainName}chat/messages?chat_id=${chatId}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (!data.messages || !Array.isArray(data.messages)) {
        throw new Error("Unexpected response format from server.");
      }
  
      const formattedMessages = data.messages.map((msg, index) => ({
        sender: index % 2 === 0 ? "user" : "bot",
        text: msg.message
      }));
  
      setMessages(formattedMessages);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };
  
  

  return (
    <div
      className={`flex flex-col md:flex-row md:-ml-12 md:justify-between text-white min-h-screen p-2 md:p-0`}
    >
      <ChatHistory
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
        onNewChat={handleNewChat}
        setSelectedChat={setSelectedChatId}
        fetchMessages={fetchMessages} 
        setIsActiveChat={setIsActiveChat}
        className="z-50 md:z-0 hidden md:inline-flex"
      />
      <div className="relative w-full md:w-[70vw] m-2 md:m-5 h-[80vh] md:h-screen">
        <div className="text-white fixed top-5 right-5">
          <button
            className="md:w-10 md:h-10 rounded-full border hidden md:block"
            onClick={() => setSettings(!showSettings)}
          >
            {isChangePhoto ? (
              <div>
                {/* {preview && (
                  <img
                    // src={preview}
                    alt="Preview"
                    className="w-14 h-14 object-cover rounded-full shadow-md"
                  />
                )} */}
              </div>
            ) : (
              <FontAwesomeIcon icon="fa-solid fa-user" size="lg" />
            )}
          </button>
        </div>

        <Settings className="z-30" setPhoto={setPhoto} showPhotos={showPhotos} settingsDetails={settingsDetails} setSettingsDetails={setSettingsDetails} showSettings={showSettings} setSettings={setSettings} showLogoutScreen={showLogoutScreen} setShowLogoutScreen={setShowLogoutScreen} />

        {!isActiveChat ? (
          <div className="flex justify-center items-center h-full">
            <div className="grid justify-stretch md:-ml-10 rounded-2xl w-full h-1/3">
              <h2 className="text-white font-extralight text-xl md:text-2xl flex justify-center items-center">
                {greeting}, {localStorage.getItem("name").split(" ")[0]} !
              </h2>
              <h2 className="text-2xl md:text-3xl 2xl:text-3xl font-bold md:font-normal flex justify-center items-end">
              What can I help with?
              </h2>
              <div className="relative mx-4">
              <ChatInput
                inputValue={inputValue}
                setInputValue={setInputValue}
                language={language}
                setLanguage={setLanguage}
                listening={listening}
                handleToggle={handleToggle}
                handleSubmit={handleSubmit}
                setIsActiveChat={setIsActiveChat}
                className="rounded-2xl bg-white/15 py-4"
              />
            </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-rows-[1fr_auto] md:-ml-4 min-h-[99%] h-screen w-full items-end rounded-2xl ">
            {/* <div className="flex flex-col h-full w-full overflow-y-auto items-end"> */}

            <ChatArea messages={messages} messageEndRef={messageEndRef} isLoading={isLoading} className=""/>
            {/* </div> */}
            {/* <div className="p-2 md:p-3 2xl:p-4 space-y-2 2xl:space-y-4"> */}
              <ChatInput
              inputValue={inputValue}
              setInputValue={setInputValue}
              language={language}
              setLanguage={setLanguage}
              listening={listening}
              handleToggle={handleToggle}
              handleSubmit={handleSubmit}
              setIsActiveChat={setIsActiveChat}
              className="bg-white bg-opacity-25 py-3"
              isBotLoading={isLoading}
              classNameButton="md:top-[46px]"
            />
          {/* </div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserChatHeader;
