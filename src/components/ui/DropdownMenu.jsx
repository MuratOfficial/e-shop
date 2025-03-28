import React from 'react'
import { IoIosMenu } from 'react-icons/io'
import { NavLink } from 'react-router'

function DropdownMenu() {
  return (
    <div  className='col-span-2'>
      <NavLink to="/catalogs" className='cursor-pointer h-10  hover:bg-[#FF6633] px-6 rounded-md transition delay-100 duration-300 text-white text-sm gap-4 py-2 bg-[#70C05B] flex flex-row justify-between items-center'>
      <IoIosMenu size={26} />
      Каталог
      </NavLink>
    </div>
  )
}

export default DropdownMenu
