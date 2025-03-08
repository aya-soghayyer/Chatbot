import React from 'react'
import Circle from '../Compononts/Circle/Circle'

function GuestChatId() {
  return (
   <>
    <div className="bg-Primary  ">
                <div className=" flex  -mb-8">
                    <div className="  flex justify-between">
                        <div className="-mt-16  ">
                            <Circle />
                        </div>
                    </div>
                    < GuestChatId/>
                    <div className="z-20">
                    </div>
                    <Circle />
                </div>
                
    </div>
   </>
  )
}

export default GuestChatId