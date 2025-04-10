import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-[#F9F4E2] w-full py-6  h-28 px-32' style={{backgroundImage:"url(/assets/bg.png)"}}>
        <div className='grid grid-cols-12 w-full'>
            <div className='col-span-8 flex flex-row items-center justify-between'>
                <img src='/assets/logoFooter.svg' alt='logo-end'/>
                <a href="/about" className='text-sm hover:text-[#FF6633] transition delay-75 duration-200' >О компании</a>
                <a href="/contacts" className='text-sm hover:text-[#FF6633] transition delay-75 duration-200'>Контакты</a>
                <a href="" className='text-sm hover:text-[#FF6633] transition delay-75 duration-200'>Вакансии</a>
                <a href="" className='text-sm hover:text-[#FF6633] transition delay-75 duration-200'>Статьи</a>
                <a href="" className='text-sm hover:text-[#FF6633] transition delay-75 duration-200'>Политика обработки персональных данных</a>


            </div>
            <div className='col-span-4 flex flex-row justify-end gap-8 items-center'>
                <div className='flex flex-row justify-center items-center gap-4'>
                    <a href="">
                    <img src='/assets/instagram.svg' className=' hover:scale-105 transition delay-75 duration-150'/>
                    </a>
                    <a href="">
                    <img src='/assets/facebook.svg' className=' hover:scale-105 transition delay-75 duration-150'/>
                    </a>
                    <a href="">
                    <img src='/assets/vk.svg' className=' hover:scale-105 transition delay-75 duration-150'/>
                    </a>
                    <a href="">
                    <img src='/assets/odn.svg' className=' hover:scale-105 transition delay-75 duration-150'/>
                    </a>
                    
                </div>

                <div className='flex flex-row gap-2 text-[#414141] justify-center items-center'>
                <FaPhoneAlt /> 8 777 777 77 77
                </div>

            </div>

        </div>
        


    </div>
  )
}

export default Footer