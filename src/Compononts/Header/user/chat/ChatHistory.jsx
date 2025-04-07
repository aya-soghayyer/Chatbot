import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/images/Logo.svg";
import eyeSlash from "../../../../assets/images/EyeSlash.svg";
import newchat from "../../../../assets/images/newChat.svg";
import Cookie from "js-cookie";

const ChatHistory = ({ chatHistory, setChatHistory, onNewChat, setSelectedChat,setIsActiveChat }) => {
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

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

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
    <div className={`flex md:justify-start md:items-start mt-7 gap-1 ${!chatHistory? "w-2/5 transition-all duration-300 ease-in-out":"transition-all duration-300 ease-in-out"} `}>
    <div className={`w-full md:h-full md:w-1/2 max-h-fit flex flex-col px-4 py-2 rounded-2xl ${!chatHistory ? "bg-white bg-opacity-[15%] transition-all duration-75 ease-in-out" : " transition-all duration-300 ease-in-out"}`}>
      
      <div className={` w-14 ${!chatHistory? "flex justify-between w-full transition-all duration-300 ease-in-out":"flex justify-between h-10 transition-all duration-300 ease-in-out"} `} >
          <button onClick={() => setChatHistory(!chatHistory)}>
            <img src={eyeSlash} alt="Toggle Chat History" className="w-6 h-6" />
          </button>
          <button onClick={onNewChat}>
            <img src={newchat} alt="New Chat" className="w-6 h-6" />
          </button>
      </div>

      {!chatHistory && (
        <>
        <h1 className="text-xl  mt-3 font-semibold text-white mb-3">Chat History</h1>

        <div className="overflow-y-auto max-h-full custom-scrollbar">

          {loading ? (
            <p className="text-gray-400">Loading chats...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : chats.length > 0 ? (
            <ul className="space-y-1">
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
              <li>
                hello
              </li>
              <li>
                hello
              </li>
              <li>
                hello
              </li>
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
    <Link to="/" className="w-20 h-8 md:w-28 md:h-10">
          <img src={Logo} alt="MiLo Logo" className="w-full h-full" />
        </Link>
        </div>
    </>
  );
};

export default ChatHistory;
