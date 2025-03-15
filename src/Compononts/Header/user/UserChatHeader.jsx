import { useState, useEffect, useRef } from "react";
import textMessage from "../../../assets/images/ArrowButton.svg";
import voiceMessage from "../../../assets/images/RecordingButton.svg";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/Logo.svg";
import eyeSlash from "../../../assets/images/EyeSlash.svg";
import newchat from "../../../assets/images/newChat.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserChatHeader() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [listening, setListening] = useState(false);
  const [language, setLanguage] = useState("en-US");
  const [chatHistory, setChatHistory] = useState(false);
  const navigate = useNavigate();
  const [showSettings, setSettings] = useState(false);
  // const [showChatHistory, setShowChatHistory] = useState(false);
  const [isActiveChat, setIsActiveChat] = useState(true);

  // const [questions, setQuestions] = useState("");
  // const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);
  const messageEndRef = useRef(null);
  // const [activeChat, setActiveChat] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return; // Prevent empty messages

    // Add user message to chat
    const userMessage = { text: inputValue, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setInputValue(""); // Clear input after sending

    try {
      console.log(userMessage.text);
      const response = await fetch("http://localhost:8000/user/addmessage", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage?.text, // Assuming messages is a variable holding a string
          chat_id: "",
        }),
      });

      const data = await response.json();
      console.log(data);
      if (data) {
        console.log("hi");
        console.log(data["AI Response"]);
        const botMessage = { text: data["AI Response"], sender: "bot" };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
    }
  };

  return (
    <>
      <div className="flex justify-between gap-4 text-white">
        {!chatHistory ? (
          <div className="w-1/4 max-h-[88vh] m-3 flex justify-between p-4  bg-white bg-opacity-[15%] rounded-2xl">
            <div className="z-40 w-28 h-10">
              <NavLink to="/">
                <img src={Logo} alt="MiLo Logo" />
              </NavLink>
            </div>
            <div className="flex justify-end w-16 h-10 gap-3">
              <button onClick={() => setChatHistory(!chatHistory)}>
                <img src={eyeSlash} alt="eye slash icon" />
              </button>
              <button>
                <img src={newchat} alt="new chat icon" />
              </button>
            </div>
          </div>
        ) : (
          <div className="w-1/4 max-h-full m-3 flex justify-between p-4">
            <div className="z-40 w-28 h-10">
              <NavLink to="/">
                <img src={Logo} alt="MiLo Logo" />
              </NavLink>
            </div>
            <div className="flex justify-end w-16 h-10 gap-3">
              <button onClick={() => setChatHistory(!chatHistory)}>
                <img src={eyeSlash} alt="eye slash icon" />
              </button>
              <button
                onClick={() => {
                  navigate("/chat");
                }}
              >
                <img src={newchat} alt="new chat icon" />
              </button>
            </div>
          </div>
        )}
        <div className="flex justify-between relative place-items-center w-[70vw] m-5 h-screen">
          <div className="text-white fixed top-5 right-5 ">
            <button
              className="w-12 h-12 border rounded-full"
              onClick={() => {
                setSettings(!showSettings);
              }}
            >
              {/* <FontAwesomeIcon icon="fa-solid fa-xmark" shake /> */}
              <FontAwesomeIcon icon="fa-solid fa-user" size="xl" />
            </button>
          </div>
          {showSettings ? (
            <div className="w-72 h-96 backdrop-blur-md fixed top-16 right-16 rounded-2xl z-50 border border-t-gradientSkyBlue  drop-shadow-xl ">
              <div className="text-sm font-extralight p-2 border rounded-xl">
                Settings
              </div>
              <div className="">
                <div>
                  <img src="" alt="" />
                </div>
                <div className="p-5">Hello! aya soghayyer</div>
              </div>
              <div>
                <ul className="grid gap-5">
                  <div className="flex justify-center items-center gap-24 border-b p-5">
                    <li >Language</li>
                    <FontAwesomeIcon icon="fa-solid fa-toggle-on" size="xl" />
                  </div>
                  <button>
                    <li className="border-b p-5">Language</li>
                    
                  </button>
                  <button className="flex justify-center items-center gap-3 text-red-700 border-b p-5">
                  <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" size="xl" />

                    <li>Logout</li>
                  </button>
                </ul>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {isActiveChat ? (
            <div className="grid items-center rounded-2xl w-full">
              <h2
                className={`text-white font-bold text-[28px] flex justify-center items-center`}
              >
                What can I help with?
              </h2>

              {/* Input and Buttons */}

              <div className="relative">
                <div className="flex space-x-2 mb-5 items-center">
                  <label
                    htmlFor="language"
                    className="font-medium text-white grid justify-start"
                  >
                    Select Language:
                  </label>
                  <select
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="p-2 rounded px-2 py-1 h-8 text-white bg-opacity-10 bg-blue-900 w-fit"
                  >
                    <option value="en-US">English</option>
                    <option value="ar-SA">Arabic</option>
                  </select>
                </div>

                <form onSubmit={handleSubmit} className="flex">
                  <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="pl-7 pr-16 p-4 flex-1 rounded-2xl bg-slate-200 bg-opacity-10 max-w-full text-white"
                    type="text"
                    placeholder="Ask MiLo"
                  />

                  {inputValue.trim() ? (
                    <button
                      onClick={()=>{ setIsActiveChat(false)}}
                      type="submit"
                      className="absolute right-4 top-16 w-8"
                    >
                      <img src={textMessage} alt="Send text message icon" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleToggle}
                      className="absolute right-4 top-16 w-8"
                    >
                      <img
                        src={voiceMessage}
                        alt="Send voice message icon"
                        className={listening ? "bg-green-500" : ""}
                      />
                    </button>
                  )}
                </form>
              </div>
            </div>
          ) : (
            <div className="grid grid-rows-[1fr_auto] mb-8 pt-3 w-full rounded-2xl min-h-[470px]">
              {/* <Loader/> */}
              <div className=" overflow-y-auto w-full p-3 max-h-[379px] custom-scrollbar">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex mb-2 ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <span
                      className={`p-2 rounded-lg mb-2 w-fit ${
                        msg.sender === "user"
                          ? "bg-slate-500/40 text-white self-end rounded-br-none max-w-[70%]"
                          : "bg-[#213C84] text-white self-start rounded-bl-none max-w-[70%]"
                      }`}
                      ref={messageEndRef}
                    >
                      {msg.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative grid">
                <div className="flex space-x-2 mb-1 items-center">
                  <label
                    htmlFor="language"
                    className="font-medium text-white grid justify-start"
                  >
                    Select Language:
                  </label>
                  <select
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className=" rounded px-2 py-1 h-8 text-white bg-opacity-10 bg-blue-900 w-fit"
                  >
                    <option value="en-US">English</option>
                    <option value="ar-SA">Arabic</option>
                  </select>
                </div>

                <form onSubmit={handleSubmit} className="flex">
                  <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="pl-7 pr-14 p-3 flex-auto rounded-br-2xl rounded-bl-2xl bg-zinc-400 bg-opacity-25 text-white"
                    type="text"
                    placeholder="Ask MiLo"
                  />

                  {inputValue.trim() ? (
                    <button
                      type="submit"
                      onClick={() => {
                        setIsActiveChat(false);
                      }}
                      className="absolute right-4 top-11 w-8"
                    >
                      <img src={textMessage} alt="Send text message icon" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleToggle}
                      className="absolute right-4 top-11 w-8"
                    >
                      <img
                        src={voiceMessage}
                        alt="Send voice message icon"
                        className={listening ? "bg-green-500" : ""}
                      />
                    </button>
                  )}
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UserChatHeader;
