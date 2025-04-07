// components/ChatInput.js
import textMessage from "../../../../assets/images/ArrowButton.svg";
import voiceMessage from "../../../../assets/images/RecordingButton.svg";
import useSound from "use-sound"
import micStart from "../../../../assets/sounds/mixkit-video-game-mystery-alert-234.wav"
import micStop from "../../../../assets/sounds/mixkit-select-click-1109.wav"

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
  className="" 
  }) => {
  const [play] = useSound(micStart)
  const [pause] = useSound(micStop)

  return (
    <div className="relative grid w-full">
      <div className="flex space-x-2 mb-1 items-center">
        <label
          htmlFor="language"
          className="font-medium text-white text-xs md:text-base grid justify-start"
        >
          Select Language:
        </label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="py-1 h-8 text-white  bg-opacity-10 rounded-2xl bg-primary font-medium  w-fit text-xs"
        >
          <option value="en-US" className="bg-primary">EN</option>
          <option value="ar-SA" className="bg-primary">AR</option>
        </select>
      </div>
      {/* {isActiveChat?( */}
      <form onSubmit={handleSubmit} className="flex justify-center items-center w-full">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={`pl-4 pr-14 p-3 flex-auto rounded-br-2xl rounded-bl-2xl ${className}  text-white text-sm md:text-base`}
          type="text"
          placeholder="Ask MiLo"
        />
        {inputValue.trim()? (
          <button
            type="submit"
            onClick={() => setIsActiveChat(false)}
            className="absolute right-4 top-11 w-6 md:w-8"
          >
            <img src={textMessage} alt="Send text message icon" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleToggle}
            className="absolute right-4 top-11 w-6 md:w-8"
          >
            <img
              src={voiceMessage}
              onClick={pause}
              alt="Send voice message icon"
              className={listening ? "bg-green-500" : ""}
            />
          </button>
        )}
      </form>
      {/* ):( <div></div> )} */}
    </div>
  );
};

export default ChatInput;