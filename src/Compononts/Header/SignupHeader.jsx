import { useState } from "react";
import Frame from "../../assets/images/Frame.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import axios from "axios"

function HeaderS() {
    const [isInvalid, setInvalid] = useState(false);
    const [isInvalidPortal, setInvalidPortal] = useState(false);
    const [isInvalidMilo, setInvalidMilo] = useState(false);
    const [isSuccess, setSuccess] = useState("");
    const [isError, setError] = useState("");
    const [showHelp, setShowHelp] = useState(false);

    const toggleHelp = () => {
        setShowHelp(!showHelp);
    };

    const [formData, setFormData] = useState({
        studentId: "",
        portalPassword: "",
        miloPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess("");
        setError("");
        try {
            const response = await fetch("http://localhost:8000/user/signup", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    portal_id: formData.studentId,
                    portal_password: formData.portalPassword,
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
            <header className="wrapper py-16 z-50 font-Outfit text-white">
                <div className="flex flex-col pb-32 2md:flex-row items-center justify-between">
                    <div className="w-full 2md:w-[40%] -ml-20">
                        <h2 className="text-3xl 2md:text-5xl flex justify-center font-bold mb-2 capitalize">
                            Sign Up
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="grid justify-items-start gap-2 px-5 py-6">
                                <label htmlFor="studentId" className="text-lg font-extralight">
                                    Student Id
                                </label>
                                <input
                                    type="text"
                                    id="studentId"
                                    className={`border p-4 h-4 w-full  bg-slate-500 border-white rounded-sm ${isInvalid ? "invalid:border-red-500 " : "border-white "
                                        }`}
                                    onFocus={() => setInvalid(true)}
                                    name="studentId"
                                    placeholder="Studdent ID"
                                    value={formData.studentId}
                                    required
                                    onChange={handleChange}
                                    pattern="[0-9]{8}"
                                    size={7}
                                />
                            </div>
                            <div className="grid justify-items-start gap-2 px-5 pb-6 ">
                                <label htmlFor="password" className="text-lg font-extralight">
                                    Portal Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className={`border p-4 h-4 w-full  bg-slate-500 border-white rounded-sm ${isInvalidPortal
                                            ? "invalid:border-red-500 "
                                            : "border-white "
                                        }`}
                                    onFocus={() => setInvalidPortal(true)}
                                    name="portalPassword"
                                    placeholder="Portal Password"
                                    required
                                    value={formData.portalPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid justify-items-start gap-2 px-5 pb-2">
                                <label
                                    htmlFor="password milo"
                                    className="text-lg font-extralight"
                                >
                                    Milo Password
                                </label>
                                <input
                                    type="password"
                                    id="portalPassword"
                                    name="miloPassword"
                                    value={formData.miloPassword}
                                    onChange={handleChange}
                                    placeholder="Portal Password"
                                    required
                                    className={`border p-4 h-4 w-full  bg-slate-500 border-white rounded-sm ${isInvalidMilo ? "invalid:border-red-500 " : "border-white "
                                        }   `}
                                    onFocus={() => setInvalidMilo(true)}
                                />
                            </div>
                            <div className="flex justify-between -mt-5 items-start px-5 pt-6">
                                <input
                                    type="checkbox"
                                    className="mt-2  mr-2  invalid:border-red-500"
                                    name="checkbox"
                                    required
                                />
                                <p className=" text-sm ">
                                    I agree to allow the collection and use of my data in
                                    accordance with the privacy policy.
                                </p>
                            </div>
                            <div className=" p-3 w-full ">
                                <button
                                    type="submit"
                                    className="w-full mt-4 px-3 py-3 rounded-[5px] capitalize text-lg font-normal bg-gradient-to-r from-[#6327C9]  to-[#21ABDB] "
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>

                        {isSuccess && (
                            <p className="text-green-500 text-center mt-2">{isSuccess}</p>
                        )}
                        {isError && (
                            <p className="text-red-500 text-center mt-2">{isError}</p>
                        )}

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
                        {showHelp && (
                            <>
                                <div className="absolute top-10 text-3xl z-30 right-16 ">
                                    <button className="" onClick={toggleHelp}>
                                        <FontAwesomeIcon icon="fa-solid fa-xmark" shake />
                                    </button>
                                </div>
                                <div className="brightness-110 absolute top-0 left-0 w-full bg-black/80 z-20 p-5 flex flex-col justify-center items-center h-full min-h-screen ">
                                    <div className=" bg-sky-700 text-white   p-10  rounded-xl ml-6 shadow-md w-[50%] ">

                                        <h2 className="font-semibold text-xl">
                                            How to sign up on MiLo?
                                        </h2>
                                        <p className="font-thin p-2 text-lg ">
                                            <ul>
                                                <li>
                                                    {" "}
                                                    <span className="font-medium"> Step 1: </span> Enter
                                                    your unversity number in the student id field.
                                                </li>
                                                <li>
                                                    {" "}
                                                    <span className="font-medium"> Step 2: </span> Enter
                                                    the exact passowrd of your account on Hebron unversity
                                                    portal website (your portal password) in the portal
                                                    password field.{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <span className="font-medium"> Step 3: </span> Enter
                                                    any password you want in milo password field.{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <span className="font-medium"> Step 4: </span> Check
                                                    the box to allow to your to signup.
                                                </li>
                                                <li>
                                                    {" "}
                                                    <span className="font-medium"> Step 5: </span> Click
                                                    on sign up botton.{" "}
                                                </li>
                                                <p>
                                                    Then you will receive an email to tell you that your
                                                    account has been created successfully.
                                                </p>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <div className=" 2md:w-[60%] -mt-28 ">
                        <img className="w-full" src={Frame} alt="Computer" />
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderS;
