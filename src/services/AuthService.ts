// src/services/AuthService.js
class AuthService {
    async login(portalId, password) {
      try {
        const response = await fetch("http://localhost:8000/user/login", {
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
      
  
        if (!response.ok) {
          throw new Error("Login failed");
        }
  
        return await response.json();
      
      } catch (error) {
        throw error;
      }
    }
  }
  
  export default new AuthService();