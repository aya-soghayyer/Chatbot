import { useState } from "react";
import Frame from "../../assets/images/Frame.svg";
import { Link, NavLink } from "react-router-dom";

function HeaderL() {
    const [isInvalidID, setInvalidID] = useState(false)
    const [isInvalidMilo, setInvalidMilo] = useState(false)

    return (
        <>
            <header className="wrapper py-16  z-50 font-Outfit text-white">
                <div className="flex flex-col pb-32 2md:flex-row gap-30 items-center justify-between gap-3">
                    <div className="w-full 2md:w-[40%] -ml-20 mt-12">
                        <h2 className=" text-4xl 2md:text-5xl flex justify-center line font-bold mb-6 capitalize ">
                            Login
                        </h2>
                        <form action="" method="post" className="w-full">
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
                                    id="password milo"
                                    className={`border p-4 h-4 w-full  bg-slate-500 border-white rounded-sm ${isInvalidMilo ? 'invalid:border-red-500 ' : 'border-white '}   `}
                                    onFocus={() => setInvalidMilo(true)} name="passowrd"
                                    placeholder="Milo Password"
                                    required
                                />
                            </div>
                            <Link to="/" className="p-5 pt-1 text-base font-extralight">
                                Forgot password?
                            </Link>
                        </form>
                        <div className="  px-5 w-full ">
                            <span className=" ">
                                <NavLink to="/Login">
                                    <button className="w-full mt-4  px-5 py-2 rounded-[5px] capitalize text-lg font-normal bg-gradient-to-r from-[#6327C9]  to-[#21ABDB] ">
                                        Login
                                    </button>
                                </NavLink>
                            </span>
                        </div>
                        <div className="flex justify-center ">
                            <span className="text-base font-extralight my-6">
                                {" "}
                                Don't have an account?{" "}
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

export default HeaderL;
