import React from 'react'
import style from '../loader/Loader.module.css'

function Loader() {
  return (
<>
{/* <div className={style.container}>
  <span />
  <span />
  <span />
  <span />
</div> */}

<div className={style.spinner}>
    <div className={style.spinner1}></div>
</div>


<>
  {/* /* From Uiverse.io by clarencedion */}
  {/* <div className="flex items-center justify-center min-h-screen">
    <div className="relative">
      <div className="relative w-32 h-32">
        <div
          className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-[#0ff] border-b-[#0ff] animate-spin"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-[#0ff] animate-spin"
          style={{ animationDuration: "2s", animationDirection: "reverse" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0ff]/10 via-transparent to-[#0ff]/5 animate-pulse rounded-full blur-sm" />
    </div>
  </div> */}
</>

</>
  )
}

export default Loader