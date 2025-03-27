import React from 'react'

function TwoBanner() {
  return (
    <div className='px-32 flex flex-col gap-8 w-full mt-12 text-[#414141]'>
        <h3 className='font-bold text-4xl w-full text-left'>Специальные предложения</h3>
        <div className='grid grid-cols-2 gap-8'>

            <a href="" >
                <img src='src\assets\banner-hover.png' className=' rotate-1 hover:rotate-0 transition delay-75 duration-200'/>
            </a>
            <a href="">
                <img src='src\assets\banner.png' className=' -rotate-1 hover:rotate-0 transition delay-75 duration-200'/>
            </a>


        </div>
    </div>
  )
}

export default TwoBanner