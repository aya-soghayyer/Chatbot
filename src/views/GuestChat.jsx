// import React from "react";
import Circle from "../Compononts/Circle/Circle";
import GuestChatHeader from "../Compononts/Header/GuestChat/GuestChatHeader";

function GuestChat() {
    return (
        <>
            <div className="bg-primary flex-1">
                <div className="flex relative w-full">
                    <div className="flex justify-between">
                        <div className="-mt-16 z-0">
                            <Circle />
                        </div>
                    </div>
                    <div className="z-20 w-full">
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
