import { useNavigate } from "react-router-dom";
import { useChangePassword } from "../../../hooks/useChangePassword";
import FilledButton from "../../ui/FilledButton";
import eye from "../../../assets/images/eye.svg";
import { useState } from "react";

function ChangePasswordHeader() {
  const navigate = useNavigate();

  const {
    passwordData,
    showPassword,
    setShowPassword,
    showNewPassword,
    setShowNewPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isInvalidPassword,
    setInvalidPassword,
    handleChange,
    handleSubmit,
    isLoading,
    isError,
    isSuccess,
  } = useChangePassword();

  return (
    <>
      <div className="grid py-20 md:bg-darkBlue md:z-30 md:grid text-white md:p-6 md:w-1/3 rounded-xl md:items-center md:absolute md:-top-44 md:right-96">
        <h1 className="flex justify-center items-center z-0 md:text-lg text-2xl font-normal md:py-2">
          Change Password
        </h1>
        <hr className="hidden md:inline-flex" />
        <form
          onSubmit={handleSubmit}
          className="grid justify-center h-full z-0 items-center py-9 px-10 w-screen md:w-full"
        >
          <div className="px-8 py-3 gap-1 grid w-svw md:w-full relative">
            <label htmlFor="current" className="text-base font-light">
              Current Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="current"
              name="currentPassword"
              className={`border w-full p-3 2xl:p-5 h-12 md:h-10 pr-12 2xl:h-16 bg-white/15 border-white rounded-md ${
                isInvalidPassword ? "invalid:border-red-500" : "border-white"
              }`}
              onFocus={() => setInvalidPassword(true)}
              placeholder="Current Password"
              onChange={handleChange}
              required
              value={passwordData.currentPassword}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
            <div className="flex justify-center items-center gap-2">
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-12 top-16 md:top-1/2 md:-translate-y-1/2 transform -translate-y-1/2 text-white focus:outline-none"
              >
                <img src={eye} alt="eye icon" className="scale-125 " />
              </button>
            </div>
          </div>
          <div className="px-8 py-3 gap-1 grid w-svw md:w-full relative">
            <label htmlFor="new" className="text-base font-light">
              New Password
            </label>
            <input
              type={showNewPassword ? "text" : "password"}
              id="new"
              name="newPassword"
              className={`border p-3 2xl:p-5 h-12 md:h-10 pr-12 2xl:h-16 w-full bg-white/15 border-white rounded-md ${
                isInvalidPassword ? "invalid:border-red-500" : "border-white"
              }`}
              onFocus={() => setInvalidPassword(true)}
              placeholder="New Password"
              onChange={handleChange}
              required
              value={passwordData.newPassword}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
            <div className="flex justify-center items-center gap-2">
              <button
                type="button"
                onClick={() => setShowNewPassword((prev) => !prev)}
                className="absolute right-12 top-16 md:top-1/2 md:-translate-y-1/2 transform -translate-y-1/2 text-white focus:outline-none"
              >
                <img src={eye} alt="eye icon" className="scale-125 " />
              </button>
            </div>
          </div>

          <div className="px-8 py-3 gap-1 grid w-svw md:w-full relative">
            <label htmlFor="confirm" className="text-base font-light">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm"
              name="confirmPassword"
              className={`border p-3 2xl:p-5 h-12 md:h-10 pr-12 2xl:h-16 w-full bg-white/15 border-white rounded-md ${
                isInvalidPassword ? "invalid:border-red-500" : "border-white"
              }`}
              onFocus={() => setInvalidPassword(true)}
              placeholder="Confirm Password"
              onChange={handleChange}
              required
              value={passwordData.confirmPassword}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
            <div className="flex justify-center items-center gap-2">
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-12 top-16 md:top-1/2 md:-translate-y-1/2 transform -translate-y-1/2 text-white focus:outline-none"
              >
                <img src={eye} alt="eye icon" className="scale-125 " />
              </button>
            </div>
          </div>

          {console.log("old " + passwordData.currentPassword)}

          <div className="flex gap-6 py-5 px-8 h-full">
            <FilledButton
              title={isLoading ? "Saving..." : "Save"}
              type="submit"
              className={`w-1/2 py-3 rounded-full text-lg font-normal ${
                isLoading ? "cursor-not-allowed bg-none bg-white/15" : ""
              } `}
              disabled={isLoading}
            />
            <button
              className="px-8 rounded-full w-1/2 text-lg font-normal border-2 hover:bg-blue-400/15 hover:scale-105 hover:transition-all hover:duration-500 duration-700 hover:ease-in"
              onClick={() => navigate("/userchat")}
            >
              Cancel
            </button>
          </div>
        </form>
        {isSuccess && (
          <p className="text-green-500 text-center mt-4">{isSuccess}</p>
        )}
        {isError && <p className="text-red-500 text-center mt-4">{isError}</p>}
      </div>
    </>
  );
}

export default ChangePasswordHeader;
