import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilledButton from "../ui/FilledButton"

function ContactHeader() {
  return (
    <div className=" mx-auto px-10 my-10 md:px-24 text-white font-Outfit md:z-30 md:-ml-8">
      <div className="flex flex-col md:flex-row gap-8 md:gap-24">
        {/* Left Section */}
        <div className="w-full md:w-2/5 z-0">
          <div className="grid gap-6 md:gap-10">
            <div className="flex relative">
              <div className="bg-gradient-to-r from-gradientPurple to-gradientSkyBlue w-6 h-6 md:w-8 md:h-8 rounded-full absolute -left-4 top-2 md:top-4 z-10"></div>
              <h3 className="border-b-[1px] capitalize text-2xl md:text-2xl font-semibold font-Outfit z-20">
                get in touch
              </h3>
            </div>
            <p className="text-base md:text-lg w-full md:w-[80%] font-light">
             <div>Have a question or need support?</div> 
             <div>Our team is always ready to assist you!</div> 
            </p>
            <div className="w-full md:w-3/4 text-xl font-light md:font-extralight space-y-6 md:space-y-9">
              <div className="w-full text-center justify-center font-light md:font-extralight px-4 py-3 rounded-[10px] bg-darkBlue items-center">
                <FontAwesomeIcon
                  className="mr-3 md:mr-5"
                  icon="fa-solid fa-envelope"
                  size="lg" 
                  
                />
                Milo2025@gmail.com
              </div>
              <div className="w-full text-start justify-center md:font-extralight font-light px-4 py-3 rounded-[10px] bg-darkBlue flex items-center">
                <FontAwesomeIcon
                  className="mr-3 md:mr-5 -ml-10"
                  icon="fa-solid fa-location-dot"
                  size="lg"
                />
                Palestine, Hebron
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/5 md:z-10">
          <div className="grid gap-6 md:gap-10">
            <div className="flex relative">
              <div className="bg-gradient-to-r from-gradientPurple to-gradientSkyBlue w-6 h-6 md:w-8 md:h-8 rounded-full absolute -left-4 top-2 md:top-4 z-0 md:z-10"></div>
              <h3 className="border-b-[1px] capitalize text-2xl md:text-2xl font-semibold font-Outfit z-0 md:z-20">
                send a message
              </h3>
            </div>
            <form className="w-full border bg-none p-4 rounded-[10px]">
              <div className="flex flex-col gap-5 px-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/0  p-2 border-b-[1px] placeholder:text-white/65 font-light text-sm md:text-base"
                  name="name"
                />
                <input
                  type="email"
                  placeholder="E-mail Address"
                  className="w-full bg-white/0 p-2 border-b-[1px] placeholder:text-white/65 font-light text-sm md:text-base"
                  name="email"
                />
                <textarea
                  placeholder="Message"
                  className="w-full bg-white/0 p-2 border-b-[1px] placeholder:text-white/65 font-light text-sm md:text-base h-11"
                  name="message"
                />

              </div>
            
              <FilledButton
                title="send"
                type="submit"
                // disabled={isLoading}
                className="py-2 flex justify-self-end text-base md:text-md font-normal rounded-3xl md:rounded-md my-6 px-10 disabled:opacity-50"
              />            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactHeader;