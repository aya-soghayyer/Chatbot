// import React from 'react'
import Circle from "../Compononts/Circle/Circle";
import LoginHeader from "../Compononts/Header/user/LoginHeader";

function Login() {
  return (
    <>
      <div className="">
        <div className="md:flex -mb-8">
          <div className="flex justify-between">
            <div className="-mt-16 -ml-7 z-0">
              <Circle />
            </div>
          </div>
          <LoginHeader />
          <Circle />
        </div>
      </div>
    </>
  );
}

export default Login;
