import React, { useState } from 'react'
import OrdersGrid from '../components/grids/OrdersGrid'
import Button from '../components/ui/Button';
import { TbSquareMinusFilled } from 'react-icons/tb';
import { FaTrashAlt } from 'react-icons/fa';
import BasketCard from '../components/cards/BasketCard';
import Switch from '../components/ui/Switch'
import Price from '../components/helper/Price';
import { BiSolidCircleHalf } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

function BasketPage() {

  const basketCount = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  const products = [
    {img:'/assets/image.png', name:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»", price:44.50, discount:10, count:2,empty:false},
    {img:'/assets/image.png', name:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»", price:44.50, discount:10, count:2,empty:true},
    {img:'/assets/image.png', name:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»", price:44.50, discount:10, count:2,empty:true},
    {img:'/assets/image.png', name:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»", price:44.50, discount:10, count:2,empty:false},
    {img:'/assets/image.png', name:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»", price:44.50, discount:10, count:2,empty:false}
  ]

  const allSumm = products.reduce((acc, curr)=>acc +(curr.price*curr.count), 0);
  const discountSum = products.reduce((acc, curr)=> 
    acc + ((curr.price *curr.count * curr.discount)/100)
  , 0);
  const summ = allSumm - discountSum;


  const count = products?.length ?? 0;

  return (
    <section className=' px-32 py-6 w-full flex gap-8 flex-col min-h-screen items-start '>
      <h2 className='relative pr-8 text-7xl font-extrabold text-[#414141]'>
      Корзина
      <span className='bg-[#FF6633] font-normal rounded-sm px-2 py-1 text-white/95 text-sm absolute top-0 right-0'>{basketCount}</span>
      </h2>
      <div className="grid grid-cols-4 w-full gap-16 ">
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
        <div className='flex flex-col items-start gap-6 justify-start pt-12 '>
            <div className='flex flex-row items-center gap-2 text-lg '> <Switch/> Списать <Price price={200}/> </div>
            <p className='w-full flex flex-row items-center gap-2 text-zinc-500'>На карте накоплено <Price price={200} /></p>
            <hr className=' text-[#F3F2F1] w-full'/>
            <div className=' flex flex-row w-full justify-between text-zinc-500'>
              <div className=' flex flex-col items-start gap-3'>
                <p>{count} товар{count > 4 ? "ов" :"а"}</p>
                <p>Скидка</p>
              </div>
              <div className=' flex flex-col items-start gap-3'>
                <Price price={allSumm ??0} className={`font-semibold text-zinc-800`} />
                <span className='text-[#FF6633] flex flex-row items-center font-bold'>-<Price price={discountSum??0} /></span>
              </div>

            </div>
            <hr className=' text-[#F3F2F1] w-full'/>
            <div className='flex flex-col w-full'>
                <div className='flex flex-row w-full justify-between text-zinc-500'>
                  <p>Итог</p>
                  <Price className={`font-extrabold text-2xl text-zinc-800`} price={summ}/>
              
                </div>
                <div className=' flex flex-row items-center justify-center text-green-500 gap-4'>
                            <BiSolidCircleHalf size={18} className=' rotate-90' />
                              <p className='  text-xs '>Вы получаете <span className=' font-bold'>100 бонусов</span> </p>
                </div>
            </div>
            <Button className={`bg-[#FF6633] text-lg text-white/95 w-full hover:bg-green-500`} title={"Оформить заказ"}/>
        </div>

      </div>
  


    </section>
  )
}

export default BasketPage