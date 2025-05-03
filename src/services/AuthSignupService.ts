import { domainName } from "../App";
import Cookies from "js-cookie";


class AuthService {

    async signup(portalId:Number, portalPassword:String, miloPassword:String, firsName:String, lastName:String) {
      try {
        const response = await fetch(`${domainName}user/signup`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            portal_id: portalId,
            portal_password: portalPassword,
            password: miloPassword,
            name: `${firsName} ${lastName}`,
          }),
        });
        const data = await response.json()
              console.log("data response  ", data)
              localStorage.setItem("name", data.Name);
           // Set token with expiration (30 minutes)
              Cookies.set("token", data.Token, { expires: 0.0007, secure: true });
        
              // Set token with a 1-minute expiration
              const expirationTime = new Date(new Date().getTime() + 1 * 60 * 1000);
        
              Cookies.set("token", data.Token, { expires: 0.0208, secure: true });
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
            
              if(response.ok){
                    console.log("Signup successful", data); 
              }
        if (!response.ok) {
          throw new Error("Signup failed");
        }
  
        return  data;
      } catch (error) {
        throw error;
      }
    }
  }
  
  export default new AuthService();