import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import newchat from "../../assets/images/newChat.svg";
import Logo from "../../assets/images/Logo.svg";
import MobileBar from "../../assets/images/userMobileBar.svg"
import ChatHistory from '../Header/user/chat/ChatHistory';


function UserChatMobileNavbar() {
    const [chatHistory,setChatHistory] = useState(false)
    const handleNewChat = () => {
        window.location.reload(true);
        // setChatId("newchat");
        // setMessages([]);
        // setIsActiveChat(true);
      };
    
    const historyANDsettings = ()=>{
        setChatHistory(!chatHistory)
    }
    
  return (
    <>
    <div className='flex p-6 md:hidden z-10 justify-between items-center'>
        <div>
             <button onClick={handleNewChat}>
            <img src={newchat} alt="New Chat" className="w-6 h-6" />
            </button>
        </div>
        <div>
        <Link to="/" className="w-20 h-8">
              <img src={Logo} alt="MiLo Logo" className="w-28 h-8" />
            </Link>
        </div>
        <div>
        <button onClick={historyANDsettings}>
            <img src={MobileBar} alt="Mobile Bar" className="w-6 h-4" />
            </button>
        </div>
       </div>

       <ChatHistory
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
        onNewChat={handleNewChat}
        // selectedChatId={fetchMessages}
        // setIsActiveChat={setIsActiveChat}
        className="z-50 md:z-0 md:hidden text-white"
      />
    </>
  )
}

export default UserChatMobileNavbar