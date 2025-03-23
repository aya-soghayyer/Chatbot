class AuthService {
    async signup(portalId:Number, portalPassword:String, miloPassword:String) {
      try {
        const response = await fetch("http://localhost:8000/user/signup", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            portal_id: portalId,
            portal_password: portalPassword,
            password: miloPassword,
          }),
        });
  
        if (!response.ok) {
          throw new Error("Signup failed");
        }
  
        return await response.json();
      } catch (error) {
        throw error;
      }
    }
  }
  
  export default new AuthService();