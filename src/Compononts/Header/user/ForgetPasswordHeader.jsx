// import React from 'react'
import { useNavigate } from 'react-router-dom';
import FilledButton from "../../ui/FilledButton";
import eye from "../../../assets/images/eye.svg";
import { useForgetPassword } from '../../../hooks/useForgetPassword';
// import { useState } from "react";



function ForgetPasswordHeader() {
  const navigate = useNavigate();

  const {
    userData,
    showPassword,
    setShowPassword,
    isInvalidPassword,
    setInvalidPassword,
    handleChange,
    handleSubmit,
    isLoading,
    isError,
    isSuccess,
  } = useForgetPassword()

  return (
    <>
    <div className="grid py-20 md:bg-darkBlue md:z-30 md:grid text-white md:py-3 md:px-8 md:w-2/5 rounded-xl md:items-center ">
        <h1 className="flex justify-center items-center md:justify-start z-0 md:text-lg text-2xl font-normal md:py-2">
          Forget Password?
        </h1>
        <p>
        Enter your university ID and portal password to verify your identity
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid justify-center h-full z-0 items-center py-9 px-10 w-screen md:gap-3 md:py-6 md:w-full"
        >
          <div className="">
          <div className="px-8 py-3 gap-1 grid w-svw md:py-0 md:px-0 md:w-full relative">
            <label htmlFor="userId" className="text-base font-light">
              Your ID
            </label>
            <input
              type={"text"}
              id="userId"
              name="userId"
              className={`border w-full p-3 2xl:p-5 h-12 md:h-10 pr-12 2xl:h-16 bg-white/15 border-white rounded-md ${
                isInvalidPassword ? "invalid:border-red-500" : "border-white"
              }`}
              onFocus={() => setInvalidPassword(true)}
              placeholder="Your ID"
              onChange={handleChange}
              required
              value={userData.userId}
              pattern="[0-9]{8}"
              title="Must contain 8 digits"
            />
          </div>
          <div className="px-8 py-3 gap-1 grid w-svw md:w-full md:py-0 md:px-0 relative">
            <label htmlFor="portalPassword" className="text-base font-light">
              Portal Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="portalPassword"
              name="portalPassword"
              className={`border p-3 2xl:p-5 h-12 md:h-10 pr-12 2xl:h-16 w-full bg-white/15 border-white rounded-md ${
                isInvalidPassword ? "invalid:border-red-500" : "border-white"
              }`}
              onFocus={() => setInvalidPassword(true)}
              placeholder="Prortal Password"
              onChange={handleChange}
              required
              value={userData.portalPassword}
            />
            <div className="flex justify-center items-center gap-2">
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-12 top-16 md:right-3 md:top-12 md:-translate-y-1/2 transform -translate-y-1/2 text-white focus:outline-none"
              >
                <img src={eye} alt="eye icon" className="scale-125 " />
              </button>
            </div>
          </div>

          {/* {console.log("old " + passwordData.currentPassword)} */}

          <div className="flex gap-6 py-5 px-8 md:py-8 md:px-0 h-full">
            <FilledButton
              title={isLoading ? "Go to reset page ..." : "Reset Password"}
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
  )
}

export default ForgetPasswordHeader