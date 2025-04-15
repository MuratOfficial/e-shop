import React from 'react'
import Button from '../components/ui/Button'
import ProductCard from '../components/cards/ProductCard'
import Filter from '../components/Filter'
import { useSelector } from 'react-redux';

function FavoritesPage() {

  const products = useSelector((state)=>state.counter.initialProducts);

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
    <section className=' px-32 py-6 w-full flex gap-8 flex-col min-h-screen items-start bg-[#FBF8EC]'>
      
      <h2 className='text-5xl font-extrabold text-[#414141]'>
      Избранное

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

    </>
  )
}

export default FavoritesPage