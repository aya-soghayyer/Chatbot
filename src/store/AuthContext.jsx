import { useContext } from "react";
import { createContext } from "vm";

const userInfo = createContext(null)
const App = () => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [userInfo, setUserInfo] = useContext(userInfo)
    const login = () => {
        // login logic
        setUserInfo({ name: 'John Doe', email: 'johndoe@example.com'
            }
            )
            }
            const logout = () => {
                // logout logic
                setUserInfo(null)
                }
                return (
                    <div>
                        <button onClick={login}>Login</button>
                        <button onClick={logout}>Logout</button>
                        {userInfo && <p>Welcome, {userInfo.name}</p>}
                    </div>
                )
                }
                