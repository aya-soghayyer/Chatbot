import React from "react";

function FilledButton({ title , className=""}) {
  return (
    <button
      className={`rounded-[0.625rem] capitalize bg-gradient-to-r from-gradientPurple to-gradientSkyBlue shadow-inner shadow-slate-400 text-base 2xl:text-lg 
transition-all duration-1000 hover:shadow-inner hover:shadow-slate-200 hover:brightness-110 hover:scale-105 ${className}`}
    >
      {title}
    </button>
  );
}

export default FilledButton;
