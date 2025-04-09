import React, { useState } from 'react'
import OrdersGrid from '../components/grids/OrdersGrid'
import Button from '../components/ui/Button';
import { TbSquareMinusFilled } from 'react-icons/tb';
import { FaTrashAlt } from 'react-icons/fa';
import BasketCard from '../components/cards/BasketCard';
import Switch from '../components/ui/Switch'

function BasketPage() {


  const products = [
    {img:'/assets/image.png', name:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»", price:44.50, discount:10, count:2,empty:false},
    {img:'/assets/image.png', name:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»", price:44.50, discount:10, count:2,empty:true},
    {img:'/assets/image.png', name:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»", price:44.50, discount:10, count:2,empty:true},
    {img:'/assets/image.png', name:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»", price:44.50, discount:10, count:2,empty:false},
    {img:'/assets/image.png', name:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»", price:44.50, discount:10, count:2,empty:false}
  ]

  return (
    <section className=' px-32 py-6 w-full flex gap-8 flex-col min-h-screen items-start '>
      <h2 className='relative pr-8 text-7xl font-extrabold text-[#414141]'>
      Корзина
      <span className='bg-[#FF6633] font-normal rounded-sm px-2 py-1 text-white/95 text-sm absolute top-0 right-0'>3</span>
      </h2>
      <div className="grid grid-cols-4 w-full gap-2 ">
        <div className="col-span-3 flex flex-col gap-4 items-start">

          <div className='flex flex-row justify-start items-center'> 
            <Button  title={`Выделить все`} className={` w-fit gap-2 hover:text-white hover:bg-[#FF6633]`} icon={<TbSquareMinusFilled size={30} fill='#70C05B' />}/>
            <Button title={`Удалить выбранные`} className={` group w-fit gap-2 text-[#FF6633] items-center hover:text-red-600 `} icon={<FaTrashAlt className=' opacity-0 group-hover:opacity-100 transition delay-75 duration-150 '  size={20} fill='red' />}/>  
          </div>
          <div className='flex flex-col justify-start items-center gap-6'>

            {products.map((x, i)=>(
              <BasketCard key={i} img={x.img} name={x.name} price={x.price} discount={x.discount} count={x.count} empty={x.empty}/>
            ))}
            
           
          </div>
    


        </div>
        <div className='flex flex-col items-start justify-start pt-12 '>
            <div className='flex flex-row '> <Switch/> </div>

        </div>

      </div>
  


    </section>
  )
}

export default BasketPage