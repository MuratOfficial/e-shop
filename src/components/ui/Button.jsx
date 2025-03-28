import React from 'react'


function Button({width, title, className}) {


  return (
    <button  className={`${className}  cursor-pointer px-4 py-2 rounded-sm transition delay-100 duration-300  flex flex-row justify-center items-center ${width==="sm" ? `w-24` : width==="md" ? "w-48" : width==="lg" ? "w-60" : "w-24"} `}>
      
      {title}

    </button>
  )
}

export default Button

