import Frame from "../../../assets/images/Frame.svg";
import { Link } from "react-router-dom";
import { useLoginForm } from "../../../hooks/UseLoginFrom";
import AuthService from "../../../services/AuthService.ts";
// import ProtectedRout from "../../../utils/ProtectedRout.jsx";

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
  } = useLoginForm(AuthService);

  return (
    <header className="wrapper py-4 h-screen md:py-2 2xl:py-16 z-50 font-Outfit md:h-screen text-white">
      <div className="flex flex-col md:flex-row md:gap-6 2xl:gap-12 items-center justify-between">
        {/* Form Section */}
        <div className="grid items-center p-8 w-full md:p-5 md:w-2/5 2xl:w-full  2xl:-ml-20 mt-8 2xl:mt-12 z-40">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl flex justify-center font-bold mb-4 md:mb-3 2xl:mb-8 capitalize">
            Login
          </h2>
          <form onSubmit={handleSubmit} method="post" className="w-full">
            <div className="grid justify-items-start gap-2 px-4 md:px-5 2xl:px-6 py-4 2xl:py-8">
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
              />
            </div>
            <div className="grid justify-items-start gap-2 px-4 md:px-5 2xl:px-6 pb-2 md:pb-4 2xl:pb-6">
              <label
                htmlFor="miloPassword"
                className="text-lg md:text-xl 2xl:text-2xl font-extralight"
              >
                Milo Password
              </label>
              <input
                type="password"
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
              />
            </div>
            <Link
              to="/"
              className="px-4 md:px-5 2xl:px-6 pt-1 text-sm md:text-base 2xl:text-lg font-extralight"
            >
              Forgot password?
            </Link>
            <div className="px-4 md:px-5 2xl:px-6 w-full">
            <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-3 md:mt-4 2xl:mt-6 px-4 md:px-5 2xl:px-6 py-2 md:py-2.5 2xl:py-3 rounded-md capitalize text-base md:text-lg 2xl:text-xl font-normal bg-gradient-to-r from-gradientPurple to-gradientSkyBlue shadow-inner shadow-slate-400 disabled:opacity-50"
              >
                {isLoading ? "Logging In..." : "Login"}
              </button>
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
<<<<<<< HEAD
      <div className="flex justify-between items-end px-10 mt-5 md:hidden">
        <hr className="border-t border-white/30 w-3/4 mx-auto mb-3 md:mb-6 2xl:mb-8" />
        <h3 className="uppercase px-4 flex items-start">or</h3>
        <hr className="border-t border-white/30 w-3/4 mx-auto mb-3 md:mb-6 2xl:mb-8" />
      </div>
      <div className="text-base flex justify-center my-6 underline underline-offset-2 md:hidden">
        <Link to="/guestchat">Try it as Guest</Link>
=======
    </div>
  </header>
=======
  const [isInvalidID, setInvalidID] = useState(false);
  const [isInvalidMilo, setInvalidMilo] = useState(false);
  const [isSuccess, setSuccess] = useState("");
  const [isError, setError] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentId: "",
    miloPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      const response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          portal_id: formData.studentId,
          password: formData.miloPassword,
        }),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
        navigate("/userchat"); // Navigate on successful login
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <header className="wrapper py-4 md:py-2 2xl:py-16 z-50 font-Outfit text-white">
      <div className="flex flex-col md:flex-row md:gap-6 2xl:gap-12 items-center justify-between">
        {/* Form Section */}
        <div className="grid items-center w-full md:p-5 md:w-2/5 2xl:w-full  2xl:-ml-20 mt-8 2xl:mt-12">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl flex justify-center font-bold mb-4 md:mb-3 2xl:mb-8 capitalize">
            Login
          </h2>
          <form onSubmit={handleSubmit} method="post" className="w-full">
            <div className="grid justify-items-start gap-2 px-4 md:px-5 2xl:px-6 py-4 2xl:py-8">
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
              />
            </div>
            <div className="grid justify-items-start gap-2 px-4 md:px-5 2xl:px-6 pb-2 md:pb-4 2xl:pb-6">
              <label
                htmlFor="miloPassword"
                className="text-lg md:text-xl 2xl:text-2xl font-extralight"
              >
                Milo Password
              </label>
              <input
                type="password"
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
              />
            </div>
            <Link
              to="/"
              className="px-4 md:px-5 2xl:px-6 pt-1 text-sm md:text-base 2xl:text-lg font-extralight"
            >
              Forgot password?
            </Link>
            <div className="px-4 md:px-5 2xl:px-6 w-full">
              <button
                type="submit"
                className="w-full mt-3 md:mt-4 2xl:mt-6 px-4 md:px-5 2xl:px-6 py-2  2xl:py-3 rounded-md capitalize text-base md:text-lg 2xl:text-xl font-normal bg-gradient-to-r  from-gradientPurple to-gradientSkyBlue shadow-inner shadow-slate-400 hover:"
              >
                Login
              </button>
            </div>
          </form>

          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-3 2xl:gap-4 mt-4 md:mt-6 2xl:mt-8">
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
>>>>>>> b5644f47c3be2e0ab7ae21dff5193cec836eff09
      </div>
    </header>
  );
}

export default LoginHeader;
