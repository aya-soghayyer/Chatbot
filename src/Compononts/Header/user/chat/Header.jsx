// components/Header.js
import { NavLink } from "react-router-dom";
import Logo from "../../../../assets/images/Logo.svg";
import eyeSlash from "../../../../assets/images/EyeSlash.svg";
import newchat from "../../../../assets/images/newChat.svg";

const Header = ({ chatHistory, setChatHistory, onNewChat }) => {
  return (
    <div
      className={`w-full md:w-1/4 max-h-[88vh] m-3 flex justify-between p-4 rounded-2xl ${
        !chatHistory ? "bg-white bg-opacity-[15%]" : ""
      }`}
    >
      <div className="z-40 w-20 h-8 md:w-28 md:h-10">
        <NavLink to="/">
          <img src={Logo} alt="MiLo Logo" className="w-full h-full" />
        </NavLink>
      </div>
      <div className="flex justify-end w-16 h-10 gap-3">
        <button onClick={() => setChatHistory(!chatHistory)}>
          <img src={eyeSlash} alt="eye slash icon" className="w-6 h-6" />
        </button>
        <button onClick={onNewChat}>
          <img src={newchat} alt="new chat icon" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Header;