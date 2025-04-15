import React, { useState } from 'react'
import OrdersGrid from '../components/grids/OrdersGrid'
import { useSelector } from 'react-redux';

function OrdersPage() {

  const [allList, setAllList] = useState(false);
  
  function showAllProducts(){
          if(allList){
              setAllList(false)
          }else{
              setAllList(true)
          }
  }

  const products = useSelector((state)=>state.counter.initialProducts)


  const orders = [
    {date:"01.05.2025", price:5200, time:"11:00-15:00", status:"pending"},
    {date:"01.05.2025", price:5200, time:"11:00-15:00", status:"pending"},
    {date:"01.05.2025", price:5200, time:"11:00-15:00", status:"pending"},
    {date:"01.05.2025", price:5200, time:"11:00-15:00", status:"pending"},
    {date:"01.05.2025", price:5200, time:"11:00-15:00", status:"pending"}
  ]

  return (
    <section className=' px-32 py-6 w-full flex gap-8 flex-col min-h-screen items-start '>
      <h2 className='text-4xl font-extrabold text-[#414141]'>
      Заказы

      </h2>
      <div className='flex flex-col gap-4 justify-center items-center w-full'>
        {orders.slice(0, 4).map((x, key)=>
          (
<OrdersGrid products={products} key={key} date={x.date} price={x.price} time={x.time} status={x.status}/>
    
          )
        )}
        {allList && orders.slice(4).map((x, key)=>
          (
<OrdersGrid products={products} key={key} date={x.date} price={x.price} time={x.time} status={x.status}/>
    
          )
        )}
        

        {orders.length > 4 && !allList &&  <button onClick={()=>showAllProducts()}   className={`flex flex-row  px-3 py-2 rounded-lg items-center transition delay-100 duration-300 cursor-pointer w-fit gap-4 bg-zinc-200 hover:bg-zinc-100 `}>Показать все заказы</button>}
    </div>
  


    </section>
  )
}

export default OrdersPage