import React from 'react'
import ProductCard from '../cards/ProductCard'
import Button from '../ui/Button';
import { FiEye } from 'react-icons/fi';
import { CiCalendar } from 'react-icons/ci';

function OrdersGrid({date, time, status, price, products}) {

    const needBtn = products.length > 4 ? true : false;

  return (
    <div className='w-full pt-4 flex flex-col items-center gap-8 text-[#414141] '>
    <div className='w-full flex flex-row justify-between'>
        <div className=' flex flex-row items-center gap-6'>
            <h4 className='text-2xl font-extrabold'>
                {date} 
            </h4>

            <h4 className='text-2xl font-extrabold'>
                {time}
            </h4>
            {status === `pending` && <div className={`bg-zinc-100 px-4 py-2 rounded-md`}>
                В процессе
            </div>}
            {status === `not-received` && <div className={`bg-red-600 text-white px-4 py-2 rounded-md`}>
                Не доставили
            </div>}

            {status === `send-back` && <div className={`bg-red-600 text-white px-4 py-2 rounded-md`}>
                Возврат
            </div>}

            {status === `received` && <div className={`bg-[#70C05B] text-white px-4 py-2 rounded-md`}>
                Получен
            </div>}
            
        </div>

        <div className=' flex flex-row items-center gap-6'>
            <p className='text-3xl font-mono font-normal'>{price}</p>

            {status === "pending" ? <Button title={`Когда доставит`} icon={<CiCalendar size={20} />} className={`bg-[#70C05B] hover:bg-[#FF6633] gap-3 text-sm text-white w-fit`}/> : <Button />}
            

        </div>
            
            
     </div>
    <div className='grid grid-cols-4 gap-8'>
    {
                products.slice(0, 4).map((x, key)=>(<ProductCard key={key} id={x.id} price={x.price} priceOriginal={x.priceOriginal} discount={x.discount} title={x.title} img={x.img}/>))
    }
    </div>
    {needBtn && <Button title={`Просмотреть заказ`} icon={<FiEye size={20} />} className={` w-fit gap-4 bg-zinc-200 hover:bg-zinc-100 `}/>}
    
    

</div>
  )
}

export default OrdersGrid