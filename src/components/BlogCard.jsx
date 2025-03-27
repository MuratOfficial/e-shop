import React from 'react'
import Button from './ui/Button'

function BlogCard({date, title, descShort, imgSrc}) {
  return (
    <div className='grid grid-rows-10 w-full bg-white hover:shadow-lg transition delay-75 duration-300 rounded-md overflow-hidden '>
        <img src={imgSrc} alt={title} className=' row-span-4 w-full ' />
        <div className='p-2 flex flex-col justify-between  row-span-6'>
            <p className=' text-sm text-[#8F8F8F] text-left'>{date}</p>
            <p className=' text-left text-lg font-bold'>{title}</p>
            <p className=' text-left'>{descShort}</p>
            <Button title="Подробнее" width="md" className="text-[#70C05B] hover:text-white bg-[#E5FFDE] hover:bg-[#70C05B]"/>

        </div>



    </div>
  )
}

export default BlogCard