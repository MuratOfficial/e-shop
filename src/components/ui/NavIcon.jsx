import React from 'react'

function NavIcon({children, name}) {
  return (
    <div className='flex flex-col justify-center items-center gap-1 cursor-pointer'>
        {children}
        <p className=' text-xs text-zinc-600'>{name}</p>
    </div>
  )
}

export default NavIcon