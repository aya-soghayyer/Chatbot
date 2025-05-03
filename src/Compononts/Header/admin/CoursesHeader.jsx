import React from "react";
import SideBar from "../../ui/admin/SideBar";
import Header from "../../ui/admin/Header";
import Search from "../../ui/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import edit from "../../../assets/images/edit.svg";
import deletee from "../../../assets/images/delete.svg";
import useAdminGetCourses from "../../../hooks/admin/useAdminGetCourses";

function CoursesHeader() {
  // const [activeCourseIndex, setActiveCourseIndex] = useState(null);

  // const [showCourseSettings, setShowCourseSettings] = useState(false);
  const navigate = useNavigate();
  const [activeCourseIndex, setActiveCourseIndex] = useState(null);
  const [showCourseSettings, setShowCourseSettings] = useState(false);
  // const { courses, loading, error } = useAdminGetCourses();

  // if (loading) return <div className="text-white p-4">Loading courses...</div>;
  // if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  const courses = [
    {
      id: "TI1280",
      name: "أساليب البحث العلمي",
      hours: 3,
      teacher: "Ibrahim Ahmaro",
      time: "Monday, Wednesday 11:00 am",
    },
    {
      id: "TI1280",
      name: "أساليب البحث العلمي",
      hours: 3,
      teacher: "Ibrahim Ahmaro",
      time: "Monday, Wednesday 11:00 am",
    },
    {
      id: "TI1280",
      name: "أساليب البحث العلمي",
      hours: 3,
      teacher: "Ibrahim Ahmaro",
      time: "Monday, Wednesday 11:00 am",
    },
    {
      id: "TI1280",
      name: "أساليب البحث العلمي",
      hours: 3,
      teacher: "Ibrahim Ahmaro",
      time: "Monday, Wednesday 11:00 am",
    },
    {
      id: "TI1280",
      name: "أساليب البحث العلمي",
      hours: 3,
      teacher: "Ibrahim Ahmaro",
      time: "Monday, Wednesday 11:00 am",
    },
    {
      id: "TI1280",
      name: "أساليب البحث العلمي",
      hours: 3,
      teacher: "Ibrahim Ahmaro",
      time: "Monday, Wednesday 11:00 am",
    },
    {
      id: "TI1280",
      name: "أساليب البحث العلمي",
      hours: 3,
      teacher: "Ibrahim Ahmaro",
      time: "Monday, Wednesday 11:00 am",
    },
  ];


  return (
    <div className="flex gap-5 ">
      <SideBar />
      <div className="gird">
        <div className="flex gap-2 items-center rounded-tl-[5px] rounded-tr-[5px]  text-white">
          <Search />
          <div className="flex gap-2 items-center">
            <button
              onClick={() => {
                // Handle add new course action here
                console.log("Add new course clicked");
                navigate("/admin/addcourse");
              }}
              className="px-3 py-2 rounded-full font-light bg-gradient-to-r from-gradientPurple to-gradientSkyBlue"
            >
              Add new course
            </button>
            <div>
              <input
                type="file"
                id="fileInput"
                accept=".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                // onChange={}
                className="hidden"
              />
              <label
                htmlFor="fileInput"
                className="px-3 py-2 rounded-full font-light bg-gradient-to-r from-gradientPurple to-gradientSkyBlue cursor-pointer"
              >
                Upload courses file
              </label>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto overflow-y-auto h-[29.5rem] custom-scrollbar-admin  max-w-4xl mx-auto mt-4 rounded-tl-[5px] rounded-tr-[5px] relative z-10">
        <table className="w-full text-left text-white">
            <thead className="text-base font-light capitalize bg-darkBlue text-white">
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
                  <td className="px-6 py-4 text-right relative">
                    <button
                      onClick={() =>
                        setActiveCourseIndex(
                          activeCourseIndex === index ? null : index
                        )
                      }
                      className="px-3 py-2 rounded-full font-light"
                    >
                      <FontAwesomeIcon
                        icon="fa-solid fa-ellipsis-vertical"
                        size="xl"
                        className="cursor-pointer"
                      />
                    </button>

                    {activeCourseIndex === index && (
                      <div className="absolute flex right-0 px-3 mt-2 w-32 bg-darkBlue rounded-md shadow-lg z-50">
                        <button
                          onClick={() => {
                            console.log("Edit course clicked");
                            setActiveCourseIndex(null);
                          }}
                          className="flex gap-1 w-full px-4 py-2 text-left text-sm text-white hover:text-gray-300"
                        >
                          <img src={edit} alt="edit icon" />
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            console.log("Delete course clicked");
                            setActiveCourseIndex(null);
                          }}
                          className="flex gap-1 w-full px-4 py-2 text-left text-sm text-white hover:text-gray-300"
                        >
                          <img src={deletee} alt="delete icon" />
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showCourseSettings && (
            <div className="absolute top-18 right-8 z-50 bg-darkBlue rounded-md p-4">
              <button
                onClick={() => {
                  // Handle edit course action here
                  console.log("Edit course clicked");
                  // navigate("/admin/editcourse");
                }}
                className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  // Handle delete course action here
                  console.log("Delete course clicked");
                }}
                className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CoursesHeader;
