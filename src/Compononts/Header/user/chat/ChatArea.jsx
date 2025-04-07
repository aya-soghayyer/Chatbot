// components/ChatArea.js
import Cookie from "js-cookie";
import { useState, useEffect, useRef } from "react";

const ChatArea = ({ messages, messageEndRef }) => {
//   const [messages, setMessages] = useState([]);
// const [newMessage, setNewMessage] = useState("");
// const [isTyping, setIsTyping] = useState(false);
// const [typingInterval, setTypingInterval] = useState(null);
// const [lastTypingTime, setLastTypingTime] = useState(null);
// const [userTyping, setUserTyping] = useState(false);

  // useEffect(() => {

  //   const fetchMessages = async (chatId) => {
  //     try {
  //       const token = Cookie.get("token");
  //       if (!token) throw new Error("No token found, please log in.");
  
  //       const responseMessages = await fetch(`${domainName}chat/messages?start=1&end=10&chat_id=${chatId}`, {
  //         method: "GET",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  
  //       if (!responseMessages.ok) throw new Error(`Error fetching messages: ${responseMessages.status}`);
  
  //       const data = await responseMessages.json();
  //       console.log("Fetched Messages:", data);
  //       setMessages(data.Messages); // Store messages in state
  //     } catch (err) {
  //       console.error("Error fetching messages:", err.message);
  //       // setError(err.message);
  //     }
  //   };
  //   fetchMessages(chatId);
  // }, []);
  
    return (
      <div className="overflow-y-auto w-full p-3 max-h-[379px] custom-scrollbar">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex mb-2 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-yellow-50"></div>
            <span
              className={`p-2 rounded-lg mb-2 w-fit text-sm md:text-base ${
                msg.sender === "user"
                  ? "bg-slate-500/40 text-white self-end rounded-br-none max-w-[70%]"
                  : "text-white self-start rounded-bl-none max-w-[70%]"
              }`}
              ref={messageEndRef}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
    );
  };
  
  export default ChatArea;