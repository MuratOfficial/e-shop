import React from 'react'
import { IoChevronForward } from 'react-icons/io5'
import { Link } from 'react-router'

function Breadcrumb({links}) {
  return (
    <div className={'w-full justify-start items-center flex flex-row gap-3'}>
        {links.map((x, n)=>
           ( <Link to={x.link} className=' text-sm flex flex-row gap-1 items-center text-[#414141] transition delay-75 duration-200 hover:text-[#70C05B]'>
            {x.title} 
           {(links.length > n+1) ?  <IoChevronForward className=' w-8'/>:""}
           </Link>)
        )}

        

    </div>
  )
}

export default Breadcrumb