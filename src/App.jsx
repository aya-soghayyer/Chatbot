// import { useState } from 'react'
import "./App.css";
import "regenerator-runtime/runtime";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcome from "./Layout/Welcome";
import Routes from "./Routes/Routes";
import Login from "./Layout/Login";
import About from "./Layout/About";
import SignUp from "./Layout/SignUp";
import GuestChat from "./Layout/GuestChat";
import NotFound from "./Layout/NotFound";


function App() {
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
    path: "/",
    element: <Routes />,
    // errorElement: <NotFound />, // way for showing error when user write a path outside of the project rand of paths , example: localhost.../register
    children:[
      {
        path: "/",
        element:<Welcome/> ,
      },
      {
        path: "/About",
        element: <About /> ,
      },
      {
        path: "/Login",
        element: <Login /> ,
      },
      {
        path: "/Signup",
        element: <SignUp /> ,
      },
      {
        path: "/Contact",
        // element: <About /> ,
      },
      {
        path: "/chat",
        element: <GuestChat /> ,
      },
     {
        path: "*",              //another way for the error 
        element: <NotFound />
      }
    ]
  },
  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
