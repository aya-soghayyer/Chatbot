import React from "react";
import SideBar from "../../ui/admin/SideBar";
import Header from "../../ui/admin/Header";
import Search from "../../ui/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function CoursesHeader() {
  const courses = [
    {
      id: "TI1280",
      name: "أساليب البحث العلمي",
      hours: 3,
      teacher: "Ibrahim Ahmaro",
      time: "Monday, Wednesday 11:00 am",
    },
  ];

  return (
    <div className="flex gap-5 h-[35rem]">
      <SideBar />
        <div className="gird">
          <Search />
          <div className="overflow-x-auto w-full max-w-4xl mx-auto mt-4 rounded-tl-[5px] rounded-tr-[5px]">
            <table className="w-full text-left text-white">
              <thead className="text-base font-light capitalize bg-gradient-to-r from-gradientSkyBlue to-gradientPurple text-white">
                <tr>
                  <td scope="col" className="px-6 py-3">
                    Course ID
                  </td>
                  <td scope="col" className="px-6 py-3">
                    Course Name
                  </td>
                  <td scope="col" className="px-6 py-3">
                    Hours
                  </td>
                  <td scope="col" className="px-6 py-3">
                    Course Teacher
                  </td>
                  <td scope="col" className="px-6 py-3">
                    Course Time
                  </td>
                  <td scope="col" className="px-6 py-3"></td>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr
                    key={index}
                    className="bg-white bg-opacity-20 border-b border-white hover:bg-white hover:bg-opacity-10 transition-all"
                  >
                    <td className="px-6 py-4">{course.id}</td>
                    <td className="px-6 py-4">{course.name}</td>
                    <td className="px-6 py-4">{course.hours}</td>
                    <td className="px-6 py-4">{course.teacher}</td>
                    <td className="px-6 py-4">{course.time}</td>
                    <td className="px-6 py-4 text-right">
                    <button>
                                <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" size="xl" className="cursor-pointer"  />
                        
                     {/* <FontAwesomeIcon icon={faEllipsisV} className="cursor-pointer" /> */}
                    </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
}

export default CoursesHeader;
