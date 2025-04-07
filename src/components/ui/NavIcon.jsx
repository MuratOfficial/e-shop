import React from 'react'
import { NavLink } from 'react-router'

function NavIcon({children, name, link}) {
  return (
    <NavLink to={link} className='flex flex-col group justify-center items-center gap-1 cursor-pointer '>
        {children}
        <p className=' text-xs text-zinc-600 group-hover:text-[#FF6633]'>{name}</p>
    </NavLink>
  )
}

export default NavIcon