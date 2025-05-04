import React from 'react';
import SideBar from '../../ui/admin/SideBar';
import Header from '../../ui/admin/Header';

function DashboardHeader() {
  return (
    <div className='flex gap-5'>
      <SideBar />
      <Header className="border">
      </Header>
    </div>
  );
}

export default DashboardHeader;
