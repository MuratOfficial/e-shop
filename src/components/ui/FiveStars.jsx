import React from 'react'
import { FaStar } from 'react-icons/fa'

function FiveStars() {
  return (
    <div className=' flex flex-row gap-1.5  items-center'>
        <FaStar  className=' fill-[#BFBFBF] hover:fill-[#FF6633] cursor-pointer' />
        <FaStar className=' fill-[#BFBFBF] hover:fill-[#FF6633] cursor-pointer' />
        <FaStar className=' fill-[#BFBFBF] hover:fill-[#FF6633] cursor-pointer' />
        <FaStar className=' fill-[#BFBFBF] hover:fill-[#FF6633] cursor-pointer' />
        <FaStar className=' fill-[#BFBFBF] hover:fill-[#FF6633] cursor-pointer' />
    </div>
  )
}

export default FiveStars