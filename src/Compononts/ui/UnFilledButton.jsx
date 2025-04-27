function UnFilledButton({ title, className = "", className2 = "" }) {
  return (
    <>
      <div className="relative w-full group">
        <div className="absolute h-full w-full mt-1 -inset-1 bg-gradient-to-r from-gradientPurple to-gradientSkyBlue rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <button
          className={`${className2} p-[0.125rem]  rounded-[0.625rem] -inset-1 group-hover:opacity-100 bg-gradient-to-r from-gradientPurple to-gradientSkyBlue relative 
      transition-all duration-1000  hover:brightness-110 hover:scale-105`}
        >
          <div
            className={`rounded-[0.5rem] capitalize font-medium text-white bg-primary/90 text-base  2xl:text-lg ${className}
        transition-all duration-1000 hover:bg-opacity-90`}
          >
            {title}
          </div>
        </button>
      </div>
    </>
  );
}

export default UnFilledButton;
