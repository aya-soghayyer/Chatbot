// import React from 'react'
import SignupHeader from '../Compononts/Header/SignupHeader'
import Circle from '../Compononts/Circle/Circle'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SignUp() {
    return (
        <>
            <div className="bg-Primary">
                <div className=" flex bg-BgPrimary -mb-8">
                    <div className="  flex justify-between">
                        <div className="-mt-16 ">
                            <Circle />
                        </div>
                    </div>
                    <SignupHeader />
                    <Circle />
                </div>
            </div>
        </>
    )
}

export default SignUp