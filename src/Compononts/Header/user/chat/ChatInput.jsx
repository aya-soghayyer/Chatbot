// components/ChatInput.js
// import textMessage from "../../../../assets/images/ArrowButton.svg";
// import voiceMessage from "../../../../assets/images/RecordingButton.svg";
// import useSound from "use-sound"
// import micStart from "../../../../assets/sounds/mixkit-video-game-mystery-alert-234.wav"
// import micStop from "../../../../assets/sounds/mixkit-select-click-1109.wav"
import SelectLanguageSpeak from "../../../ui/SelectLanguageSpeak";
import SendButton from "../../../ui/SendButton";

const ChatInput = ({
  inputValue,
  setInputValue,
  language,
  setLanguage,
  listening,
  handleToggle,
  handleSubmit,
  setIsActiveChat,
  isActiveChat,
  className="",
  isBotLoading // ⬅️ Add this prop
  }) => {
  // const [play] = useSound(micStart)
  // const [pause] = useSound(micStop)

  return (
    <div className="relative grid w-full">
      <SelectLanguageSpeak language={language} setLanguage={setLanguage} />
      <form onSubmit={handleSubmit} className="flex justify-center items-center w-full">
      <input
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  className={`pl-4 pr-14 p-3 flex-auto rounded-br-2xl rounded-bl-2xl ${className} text-sm md:text-base bg-opacity-80 ${
    isBotLoading ? "bg-gray-700 cursor-not-allowed" : "bg-gray-800"
  }`}
  type="text"
  placeholder="Ask MiLo"
  disabled={isBotLoading}
/>
        <SendButton  listening={listening}
            handleToggle={handleToggle} setIsActiveChat={setIsActiveChat}
            isActiveChat={isActiveChat} inputValue={inputValue} />
      </form>
    </div>
  );
};

export default ChatInput;