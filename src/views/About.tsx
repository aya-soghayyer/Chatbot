// import {React, useState }from 'react'
// import Voice from '../Compononts/Header/voice'
// import { motion, useSpring } from "framer-motion"
// import * as motion from "motion/react-client"
// import { useState } from "react"
import type { Variants } from "motion/react"
import * as motion from "motion/react-client"
import React from "react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import FilledButton from "../Compononts/ui/FilledButton";
import UnFilledButton from "../Compononts/ui/UnFilledButton";

function About() {
  const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => setIsOn(!isOn)
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const { height } = useDimensions(containerRef)

    return (
        <div>
            <div style={container}>
                <motion.nav
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    // custom={height}
                    // ref={containerRef}
                    // style={nav}¿
                >
                    {/* <motion.div  /> */}
                    <Navigation />
                    <MenuToggle toggle={() => setIsOpen(!isOpen)} />
                </motion.nav>
            </div>
        </div>
    )
}
export default About


const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}

const Navigation = () => {
    const navItems = {
      "/": "Home",
      about: "About",
      contact: "Contact",
      signup: <UnFilledButton title="Signup" className2="w-full" />,
      login: <FilledButton title="Login" className="w-full" />,
    };
  
    return (
      <motion.ul
        className="p-1 absolute t-50  w-200"
        variants={navVariants}
      >
        {Object.entries(navItems).map(([path, item], i) => (
          <MenuItem key={path} i={i} item={item} path={path} />
        ))}
      </motion.ul>
    );
  };
  
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  
  const MenuItem = ({ i, item, path }) => {
    return (
      <motion.li
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="border-b-2 border-slate-400 w-full"
      >
        <Link 
          to={path} 
          className="p-5 w-full flex items-center justify-center"
        >
          {item}
        </Link>
      </motion.li>
    );
  };
  

const sidebarVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
}

interface PathProps {
    d?: string
    variants: Variants
    transition?: { duration: number }
}

const Path = (props: PathProps) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
)

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
    <button style={toggleContainer} onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
            />
        </svg>
    </button>
)

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "stretch",
    flex: 1,
    width: 500,
    maxWidth: "100%",
    height: 400,
    backgroundColor: "#fffff",
    borderRadius: 20,
    overflow: "hidden",
}

const nav: React.CSSProperties = {
    width: 300,
}

const background: React.CSSProperties = {
    backgroundColor: "#f5f5f5",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: 300,
}

const toggleContainer: React.CSSProperties = {
    outline: "none",
    border: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    cursor: "pointer",
    position: "absolute",
    top: 18,
    left: 15,
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "transparent",
}

const list: React.CSSProperties = {
    listStyle: "none",
    padding: 25,
    margin: 0,
    position: "absolute",
    top: 80,
    width: 230,
}

const listItem: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 0,
    margin: 0,
    listStyle: "none",
    marginBottom: 20,
    cursor: "pointer",
    backgroundColor: "white"
}

const iconPlaceholder: React.CSSProperties = {
    width: 40,
    height: 40,
    borderRadius: "50%",
    flex: "40px 0",
    marginRight: 20,
}

const textPlaceholder: React.CSSProperties = {
    borderRadius: 5,
    width: 200,
    height: 20,
    flex: 1,
}

/**
 * ==============   Utils   ================
 */

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
    const dimensions = useRef({ width: 0, height: 0 })

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth
            dimensions.current.height = ref.current.offsetHeight
        }
    }, [ref])

    return dimensions.current
}


  // const [messages, setMessages] = useState([]); // Empty at start
  // const [input, setInput] = useState("");
  // const [activeChat, setActiveChat] = useState(false); // Controls UI state

  // // Send message function
  // const sendMessage = () => {
  //   if (!input.trim()) return;

  //   if (!activeChat) setActiveChat(true); // First message triggers redesign

  //   setMessages([...messages, { id: messages.length + 1, text: input, sender: "user" }]);
  //   setInput("");

  //   // Simulate bot reply
  //   setTimeout(() => {
  //     setMessages((prev) => [
  //       ...prev,
  //       { id: prev.length + 1, text: "Hello! How can I help you?", sender: "bot" },
  //     ]);
  //   }, 1000);
  // };

//   return (
//     <>
//    <motion.button
//   className="text-white px-6 py-3 rounded-md shadow-lg"
//   style={{ backgroundColor: "#3B82F6" }} // Equivalent to bg-blue-500
//   whileHover={{ scale: 1.1 }}
//   whileTap={{ scale: 0.9 }}
// >
//   Click Me
// </motion.button>

//    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={box} className="bg-red-700" />
//    <button
//             className="toggle-container"
//             style={{
//                 ...container,
//                 justifyContent: "flex-" + (isOn ? "start" : "end"),
//             }}
//             onClick={toggleSwitch}
//         >
//             <motion.div
//                 className="toggle-handle"
//                 style={handle}
//                 layout
//                 transition={{
//                     type: "spring",
//                     visualDuration: 0.2,
//                     bounce: 0.2,
//                 }}
//             />
//         </button>







{/* </div> */}

{/*   */}

    
     {/* <div className="relative min-h-screen bg-cover bg-center bg-custom ">  */}
      {/* Darkened backdrop effect */}
       {/* <div className="absolute inset-0 backdrop-brightness-[0.2]"></div>

      Modal content
       <div className="relative z-10 flex items-center justify-center h-screen">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-bold">This is a modal</h2>
          <p className="text-gray-600">
            The background is dimmed using backdrop-brightness-50.
          </p>
        </div>
      </div>
    </div>
  


   */}


//     </>
//   )
// }


// const box = {
//   width: 100,
//   height: 100,
//   backgroundColor: "#ffffff",
//   borderRadius: 5,
// }

// const container = {
//   width: 100,
//   height: 50,
//   backgroundColor: "#fff643",
//   borderRadius: 50,
//   cursor: "pointer",
//   display: "flex",
//   padding: 10,
// }

// const handle = {
//   width: 50,
//   height: 50,
//   backgroundColor: "#9911ff",
//   borderRadius: "50%",
// }