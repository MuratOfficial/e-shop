import React from 'react'
import Button from './ui/Button'
import Slider from './ui/Slider'
import { Link } from 'react-router'
import Switch from './ui/Switch'

function Filter() {
  return (
    <div className='flex flex-col gap-6 w-full'>
        <div className='text-xl font-extrabold py-3 px-4 text-left bg-[#F3F2F1] w-full rounded-md'>
            <p>
                Фильтр
            </p>
        </div>
        <div className='flex flex-row justify-between items-center'>
            <p>
                Цена
            </p>
            <Button title='Очистить' width="sm" className={`bg-[#F3F2F1] text-sm transition delay-75 duration-200 hover:text-white text-zinc-500 hover:bg-green-500`}/>
        </div>
        <Slider/>
        <div className='w-full flex flex-col gap-6 text-lg mt-4 items-start'>
            <Link className='hover:text-green-500 transition delay-100 duration-200'>
            Молоко
            </Link>
            <Link className='hover:text-green-500 transition delay-100 duration-200'>
            Сливки
            </Link>
            <Link className='hover:text-green-500 transition delay-100 duration-200'>
            Яйцо
            </Link>
            
        </div>
        {/* <Switch/> */}
    </div>
  )
}

export default Filter