import React from 'react'
import Frame from "../../assets/images/Frame.svg";


function Computer() {
  return (
    <>
      <div className="hidden md:z-10 md:-mr-10 md:block md: w-8/12">
              <img className="w-full" src={Frame} alt="Computer" />
            </div>
    </>
  )
}

export default Computer