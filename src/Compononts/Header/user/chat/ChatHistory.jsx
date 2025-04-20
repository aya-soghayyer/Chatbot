import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/images/Logo.svg";
import eyeSlash from "../../../../assets/images/EyeSlash.svg";
import newchat from "../../../../assets/images/newChat.svg";
import Cookie from "js-cookie";

const ChatHistory = ({
  chatHistory,
  setChatHistory,
  onNewChat,
  setSelectedChat,
  setIsActiveChat,
  className,
}) => {
  const [chats, setChats] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedChatId, setSelectedChatId] = useState(null); // Store selected chat ID
  const [messages, setMessages] = useState([]); // Store messages for the selected chat
  // const [isActiveChat, setIsActiveChat] = useState(true);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        console.log("Fetching chats...");
        const token = Cookie.get("token");
        if (!token) throw new Error("No token found, please log in.");

        const response = await fetch("http://localhost:8000/chat/chats", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Response Status:", response.status);

        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log("Fetched Chats:", data); // Ensure data structure is correct

        if (Array.isArray(data.Chats)) {
          setChats(data.Chats);
        } else {
          throw new Error("Invalid data format received from API");
        }
      } catch (err) {
        console.error("Fetch error:", err.message);
        setError(err.message);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchChats();
  }, []);

  // const handleChatClick = (chatId) => {
  //   setSelectedChatId(chatId); // Set the selected chat ID
  //   // fetchMessages(chatId); // Fetch the messages for the selected chat
  // };

  return (
    <>
      <div
        className={`flex md:justify-start md:items-start w-full md:w-1/5 md:-ml-2 md:py-5 ${className} gap-1 ${
          !chatHistory
            ? "w-2/5 h-full transition-all  duration-300 ease-in-out"
            : "transition-all duration-300  ease-in-out"
        } `}
      >
        <div
          className={`w-full md:w-full max-h-fit flex flex-col px-4 ${
            !chatHistory
              ? "md:bg-darkBlue/25 md:py-5 md:h-screen md:w-full transition-all duration-75 ease-in-out bg-darkPrimary h-screen"
              : "transition-all duration-300 md:py-5 ease-in-out"
          }`}
        >
          <div className={`flex felx-row items-start w-screen h-full gap-6`}>
            <Link to="/" className="w-20 h-8 md:w-28 md:h-10">
              <img src={Logo} alt="MiLo Logo" className="w-full h-full" />
            </Link>
            <div
              className={`w-14 mt-3 flex justify-between`}
            >
              <button onClick={() => setChatHistory(!chatHistory)}>
                <img
                  src={eyeSlash}
                  alt="Toggle Chat History"
                  className="w-6 h-6"
                />
              </button>
              <button onClick={onNewChat}>
                <img src={newchat} alt="New Chat" className="w-6 h-6" />
              </button>
            </div>
          </div>
          {!chatHistory && (
            <>
              <h1 className="text-lg mt-3 font-normal text-slate-300 mb-3">
                Chat History
              </h1>

              <div className="">
                {loading ? (
                  <p className="text-gray-400">Loading chats...</p>
                ) : error ? (
                  <p className="text-red-500">{error}</p>
                ) : chats.length > 0 ? (
                  <ul className="space-y-1 overflow-y-auto max-h-[480px] custom-scrollbar px-1 md:pb-3">
                    {chats.map((chat) => (
                      <li
                        key={chat.id} // Use chat_number as key
                        className="p-2 bg-gray-800/20 text-white rounded-lg cursor-pointer hover:bg-gray-700"
                        onClick={() => {
                          setSelectedChat(chat.id);
                          setIsActiveChat(false);
                        }} // Pass correct chat ID
                      >
                        {chat.chat_number || "Untitled Chat"}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No chats available.</p>
                )}

                {/* {selectedChatId && (
            <div className="mt-6">
              <h2 className="text-xl font-bold text-white">Messages in Chat {selectedChatId}</h2>
              <div className="mt-2">
                {messages.length > 0 ? (
                  <ul>
                    {messages.map((message, index) => (
                      <li key={index} className="bg-gray-700 text-white p-2 rounded-lg mb-2">
                        {message.content || "No content"}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No messages yet.</p>
                )}
              </div>
            </div>
          )} */}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatHistory;
