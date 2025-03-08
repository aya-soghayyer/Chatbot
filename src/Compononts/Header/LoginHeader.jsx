import { useState } from "react";
import Frame from "../../assets/images/Frame.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";

function LoginHeader() {
    const [isInvalidID, setInvalidID] = useState(false)
    const [isInvalidMilo, setInvalidMilo] = useState(false)
    const [isSuccess, setSuccess] = useState("");
    const [isError, setError] = useState("");
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        studentId: "",
        miloPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(e.target.name , e.target.value)
        // console.log('ldjflgk')
    };
    console.log(formData)
    const handleSubmit = async (e) => {
        console.log("hello world")
        e.preventDefault();
        // setSuccess("");
        // setError("");
        console.log('try me')
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
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <>
            <header className="wrapper py-16  z-50 font-Outfit text-white">
                <div className="flex flex-col pb-32 2md:flex-row gap-30 items-center justify-between gap-3">
                    <div className="w-full 2md:w-[40%] -ml-20 mt-12">
                        <h2 className=" text-4xl 2md:text-5xl flex justify-center line font-bold mb-6 capitalize ">
                            Login
                        </h2>
                        <form onSubmit={handleSubmit} method="post" className="w-full">
                            <div className="grid justify-items-start gap-2 px-5 py-6">
                                <label htmlFor="studentId" className="text-xl font-extralight">
                                    Student ID
                                </label>
                                <input
                                    type="text"
                                    id="studentId"
                                    className={`border p-4 h-4 w-full  bg-slate-500 border-white rounded-sm ${isInvalidID ? 'invalid:border-red-500 ' : 'border-white '}   `}
                                    onFocus={() => setInvalidID(true)} name="studentId"
                                    placeholder="Studdent ID"
                                    required
                                    value={formData.studentId}
                                    onChange={handleChange}
                                    pattern="[0-9]{8}"
                                    size={7}
                                />
                            </div>
                            <div className="grid justify-items-start gap-2 px-5 pb-2">
                                <label
                                    htmlFor="password milo"
                                    className="text-xl font-extralight"
                                >
                                    Milo Password
                                </label>
                                <input
                                    type="password"
                                    id="miloPassword"
                                    className={`border p-4 h-4 w-full  bg-slate-500 border-white rounded-sm ${isInvalidMilo ? 'invalid:border-red-500 ' : 'border-white '}   `}
                                    onFocus={() => setInvalidMilo(true)}
                                    name="miloPassword"
                                    placeholder="Milo Password"
                                    onChange={handleChange}
                                    required
                                    value={formData.miloPassword}
                                />
                            </div>
                            <Link to="/" className="p-5 pt-1 text-base font-extralight">
                                Forgot password?
                            </Link>
                        <div className="px-5 w-full">
                                    <button type="submit" onClick={()=>{navigate('/userchat')}} className="w-full mt-4  px-5 py-2 rounded-[5px] capitalize text-lg font-normal bg-gradient-to-r from-[#6327C9]  to-[#21ABDB] ">
                                        Login
                                    </button>
                        </div>
                        </form>

                        <div className="flex justify-center">
                            <span className="text-base font-extralight my-6">
                                Don't have an account?
                            </span>
                            <div className="text-lg font-medium flex justify-center my-6 underline underline-offset-2 text-[#21ABDB]">
                                <Link to="/Signup">Sign up</Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full 2md:w-[60%] ">
                        <img className="w-full" src={Frame} alt="computer" />
                    </div>
                </div>
            </header>
        </>
    );
}

export default LoginHeader;
