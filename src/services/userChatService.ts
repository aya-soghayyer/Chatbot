// services/ChatService.js
import Cookie from "js-cookie";
import { domainName } from "../App";

class ChatService {
  async addMessage(message, chatId, onStreamUpdate) {
    const token = Cookie.get("token");
    if (!token) {
      throw new Error("No token found, please log in.");
    }

    const response = await fetch(`${domainName}chat/addmessage`, {
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

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let buffer = "";
    let fullResponse = "";
    let newChatId = chatId;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      const lines = buffer.split("\n\n");
      for (let line of lines) {
        if (line.startsWith("data:")) {
          const jsonString = line.replace("data: ", "").trim();
          if (!jsonString) continue;

          const parsed = JSON.parse(jsonString);

          if (parsed.status === "[DONE]") {
            newChatId = parsed.chat_id || newChatId;
          } else {
            fullResponse += parsed.content;
            if (onStreamUpdate) onStreamUpdate(parsed.content);
          }
        }
      }

      buffer = "";
    }

    return { fullResponse, chat_id: newChatId };
  }
}

export default new ChatService();
