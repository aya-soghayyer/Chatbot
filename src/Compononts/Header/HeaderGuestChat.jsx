// import React from 'react'

import { useState } from "react"
import { FaSearch } from 'react-icons/fa'; // Import the icon from react-icons
import { IoArrowUpCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { RiVoiceprintFill } from "react-icons/ri";
// import SpeechRecognition, { useSpeechRecognition } from  'react-speech-recognition';




function HeaderGuestChat() {
    const [value, setValue]= useState('')
    // State for the list of messages
  const [messages, setMessages] = useState([]);

  // State for the current input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle message submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (inputValue.trim() !== '') {
      // Add the new message to the messages list
      setMessages([...messages, inputValue]);
      // Clear the input field
      setInputValue('');
    }
  };

//   const { transcript, listening, resetTranscript } = useSpeechRecognition();

//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     return <p>المتصفح لا يدعم التعرف على الصوت.</p>;
//   }

  return (
<>

<div className="grid w-[100%] mb-10 z-20 bg-slate-500 p-5  rounded-2xl mt-5">
     {/* Chat Messages Display */}
     <div className="grid justify-end overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className="bg-purple-600 text-white p-2 rounded-lg shadow mb-2">
            {message}
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-white font-bold text-[28px] mt-40 flex justify-center">
          What can I help with?
        </h2>
      </div>
      <div className="relative"> {/* Add relative positioning here */}
        <form action=""  onSubmit={handleSubmit} className="flex">
          <input
            value={inputValue}
            onChange={handleInputChange}
            className="p-4 pl-12  rounded-2xl bg-slate-700 w-full text-white" // Add `pl-12` for left padding
            type="text"
            placeholder="Ask milo"
            
          />
          {/* Icon */}
          <button type="submit" className="absolute inset-y-5 right-7 items-end">
            {/* <img src={send} alt=""  /> */}
            {/* <FaSearch className="text-gray-300" />  */}
            <IoArrowUpCircle  color="white"/>
          </button>
          <button className="absolute inset-y-5 right-16 items-end w-2">
            {/* <img src={send} alt=""  /> */}
            {/* <FaSearch className="text-gray-300" />  */}
            <RiVoiceprintFill color="white" />
          </button >
        </form>
      </div>
      
    </div>
</>  )
}

export default HeaderGuestChat