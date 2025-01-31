// import { useState } from 'react'
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcome from "./Layout/Welcome";
import Routes from "./Routes/Routes";


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
        // path: "/About",
        // element: <About /> ,
      },
     {
        // path: "*",              //another way for the error 
        // element: <NotFound />
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
