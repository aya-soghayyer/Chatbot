// src/components/HeaderS.jsx
import { Link } from "react-router-dom";
import Frame from "../../../assets/images/Frame.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSignupForm } from "../../../hooks/UseSignupForm";
import AuthService from "../../../services/AuthSignupService";

function HeaderS() {
  const {
    formData,
    handleChange,
    handleSubmit,
    isInvalid,
    setInvalid,
    isSuccess,
    isError,
    isLoading,
    showHelp,
    toggleHelp,
  } = useSignupForm(AuthService);

  return (
    <header className="py-16 md:py-36 md:h-full 2xl:py-16 z-50 font-Outfit text-white h-screen">
      <div className="flex flex-col md:flex-row md:justify-center md:items-center md:gap-9 2xl:gap-12 items-center justify-between">
        {/* Form Section */}
        <div className="z-40 w-full px-4 md:w-1/3 2xl:w-2/5 2xl:-ml-20 md:mt-4 2xl:mt-8">
          <h2 className="text-5xl md:text-4xl 2xl:text-5xl flex justify-center font-bold mb-4 md:mb-6 2xl:mb-8 capitalize">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="w-full ">
            <div className="grid justify-items-start gap-2 px-4 md:px-5 2xl:px-6 py-4 md:py-6 2xl:py-8">
              <label
                htmlFor="studentId"
                className="text-base md:text-lg 2xl:text-xl font-extralight"
              >
                Student ID
              </label>
              <input
                type="text"
                id="studentId"
                className={`border p-3 2xl:p-5 h-12 md:h-10 2xl:h-14 w-full bg-slate-500 border-white rounded-md ${
                  isInvalid.studentId ? "border-red-500" : "border-white"
                }`}
                onFocus={() => setInvalid({ ...isInvalid, studentId: true })}
                name="studentId"
                placeholder="Student ID"
                value={formData.studentId}
                required
                onChange={handleChange}
                pattern="[0-9]{8}"
              />
            </div>
            <div className="grid justify-items-start gap-2 px-4 md:px-5 2xl:px-6 pb-4 md:pb-6 2xl:pb-8">
              <label
                htmlFor="portalPassword"
                className="text-base md:text-lg 2xl:text-xl font-extralight"
              >
                Portal Password
              </label>
              <input
                type="password"
                id="portalPassword"
                className={`border p-3 2xl:p-5 h-12 md:h-10 2xl:h-14 w-full bg-slate-500 border-white rounded-md ${
                  isInvalid.portalPassword ? "border-red-500" : "border-white"
                }`}
                onFocus={() =>
                  setInvalid({ ...isInvalid, portalPassword: true })
                }
                name="portalPassword"
                placeholder="Portal Password"
                required
                value={formData.portalPassword}
                onChange={handleChange}
              />
            </div>
            <div className="grid justify-items-start gap-2 px-4 md:px-5 2xl:px-6 pb-2 md:pb-4 2xl:pb-6">
              <label
                htmlFor="miloPassword"
                className="text-base md:text-lg 2xl:text-xl font-extralight"
              >
                Milo Password
              </label>
              <input
                type="password"
                id="miloPassword"
                className={`border p-3 2xl:p-5 h-12 md:h-10 2xl:h-14 w-full bg-slate-500 border-white rounded-md ${
                  isInvalid.miloPassword ? "border-red-500" : "border-white"
                }`}
                onFocus={() => setInvalid({ ...isInvalid, miloPassword: true })}
                name="miloPassword"
                placeholder="Milo Password"
                required
                value={formData.miloPassword}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-start px-4 md:-mt-6 md:mb-5 2xl:-mt-10 2xl:mb-5 md:px-5 2xl:px-6 pt-4 md:pt-6 2xl:pt-8">
              <input
                type="checkbox"
                className="mt-1 mr-2 border-white"
                name="checkbox"
                required
              />
              <p className="text-xs md:text-sm 2xl:text-base">
                I agree to allow the collection and use of my data in accordance
                with the privacy policy.
              </p>
            </div>
            <div className="px-4 md:px-5 2xl:px-6 w-full">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-3 md:mt-4 2xl:mt-6 px-4 md:px-5 2xl:px-6 py-2 md:py-2.5 2xl:py-3 rounded-md capitalize text-base md:text-lg 2xl:text-xl font-normal bg-gradient-to-r from-gradientPurple to-gradientSkyBlue shadow-inner shadow-slate-400 disabled:opacity-50"
              >
                {isLoading ? "Signing Up..." : "Sign Up"}
              </button>
            </div>
            {isSuccess && (
              <p className="text-green-500 text-center mt-4">{isSuccess}</p>
            )}
            {isError && (
              <p className="text-red-500 text-center mt-4">{isError}</p>
            )}
          </form>

          <div className="text-sm md:text-base 2xl:text-lg font-extralight flex justify-center mt-4 md:mt-6 2xl:mt-8 underline underline-offset-2">
            <Link onClick={toggleHelp}>Help?</Link>
          </div>

          {showHelp && (
            <>
              <div className="absolute top-4 md:top-8 2xl:top-10 right-4 md:right-12 2xl:right-16 z-30">
                <button
                  onClick={toggleHelp}
                  className="text-2xl md:text-3xl 2xl:text-4xl"
                >
                  <FontAwesomeIcon icon={faXmark} shake />
                </button>
              </div>
              <div className="fixed inset-0 bg-black/85 z-20 flex items-center justify-center p-4 md:p-6 2xl:p-8">
                <div className="bg-sky-700 text-white p-6 md:p-8 2xl:p-10 rounded-xl shadow-md w-full max-w-md md:max-w-lg 2xl:max-w-2xl">
                  <h2 className="font-semibold text-lg md:text-xl 2xl:text-2xl mb-4">
                    How to sign up on MiLo?
                  </h2>
                  <ul className="font-thin text-sm md:text-base 2xl:text-lg space-y-2">
                    <li>
                      <span className="font-medium">Step 1:</span> Enter your
                      university number in the student ID field.
                    </li>
                    <li>
                      <span className="font-medium">Step 2:</span> Enter your
                      Hebron University portal password in the portal password
                      field.
                    </li>
                    <li>
                      <span className="font-medium">Step 3:</span> Choose any
                      password for Milo in the Milo password field.
                    </li>
                    <li>
                      <span className="font-medium">Step 4:</span> Check the box
                      to agree to the privacy policy.
                    </li>
                    <li>
                      <span className="font-medium">Step 5:</span> Click the
                      "Sign Up" button.
                    </li>
                  </ul>
                  <p className="mt-4 text-sm md:text-base 2xl:text-lg">
                    You’ll receive an email confirming your account creation.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Image Section */}
        <div className="w-full hidden md:inline-flex md:w-1/2 2xl:w-3/5 mt-6 md:mt-0">
          <img className="w-full" src={Frame} alt="Computer" />
        </div>
      </div>
        <div className="flex justify-between items-end px-10 mt-6 md:hidden">
          <hr className="border-t border-white/30 w-3/4 mx-auto mb-3 md:mb-6 2xl:mb-8" />
          <h3 className="uppercase px-4 flex items-start">or</h3>
          <hr className="border-t border-white/30 w-3/4 mx-auto mb-3 md:mb-6 2xl:mb-8" />
        </div>
      <div className="text-base flex justify-center my-6 underline underline-offset-2 md:hidden">
        <Link to="/guestchat">Try it as Guest</Link>
      </div>
    </header>
  );
}

export default HeaderS;
