import React from 'react'
import ProductCard from './ProductCard'
import {  FaChevronRight } from 'react-icons/fa'

function MainGridCategory({title, link, linkName, products}) {
  return (
    <div className='px-32 w-full pt-4 flex flex-col gap-8 text-[#414141] '>
        <div className='w-full flex flex-row justify-between'>
                <h3 className='text-4xl font-extrabold'>
                    {title}
                </h3>
                
                <a href={link} className='flex flex-row gap-4 mr-4 justify-center items-center hover:text-[#70C05B] transition-all delay-100 duration-300'>{linkName} <FaChevronRight size={14}/> </a>
        </div>
        <div className='grid grid-cols-4 gap-8'>
        {
                    products.map((x, key)=>(<ProductCard key={key} id={x.id} price={x.price} priceOriginal={x.priceOriginal} discount={x.discount} title={x.title} img={x.img}/>))
        }
        </div>
        

    </div>
  )
}

export default MainGridCategory