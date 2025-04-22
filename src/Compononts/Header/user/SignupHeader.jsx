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
    isSuccess,
    isError,
    isLoading,
    showHelp,
    toggleHelp,
    showMiloPassword,
    setShowMiloPassword,
    showPortalPassword,
    setShowPortalPassword,
    setShowConfirmPassword,
    showConfirmPassword,
    isInvalidID,
    setInvalidID,
    isInvalidMilo,
    setInvalidMilo,
    isInvalidFirst,
    setInvalidFirst,
    isInvalidLast,
    setInvalidLast,
    isInvalidConfirm,
    setInvalidConfirm,
    isInvalidPortal,
    setInvalidPortal,
  } = useSignupForm(AuthService);

  return (
    <div className="py-16 font-Outfit text-white md:flex md:justify-center md:items-center">
      <div className="flex flex-col md:flex-row md:items-center md:gap-12 items-center justify-between w-full max-w-5xl">
        {/* Form Section */}
        <div className="z-0 w-full px-6 md:h-full md:w-2/5">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 capitalize">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="w-full space-y-1 px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4">
              <div className="gap-1 grid">
                <label htmlFor="firstName" className="text-lg font-light">
                  First name
                </label>
                <input
  type="text"
  id="firstName"
  name="firstName"
  className={`border p-3 h-12 w-full bg-slate-500 rounded-md ${
    isInvalidFirst ? "invalid:border-red-500" : "border-white"
  }`}
  onFocus={() => setInvalidFirst(true)}
  placeholder="First name"
  required
  value={formData.firstName}
  onChange={handleChange}
  pattern="^[A-Za-z]{2,}$"
  title="Must contain at least 2 letters (A-Z or a-z)"
/>


              </div>
              <div className="gap-1 grid">
                <label htmlFor="lastName" className="text-lg font-light">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className={`border p-3 h-12 w-full bg-slate-500 rounded-md ${
                    isInvalidLast ? "invalid:border-red-500" : "border-white"
                  }`}
                  onFocus={() => setInvalidLast(true)}
                  name="lastName"
                  placeholder="Last name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  pattern="^[A-Za-z]{3,}$"
                  title="Must contain letters from A-Z or a-z"
                />
              </div>
            </div>

            <div className="gap-1 grid">
              <label htmlFor="studentId" className="text-lg font-light">
                Student ID
              </label>
              <input
                type="text"
                id="studentId"
                className={`border p-3 h-12 w-full bg-slate-500 rounded-md ${
                  isInvalidID ? "invalid:border-red-500" : "border-white"
                }`}
                onFocus={() => setInvalidID(true)}
                name="studentId"
                placeholder="Student ID"
                value={formData.studentId}
                required
                onChange={handleChange}
                pattern="[0-9]{8}"
                title="Must contain 8 digits"
              />
            </div>
            <div className="gap-1 grid  md:py-0 md:px-0 md:w-full relative">
              <label htmlFor="portalPassword" className="text-lg font-light">
                Portal Password
              </label>
              <input
                type={showPortalPassword ? "text" : "password"}
                id="portalPassword"
                className={`border p-3 h-12 w-full bg-slate-500 rounded-md ${
                  isInvalidPortal ? "invalid:border-red-500" : "border-white"
                }`}
                onFocus={() => setInvalidPortal(true)}
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
                  className="absolute right-5 top-14 md:right-3 md:top-14 md:-translate-y-1/2 transform -translate-y-1/2 text-white focus:outline-none"
                >
                  <img src={eye} alt="eye icon" className="scale-110" />
                </button>
              </div>
            </div>
              <div className="gap-1 grid md:py-0 md:px-0 md:w-full relative">
                <label htmlFor="miloPassword" className="text-lg font-light">
                  Milo Password
                </label>
                <input
                  type={showMiloPassword ? "text" : "password"}
                  id="miloPassword"
                  className={`border p-3 h-12 w-full bg-slate-500 rounded-md ${
                    isInvalidMilo ? "invalid:border-red-500" : "border-white"
                  }`}
                  onFocus={() => setInvalidMilo(true)}        
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
                    className="absolute right-5 top-14 md:right-3 md:top-14 md:-translate-y-1/2 transform -translate-y-1/2 text-white focus:outline-none"
                  >
                    <img src={eye} alt="eye icon" className="scale-110" />
                  </button>
                </div>
              </div>
              <div className="gap-1 grid md:py-0 md:px-0 md:w-full relative">
                  <label
                    htmlFor="confirmPassword"
                    className="text-lg font-light"
                  >
                    Confirm Password
                  </label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    className={`border p-3 h-12 w-full bg-slate-500 rounded-md ${
                      isInvalidConfirm ? "invalid:border-red-500" : "border-white"
                    }`}
                    onFocus={() => setInvalidConfirm(true)}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                   <div className="flex justify-center items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-5 top-14 md:right-3 md:top-14 md:-translate-y-1/2 transform -translate-y-1/2 text-white focus:outline-none"
                  >
                    <img src={eye} alt="eye icon" className="scale-110" />
                  </button>
                </div>
                </div>
            <div className="flex items-start ">
              <input
                type="checkbox"
                className="mt-1 mr-2 my-11"
                name="checkbox"
                required
              />
              <p className="text-sm font-light ">
                I agree to allow the collection and use of my data in accordance
                with the privacy policy.
              </p>
            </div>
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
          <div className="fixed inset-0 z-10  bg-black/85 flex items-center justify-center p-4 md:p-6 2xl:p-8">
            {/* Help Box */}
            <div className="bg-sky-700 text-white p-6 md:p-8 2xl:p-10 rounded-xl shadow-md w-full max-w-lg md:max-w-xl 2xl:max-w-2xl overflow-hidden relative">
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
