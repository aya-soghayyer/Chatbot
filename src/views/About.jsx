import React from 'react'
import Circle from '../Compononts/Circle/Circle'
import AboutHeader from '../Compononts/Header/AboutHeader'

function About() {
  return (
<>
<div className="bg-primary h-full items-center md:flex md:justify-end md:items-center 2xl:h-screen 2xl:flex 2xl:justify-center 2xl:items-center relative">
          <div className="absolute right-3 -top-12 md:-mt-28 md:right-[63rem] 2xl:-left-64 2xl:-top-24 ">
            <Circle/>
          </div>
          <div className="2xl:flex 2xl:justify-center z-50 md:my-14 md:w-11/12 2xl:w-11/12 2xl:-mt-16">
            <AboutHeader />
          </div>
          <div className="absolute hidden md:inline-flex md:top-16 md:right-32 2xl:visible 2xl:top-40 2xl:right-11">
            <Circle />
          </div>
      </div>
</>

  )
}

export default About