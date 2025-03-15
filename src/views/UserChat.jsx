import React from 'react'
import Circle from '../Compononts/Circle/Circle'
import UserChatHeader from '../Compononts/Header/user/UserChatHeader'

function UserChat() {
  return (
    <>
    <div className="">
        <div className="flex">
          <div className="flex justify-between relative">
            <div className="z-0">
              <Circle />
            </div>
            <div className="z-40 fixed">
            <UserChatHeader />
          </div>
          </div>
          <div className="absolute top-20  right-8">
          <Circle />
          </div>
        </div>
      </div>
    </>
)
}

export default UserChat