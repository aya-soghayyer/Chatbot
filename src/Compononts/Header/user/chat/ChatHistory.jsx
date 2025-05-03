import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/images/Logo.svg";
import eyeSlash from "../../../../assets/images/EyeSlash.svg";
import newchat from "../../../../assets/images/newChat.svg";
import userMobileSetting from "../../../../assets/images/userMobileSetting.svg";
import Cookie from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Settings from "./Settings";
import { domainName } from "../../../../App";


const ChatHistory = ({
  chatHistory,
  setChatHistory,
  onNewChat,
  setSelectedChat,
  setIsActiveChat,
  isActivateChat,
  fetchMessages, // ✅ ADD THIS
  className,
}) => {
  const [showSettings, setSettings] = useState(false);
  const [settingsDetails, setSettingsDetails] = useState(false);
  const [showPhotos, setPhoto] = useState(false)
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

        const response = await fetch(`${domainName}chat/chats`, {
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
        console.log("Fetched Chats hello:", data.Chats[0].id); // Ensure data structure is correct

        if (Array.isArray(data.Chats)) {
          setChats(data.Chats);
        } else {
          throw new Error("Invalid data format received from API");
        }
      } catch (err) {
        console.error("Fetch error:", err.message);
        // setError(err.message);
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
          <div className={`hidden md:flex md:felx-row md:items-start w-screen h-full gap-6`}>
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
              <div className="h-screen md:items-start grid gap-3">

              <h1 className="text-xl mt-3 md:text-lg md:items-start md:font-normal text-white/55 mb-3 md:mb-0">
                History
              </h1>

              <div className="h-3/4 md:h-screen">
                {loading ? (
                  <p className="text-gray-400 ">Loading chats...</p>
                ) : error ? (
                  <p className="text-red-500">{error}</p>
                ) : chats.length > 0 ? (
                  <ul className="space-y-6 md:space-y-1 overflow-y-auto max-h-[470px] md:max-h-[480px] custom-scrollbar px-1">
                    {chats.map((chat) => (
                      <li
                        key={chat.id} // Use chat_number as key
                        className={`md:p-2 text-lg font-light md:bg-primary/30 text-white md:rounded-lg cursor-pointer md:hover:bg-gradientPurple md:hover:bg-opacity-20 ${
                          selectedChatId === chat.id ? "bg-gradientPurple bg-opacity-20" : ""
                        }`}                     
                           onClick={() => {
                          setSelectedChat(chat.id);
                          setIsActiveChat(true); // Set the active chat state
                          fetchMessages(chat.id); 
                          // {console.log("Selected chat ID hello aya:", chat.id)}
                          // setSelectedChatId(chat.id); // Set the selected chat ID
                          // ✅ fetch messages when clicked
                          {console.log("Selected chat ID:", chat.id)} // Pass correct chat ID}
                        }} // Pass correct chat ID
                      >
                        {chat.chat_number || "Untitled Chat"}
                        {/* {console.log("Selected chat ID:", chat.id)} */}

                      </li>
                    ))}
                  </ul>
                  
                ) : (
                  <p className="text-gray-500">No chats available.</p>
                )}
                            </div>


            <div className="md:hidden">
            <hr />
            <div className="flex justify-between items-center mt-4 px-3">
              <div className="flex justify-center gap-4 items-center">
              <div className="w-10 h-10 bg-white/50 rounded-full border relative">
                <FontAwesomeIcon icon="fa-solid fa-user" size="xl" className="absolute top-1 left-2" />
              </div>
              <div>Student Name</div>
              </div>
              
              <button  onClick={() => setSettings(!showSettings)}>
                <img src={userMobileSetting} alt="settings for the user" />
                 </button>
                 <Settings className="z-30" setPhoto={setPhoto} showPhotos={showPhotos} settingsDetails={settingsDetails} setSettingsDetails={setSettingsDetails} showSettings={showSettings} setSettings={setSettings} />

            </div>
            </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatHistory;