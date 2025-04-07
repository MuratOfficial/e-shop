import React from 'react'
import OrdersGrid from '../components/grids/OrdersGrid'

function OrdersPage() {

  const products = [
    {
      priceOriginal: 50.55,
      discount:50,
      img:"/assets/image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product1"
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"/assets/image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product2"
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"/assets/image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product3"
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"/assets/image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product4"
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"/assets/image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product5"
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"/assets/image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product6"
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"/assets/image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product7"
    },

   
  ]

  return (
    <section className=' px-32 py-6 w-full flex gap-8 flex-col min-h-screen items-start '>
      <h2 className='text-4xl font-extrabold text-[#414141]'>
      Заказы

      </h2>
      <div className='flex flex-col gap-4 justify-center items-center w-full'>
      <OrdersGrid products={products} date={`01.05.2025`} price={`5500 ₸`} time={`11:00-15:00`} status={`received`}/>

      </div>
  


    </section>
  )
}

export default OrdersPage