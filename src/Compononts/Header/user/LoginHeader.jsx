import Frame from "../../../assets/images/Frame.svg";
import { Link } from "react-router-dom";
import { useLoginForm } from "../../../hooks/UseLoginFrom";
import AuthService from "../../../services/AuthService.ts";
// import ProtectedRout from "../../../utils/ProtectedRout.jsx";
import FilledButton from "../../../Compononts/ui/FilledButton";
import eye from "../../../assets/images/eye.svg";

function LoginHeader() {
  const {
    formData,
    handleChange,
    handleSubmit,
    isInvalidID,
    setInvalidID,
    isInvalidMilo,
    setInvalidMilo,
    isLoading,
    isSuccess,
    isError,
    showMiloPassword,
    setShowMiloPassword,
  } = useLoginForm(AuthService);

  return (
    <header className="wrapper py-4 md:py-2 2xl:py-16 z-50 font-Outfit md:h-screen text-white">
      <div className="flex flex-col md:flex-row md:gap-6 2xl:gap-12 items-center justify-between">
        {/* Form Section */}
        <div className="grid items-center md:p-5 md:w-2/5 2xl:w-full 2xl:-ml-20 mt-8 2xl:mt-12 z-0 md:z-40">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl flex justify-center font-bold mb-4 md:mb-3 2xl:mb-8 capitalize">
            Login
          </h2>
          <form onSubmit={handleSubmit} method="post" className="w-full">
            <div className="grid justify-items-start gap-2 px-10 md:px-5 2xl:px-6 py-4 2xl:py-8">
              <label
                htmlFor="studentId"
                className="text-lg md:text-xl 2xl:text-2xl font-extralight"
              >
                Student ID
              </label>
              <input
                type="text"
                id="studentId"
                className={`border p-3 2xl:p-5 h-12 md:h-10 2xl:h-16 w-full bg-slate-500 border-white rounded-md ${
                  isInvalidID ? "invalid:border-red-500" : "border-white"
                }`}
                onFocus={() => setInvalidID(true)}
                name="studentId"
                placeholder="Student ID"
                required
                value={formData.studentId}
                onChange={handleChange}
                pattern="[0-9]{8}"
                title="Must contain 8 digits"

              />
            </div>
            <div className="grid justify-items-start gap-2 -mb-6 md:px-5 2xl:px-6 pb-2 2xl:pb-6  md:-mb-1">
              <div className="px-10 py-3 gap-1 grid w-svw md:py-0 md:px-0 md:w-full relative">
                <label
                  htmlFor="miloPassword"
                  className="text-lg md:text-xl 2xl:text-2xl font-extralight"
                >
                  Milo Password
                </label>
                <input
                  type={showMiloPassword ? "text" : "password"}
                  id="miloPassword"
                  className={`border p-3 2xl:p-5 h-12 md:h-10 2xl:h-16 w-full bg-slate-500 border-white rounded-md ${
                    isInvalidMilo ? "invalid:border-red-500" : "border-white"
                  }`}
                  onFocus={() => setInvalidMilo(true)}
                  name="miloPassword"
                  placeholder="Milo Password"
                  onChange={handleChange}
                  required
                  value={formData.miloPassword}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                />
                <div className="flex justify-center items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowMiloPassword((prev) => !prev)}
                    className="absolute right-14 top-[4.4rem] md:right-3 md:top-[3.3rem] md:-translate-y-1/2 transform -translate-y-1/2 text-white focus:outline-none "
                  >
                    <img src={eye} alt="eye icon" className="scale-110" />
                  </button>
                </div>
              </div>
            </div>

            <Link
              to="/forgetpassword"
              className="px-10 md:px-5 2xl:px-6 pt-1 text-sm md:text-base 2xl:text-lg font-extralight"
            >
              Forgot password?
            </Link>
            <div className="px-10 mt-3 md:px-5 md:pt-4 2xl:px-6 w-full">
              <FilledButton
                title={isLoading ? "Logging In..." : "Login"}
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-md disabled:opacity-50"
              />
            </div>
            {isSuccess && (
              <p className="text-green-500 text-center mt-4">{isSuccess}</p>
            )}
            {isError && (
              <p className="text-red-500 text-center mt-4">{isError}</p>
            )}
          </form>

          <div className="flex md:flex-row justify-center items-center mt-4 md:mt-6 2xl:mt-8">
            <span className="text-sm md:text-base 2xl:text-lg font-extralight">
              Don't have an account?
            </span>
            <div className="text-base md:text-lg 2xl:text-xl font-medium underline underline-offset-2 text-[#21ABDB]">
              <Link to="/Signup">Sign up</Link>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="z-10 w-full hidden md:inline-flex md:w-1/2 2xl:w-full mt-6 md:mt-0">
          <img className="w-full" src={Frame} alt="computer" />
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
    </header>
  );
}

export default LoginHeader;
