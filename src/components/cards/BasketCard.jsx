import React, { useState } from 'react'
import { IoCheckbox } from 'react-icons/io5'
import Price from '../helper/Price'
import { RxBox } from 'react-icons/rx';

function BasketCard({img='/assets/image.png', name="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»", price=44.50, discount=10, count=0,empty}) {
    
    const [countTo, setCountTo] = useState(count);

    function toAdd(){
            setCountTo(countTo + 1);
            setAllSumm(countTo * price);
    }

    const [allSumm, setAllSumm] = useState(price * count);

    function toMinus(){
        if(countTo <=0){
            setCountTo(0);
        }else{
            setCountTo(countTo - 1);
        }
        setAllSumm(countTo * price);
    }

    const [checked, setChecked] = useState(false)

   
    return (
    <div className={`relative grid grid-cols-12 w-full items-center bg-white/95  rounded-lg transition delay-75 duration-200 hover:shadow-lg ${empty && " hover:shadow-none"} `}>
       {empty && <div className='object-cover bg-white/50 grayscale-100 absolute w-full h-full'></div>}  
        
        <div className=' relative aspect-square  rounded-md  '>

            <img src={img} className='   object-contain h-full w-full pointer-events-none' />
            {(checked && !empty) ? <IoCheckbox onClick={()=>setChecked(false)} size={26} fill='#70C05B' className=' absolute top-0 left-0 cursor-pointer' /> :(!checked && !empty)?  <RxBox size={25} onClick={()=>setChecked(true)} className=' text-[#70C05B] cursor-pointer  absolute top-0 left-0'  />:<RxBox size={25}  className=' text-gray-300/80  absolute top-0 left-0'  />}
            
            

        </div>
        <div className='flex flex-col gap-2 justify-center items-start col-span-7 px-2'>
                <p>{name}</p>
            <div className=' flex flex-row gap-2 justify-start items-center'>
                <div className='flex flex-col gap-1 items-start justify-center'>
                    <div className="flex flex-row gap-2 items-center justify-start text-sm">
            <p className=' font-bold'>
                    {discount ? (price * (100-discount)/100) :  price} ₸
                </p>
                {discount && <p> {price} ₸</p>}
                
            <span>за шт.</span>
        </div>

    </div>
    {discount && <div className='w-fit h-fit px-2 py-1 bg-[#FF6633] text-white/80 rounded-md'>
        -{discount}%
    </div> }
    

</div>

        </div>
        {!empty &&  <div className='col-span-2 flex flex-col justify-center items-center'>

<div className='flex flex-row bg-[#70C05B] px-4 py-1 rounded-md text-white/95 gap-6 justify-center items-center'>
    <button onClick={()=>toMinus()} className='text-2xl transition delay-75 duration-150 hover:text-[#FF6633] cursor-pointer'>-</button>
    <p>{countTo}</p>
    <button onClick={()=>toAdd()} className='text-2xl transition delay-75 duration-150 hover:text-[#FF6633] cursor-pointer'>+</button>

</div>
</div>}
{!empty ? <div className='col-span-2 flex flex-col items-end h-full py-3 justify-start px-4'>
            <Price className={`font-extrabold `} price={discount ? (allSumm * (100-discount)/100) :  allSumm}/>

            
            {discount && <Price className={` line-through text-zinc-400 text-sm`} price={allSumm}/>}  
        </div>:<p className='col-span-4 flex flex-row justify-end items-start h-full p-2'>Нет в наличии</p>}

        
        

    </div>
  )
}

export default BasketCard