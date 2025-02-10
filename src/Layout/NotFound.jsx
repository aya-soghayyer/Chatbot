import React from 'react'
import Circle from '../Compononts/Circle/Circle.jsx'
import HeaderNotFound from '../Compononts/Header/HeaderNotFound'

function NotFound() {
  return (

    <>
    <div className="bg-black">
        <div className=" flex bg-black -mb-8">
          <div className="  flex justify-between">
            <div className="-mt-16 ">
            <Circle />
            </div>
          </div>
          <HeaderNotFound />
          <Circle />
        </div>
      </div>

    
    </>

    )
}

export default NotFound