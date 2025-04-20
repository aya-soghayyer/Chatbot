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
    name: "Aya Soghayyer",
    role: "Computer science",
    image: developerPurple,
  },
  {
    name: "Jana Sider",
    role: (
      <>
        Web technology
        <br />
        and multimedia
      </>
    ),
    image: developerGrey,
  },
  {
    name: "Aseel Ashqar",
    role: "Computer science",
    image: developerBlueFe,
  },
];

function AboutHeader() {
  return (
    <>
    <div className=" text-white font-Outfit w-full p-5 z-auto">

    <section className="md:hidden mb-6">
        <div className="flex relative items-center mb-6">
          <div className="bg-gradient-to-r from-gradientPurple to-gradientSkyBlue w-6 h-6 md:w-8 md:h-8 rounded-full absolute -left-4 top-2 z-0" />
          <h3 className="border-b text-xl md:text-2xl font-semibold capitalize z-10">
            Our team
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-2 z-10">
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
          <h3 className="border-b text-xl md:text-2xl font-semibold capitalize z-10">
            About our website
          </h3>
        </div>
        <p className="text-sm md:text-lg font-light md:-z-30 bg-darkBlue p-6 rounded-2xl">
          We are a dedicated platform designed to provide academic guidance and support to students of the College of Information Technology. Our mission is to help students navigate their academic journey by answering their inquiries about the university, its colleges, and available majors. Whether you’re exploring study options or need advice on your academic path, we are here to assist you every step of the way.
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
      <div key={idx} className="flex flex-col items-center text-center gap-2 z-10">
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
