// src/services/ChatService.js
class ChatService {
    async sendGuestMessage(message, chatId = "") {
      try {
        const response = await fetch("http://localhost:8000/guest/addmessage", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message, chat_id: chatId }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to send message");
        }
  
        return await response.json();
      } catch (error) {
        throw error;
      }
    }
  }
  
  export default new ChatService();