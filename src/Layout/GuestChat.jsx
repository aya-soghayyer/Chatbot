// import React from "react";
import Circle from "../Compononts/Circle/Circle";
import HeaderGuestChat from "../Compononts/Header/HeaderGuestChat";

function GuestChat() {
    return (
        <>
            <div className="bg-black ">
                <div className=" flex bg-black -mb-8">
                    <div className="  flex justify-between">
                        <div className="-mt-16  ">
                            <Circle />
                        </div>
                    </div>
                    <HeaderGuestChat />
                    <div className="z-20">
                    </div>
                    <Circle />

                </div>
            </div>
        </>
    );
}

export default GuestChat;
