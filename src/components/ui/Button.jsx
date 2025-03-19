import React from 'react'


function Button({width}) {


  return (
    <button  className={` hover:bg-[#FF6633] cursor-pointer px-4 py-2 rounded-sm hover:text-white  bg-transparent border-2 hover:border-[#FF6633] border-green-400 transition delay-100 duration-300 text-green-400 flex flex-row justify-center items-center ${width==="sm" ? `w-24` : width==="md" ? "w-48" : width==="lg" ? "w-60" : "w-24"}`}>
      <i></i>
      Купить

    </button>
  )
}

export default Button

