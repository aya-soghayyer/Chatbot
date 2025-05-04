import React from 'react';

function Header({ children,className }) {
  return (
    <div className={` ${className} w-[77%] z-10 rounded`}>
      {children}
    </div>
  );
}

export default Header;
