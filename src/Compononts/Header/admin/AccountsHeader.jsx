import { useState, useEffect } from "react";
import Search from "../../ui/Search";
import SideBar from "../../ui/admin/SideBar";
import Header from "../../ui/admin/Header";
import { fetchStudents } from "../../../services/adminStudentsService"; // Adjust the import path as necessary

function AccountsHeader() {
  const [data, setData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const loadStudents = async () => {
      try {
        const students = await fetchStudents();
        console.log("Fetched students:", students); // 👈 Check this
        if (!Array.isArray(students)) {
          throw new Error("Fetched data is not an array");
        }
        console.log("Fetched students:", students); // 👈 Check this
        setData(students);
      } catch (error) {
        console.error("Failed to fetch students", error);
      }
    };
    loadStudents();
  }, []);
  
  console.log(data);

  const handleToggleClick = (index) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const handleConfirm = async () => {
    if (selectedIndex !== null) {
      const student = data[selectedIndex];
      try {
        // await toggleStudentActive(student.id, !student.active);
        const updatedData = [...data];
        updatedData[selectedIndex].active = !student.active;
        setData(updatedData);
        setModalOpen(false);
      } catch (error) {
        console.error("Failed to toggle status", error);
      }
    }
  };

  const handleCancel = () => {
    setSelectedIndex(null);
    setModalOpen(false);
  };

  return (
    <div className="flex gap-5">
      <SideBar />
      <Header className="border-none z-0">
        <div className="gird">
          <Search />

          <div className="overflow-x-auto overflow-y-auto h-[29.5rem] custom-scrollbar-admin max-w-4xl mx-auto mt-4 rounded-tl-[5px] rounded-tr-[5px]">
            <table className="w-full text-left text-white">
              <thead className="text-base font-light capitalize bg-darkBlue text-white">
                <tr>
                  <td className="py-3 px-6">Num</td>
                  <td className="px-6 py-3">Avatar</td>
                  <td className="px-6 py-3">ID</td>
                  <td className="px-6 py-3">Name</td>
                  <td className="px-6 py-3">Sign up date</td>
                  <td className="px-6 py-3">Level</td>
                  <td className="px-6 py-3">Active</td>
                </tr>
              </thead>
              <tbody>
                {data?.map((student, index) => (
                  <tr
                    key={index}
                    className="bg-white bg-opacity-20 border-b border-white text-base font-normal hover:bg-white hover:bg-opacity-10 transition-all"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{student.profile_image}</td>
                    <td className="px-6 py-4">{student.portal_id}</td>
                    <td className="px-6 py-4">{student.name}</td>
                    <td className="px-6 py-4">{student.created_at}</td>
                    <td className="px-6 py-4">{student.level}</td>
                    <td className="px-6 py-4 text-right">
                      <label className="relative inline-flex items-center justify-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={student.status}
                          onChange={() => handleToggleClick(index)}
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

          {/* Inline Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-darkBlue text-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <p className="text-center text-lg mb-6">
                  Are you sure you want to deactivate/activate this student account?
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleConfirm}
                    className="bg-white text-darkBlue px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
                  >
                    Yes, deactivate/activate
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-white text-darkBlue px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Header>
    </div>
  );
}

export default AccountsHeader;
