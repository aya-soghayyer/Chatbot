import { useState, useEffect, useRef } from "react";
import textMessage from "../../../assets/images/ArrowButton.svg";
import voiceMessage from "../../../assets/images/RecordingButton.svg";
import Loader from "../../loader/Loader";

function HeaderGuestChat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [listening, setListening] = useState(false);
  const [language, setLanguage] = useState("en-US");
  // const [questions, setQuestions] = useState("");
  // const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);
  const messageEndRef = useRef(null);
  const [activeChat, setActiveChat] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

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
      const response = await fetch("http://localhost:8000/guest/addmessage", {
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
      // setIsLoading(false)

    }
    finally {
      setIsLoading(false)
    }
  };
  // if (isLoading){
  //   return <Loader />
  // }

  return (
    <>
            {/* { setIsLoading  (false)} */}

      {!activeChat ? (
        <div className="grid justify-between rounded-2xl w-full items-center mt-20">

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
                className="pl-7 pr-14 p-4 flex-1 rounded-2xl bg-slate-200 bg-opacity-10 max-w-full text-white"
                type="text"
                placeholder="Ask MiLo"
              />

              {inputValue.trim() ? (
                <button
                  type="submit"
                  onClick={() => {
                    setActiveChat(true);
                  }}
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
            {/* suggestion questions */}
            <div className="p-3 text-white mt-5">
              <p className="mb-5">Suggestion questions:</p>
              <div className="grid grid-flow-row grid-cols-2 gap-3 items-center">
                <button
                  value="What is the required rate for computer science major?"
                  onClick={(e) => {
                    setInputValue(e.target.value);
                  }}
                  className="bg-white bg-opacity-10 p-2 rounded-full"
                >
                  What is the required rate for computer science major?
                </button>
                <button
                  value="What are the majors offered by Hebron University?"
                  onClick={(e) => {
                    setInputValue(e.target.value);
                  }}
                  className="bg-white bg-opacity-10 p-2 rounded-full"
                >
                  What are the majors offered by Hebron University?
                </button>
                <button
                  value="How can I change the major I was accepted into?"
                  onClick={(e) => {
                    setInputValue(e.target.value);
                  }}
                  className="bg-white bg-opacity-10 col-span-2 p-2 rounded-full flex justify-self-center"
                >
                  How can I change the major I was accepted into?
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-rows-[1fr_auto] pt-3 w-full rounded-2xl min-h-[470px]">
          {/* <Loader/> */}
          <div className="flex-1 overflow-y-auto w-full p-3 max-h-[379px] custom-scrollbar">
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
                    setActiveChat(true);
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
    </>
  );
}

export default HeaderGuestChat;
