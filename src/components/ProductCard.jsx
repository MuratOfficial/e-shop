import React from 'react'
import { CiHeart } from 'react-icons/ci'
import FiveStars from './ui/FiveStars'
import Button from './ui/Button'

function ProductCard({price, priceOriginal, title, img, discount}) {
  return (
    <div className=' rounded-md min-h-[349px] gap-0.5 w-[272px] p-4 bg-white hover:shadow-md transition justify-between duration-200 delay-75 flex flex-col'>
      <div className=' relative'><img src={img}/>
      <CiHeart size={26} className='hover:fill-[#FF6633] cursor-pointer absolute right-1 top-1'/>
      {discount && <div className='absolute flex flex-row items-center justify-center px-3 py-1.5 left-1 bottom-1 text-white bg-[#FF6633] w-fit rounded-sm'>
      <p>-{discount}%</p>
      </div>}
      
      </div>
      <div className='flex flex-col justify-between gap-4 items-start h-max '>

        <div className='flex flex-row justify-between items-center w-full'>
          <div className=' text-start'>
          <p className=' text-lg font-bold'>{price?.toFixed(2)} тг.</p>
          <p className=' text-xs font-light text-zinc-600 '>С картой</p>

          </div>
          <div className=' text-end'>
          <p className=' text-base font-light'>{priceOriginal?.toFixed(2)} тг.</p>

          <p className=' text-xs font-light text-zinc-600 '>Обычная</p>
          </div>
        
        
        </div>
        
        <div className='flex flex-col gap-y-2'>
          <p className=' line-clamp-2 text-start'>{title}</p>
          <FiveStars/>
          <Button width={"lg"}/>

        </div>


      </div>


    </div>
  )
}

export default ProductCard