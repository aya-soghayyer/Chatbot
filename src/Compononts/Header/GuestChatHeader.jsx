import { useState, useEffect, useRef } from "react";
import textMessage from "../../assets/images/ArrowButton.svg";
import voiceMessage from "../../assets/images/RecordingButton.svg";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Voice from "./Voice";

function HeaderGuestChat() {
  const [value, setValue] = useState("");
  // State for the list of messages
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  // State for the current input value
  const [inputValue, setInputValue] = useState("");

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle message submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (inputValue.trim() !== "") {
      // Add the new message to the messages list
      setMessages([...messages, inputValue]);
      // Clear the input field
      setInputValue("");
    }
  };

  // const { transcript, listening, resetTranscript } = useSpeechRecognition();

  // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
  //   return <p>المتصفح لا يدعم التعرف على الصوت.</p>;
  // }

  // *********************************************************************************************

  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [language, setLanguage] = useState("en-US");
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Check for browser support
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    // Initialize SpeechRecognition instance
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = language;

    recognition.onresult = (event) => {
      // Get the last result and append it to transcript
      const lastIndex = event.results.length - 1;
      const resultText = event.results[lastIndex][0].transcript;
      setTranscript((prev) => prev + " " + resultText);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognitionRef.current = recognition;

    // Cleanup on component unmount
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []); // run once on mount

  // Update recognition language when language state changes
  useEffect(() => {
    if (recognitionRef.current) {
      recognitionRef.current.lang = language;
    }
  }, [language]);

  // Toggle recording state
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

  return (
    <>
      <div className="grid grid-rows-2 w-[100%] mb-10 z-20 p-5 rounded-2xl mt-5">
        <div className="grid justify-end overflow-y-auto mb-4">
          {messages.map((message, index) => (
            <span
              key={index}
              className="bg-slate-600 bg-opacity-30 inline-flex  text-white p-2 rounded-lg rounded-tr-none  shadow mb-2"
            >
              {message}
            </span>
          ))}
        </div>
        <div className="grid justify-start overflow-y-auto mb-4">
          {messages.map((message, index) => (
            <p
              key={index}
              className="bg-[#213C84] inline-flex  text-white p-2 rounded-lg rounded-tl-none  shadow mb-2"
            >
              {message}
            </p>
          ))}
        </div>
        <div>
          <h2 className="text-white font-bold text-[28px] mt-40 flex justify-center">
            What can I help with?
          </h2>
        </div>
        <div className="relative grid ">
          {/* Language Selection */}
          <div className="flex space-x-2 mb-5 items-center position top-4">
            <label htmlFor="language" className="font-medium text-white">
              Select Language:
            </label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border p-2 rounded  px-2 py-1 h-8 text-white bg-opacity-10  bg-blue-900 w-[10%]"
            >
              <option value="en-US">English</option>
              <option value="ar-SA">Arabic</option>
            </select>
          </div>
          <form onSubmit={handleSubmit} className="flex">
            <input
              value={inputValue}
              onChange={handleInputChange}
              className="p-4 pl-12 rounded-2xl bg-slate-200 bg-opacity-10   w-full text-white" // Add `pl-12` for left padding
              type="text"
              placeholder="Ask MiLo"
            />

            {message.trim() === "" ? (
              <button
                type="submit"
                onClick={handleToggle}
                className=" absolute right-16 top-[62px]  items-end w-8"
              >
                
                  // Stop icon: a square icon

                  <img
                    src={voiceMessage}
                    alt="Send voice message icon"
                    className=" bg-red-600"
                  />
             
                  // Microphone icon: indicates ready to record
                  <img
                    src={voiceMessage}
                    alt="Send voice message icon"
                    className=" bg-green-800"
                  />
                )}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="absolute right-7 top-3 items-end w-8"
              >
                <img src={textMessage} alt="Send text message icon" />
              </button>
            )}

            {/* <button className="absolute right-16 top-3 items-end w-8">
            <img src={voiceMessage} alt="Send voice message icon"  />
          </button > */}
          </form>
        </div>
      </div>
    </>
  );
}

export default HeaderGuestChat;
