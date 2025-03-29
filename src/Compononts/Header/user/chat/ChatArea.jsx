// components/ChatArea.js
const ChatArea = ({ messages, messageEndRef }) => {
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