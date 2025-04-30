import { useGuestChat } from "../../../hooks/useGuestChat";
import ChatService from "../../../services/ChatService";
import SpeechService from "../../../services/SpeechService";
import Loader from "../../loader/Loader";
import micStop from "../../../assets/sounds/mixkit-video-game-mystery-alert-234.wav";
import SelectLanguageSpeak from "../../ui/SelectLanguageSpeak";
import ChatInput from "../user/chat/ChatInput";
import ChatArea from "../user/chat/ChatArea";

function HeaderGuestChat() {
  const {
    setIsActiveChat,
    handleToggleSpeech,
    setLanguage,
    language,
    messages,
    inputValue,
    listening,
    activeChat,
    isLoading,
    messageEndRef,
    handleSubmit,
    handleSuggestion,
    setInputValue,
  } = useGuestChat(ChatService, SpeechService);
  

  const suggestionQuestions = [
    "What is the required rate for computer science major?",
    "What are the majors offered by Hebron University?",
    "How can I change the major I was accepted into?",
  ];

  return (
    <>
      <div className="grid 2xl:py-12 text-white font-Outfit md:h-[33rem] z-0 md:z-10 relative">
        {!activeChat ? (
          <div className="grid gap-1 px-5 h-[33rem] md:px-44 md:gap-3 2xl:gap-8 w-full min-w-full md:min-w-full 2xl:max-w-5xl mx-auto 2xl:mt-20 z-10 relative">
            <h2 className="text-2xl md:text-3xl 2xl:text-3xl font-bold flex justify-center items-end">What can I help with?</h2>
            <div className="space-y-3 h-1/2 md:space-y-4 2xl:space-y-6">
              <div className="relative mx-4">
                <ChatInput
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  language={language}
                  setLanguage={setLanguage}
                  listening={listening}
                  handleToggle={handleToggleSpeech}
                  handleSubmit={handleSubmit}
                  setIsActiveChat={setIsActiveChat}
                  className="rounded-2xl bg-white/15 py-4"
                />
              </div>
              <div className="hidden md:inline-grid md:px-24 2xl:p-4 text-white md:w-full space-y-3 md:space-y-4 2xl:space-y-5">
                <p className="text-sm md:text-base 2xl:text-lg text-white/70">Suggested questions:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-1 2xl:gap-4">
                  {suggestionQuestions.map((question, index) => (
                    <button
                      key={index}
                      value={question}
                      onClick={(e) => handleSuggestion(e.target.value)}
                      className={`bg-white bg-opacity-10 p-2 md:p-3 2xl:p-4 rounded-full text-sm md:text-sm 2xl:text-lg hover:bg-white/20 transition-colors ${index === 2 ? "md:col-span-2 mt-1 flex justify-center justify-self-center" : ""}`}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-rows-[1fr_auto] h-screen w-full items-end max-w-full md:max-w-[80%] 2xl:max-w-5xl mx-auto rounded-2xl min-h-[350px] md:max-h-[33rem] 2xl:min-h-[600px] pt-2 md:pt-3 2xl:pt-4">
            <ChatArea messages={messages} messageEndRef={messageEndRef} isLoading={isLoading} />
            <div className="p-2 md:p-3 2xl:p-4 space-y-2 2xl:space-y-4">
              <div className="relative mx-4">
                <ChatInput
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  language={language}
                  setLanguage={setLanguage}
                  listening={listening}
                  handleToggle={handleToggleSpeech}
                  handleSubmit={handleSubmit}
                  setIsActiveChat={setIsActiveChat}
                  className="bg-white bg-opacity-25 py-3"
                  isBotLoading={isLoading}
                  classNameButton="md:top-[46px]"
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
