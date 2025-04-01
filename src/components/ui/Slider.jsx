import React from 'react'
import RangeSlider from 'react-range-slider-input';
import "react-range-slider-input/dist/style.css";

function Slider() {
  return (
    <div className='flex flex-col w-full gap-6'>
        <div className='flex flex-row justify-between items-center'>
            <input type="text" className='text-base px-3 py-2.5 w-32 rounded-md bg-white border-2 border-[#BFBFBF] focus:border-green-500 focus:outline-0 '/> —
            <input type="text" className='text-base px-3 py-2.5 w-32 rounded-md bg-white border-2 border-[#BFBFBF] focus:border-green-500 focus:outline-0 '/>
        </div>
        <div>

        <RangeSlider className='bg-green-500'/>

        </div>
    </div>
  )
}

export default Slider