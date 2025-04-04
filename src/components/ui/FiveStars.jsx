import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

function FiveStars({rate, disabled}) {

  const [toRate, setToRate] = useState(rate);

  function handleRate(num){

    if(disabled){
      return
    }else{
      if(num === toRate){
        setToRate(0)
      }else{
        setToRate(num)
      }
    }
    
  }


  

  return (
    <div className=' flex flex-row gap-1.5  items-center w-fit'>
        <FaStar onClick={()=>handleRate(1)}  className={` ${toRate>=1  ? `fill-[#FF6633]`:`fill-[#BFBFBF]`}  hover:fill-[#FF6633] cursor-pointer`} />
        <FaStar onClick={()=>handleRate(2)}  className={` ${toRate>=2  ? `fill-[#FF6633]`:`fill-[#BFBFBF]`}  hover:fill-[#FF6633] cursor-pointer`} />
        <FaStar onClick={()=>handleRate(3)}  className={` ${toRate>=3  ? `fill-[#FF6633]`:`fill-[#BFBFBF]`}  hover:fill-[#FF6633] cursor-pointer`} />
        <FaStar onClick={()=>handleRate(4)}  className={` ${toRate>=4  ? `fill-[#FF6633]`:`fill-[#BFBFBF]`}  hover:fill-[#FF6633] cursor-pointer`} />
        <FaStar onClick={()=>handleRate(5)}  className={` ${toRate>=5  ? `fill-[#FF6633]`:`fill-[#BFBFBF]`}  hover:fill-[#FF6633] cursor-pointer`} />
    </div>
  )
}

export default FiveStars