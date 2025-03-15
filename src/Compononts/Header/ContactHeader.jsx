import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactHeader() {
  return (
    <div className="container mx-auto px-4 text-white font-Outfit md:z-30">
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-5">
          <div className="grid gap-6 md:gap-10">
            <div className="flex relative">
              <div className="bg-gradient-to-r from-gradientPurple to-gradientSkyBlue w-6 h-6 md:w-8 md:h-8 rounded-full absolute -left-4 top-2 md:top-4 z-10"></div>
              <h3 className="border-b-[1px] capitalize text-xl md:text-2xl font-semibold font-Outfit z-20">
                get in touch
              </h3>
            </div>
            <p className="text-sm md:text-base whitespace-pre-wrap w-full md:w-[80%] font-light">
              Have a question or need support? Our team is always ready to
              assist you!
            </p>
            <div className="w-full md:w-3/4 text-sm font-light space-y-6 md:space-y-10">
              <button className="w-full mt-6 text-start px-4 py-3 rounded-[10px] capitalize bg-gradient-to-r from-[#6327C9] to-[#21ABDB] shadow-inner shadow-slate-400 flex items-center">
                <FontAwesomeIcon
                  className="mr-3 md:mr-5"
                  icon="fa-solid fa-envelope"
                  size="lg"
                />
                Milo2025@gmail.com
              </button>
              <button className="w-full text-start px-4 py-3 rounded-[10px] capitalize bg-gradient-to-r from-[#6327C9] to-[#21ABDB] shadow-inner shadow-slate-400 flex items-center">
                <FontAwesomeIcon
                  className="mr-3 md:mr-5"
                  icon="fa-solid fa-location-dot"
                  size="lg"
                />
                Palestine, Hebron
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-5">
          <div className="grid gap-6 md:gap-10">
            <div className="flex relative">
              <div className="bg-gradient-to-r from-gradientPurple to-gradientSkyBlue w-6 h-6 md:w-8 md:h-8 rounded-full absolute -left-4 top-2 md:top-4 z-10"></div>
              <h3 className="border-b-[1px] capitalize text-xl md:text-2xl font-semibold font-Outfit z-20">
                send a message
              </h3>
            </div>
            <form className="w-full border bg-white/20 p-4 rounded-2xl">
              <div className="flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 p-2 border-b-2 placeholder:text-slate-300 font-light text-sm md:text-base"
                  name="name"
                />
                <input
                  type="email"
                  placeholder="E-mail Address"
                  className="w-full bg-white/5 p-2 border-b-2 placeholder:text-slate-300 font-light text-sm md:text-base"
                  name="email"
                />
                <textarea
                  placeholder="Message"
                  className="w-full bg-white/5 p-2 border-b-2 placeholder:text-slate-300 font-light text-sm md:text-base min-h-[100px]"
                  name="message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactHeader;