import {React, useState }from 'react'
import Voice from '../Compononts/Header/voice'

function About() {
  const [messages, setMessages] = useState([]); // Empty at start
  const [input, setInput] = useState("");
  const [activeChat, setActiveChat] = useState(false); // Controls UI state

  // Send message function
  const sendMessage = () => {
    if (!input.trim()) return;

    if (!activeChat) setActiveChat(true); // First message triggers redesign

    setMessages([...messages, { id: messages.length + 1, text: input, sender: "user" }]);
    setInput("");

    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, text: "Hello! How can I help you?", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <>
    
    <div className={`p-6 min-h-screen flex flex-col items-center transition-all duration-700 ${activeChat ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      
      {/* Before Start UI */}
      {!activeChat ? (
        <div className="w-96 h-[400px] flex flex-col items-center justify-center text-center bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold">Welcome to Chatbot</h2>
          <p className="text-gray-500 mt-2">Start a conversation to activate the chat interface.</p>
          <button 
            onClick={() => setActiveChat(true)} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Start Chat
          </button>
        </div>
      ) : (
        // Active Chat UI
        <div className="w-96 h-[500px] bg-gray-800 rounded-lg shadow-lg flex flex-col">
          
          {/* Chat Messages */}
          <div className="flex-grow p-4 overflow-y-auto space-y-2">
            {messages.map((msg) => (
              <div key={msg.id} className={`p-2 rounded ${msg.sender === "user" ? "bg-blue-500 text-white self-end text-right" : "bg-gray-300 text-black text-left"}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="flex p-2 border-t border-gray-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow p-2 bg-gray-700 text-white rounded-l outline-none"
              placeholder="Type a message..."
            />
            <button onClick={sendMessage} className="p-2 bg-green-500 text-white rounded-r">
              Send
            </button>
          </div>
          
        </div>
      )}
      
    </div>
    <Voice/>
    

    
     {/* <div className="relative min-h-screen bg-cover bg-center bg-custom ">  */}
      {/* Darkened backdrop effect */}
       {/* <div className="absolute inset-0 backdrop-brightness-[0.2]"></div>

      Modal content
       <div className="relative z-10 flex items-center justify-center h-screen">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-bold">This is a modal</h2>
          <p className="text-gray-600">
            The background is dimmed using backdrop-brightness-50.
          </p>
        </div>
      </div>
    </div>
  


   */}


    </>
  )
}

export default About