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
    <div className="py-16 font-Outfit text-white md:flex md:justify-center md:items-center">
      <div className="flex flex-col md:flex-row md:items-center md:gap-12 items-center justify-between w-full max-w-5xl">
        {/* Form Section */}
        <div className="z-0 w-full px-6 md:h-full md:w-2/5">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 capitalize">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div>
              <label htmlFor="studentId" className="text-lg font-light">Student ID</label>
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
              <label htmlFor="portalPassword" className="text-lg font-light">Portal Password</label>
              <input
                type="password"
                id="portalPassword"
                className="border p-3 h-12 w-full bg-slate-500 border-white rounded-md"
                name="portalPassword"
                placeholder="Portal Password"
                required
                value={formData.portalPassword}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="miloPassword" className="text-lg font-light">Milo Password</label>
              <input
                type="password"
                id="miloPassword"
                className="border p-3 h-12 w-full bg-slate-500 border-white rounded-md"
                name="miloPassword"
                placeholder="Milo Password"
                required
                value={formData.miloPassword}
                onChange={handleChange}
              />
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
              <input type="checkbox" className="mt-1 mr-2" name="checkbox" required />
              <p className="text-sm">
                I agree to allow the collection and use of my data in accordance with the privacy policy.
              </p>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-md bg-gradient-to-r from-gradientPurple to-gradientSkyBlue shadow-md disabled:opacity-50"
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
            {isSuccess && <p className="text-green-500 text-center mt-4">{isSuccess}</p>}
            {isError && <p className="text-red-500 text-center mt-4">{isError}</p>}
          </form>
          <div className="text-center mt-4">
            <Link onClick={toggleHelp} className="underline">Help?</Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:z-30 md:block w-1/2">
          <img className="w-full" src={Frame} alt="Computer" />
        </div>
      </div>
      <div className="flex justify-between items-end px-10 mt-5 md:hidden">
        <hr className="border-t border-white/30 w-3/4 mx-auto mb-3 md:mb-6 2xl:mb-8" />
        <h3 className="uppercase px-4 flex items-start">or</h3>
        <hr className="border-t border-white/30 w-3/4 mx-auto mb-3 md:mb-6 2xl:mb-8" />
      </div>
      <div className="text-base flex justify-center my-6 underline underline-offset-2 md:hidden">
        <Link to="/guestchat">Try it as Guest</Link>
    </div>
    </div>
  );
}

export default HeaderS;
