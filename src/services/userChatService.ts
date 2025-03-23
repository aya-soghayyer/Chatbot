// services/ChatService.js
import Cookie from "js-cookie";

class ChatService {
  async addMessage(message, chatId) {
    const token = Cookie.get("token");
    if (!token) {
      throw new Error("No token found, please log in.");
    }

    const response = await fetch("http://localhost:8000/chat/addmessage", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message,
        chat_id: chatId,
      }),
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Unauthorized. Please log in again.");
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }
}

export default new ChatService();