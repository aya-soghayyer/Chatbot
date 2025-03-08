import React from 'react'
import Circle from '../Compononts/Circle/Circle'
import UserChatHeader from '../Compononts/Header/UserChatHeader'

function UserChat() {
  return (
    <>
    <div className="">
        <div className="md:flex -mb-8">
          <div className="flex justify-between">
            <div className="-mt-16 -ml-7 z-0">
              <Circle />
            </div>
          </div>
          <UserChatHeader />
          <Circle />
        </div>
      </div>
    </>
)
}

export default UserChat