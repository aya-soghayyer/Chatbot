// components/Settings.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

const Settings = ({ showSettings, setSettings }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookie.remove("token");
    localStorage.removeItem("users");
    navigate("/login");
  };

  if (!showSettings) return null;

  return (
    <div className="w-64 md:w-72 h-80 md:h-96 backdrop-blur-md fixed top-16 right-4 md:right-16 rounded-2xl z-50 border border-t-gradientSkyBlue drop-shadow-xl">
      <div className="text-sm font-extralight p-2 border rounded-xl">
        Settings
      </div>
      <div className="p-5 text-sm md:text-base">Hello! aya soghayyer</div>
      <ul className="grid gap-5">
        <div className="flex justify-between items-center border-b p-5">
          <li className="text-sm md:text-base">Language</li>
          <FontAwesomeIcon icon="fa-solid fa-toggle-on" size="xl" />
        </div>
        <button>
          <li className="border-b p-5 text-sm md:text-base">Language</li>
        </button>
        <button
          onClick={handleLogout}
          className="flex justify-center items-center gap-3 text-red-700 border-b p-5"
        >
          <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" size="xl" />
          <li className="text-sm md:text-base">Logout</li>
        </button>
      </ul>
    </div>
  );
};

export default Settings;