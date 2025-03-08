// import React from "react";
import Circle from "../Compononts/Circle/Circle";
import GuestChatHeader from "../Compononts/Header/GuestChatHeader";

function GuestChat() {
    return (
        <>
            <div className="bg-Primary flex-1">
                <div className="flex relative w-screen">
                    <div className="flex justify-between">
                        <div className="-mt-16 z-0">
                            <Circle />
                        </div>
                    </div>
                    <div className="mb-2 z-50 w-full">
                        <GuestChatHeader />
                    </div>
                    <div className="z-0">
                    <Circle />
                    </div>
                </div>
            </div>
        </>
    );
}

export default GuestChat;
