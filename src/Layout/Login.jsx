import React from 'react'
import Circle from '../Compononts/Circle/Circle'
import HeaderL from '../Compononts/Header/HeaderL'

function Login() {
  return (
<>
<div className="bg-black">
                <div className=" flex bg-black -mb-8">
                    <div className="  flex justify-between">
                        <div className="-mt-16 ">
                            <Circle />
                        </div>
                    </div>
                    <HeaderL />
                    <Circle />
                </div>
                </div>



</>
  )
}

export default Login