// src/components/HeaderS.jsx
import { Link } from "react-router-dom";
import Frame from "../../../assets/images/Frame.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSignupForm } from "../../../hooks/UseSignupForm";
import AuthService from "../../../services/AuthSignupService";
import FilledButton from "../../../Compononts/ui/FilledButton";
import eye from "../../../assets/images/eye.svg";

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
    showMiloPassword,
    setShowMiloPassword,
    showPortalPassword,
    setShowPortalPassword,
  } = useSignupForm(AuthService);

  return (
    <div className="py-16 font-Outfit text-white md:flex md:justify-center md:items-center">
      <div className="flex flex-col md:flex-row md:items-center md:gap-12 items-center justify-between w-full max-w-5xl">
        {/* Form Section */}
        <div className="z-0 w-full px-6 md:h-full md:w-2/5">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 capitalize">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div>
              <label htmlFor="studentId" className="text-lg font-light">
                Student ID
              </label>
              <input
                type="text"
                id="studentId"
                className={`border p-3 h-12 w-full bg-slate-500 border-white rounded-md ${
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
            {/* <div>
              <label htmlFor="userName" className="text-lg font-light">User Name</label>
              <input
                type="text"
                id="userName"
                className="border p-3 h-12 w-full bg-slate-500 border-white rounded-md"
                name="userName"
                placeholder="User Name"
                required
                value={formData.userName}
                onChange={handleChange}
              />
            </div> */}
            <div>
              <div className="px-8 py-3 gap-1 grid w-svw md:py-0 md:px-0 md:w-full relative">
                <label htmlFor="portalPassword" className="text-lg font-light">
                  Portal Password
                </label>
                <input
                  type={showPortalPassword ? "text" : "password"}
                  id="portalPassword"
                  className="border p-3 h-12 w-full bg-slate-500 border-white rounded-md"
                  name="portalPassword"
                  placeholder="Portal Password"
                  required
                  value={formData.portalPassword}
                  onChange={handleChange}
                />
                <div className="flex justify-center items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowPortalPassword((prev) => !prev)}
                    className="absolute right-12 top-16 md:right-3 md:top-14 md:-translate-y-1/2 transform -translate-y-1/2 text-white focus:outline-none"
                  >
                    <img src={eye} alt="eye icon" className="scale-110 " />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="px-8 py-3 gap-1 grid w-svw md:py-0 md:px-0 md:w-full relative">
                <label htmlFor="miloPassword" className="text-lg font-light">
                  Milo Password
                </label>
                <input
                  type={showMiloPassword ? "text" : "password"}
                  id="miloPassword"
                  className="border p-3 h-12 w-full bg-slate-500 border-white rounded-md"
                  name="miloPassword"
                  placeholder="Milo Password"
                  required
                  value={formData.miloPassword}
                  onChange={handleChange}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                />
                <div className="flex justify-center items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowMiloPassword((prev) => !prev)}
                    className="absolute right-12 top-16 md:right-3 md:top-14 md:-translate-y-1/2 transform -translate-y-1/2 text-white focus:outline-none"
                  >
                    <img src={eye} alt="eye icon" className="scale-110 " />
                  </button>
                </div>
              </div>
            </div>

            {/* <div>
              <label htmlFor="photo" className="text-lg font-light">Choose Your Photo</label>
              <input
                type="file"
                id="photo"
                className="border p-3 h-12 w-full bg-slate-500 border-white rounded-md"
                name="photo"
                required
                onChange={handleChange}
              />
            </div> */}
            <div className="flex items-start">
              <input
                type="checkbox"
                className="mt-1 mr-2"
                name="checkbox"
                required
              />
              <p className="text-sm">
                I agree to allow the collection and use of my data in accordance
                with the privacy policy.
              </p>
            </div>
            {/* <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-md bg-gradient-to-r from-gradientPurple to-gradientSkyBlue shadow-md disabled:opacity-50"
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button> */}
            <FilledButton
              title={isLoading ? "Signing Up..." : "Sign Up"}
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-md disabled:opacity-50"
            />
            {isSuccess && (
              <p className="text-green-500 text-center mt-4">{isSuccess}</p>
            )}
            {isError && (
              <p className="text-red-500 text-center mt-4">{isError}</p>
            )}
          </form>
          <div className="text-lg font-extralight flex justify-center my-6 underline underline-offset-2">
            <Link
              onClick={(e) => {
                e.preventDefault;
                toggleHelp();
              }}
            >
              Help?
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:z-10 md:block w-1/2">
          <img className="w-full" src={Frame} alt="Computer" />
        </div>
      </div>
      <div className="flex justify-between items-end px-10 mt-5 md:hidden">
        <hr className="border-t border-white/30 w-3/4 mx-auto mb-3 md:mb-6 2xl:mb-8" />
        <h3 className="uppercase px-4 flex items-start">or</h3>
        <hr className="border-t border-white/30 w-3/4 mx-auto mb-3 md:mb-6 2xl:mb-8" />
      </div>

      {showHelp && (
        <>
          {/* Close Button (Above Everything) */}
          <div className="fixed inset-0 z-20  bg-black/85 flex items-center justify-center p-4 md:p-6 2xl:p-8">
            {/* Help Box */}
            <div className="bg-sky-700 z-50  text-white p-6 md:p-8 2xl:p-10 rounded-xl shadow-md w-full max-w-lg md:max-w-xl 2xl:max-w-2xl overflow-hidden relative">
              {/* Background Image Fix */}
              <div className="z-50 top-4 md:top-8 2xl:top-10 right-4 md:right-12 2xl:right-16">
                <button
                  onClick={toggleHelp}
                  className="text-2xl md:text-3xl 2xl:text-4xl absolute top-3 right-3 md:top-3 md:right-4"
                >
                  <FontAwesomeIcon icon={faXmark} shake size="md" />
                </button>
              </div>

              {/* Content */}
              <h2 className="relative font-semibold text-lg md:text-xl 2xl:text-2xl mb-4">
                How to sign up on MiLo?
              </h2>
              <ul className="relative font-light text-sm md:text-base 2xl:text-lg space-y-2">
                <li>
                  <span className="font-medium">Step 1:</span> Enter your
                  university number in the student ID field.
                </li>
                <li>
                  <span className="font-medium">Step 2:</span> Enter your Hebron
                  University portal password in the portal password field.
                </li>
                <li>
                  <span className="font-medium">Step 3:</span> Choose any
                  password for Milo in the Milo password field.
                </li>
                <li>
                  <span className="font-medium">Step 4:</span> Check the box to
                  agree to the privacy policy.
                </li>
                <li>
                  <span className="font-medium">Step 5:</span> Click the "Sign
                  Up" button.
                </li>
              </ul>
              <p className="relative mt-4 text-sm md:text-base 2xl:text-lg">
                You’ll receive an email confirming your account creation.
              </p>
            </div>
          </div>
        </>
      )}

      <div className="text-base flex justify-center my-6 underline underline-offset-2 md:hidden">
        <Link to="/guestchat">Try it as Guest</Link>
      </div>
    </div>
  );
}

export default HeaderS;
