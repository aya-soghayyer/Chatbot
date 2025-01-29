import Frame from '../../assets/Frame.svg'
function Header() {
  return (
<>
<header className="wrapper py-16 z-50 font-Outfit text-white">
  <div className="flex flex-col pb-32 2md:flex-row gap-24 items-center justify-between">
    <div className="w-full 2md:w-[50%]">
      <h2 className=" text-4xl 2md:text-5xl line  font-bold mb-6 uppercase">
      WELCOME  
      TO MILO   chatbot   </h2>

      <p className="text-2xl font-thin ">
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