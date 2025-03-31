import React from 'react'
import { Link } from 'react-router'

function CatalogCard({big, title, img, href}) {
  return (
<>

<Link to={href}  style={{backgroundImage:`url("${img}")`}} className={` bg-no-repeat bg-cover group cursor-pointer   w-full  rounded-md overflow-hidden min-h-44 relative flex flex-col justify-end items-start   ${big && " col-span-2"}`}>
      
      <div className='bg-gradient-to-t from-green-500 from-0% via-transparent via-50% to-transparent to-100% w-full h-full absolute hover:from-orange-500 transition delay-100 duration-300'/>
      <p className='p-3 text-white font-bold z-10'>{title}</p>
      

    </Link>



</>


  )
}

export default CatalogCard