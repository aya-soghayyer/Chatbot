// src/services/ChatService.js
import { domainName } from "../App";
class ChatService {
    async sendGuestMessage(message, chatId = "") {
      try {
        const response = await fetch(`${domainName}guest/addmessage`, {
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