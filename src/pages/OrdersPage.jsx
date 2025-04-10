import React, { useState } from 'react'
import OrdersGrid from '../components/grids/OrdersGrid'

function OrdersPage() {

  const [allList, setAllList] = useState(false);
  
  function showAllProducts(){
          if(allList){
              setAllList(false)
          }else{
              setAllList(true)
          }
  }

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