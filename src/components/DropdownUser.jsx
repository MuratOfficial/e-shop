import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

function DropdownUser() {
  return (
    <div className='w-full grid col-span-3 grid-cols-8 p-2 items-center gap-4 ml-4'>
      <img src='assets\avatar.png' className='col-span-2 w-full'/>
      <p className='col-span-4 w-full text-left '>Алексей</p>


      <button className=' flex flex-row items-center justify-center col-span-2'>
      <FaChevronDown size={16} />

      </button>

    </div>
  )
}

export default DropdownUser