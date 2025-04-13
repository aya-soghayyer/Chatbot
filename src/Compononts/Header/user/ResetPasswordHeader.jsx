import React from "react";
import { useNavigate } from "react-router-dom";
import FilledButton from "../../ui/FilledButton";
import eye from "../../../assets/images/eye.svg";
import { useResetPassword } from "../../../hooks/useResetPassword";



function ResetPasswordHeader() {
  const navigate = useNavigate();

  const {
    passwordData,
    showNewPassword,
    setShowNewPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isInvalidNewPassword,
    setInvalidNewPassword,
    isInvalidConfirmPassword,
    setInvalidConfirmPassword,
    handleChange,
    handleSubmit,
    isLoading,
    isError,
    isSuccess,
  } = useResetPassword();

  return (
    <>
      <div className="grid py-20 md:bg-darkBlue md:z-30 md:grid text-white md:py-3 md:px-8 md:w-2/5 rounded-xl md:items-center ">
        <h1 className="flex justify-center items-center md:justify-start z-0 md:text-lg text-2xl font-normal md:py-2">
          Reset Password
        </h1>
        <hr className="hidden md:inline-flex md:opacity-40" />
        <form
          onSubmit={handleSubmit}
          className="grid justify-center h-full z-0 items-center py-9 px-10 w-screen md:gap-3 md:py-6 md:w-full">
          <div className="">
            <div className="px-8 py-3 gap-1 grid w-svw md:w-full md:py-0 md:px-0 relative">
              <label htmlFor="new" className="text-base font-light">
                New Password
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                id="new"
                name="newPassword"
                className={`border p-3 2xl:p-5 h-12 md:h-10 pr-12 2xl:h-16 w-full bg-white/15 border-white rounded-md ${
                  isInvalidNewPassword
                    ? "invalid:border-red-500"
                    : "border-white"
                }`}
                onFocus={() => setInvalidNewPassword(true)}
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
                  className="absolute right-12 top-16 md:right-3 md:top-12 md:-translate-y-1/2 transform -translate-y-1/2 text-white focus:outline-none"
                >
                  <img src={eye} alt="eye icon" className="scale-125 " />
                </button>
              </div>
            </div>

            <div className="px-8 py-3 gap-1 grid w-svw md:w-full md:py-0 md:px-0 relative">
              <label htmlFor="confirm" className="text-base font-light">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm"
                name="confirmPassword"
                className={`border p-3 2xl:p-5 h-12 md:h-10 pr-12 2xl:h-16 w-full bg-white/15 border-white rounded-md ${
                  isInvalidConfirmPassword
                    ? "invalid:border-red-500"
                    : "border-white"
                }`}
                onFocus={() => setInvalidConfirmPassword(true)}
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
                  className="absolute right-12 top-16 md:right-3 md:top-12  md:-translate-y-1/2 transform -translate-y-1/2 text-white focus:outline-none"
                >
                  <img src={eye} alt="eye icon" className="scale-125" />
                </button>
              </div>
            </div>


            <div className="flex py-5 px-8 md:py-8 md:px-0 h-full">
              <FilledButton
                title={isLoading ? "Saving..." : "Save Password"}
                type="submit"
                className={`w-full py-3 rounded-full md:rounded-md text-lg font-normal md:py-3 ${
                  isLoading ? "cursor-not-allowed bg-none bg-white/15" : ""
                } `}
                disabled={isLoading}
              />
            </div>
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

export default ResetPasswordHeader;
