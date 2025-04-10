import React from 'react'
import { CiPhone } from 'react-icons/ci'
import { IoHomeOutline } from 'react-icons/io5'

function AddressCard({address, phone, title}) {
  return (
    <div className='flex flex-col gap-1 items-start justify-center'>
                <p className='font-bold text-2xl uppercase  '>
                  {title}
                </p>
                <div className='flex flex-row gap-2 items-center'><IoHomeOutline size={18} />{address}</div>
                <div className='flex flex-row gap-2 items-center underline underline-offset-2'><CiPhone  size={18} />{phone}</div>
    
              </div>
  )
}

export default AddressCard