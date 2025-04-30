// components/ChatArea.js
import React from "react";
import Loader from "../../../loader/Loader";
import { marked } from "marked";

// Optional config for better Markdown rendering
marked.setOptions({
  breaks: true,
  gfm: true,
});

const ChatArea = ({ messages, messageEndRef, isLoading, className }) => {
  return (
    <div className={`overflow-y-auto w-full p-3 md:p-0 md:px-7 ${className} max-h-[490px] md:max-h-[400px] custom-scrollbar relative`}>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex mb-4 items-end ${
            msg.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          {msg.sender !== "user" && (
            <div className="w-10 h-10 md:w-12 md:h-12 mr-2">
              <img
                src="https://avatar.iran.liara.run/public/1"
                alt="Bot Avatar"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          )}

          <span
            className={`p-3 text-sm md:text-base max-w-[80%] break-words prose prose-invert ${
              msg.sender === "user"
                ? "bg-slate-500/40 text-white rounded-[30px] rounded-br-none"
                : "text-white bg-darkBlue rounded-[30px]  rounded-bl-none"
            }`}
            ref={index === messages.length - 1 ? messageEndRef : null}
          >
            {msg.sender === "bot" ? (
              <div
                dangerouslySetInnerHTML={{ __html: marked.parse(msg.text || "") }}
              />
            ) : (
              msg.text
            )}
          </span>

          {msg.sender === "user" && (
            <div className="w-10 h-10 md:w-12 md:h-12 ml-2">
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
