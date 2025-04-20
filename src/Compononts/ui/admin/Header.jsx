import React from 'react';

function Header({ children,className }) {
  return (
    <div className={`border ${className} w-3/4 z-10 rounded`}>
      {children}
    </div>
  );
}

export default Header;
