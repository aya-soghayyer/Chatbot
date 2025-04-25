// src/components/HeaderGuestChat.jsx
import { useGuestChat } from "../../../hooks/useGuestChat";
import ChatService from "../../../services/ChatService";
import SpeechService from "../../../services/SpeechService";
import textMessage from "../../../assets/images/ArrowButton.svg";
import voiceMessage from "../../../assets/images/RecordingButton.svg";
import Loader from "../../loader/Loader";
import useSound from "use-sound";
import micStop from "../../../assets/sounds/mixkit-video-game-mystery-alert-234.wav";
import SelectLanguageSpeak from "../../ui/SelectLanguageSpeak";
import ChatInput from "../user/chat/ChatInput";
import ChatArea from "../user/chat/ChatArea";

function HeaderGuestChat() {
  const {
    setIsActiveChat,
    handleToggle,
    setLanguage,
    language,
    greeting,
    messages,
    inputValue,
    listening,
    activeChat,
    isLoading,
    messageEndRef,
    handleToggleSpeech,
    handleSubmit,
    handleSuggestion,
    setActiveChat,
    setInputValue,
    setIsInputFocused,
  } = useGuestChat(ChatService, SpeechService);

  const [pause] = useSound(micStop);

  const suggestionQuestions = [
    "What is the required rate for computer science major?",
    "What are the majors offered by Hebron University?",
    "How can I change the major I was accepted into?",
    "Tell me about Hebron University please"
  ];

  return (
    <>
      <div
        className={` grid place-items-center 2xl:py-12 text-white font-Outfit h-svh md:h-[31rem] z-10 relative`}
      >
        {!activeChat ? (
          <div
            className={`grid gap-1 md:-mt-28 px-5 md:px-44 md:gap-3 2xl:gap-8 w-full min-w-full md:min-w-full 2xl:max-w-5xl mx-auto 2xl:mt-20 z-10 relative `}
          >
            <h2 className="text-white font-extralight text-xl md:text-2xl flex justify-center items-center">
              {greeting}
            </h2>
            <h2 className="text-2xl md:text-2xl 2xl:text-3xl font-bold flex justify-center items-center">
              What can I help with?
            </h2>
            <div className="space-y-3 md:space-y-4 2xl:space-y-6">
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
                className="rounded-2xl bg-white/15"
              />
            </div>
              <div className="hidden md:inline-grid md:px-7 2xl:p-4 text-white md:w-full space-y-3 md:space-y-4 2xl:space-y-5">
                <p className="text-sm md:text-base 2xl:text-lg">
                  Suggestion questions:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 2xl:gap-4">
                  {suggestionQuestions.map((question, index) => (
                    <button
                      key={index}
                      value={question}
                      onClick={(e) => handleSuggestion(e.target.value)}
                      className={`bg-white bg-opacity-10 p-2 md:p-3 2xl:p-4 rounded-full text-sm md:text-sm 2xl:text-lg hover:bg-white/20 transition-colors ${
                        index === 3 ? "md:col-span-1" : ""
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
          <div
            className={`grid grid-rows-[1fr_auto] w-full  items-end max-w-full md:max-w-[80%] 2xl:max-w-5xl mx-auto rounded-2xl min-h-[350px] md:min-h-[33rem] 2xl:min-h-[600px] pt-2 md:pt-3 2xl:pt-4`}
          >
            {/* <div className="flex-1 overflow-y-auto p-2 2xl:p-4 max-h-[250px] md:max-h-[480px] 2xl:max-h-[500px] custom-scrollbar">
              {messages.map((msg, index) => (
                <>
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
                          : "text-white self-start rounded-bl-none"
                      }`}
                      ref={index === messages.length - 1 ? messageEndRef : null}
                    >
                      {msg.text}
                    </span>
                  </div>
                </>
              ))}
              <div className="flex justify-start">
                {isLoading && <Loader />}
              </div>
            </div> */}
             <ChatArea messages={messages} messageEndRef={messageEndRef} isLoading={isLoading} className=""/>

            <div className="p-2 md:p-3 2xl:p-4 space-y-2 2xl:space-y-4">
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
              className="bg-white bg-opacity-25"
              isBotLoading={isLoading}
            />
            </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default HeaderGuestChat;
