import React from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';
import FiveStars from '../components/ui/FiveStars';
import Button from '../components/ui/Button'
import { CiCircleInfo, CiHeart } from 'react-icons/ci';
import { FiShare2 } from 'react-icons/fi';
import { GiShoppingCart } from 'react-icons/gi';
import { BsBellSlash } from 'react-icons/bs';
import { BiSolidCircleHalf } from 'react-icons/bi';
import MainGridCategory from '../components/grids/MainGridCategory';
import Testimonials from '../components/testimonials';

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
    
    img:"/assets/image.png",
    price:48.58899,
    title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    id: "product3"
  },
  {
    priceOriginal: 50.55,
    
    img:"/assets/image.png",
    price:48.58899,
    title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    id: "product4"
  },
  {
    priceOriginal: 50.55,
    
    img:"/assets/image.png",
    price:48.58899,
    title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    id: "product5"
  },
  {
    priceOriginal: 50.55,
    
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
    
    <section className=' px-32 py-6 w-full flex gap-8 flex-col min-h-screen items-start bg-[#F3F2F1]'>
      
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
        <div className='col-span-7 bg-white rounded-lg w-full relative'>
          <div className=' absolute bg-[#FF6633] top-4 right-4 rounded-md py-2 px-4 text-white'>
            <p>- 50%</p>
          </div>
        </div>
      </div>
      <div className=' w-full grid grid-cols-6 gap-6'>
        <div className="flex w-full flex-col justify-start gap-4  col-span-4">
          <div className='flex flex-row justify-between  w-full items-start '>
              <div className=' flex flex-col gap-1 items-start pt-4'>
              <p className=' text-[#606060] text-xl' >1000,20 ₸</p>
              <p className=' text-xs text-[#BFBFBF]'>Обычная цена</p>
            </div>
              <div className=' flex flex-col gap-2 items-end'>
              <p className='  text-3xl font-extrabold' >1800,20 ₸</p>
              <div className=' text-xs text-[#BFBFBF] flex flex-row items-center justify-end gap-2'><span>С картой Северяночки</span><CiCircleInfo className='text-[#414141]' size={24}/> </div>

              </div>
          </div>
          <Button title="В корзину" icon={<GiShoppingCart size={36} className=' absolute inset-0 top-2 left-3 '/>} className={`w-full flex flex-row text-2xl items-center hover:bg-[#FF6633] py-3 hover:border-[#FF6633] hover:text-white bg-transparent border-2  border-green-400 text-green-400`}/>
          <div className='flex flex-col gap-4 justify-center items-center'>
            <div className=' flex flex-row items-center justify-center text-green-500 gap-4'>
            <BiSolidCircleHalf size={18} className=' rotate-90' />
              <p className='  text-xs '>Вы получаете <span className=' font-bold'>10 бонусов</span> </p>
            </div>

            <Button title={`Уведомить о снижении цены `} icon={<BsBellSlash size={18} />}  className=' hover:bg-[#606060] hover:text-white text-xs w-full flex flex-row items-center justify-center text-[#606060] gap-4'/>
            <div className='grid text-left grid-cols-2 gap-8 justify-center items-center'>
              <p >Бренд</p>
              <p className=' font-bold'>ПРОСТОКВАШИНО</p>
              <p>Страна производителя</p>
              <p className=' font-bold'>Россия</p>
              <p>Упаковка</p>
              <p className=' font-bold'>180 г</p>

            </div>
     

          </div>
        </div>
        
    <div className='col-span-2 flex flex-col gap-4 w-full h-full'>
      <p className='text-left text-[#414141] text-xs'>Похожие</p>
      <div className=' w-full grid grid-rows-4 gap-4 h-full'>
          <div className="bg-white rounded-md shadow-md"></div>
          <div className="bg-white rounded-md shadow-md"></div>
          <div className="bg-white rounded-md shadow-md"></div>
          <div className="bg-white rounded-md shadow-md"></div>

        </div>

    </div>
        


      </div>
    </div>

    <MainGridCategory title="С этим товаром покупают"  products={products.slice(0, 4)}/>

    
    <Testimonials/>

    <MainGridCategory title="Акции" link="https://google.com" linkName="Все акции" products={products.slice(0, 4)}/>


    </section>


  )
}

export default ProductPage