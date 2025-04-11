// src/services/AuthService.js
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { domainName } from "../App";

class AuthService {
  async login(portalId, password) {
    try {
      const response = await fetch(`${domainName}user/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          portal_id: portalId,
          password,
        }),
      });
      const data = await response.json();

      // Set token with expiration (30 minutes)
      Cookies.set("token", data.user.token, { expires: 0.0007, secure: true });

      // Set token with a 1-minute expiration
      const expirationTime = new Date(new Date().getTime() + 1 * 60 * 1000);

      Cookies.set("token", data.user.token, { expires: 0.0208, secure: true });
      Cookies.set("token_expiration", expirationTime.toISOString(), {
        expires: 0.0208,
        secure: true,
      });

      const tokenExpiration = new Date(expirationTime);
      const now = new Date();

      if (now > tokenExpiration) {
        Cookies.remove("token");
        Cookies.remove("token_expiration");
        console.log("Token has expired");
      } else {
        console.log("Token is still valid");
      }

      if (!response.ok) {
        throw new Error("Login failed");
      }
      // console.log(response.json());
      return await data;
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();
