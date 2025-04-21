import React from "react";
import developerBlue from "../../assets/images/developerBlue.svg";
import developerBlueFe from "../../assets/images/developerBlueFe.svg";
import developerGrey from "../../assets/images/developerGrey.svg";
import developerPurple from "../../assets/images/developerPurple.svg";

const teamMembers = [
  {
    name: "Mohammad Tamimi",
    role: "Computer science",
    image: developerBlue,
  },
  {
    name: "Aseel Alashqar",
    role: "Computer science",
    image: developerGrey,
  },
  {
    name: "Aya Soghayyer",
    role: "Computer science",
    image: developerPurple,
  },
  {
    name: "Jana Sider",
    role: "Web technology and multimedia",
    image: developerBlueFe,
  },
];

function AboutHeader() {
  return (
    <>
      <div className="text-white my-10 font-Outfit w-full px-9 md:px-24 z-auto md:-ml-10">
        <section className="md:hidden mb-6">
          <div className="flex relative items-center mb-6">
            <div className="bg-gradient-to-r from-gradientPurple to-gradientSkyBlue w-6 h-6 md:w-8 md:h-8 rounded-full absolute -left-4 top-2 z-0" />
            <p className="border-b text-2xl font-medium capitalize z-0">
              Our team
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 justify-items-center">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center gap-2 z-10"
              >
                <img
                  src={member.image}
                  alt={`${member.name} photo`}
                  className="w-24 md:w-28"
                />
                <div>
                  <h5 className="text-base font-medium">{member.name}</h5>
                  <p className="text-sm font-extralight">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* About Section */}
        <section className="mb-10">
          <div className="flex relative items-center mb-6">
            <div className="bg-gradient-to-r from-gradientPurple to-gradientSkyBlue w-6 h-6 md:w-8 md:h-8 rounded-full absolute -left-4 top-2 z-0" />
            <p className="border-b text-2xl font-medium md:text-2xl md:font-semibold capitalize z-10">
              About our website
            </p>
          </div>
          <p className="text-sm md:text-lg font-light md:-z-30 bg-darkBlue px-4 py-5 md:px-10 md:py-7 rounded-3xl md:rounded-2xl">
            We are a dedicated platform designed to provide academic guidance
            and support to students of the College of Information Technology.
            <div>
            Our mission is to help students navigate their academic journey by
            answering their inquiries about the university, its colleges, and
            available majors. Whether you’re exploring study options or need
            advice on your academic path, we are here to assist you every step
            of the way.
            </div>
          
          </p>
        </section>

        {/* Team Section */}
        <section className="hidden md:block">
          <div className="flex relative items-center mb-6">
            <div className="bg-gradient-to-r from-gradientPurple to-gradientSkyBlue w-6 h-6 md:w-8 md:h-8 rounded-full absolute -left-4 top-2 z-0" />
            <h3 className="border-b text-xl md:text-2xl font-semibold capitalize z-10">
              Our team
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center gap-2 z-10"
              >
                <img
                  src={member.image}
                  alt={`${member.name} photo`}
                  className="w-24 md:w-28"
                />
                <div>
                  <h5 className="text-base font-medium">{member.name}</h5>
                  <p className="text-sm font-extralight">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutHeader;
