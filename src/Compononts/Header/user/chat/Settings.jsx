import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import usePhoto from "../../../../hooks/usePhoto";
import { useState } from "react";
import UnFilledButton from "../../../ui/UnFilledButton";
import FilledButton from "../../../ui/FilledButton";

const Settings = ({
  showSettings,
  setShowSettings,
  settingsDetails,
  setSettingsDetails,
  setPhoto,
  showPhotos,
  showLogoutScreen,
  setShowLogoutScreen
  // setShowPhotos,
}) => {
  const navigate = useNavigate();
  const { selectedFile, preview, handleFileChange } = usePhoto();

  const handleLogout = () => {
    Cookie.remove("token");
    Cookie.remove("token_expiration");
    localStorage.removeItem("users");
    navigate("/login");
  };

  const handleNewPassword = () => {
    // setShowSettings(true);
    navigate("/changepassword");
  };

  const showingSettingDetails = () => {
    setSettingsDetails(!settingsDetails);
    setPhoto(false);
    // setShowPhotos(false);
  };

  if (!showSettings) return null;

  return (
    <>
      <div className="md:w-fit w-fit h-fit md:h-fit md:rounded-xl backdrop-blur-xl absolute top-1/3 right-4 md:fixed  md:right-10 md:top-16 rounded-2xl z-10 border bg-darkBlue drop-shadow-xl">
        <div className="flex flex-col md:-z-0">
          <button
            onClick={showingSettingDetails}
            className="flex gap-4 items-center md:p-7 p-7 w-full h-10 md:h-12 text-white md:text-base md:font-normal md:text-2 2xl:text-3xl font-bold bg-darkBlue hover:bg-darkBlue/75 transition duration-300 ease-in-out rounded-t-2xl"
          >
            <FontAwesomeIcon icon="fa-solid fa-gear" size="lg" />
            Settings
          </button>
          <div>
            <hr />
          </div>
          <button
            onClick={() => { setShowLogoutScreen(true);}}
            className="flex gap-4 items-center p-7 w-full h-10 md:h-12 text-white text-lg md:text-base md:font-normal 2xl:text-3xl bg-darkBlue hover:bg-darkBlue/75 transition duration-300 ease-in-out rounded-b-2xl"
          >
            <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" size="lg" />
            Logout
          </button>
        </div>
      </div>
      {showLogoutScreen && (
  <div className="fixed inset-0 z-20 bg-black/65 flex items-center justify-center p-4 md:p-6 2xl:p-8">
    <div className="absolute top-7 right-5 z-50 md:w-1/3 md:top-48 md:right-96 bg-darkBlue backdrop-blur-xl rounded-xl px-3">
      <div className="flex justify-between items-center px-4 py-3">
        <h3>Confirm Logout</h3>
        <button onClick={() => setShowLogoutScreen(false)}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" shake size="lg" />
        </button>
      </div>
      <hr />
      <div className="flex justify-between">
        <div className="flex justify-between items-center gap-14 font-light px-4 py-5">
          <button
            onClick={handleLogout}
            className="px-3 rounded-xl font-extralight bg-gradient-to-r from-gradientPurple to-gradientSkyBlue"
          >
            Logout
          </button>
        </div>
        <div className="flex justify-between items-center font-light px-4 py-5">
          <button
            onClick={() => {
              setShowLogoutScreen(false);
              setShowSettings(false);
            }}
            className="px-3 rounded-xl font-extralight"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
)}


      {/* Settings Modal */}
      {settingsDetails && !showPhotos && (
        <div className="fixed inset-0 z-20 bg-black/65 flex items-center justify-center p-4 md:p-6 2xl:p-8">
          <div className="absolute top-7 right-5 z-50 md:w-1/3 md:top-48 md:right-96 bg-darkBlue backdrop-blur-xl rounded-xl px-3 ">
            <div className="flex justify-between items-center px-4 py-3 ">
              <h3>Settings</h3>
              <button onClick={() => setSettingsDetails(false)}>
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
              <h5>Change Photo</h5>
              <button
                onClick={() => {
                  setSettingsDetails(false);
                  setPhoto(true);
                  setShowSettings(false);

                  // setShowPhotos(true);
                }}
                className="px-3 rounded-xl font-extralight bg-gradient-to-r from-gradientPurple to-gradientSkyBlue"
              >
                Choose
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Photo Selection Modal */}
      {showPhotos && (
        <div className="fixed inset-0 z-20 bg-black/65 flex items-center justify-center p-4 md:p-6 2xl:p-8">
          <div className="absolute z-20 md:w-1/2 md:h-4/5 top-68 right-86 bg-darkBlue backdrop-blur-xl rounded-xl px-3 ">
            <div className="flex justify-between items-center px-4 py-3 ">
              <h3>Choose your photo</h3>
              <button
                onClick={() => {
                  setPhoto(false);
                  setShowSettings(!showSettings);

                }}
              >
                <FontAwesomeIcon icon="fa-solid fa-xmark" shake size="lg" />
              </button>
            </div>
            <hr />
            <div className="grid justify-between items-center gap-5 font-light px-4 py-5">
              <h5>Choose avatar</h5>
              <div className="flex justify-around">
                <img className="w-1/5" src="https://avatar.iran.liara.run/public/3" alt="avatar 3" />
                <img className="w-1/5" src="https://avatar.iran.liara.run/public/4" alt="avatar 4" />
                <img className="w-1/5" src="https://avatar.iran.liara.run/public/5" alt="avatar 5" />
              </div>
              <div className="flex justify-around">
                <img className="w-1/5" src="https://avatar.iran.liara.run/public/62" alt="avatar 62" />
                <img className="w-1/5" src="https://avatar.iran.liara.run/public/63" alt="avatar 63" />
                <img className="w-1/5" src="https://avatar.iran.liara.run/public/64" alt="avatar 64" />
              </div>
              <div className="flex justify-between items-center">
                <hr className="border-t border-white/30 w-3/4 mx-auto 2xl:mb-8" />
                <h3 className="capitalize px-3 flex items-start">or</h3>
                <hr className="border-t border-white/30 w-3/4 mx-auto 2xl:mb-8" />
              </div>
              <div className="m-auto">
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="fileInput"
                  className="px-5 py-4 cursor-pointer rounded-xl font-extralight bg-gradientSkyBlue/80"
                >
                  Choose your photo
                </label>
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
        </div>
      )}
    </>
  );
};

export default Settings;
