import Cookie from "js-cookie";
import { domainName } from "../App";

class chatsHistoryService {
  async getMessage() {
    const token = Cookie.get("token");
    if (!token) {
      throw new Error("No token found, please log in.");
    }

    const response = await fetch(`${domainName}chat/chats`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
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

export default new chatsHistoryService();