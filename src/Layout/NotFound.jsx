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
          {/* <div className='z-10'> */}
          <HeaderNotFound />
          {/* </div> */}
          <Circle />
        </div>
      </div>

    
    </>

    )
}

export default NotFound