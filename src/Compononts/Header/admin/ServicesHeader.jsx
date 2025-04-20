import React from 'react'
import SideBar from '../../ui/admin/SideBar'
import Header from '../../ui/admin/Header'

function ServicesHeader() {
  return (
    <div className='flex gap-5 h-[35rem]'>
    <SideBar className />
    <Header className="border-none flex justify-center h-fit m-auto">
    <div className="bg-darkBlue text-white  rounded-lg py-4 w-4/6 text-center shadow-lg">
      <p className="mb-4 text-xl font-normal px-5">
      The  academic schedule creation service can be activated and deactivated according to the university calendar.
      </p>

      <select
        className="px-4 py-2 text-white rounded-md bg-gradient-to-r from-gradientSkyBlue to-gradientPurple focus:outline-none"
      >
        <option value=""  className='bg-darkBlue'>Select</option>
        <option value="activate" className='bg-darkBlue'>Activate</option>
        <option value="deactivate" className='bg-darkBlue'>Deactivate</option>
      </select>
    </div>
    </Header>
  </div>
  )
}

export default ServicesHeader