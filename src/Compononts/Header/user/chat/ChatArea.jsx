// components/ChatArea.js
import React from "react";
import Loader from "../../../loader/Loader";

const ChatArea = ({ messages, messageEndRef, isLoading }) => {
  return (
    <div className="overflow-y-auto w-full p-3 max-h-[400px] md:max-h-[480px] custom-scrollbar relative">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex mb-4 items-end ${
            msg.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          {msg.sender !== "user" && (
            <div className="w-10 h-10 md:w-14 md:h-14 mr-2">
              <img
                src="https://avatar.iran.liara.run/public/1"
                alt="Bot Avatar"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          )}

          <span
            className={`p-3 rounded-lg text-sm md:text-base max-w-[70%] break-words ${
              msg.sender === "user"
                ? "bg-slate-500/40 text-white rounded-br-none"
                : "text-white rounded-bl-none"
            }`}
            ref={index === messages.length - 1 ? messageEndRef : null}
          >
            {msg.text}
          </span>

          {msg.sender === "user" && (
            <div className="w-10 h-10 md:w-14 md:h-14 ml-2">
              <img
                src="https://avatar.iran.liara.run/public/2"
                alt="User Avatar"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      ))}

      {isLoading && (
        <div className="flex justify-start mt-2">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default ChatArea;
