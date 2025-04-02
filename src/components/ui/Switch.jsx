import React, { useState } from 'react'

function Switch() {

  const [side, setSide] = useState(false);

  function handleSide(param){
    if(param){
      setSide(false)
    }else{
      setSide(true)
    }
  }

  return (
    <div className={` h-8 w-14 p-1 relative rounded-3xl ${side===false && " bg-zinc-400"} ${side && " bg-[#70C05B]"} transition delay-100 duration-300 `}>
      <div className={`w-6 h-6 cursor-pointer bg-white rounded-full ${side===false && " translate-0"} ${side && " translate-x-6"} transition delay-75 duration-200 shadow-md `} onClick={()=>handleSide(side)}/>

    </div>
  )
}

export default Switch