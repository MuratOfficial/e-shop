import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breadcrumb from '../components/ui/Breadcrumb'
import Button from '../components/ui/Button'
import ProductCard from '../components/ProductCard'
import Filter from '../components/Filter'

function CatalogPage() {

  const links = [{
    title:"Главная",
    link:"/"
  }, {
    title:"Каталог",
    link:"/catalogs"
  }]

  
  const products = [
    {
      priceOriginal: 50.55,
      discount:50,
      img:"assets\\image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product1"
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"assets\\image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product2"
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"assets\\image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product3"
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"assets\\image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product4"
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"assets\\image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product5"
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"assets\\image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product6"
    },
    {
      priceOriginal: 50.55,
      discount:50,
      img:"assets\\image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product7"
    },

   
  ]

  const types = [
    {
      title:"Товары нашего производство",
      id:"productOwn"
    
    },
    {
      title:"Полезное питание",
      id:"pp"
    },
    {
      title:"Без ГМО",
      id:"notGMO"
    }
  ]

  return (
    <>
    <Navbar/>
    <section className=' px-32 py-8 w-full flex gap-8 flex-col min-h-screen items-start bg-[#FBF8EC]'>
      <Breadcrumb links={links}/>
      <h2 className='text-5xl font-extrabold text-[#414141]'>
      Молоко, сыр, яйца

      </h2>
      <div className='w-full flex flex-row gap-4 justify-start items-center'>
        {
          types.map((a, n)=>
          (
          <Button title={a.title} key={n}  className="w-fit text-sm  bg-[#F3F2F1] focus:bg-[#70C05B] hover:bg-[#70C05B] hover:text-white focus:text-white  "/>
        
          ))
        }
        
      </div>
      <div className='grid grid-cols-4 w-full gap-10'>
        <Filter/>
        <div  className='flex flex-col gap-6 w-full col-span-3'>
         <div>

         </div>
         <div className='grid grid-cols-3 w-full gap-6'>
         {
                    products.map((x, key)=>(<ProductCard key={key} id={x.id} price={x.price} priceOriginal={x.priceOriginal} discount={x.discount} title={x.title} img={x.img}/>))
        }
         </div>
         <div></div>
         <div></div>
        </div>
      </div>

  


    </section>
    <Footer/>

    </>
  )
}

export default CatalogPage