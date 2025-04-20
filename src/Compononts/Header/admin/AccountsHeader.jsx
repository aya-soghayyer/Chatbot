import React, { useState } from "react";
import Search from "../../ui/Search";
import SideBar from "../../ui/admin/SideBar";
import Header from "../../ui/admin/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { div } from "motion/react-client";

function AccountsHeader() {
  // Sample data for the table
    

  const initialData = Array(50)
    .fill({
      avatar: <div className="w-10 h-10 rounded-full bg-white"></div>,
      id: "2213653",
      name: "Mohmmad ali",
      signUpDate: "3/31/2025",
      level: 4,
      active: true,
    })
    .map((item, index) => ({
      ...item,
      active: index % 2 === 0, // Alternate active status for demo
    }));
    const [data, setData] = useState(initialData);



  // Toggle active status
  const toggleActive = (index) => {
    const updatedData = [...data];
    updatedData[index].active = !updatedData[index].active;
    setData(updatedData);
  };

  return (
    <div className="flex gap-5">
      <SideBar />
      <Header className="border-none">
        <div className="gird">
          <Search />
          {/* <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 text-white rounded-lg">
          <thead>
            <tr className="bg-blue-600">
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">sign up date</th>
              <th className="py-2 px-4 text-left">Level</th>
              <th className="py-2 px-4 text-left">Active</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-2 px-4 flex items-center">
                  <div className="w-8 h-8 bg-gray-500 rounded-full mr-2"></div>
                  {row.id}
                </td>
                <td className="py-2 px-4">{row.name}</td>
                <td className="py-2 px-4">{row.signUpDate}</td>
                <td className="py-2 px-4">{row.level}</td>
                <td className="py-2 px-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={row.active}
                      onChange={() => toggleActive(index)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600"></div>
                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
            </div> */}
          <div className="overflow-x-auto overflow-y-auto max-h-[400px] md:max-h-[496px] custom-scrollbar-admin  max-w-4xl mx-auto mt-4 rounded-tl-[5px] rounded-tr-[5px]">
            <table className="w-full text-left text-white">
              <thead className="text-base font-light capitalize bg-gradient-to-r from-gradientSkyBlue to-gradientPurple text-white">
                <tr>
                    <td className="py-3 px-6">Num</td>
                    <td className="px-6 py-3">
                    avatar
                    </td>
                  <td  className="px-6 py-3">
                    ID
                  </td>
                  <td  className="px-6 py-3">
                    Name
                  </td>
                  <td  className="px-6 py-3">
                  Sign up date
                  </td>
                  <td  className="px-6 py-3">
                  Level
                  </td>
                  <td  className="px-6 py-3">
                  Active
                  </td>
                </tr>
              </thead>
              <tbody className="">
                {data.map((student, index) => (
                    
                  <tr
                    key={index}
                    className="bg-white bg-opacity-20 border-b border-white text-base font-normal hover:bg-white hover:bg-opacity-10 transition-all"
                  >
                    <td className="px-6 py-4">{index + 1}</td> {/* Counter for each row */}
                    <td className="px-6 py-4">{student.avatar}</td>
                    <td className="px-6 py-4">{student.id}</td>
                    <td className="px-6 py-4">{student.name}</td>
                    <td className="px-6 py-4">{student.signUpDate}</td>
                    <td className="px-6 py-4">{student.level}</td>

                    <td className="px-6 py-4 text-right">
                    <label className="relative inline-flex items-center justify-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={student.active}
                      onChange={() => toggleActive(index)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-grey peer-focus:outline-none rounded-full peer peer-checked:bg-gradientSkyBlue"></div>
                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
                  </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Header>
    </div>
  );
}

export default AccountsHeader;



