import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import usePhoto from "../../../../hooks/usePhoto";

const Settings = ({
  showSettings,
  setSettings,
  isShowsettings,
  setShowSettinges,
}) => {
  const navigate = useNavigate();
  const {
    selectedFile,
    preview,
    handleFileChange,
  } = usePhoto()

  const handleLogout = () => {
    Cookie.remove("token");
    localStorage.removeItem("users");
    navigate("/login");
  };

  const handleNewPassword = () => {
    setSettings(false);
    navigate("/changepassword");
  };

  // If showSettings is false, return null
  if (!showSettings) return null;

  return (
    <>
      <div className="w-64 md:w-fit h-80 md:h-fit md:rounded-xl backdrop-blur-xl fixed top-16 right-4 md:right-10 md:top-16 rounded-2xl z-50 border bg-darkBlue/50 drop-shadow-xl">
        <div className="flex flex-col">
          <button
            onClick={() => {
              setShowSettinges(false); // corrected the function name
              setSettings(true);
            }}
            className="flex gap-4 items-center p-7 w-full h-10 md:h-12 text-white text-lg md:text-2 2xl:text-3xl font-bold md:font-bold bg-darkBlue/50 hover:bg-darkBlue/75 transition duration-300 ease-in-out rounded-t-2xl"
          >
            <FontAwesomeIcon icon="fa-solid fa-gear" size="lg" />
            Settings
          </button>
          <div className="w-">
            <hr />
          </div>
          <button
            onClick={handleLogout}
            className="flex gap-4 items-center p-7 w-full h-10 md:h-12 text-red-700 text-lg md:text-2 2xl:text-3xl font-bold md:font-bold bg-darkBlue/50 hover:bg-darkBlue/75 transition duration-300 ease-in-out rounded-b-2xl"
          >
            <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" size="lg" />
            Logout
          </button>
        </div>
      </div>
      
      {/* Show settings content */}
      {isShowsettings ? (
        <div></div>
      ) : (
        <div className="absolute top-48 right-96 bg-darkBlue/50 backdrop-blur-xl rounded-xl px-3 ">
          <div className="flex justify-between items-center px-4 py-3 ">
            <h3>Settings</h3>
            <button
              onClick={() => {
                setShowSettinges(true); // corrected the function name
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" shake size="lg" />
            </button>
          </div>
          <hr />
          <div className="flex justify-between items-center gap-14 font-light px-4 py-5">
            <h5>Change Password</h5>
            <button
              onClick={handleNewPassword}
              className="px-3 rounded-xl font-extralight bg-gradient-to-r from-gradientPurple to-gradientSkyBlue"
            >
              Change
            </button>
          </div>

          <div className="flex justify-between items-center font-light px-4 py-5">
            <div>
              <h5>Change Photo</h5>
            </div>
            <div>
              {/* Hidden File Input */}
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              {console.log("Preview:", preview)} {/* Fixed console log */}
              {console.log("Selected File:", selectedFile)} {/* Fixed console log */}

              {/* Custom Upload Button */}
              <label
                htmlFor="fileInput"
                className="px-3 cursor-pointer rounded-xl font-extralight bg-gradient-to-r from-gradientPurple to-gradientSkyBlue"
              >
                Upload Image
              </label>

              {/* Image Preview */}
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-40 h-40 object-cover rounded-md shadow-md"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
