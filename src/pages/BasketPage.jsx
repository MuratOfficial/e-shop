import React, { useState } from 'react'
import OrdersGrid from '../components/grids/OrdersGrid'
import Button from '../components/ui/Button';
import { TbSquareMinusFilled } from 'react-icons/tb';
import { FaTrashAlt } from 'react-icons/fa';
import BasketCard from '../components/cards/BasketCard';

function BasketPage() {

  const [selectAll, setSelectAll] = useState(false);
  


  const products = [
    {
      priceOriginal: 50.55,
      discount:50,
      img:"/assets/image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product1",
      count:5,
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"/assets/image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product2",
      count:5,
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"/assets/image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product3",
      count:2,
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"/assets/image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product4",
      count:1,
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"/assets/image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product5",
      count:2,
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"/assets/image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product6",
      count:55,
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"/assets/image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product7",
      count:50,
    },

   
  ]

  const orders = [
    {date:"01.05.2025", price:5200, time:"11:00-15:00", status:"pending"},
    {date:"01.05.2025", price:5200, time:"11:00-15:00", status:"pending"},
    {date:"01.05.2025", price:5200, time:"11:00-15:00", status:"pending"},
    {date:"01.05.2025", price:5200, time:"11:00-15:00", status:"pending"},
    {date:"01.05.2025", price:5200, time:"11:00-15:00", status:"pending"}
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
          <div className='flex flex-col justify-start items-center'>
            <BasketCard/>
          </div>
    


        </div>
        <div></div>

      </div>
  


    </section>
  )
}

export default BasketPage