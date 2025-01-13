import Frame from '../../assets/Frame.svg'
function Header() {
  return (
<>
<header className="wrapper py-16 z-50 font-Outfit text-white">
  <div className="flex flex-col pb-32 2md:flex-row gap-24 items-center justify-between">
    <div className="w-full 2md:w-[50%]">
      <h1 className=" text-4xl 2md:text-6xl font-black mb-6">
      WELCOME  
      TO MILO      </h1>
      <p className=" text-xl">
      Welcome to MiLo! Explore a smarter way to navigate university resources and get the answers you need. Let’s get started!
      </p>
      
        <button className="w-full mt-10  px-5 py-3 rounded-[10px] capitalize bg-gradient-to-r from-[#6327C9]  to-[#21ABDB] "> get started</button>
      
    </div>
    <div className="w-full 2md:w-[50%]">
      <img className="w-full" src={Frame} alt="" />
    </div>
  </div>
</header>

</>
)
}

export default Header