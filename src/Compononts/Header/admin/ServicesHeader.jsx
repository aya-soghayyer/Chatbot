import React from 'react';
import SideBar from '../../ui/admin/SideBar';
import Header from '../../ui/admin/Header';
import useAdminService from '../../../hooks/admin/useAdminService';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

function ServicesHeader() {
  const {
    getAdminService,
    isLoading,
    isSuccess,
    isError,
    setLoading,
    setSuccess,
    setError,
    confirmChange,
    setConfirmChange,
    setValue,
    value,
  } = useAdminService();

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
    setConfirmChange(true);
  };
  const [status, setStatus] = useState("Active");
  const [open, setOpen] = useState(false);

  const options = ["Active", "Inactive", "Archived"];

  return (
    <div className="flex gap-5">
      <SideBar />
      <Header className="border-none flex justify-center h-fit m-auto">
        <div className="bg-darkBlue text-white rounded-lg py-4 w-4/6 text-center shadow-lg">
          <p className="mb-4 text-xl font-normal px-5">
            The academic schedule creation service can be activated and deactivated according to the university calendar.
          </p>

          <select
            onChange={handleSelectChange}
            className="px-3 py-2 text-white rounded-md bg-gradient-to-r from-gradientSkyBlue to-gradientPurple focus:outline-none"
            defaultValue=""
            
          >
            <option value="start" className="bg-darkBlue">Activate</option>
            <option value="stop" className="bg-darkBlue">Deactivate</option>
          </select>

          {confirmChange && (
            <div className="fixed inset-0 z-20 bg-black/65 flex items-center justify-center p-4 md:p-6 2xl:p-8">
              <div className="absolute top-7 right-5 z-50 md:w-1/3 md:top-48 md:right-96 bg-darkBlue backdrop-blur-xl rounded-xl px-3">
                <div className="flex justify-between items-center px-4 py-3">
                  <h3>Confirm {value === 'start' ? 'activation' : 'deactivation'} of service</h3>
                  <button onClick={() => setConfirmChange(false)}>
                    <FontAwesomeIcon icon="fa-solid fa-xmark" shake size="lg" />
                  </button>
                </div>
                <hr />
                <div className="flex justify-between">
                  <div className="flex justify-between items-center gap-14 font-light px-4 py-5">
                    <button
                      onClick={getAdminService}
                      className="px-3 rounded-xl font-extralight bg-gradient-to-r from-gradientPurple to-gradientSkyBlue"
                    >
                      Confirm 
                    </button>
                  </div>
                  <div className="flex justify-between items-center font-light px-4 py-5">
                    <button
                      onClick={() => setConfirmChange(false)}
                      className="px-3 rounded-xl font-extralight"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

     
    {/* <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center px-4 py-2 text-white font-medium rounded-full bg-gradient-to-r from-[#1DB2DF] to-[#6B5CE7] focus:outline-none shadow"
      >
        {status}
        <FontAwesomeIcon icon="fa-solid fa-caret-down" />
          </button>

      {open && (
        <div className="absolute mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setStatus(option);
                  setOpen(false);
                }}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div> */}
  


      </Header>
    </div>
  );
}

export default ServicesHeader;
