// import { useState } from 'react'
import './App.css'
import Circle from './Compononts/Circle/Circle'
import Footer from './Compononts/Footer/Footer'
import Header from './Compononts/Header/Header'
import Navbar from './Compononts/Navbar/Navbar'

function App() {
  
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <div className='bg-black'>
        <Navbar/>
      {/* <h1 className="text-3xl bg-orange-700 font-bold underline bg-gradient-to-tr ">
      Hello world!
    </h1> */}
      </div>
      <div className='flex bg-black'>
          <div className='bg-black flex justify-between'>
        <Circle/>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam expedita dolorem sit, totam minima fuga quae quia maiores adipisci unde eaque enim maxime ratione quo consectetur reiciendis minus placeat accusantium?</p> */}
      </div>
      <Header/>
      <Circle/>
      <Footer/>
      </div>
    

    </>
  )
}

export default App
