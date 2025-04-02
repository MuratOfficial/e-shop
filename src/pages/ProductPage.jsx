import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/ui/Breadcrumb';
import FiveStars from '../components/ui/FiveStars';
import Button from '../components/ui/Button'
import { CiHeart } from 'react-icons/ci';
import { FiShare2 } from 'react-icons/fi';

function ProductPage() {

  // let {productId} = useParams();

  const links = [{
    title:"Главная",
    link:"/"
  }, {
    title:"Каталог",
    link:"/catalogs"
  },
  {
    title:"Молоко, сыр, яйцо",
    link:"/catalogs/milk-cheese"
  },
  {
    title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    link:"/products/product1"
  },
]

  return (
    
    <>
    <Navbar/>
    <section className=' px-32 py-8 w-full flex gap-8 flex-col min-h-screen items-start bg-[#F3F2F1]'>
      <Breadcrumb links={links}/>
      <h2 className='text-3xl font-extrabold text-[#414141]'>
      Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»

      </h2>
      <div className='text-[#414141] flex flex-row gap-6 items-center justify-start'>
        <p>арт. 371431</p>
        <div className='flex flex-row items-center justify-center gap-2'><FiveStars/>
        <a className=' underline'>3 отзыва</a></div>
        <Button title="Поделиться" width="md" className="text-sm gap-4 hover:text-green-500 transition delay-100 duration-300" icon={<FiShare2 size={30}/>} />
        <Button title="В Избранное" width="md" className="text-sm gap-4 hover:text-green-500 transition delay-100 duration-300" icon={<CiHeart size={30}/>} />

      </div>
    <div className='grid grid-cols-2 gap-8 w-full'>
      <div className=' grid grid-cols-8 gap-4 w-full'>
        <div className=' flex flex-col gap-4'>
          <div className=' bg-white rounded-md h-20 w-full'></div>
          <div className=' bg-white rounded-md h-20 w-full'></div>
          <div className=' bg-white rounded-md h-20 w-full'></div>
          <div className=' bg-white rounded-md h-20 w-full'></div>
          <div className=' bg-white rounded-md h-20 w-full'></div>
        </div>
        <div className='col-span-7 bg-white rounded-lg'></div>
      </div>
      <div></div>
    </div>
   

  


    </section>
    <Footer/>

    </>

  )
}

export default ProductPage