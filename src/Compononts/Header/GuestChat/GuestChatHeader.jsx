// src/components/HeaderGuestChat.jsx
import { useGuestChat } from "../../../hooks/useGuestChat";
import ChatService from "../../../services/ChatService";
import SpeechService from "../../../services/SpeechService";
import textMessage from "../../../assets/images/ArrowButton.svg";
import voiceMessage from "../../../assets/images/RecordingButton.svg";
import Loader from "../../loader/Loader";

function HeaderGuestChat() {
  const {
    messages,
    inputValue,
    listening,
    language,
    activeChat,
    isLoading,
    messageEndRef,
    setLanguage,
    handleToggleSpeech,
    handleSubmit,
    handleSuggestion,
    setActiveChat,
    setInputValue,
    setIsInputFocused,
  } = useGuestChat(ChatService, SpeechService);

  const suggestionQuestions = [
    "What is the required rate for computer science major?",
    "What are the majors offered by Hebron University?",
    "How can I change the major I was accepted into?",
  ];

  return (
    
    <div className={`wrapper py-6 md:py-8 2xl:py-12 text-white font-Outfit h-screen z-10 relative`}>
      <div className="absolute top-1/3 left-[40%] flex justify-center items-center">
      {isLoading && <Loader />}
        </div>
      {!activeChat ? (
        <div className={`grid gap-4 justify-center md:gap-6 2xl:gap-8 w-full max-w-md md:max-w-3xl 2xl:max-w-5xl mx-auto mt-10 md:mt-16 2xl:mt-20 ${isLoading?"backdrop-brightness-50 z-50":""}`}>
          <h2 className="text-2xl md:text-2xl 2xl:text-3xl font-bold flex justify-center items-center">
            What can I help with?
          </h2>
          <div className="space-y-3 md:space-y-4 2xl:space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <label htmlFor="language" className="font-medium text-sm md:text-base 2xl:text-lg">
                Select Language:
              </label>
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="p-1 md:p-2 rounded h-8 md:h-10 2xl:h-12 text-white bg-opacity-10 bg-blue-900 w-full md:w-fit text-sm md:text-base 2xl:text-lg"
              >
                <option value="en-US">English</option>
                <option value="ar-SA">Arabic</option>
              </select>
            </div>
            <form onSubmit={handleSubmit} className="relative flex">
              <input
                value={inputValue}
                onChange={(e) =>  setInputValue(e.target.value)}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                className="pl-4 pr-10 md:pl-7 md:pr-14 p-3 md:p-4 2xl:p-5 flex-1 rounded-2xl bg-slate-200 bg-opacity-10 text-sm md:text-base 2xl:text-lg"
                type="text"
                placeholder="Ask MiLo"
              />
              <button
                type={inputValue.trim() ? "submit" : "button"}
                onClick={inputValue.trim() ? () => setActiveChat(true) : handleToggleSpeech}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-6 md:w-8 2xl:w-10"
              >
                <img
                  src={inputValue.trim() ? textMessage : voiceMessage}
                  alt={inputValue.trim() ? "Send text message" : "Send voice message"}
                  className={listening ? "bg-green-500 rounded-full p-1" : ""}
                />
              </button>
            </form>
            <div className="p-2 md:p-3 2xl:p-4 text-white space-y-3 md:space-y-4 2xl:space-y-5">
              <p className="text-sm md:text-base 2xl:text-lg">Suggestion questions:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 md: gap-2 md:gap-3 2xl:gap-4">
                {suggestionQuestions.map((question, index) => (
                  <button
                    key={index}
                    value={question}
                    onClick={(e) => handleSuggestion(e.target.value)}
                    className={`bg-white bg-opacity-10 p-2 md:p-3 2xl:p-4 rounded-full text-sm md:text-sm 2xl:text-lg hover:bg-white/20 transition-colors ${
                      index === 2 ? "md:col-span-2" : ""
                    }`}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`grid grid-rows-[1fr_auto] w-full max-w-md md:max-w-3xl 2xl:max-w-5xl mx-auto rounded-2xl min-h-[350px] md:min-h-[470px] 2xl:min-h-[600px] pt-2 md:pt-3 2xl:pt-4`}>
          <div className="flex-1 overflow-y-auto p-2 md:p-3 2xl:p-4 max-h-[250px] md:max-h-[379px] 2xl:max-h-[500px] custom-scrollbar">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-2 md:mb-3 2xl:mb-4 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <span
                  className={`p-2 md:p-3 2xl:p-4 rounded-lg w-fit max-w-[80%] md:max-w-[70%] 2xl:max-w-[60%] ${
                    msg.sender === "user"
                      ? "bg-slate-500/40 text-white self-end rounded-br-none"
                      : "bg-[#213C84] text-white self-start rounded-bl-none"
                  }`}
                  ref={index === messages.length - 1 ? messageEndRef : null}
                >
                  {/* {isLoading && <div>...</div> } */}
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-2 md:p-3 2xl:p-4 space-y-2 md:space-y-3 2xl:space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <label htmlFor="language" className="font-medium text-sm md:text-base 2xl:text-lg">
                Select Language:
              </label>
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="p-1 md:p-2 rounded h-8 md:h-10 2xl:h-12 text-white bg-opacity-10 bg-blue-900 w-full md:w-fit text-sm md:text-base 2xl:text-lg"
              >
                <option value="en-US">English</option>
                <option value="ar-SA">Arabic</option>
              </select>
            </div>
            <form onSubmit={handleSubmit} className="relative flex">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                className="pl-4 pr-10 md:pl-7 md:pr-14 p-2 md:p-3 2xl:p-4 flex-1 rounded-2xl bg-zinc-400 bg-opacity-25 text-white text-sm md:text-base 2xl:text-lg"
                type="text"
                placeholder="Ask MiLo"
              />
              <button
                type={inputValue.trim() ? "submit" : "button"}
                onClick={inputValue.trim() ? null : handleToggleSpeech}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-6 md:w-8 2xl:w-10"
              >
                <img
                  src={inputValue.trim() ? textMessage : voiceMessage}
                  alt={inputValue.trim() ? "Send text message" : "Send voice message"}
                  className={listening ? "bg-green-500 rounded-full p-1" : ""}
                />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderGuestChat;