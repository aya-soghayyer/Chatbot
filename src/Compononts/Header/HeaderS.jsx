import React, { useState } from "react";
import Frame from "../../assets/Frame.svg";
import { Link, NavLink } from "react-router-dom";
import axios from "axios"

function HeaderS() {
    const [isInvalid, setInvalid] = useState(false)
    const [isInvalidPortal, setInvalidPortal] = useState(false)
    const [isInvalidMilo, setInvalidMilo] = useState(false)
    const [isSuccess, setSuccess] = useState("")
    const [isError, setError] = useState("")

    const [formData, setFormData] = useState({
        studentId: "",
        portalPassword: "",
        miloPassword: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess("");
        setError("")

        try {
            const response = await axios.post("http://localhost:8000/createUser", {
                username: formData.studentId,
                password: formData.portalPassword,
                miloPassword: formData.miloPassword,
            });
            setSuccess("User registered successfully!");
            console.log("Response:", response.data);
        } catch (e) {
            setError("Failed to register. Please check your details.");
            console.error("Error:", e);
        }
    }
    return (
        <>
            <header className="wrapper py-16  z-50 font-Outfit text-white">
                <div className="flex flex-col pb-32 2md:flex-row gap-30 items-center justify-between gap-3">
                    <div className="w-full 2md:w-[40%] -ml-20 mt-12">
                        <h2 className=" text-4xl 2md:text-5xl flex justify-center line font-bold mb-6 capitalize ">
                            Sign Up
                        </h2>
                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="grid justify-items-start gap-2 px-5 py-6">
                                <label htmlFor="studentId" className="text-xl font-extralight">
                                    Student ID
                                </label>
                                <input
                                    type="text"
                                    id="studentId"
                                    className={`border p-4 h-4 w-full  bg-slate-500 border-white rounded-sm ${isInvalid ? 'invalid:border-red-500 ' : 'border-white '}   `}
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
                                <label htmlFor="password" className="text-xl font-extralight">
                                    Portal Password
                                </label>
                                <input
                                    
                                    type="password"
                                    id="password"
                                    className={`border p-4 h-4 w-full  bg-slate-500 border-white rounded-sm ${isInvalidPortal ? 'invalid:border-red-500 ' : 'border-white '}   `}
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
                                    className="text-xl font-extralight"
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
                                    className={`border p-4 h-4 w-full  bg-slate-500 border-white rounded-sm ${isInvalidMilo ? 'invalid:border-red-500 ' : 'border-white '}   `}
                                    onFocus={() => setInvalidMilo(true)}


                                />
                            </div>
                            <div className="flex justify-between items-start px-5 pt-6   ">
                                <input
                                    type="checkbox"
                                    className="mt-2  mr-2  invalid:border-red-500"
                                    name="checkbox"
                                    required
                                />
                                <p className=" text-sm">
                                    I agree to allow the collection and use of my data in
                                    accordance with the privacy policy.
                                </p>
                            </div>
                            <div className="  p-5  w-full ">


                                <button type="submit" className="w-full mt-4  px-5 py-3 rounded-[5px] capitalize text-lg font-normal bg-gradient-to-r from-[#6327C9]  to-[#21ABDB] ">
                                    Sign Up
                                </button>


                            </div>
                        </form>

                        {isSuccess && <p className="text-green-500 text-center mt-2">{isSuccess}</p>}
                        {isError && <p className="text-red-500 text-center mt-2">{isError}</p>}
                        <div className="text-lg font-extralight flex justify-center my-6 underline underline-offset-2">
                            <NavLink to="">Help?</NavLink>
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

export default HeaderS;
