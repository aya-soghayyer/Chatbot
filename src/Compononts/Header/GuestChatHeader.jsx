import { useState, useEffect, useRef } from "react";
import textMessage from "../../assets/images/ArrowButton.svg";
import voiceMessage from "../../assets/images/RecordingButton.svg";

function HeaderGuestChat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [listening, setListening] = useState(false);
  const [language, setLanguage] = useState("en-US");
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
    }
  };

  return (
    <div className="grid grid-rows-2 w-full mb-10 z-20 p-5 rounded-2xl mt-5">
      <div className=" overflow-y-auto mb-4 backdrop-blur-3xl rounded-2xl p-5">
        {messages.map((msg, index) => (
          <span
            key={index}
            className={`p-2 rounded-lg mb-2 w-fit grid ${
              msg.sender === "user" ? "bg-slate-400/40 text-white self-start " : "bg-[#213C84] text-white self-end"
            }`}
          >
            {msg.text}
          </span>
        ))}
      </div>

      <h2 className="text-white font-bold text-[28px] mt-40">What can I help with?</h2>

      {/* Input and Buttons */}
      <div className="relative grid">
        <div className="flex space-x-2 mb-5 items-center">
          <label htmlFor="language" className="font-medium text-white grid justify-start">Select Language:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border p-2 rounded px-2 py-1 h-8 text-white bg-opacity-10 bg-blue-900 w-[10%]"
          >
            <option value="en-US">English</option>
            <option value="ar-SA">Arabic</option>
          </select>
        </div>

        <form onSubmit={handleSubmit} className="flex">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="p-4 pl-12 rounded-2xl bg-slate-200 bg-opacity-10 w-full text-white absolute"
            type="text"
            placeholder="Ask MiLo"
          />

          {inputValue.trim()?(
            <button type="submit" className="absolute right-7 top-16 w-8">
              <img src={textMessage} alt="Send text message icon" />
            </button>
          ) : (
            <button type="button" onClick={handleToggle} className="absolute right-7 top-16 w-8">
              <img src={voiceMessage} alt="Send voice message icon" className={listening ? "bg-red-500" : ""} />
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default HeaderGuestChat;
