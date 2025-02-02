import React from 'react'
import HeaderS from '../Compononts/Header/HeaderS'
import Circle from '../Compononts/Circle/Circle'

function SignUp() {
    return (
        <>
            <div className="bg-black">
                <div className=" flex bg-black -mb-8">
                    <div className="  flex justify-between">
                        <div className="-mt-16 ">
                            <Circle />
                        </div>
                    </div>
                    <HeaderS />
                    <Circle />
                </div>
            </div>
        </>
    )
}

export default SignUp