import React from "react";
import ReactDOM from "react-dom";
// import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";
import facbook from '../../assets/facebook-f-brands-solid.svg'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faLinkedinIn} from "@fortawesome/react-fontawesome"
function Footer() {
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
  integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
  crossOrigin="anonymous"
  referrerPolicy="no-referrer"
/>
  return (
    <>
    <div className="text-slate-300">
    © 2025 – MiLo Chatbot
    <FontAwesomeIcon icon="fa-brands fa-linkedin-in" bounce />
    </div>
  </>
  );
}

export default Footer;
