import React from 'react'
import textMessage from "../../assets/images/ArrowButton.svg";
import voiceMessage from "../../assets/images/RecordingButton.svg";
import useSound from "use-sound"
// import micStart from "../../../../assets/soun/ds/mixkit-video-game-mystery-alert-234.wav"
import micStop from "../../assets/sounds/mixkit-select-click-1109.wav"  

function SendButton({ listening,
    handleToggle, setIsActiveChat,
    isActiveChat,inputValue}) {
        
        const [pause] = useSound(micStop)

  return (
<>

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
              className={listening ? "bg-green-500 p-1 rounded-full" : ""}
            />
          </button>
        )}

</>  )
}

export default SendButton