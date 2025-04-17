import React, { useState } from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

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
      {(toRate>=0.5 && toRate < 1) ? <FaStarHalfAlt  className={`${(toRate>=0.5 && toRate < 1)  ? `fill-[#FF6633] visible`:`fill-[#BFBFBF] hidden `}  hover:fill-[#FF6633] cursor-pointer`}/>
         : <FaStar onClick={()=>handleRate(1)}  className={` ${toRate>=1  ? `fill-[#FF6633]`:`fill-[#BFBFBF]`}  hover:fill-[#FF6633] cursor-pointer`} />}
         
        {(toRate>=1.5 && toRate < 2) ? <FaStarHalfAlt  className={`${(toRate>=1.5 && toRate < 2)  ? `fill-[#FF6633] visible`:`fill-[#BFBFBF] hidden `}  hover:fill-[#FF6633] cursor-pointer`}/>
         :<FaStar onClick={()=>handleRate(2)}  className={` ${toRate>=2  ? `fill-[#FF6633]`:`fill-[#BFBFBF]`}  hover:fill-[#FF6633] cursor-pointer`} />}
        
        {(toRate>=2.5 && toRate < 3) ? <FaStarHalfAlt  className={`${(toRate>=2.5 && toRate < 3)  ? `fill-[#FF6633] visible`:`fill-[#BFBFBF] hidden `}  hover:fill-[#FF6633] cursor-pointer`}/>
         :<FaStar onClick={()=>handleRate(3)}  className={` ${toRate>=3  ? `fill-[#FF6633]`:`fill-[#BFBFBF]`}  hover:fill-[#FF6633] cursor-pointer`} />}
        
        {(toRate>=3.5 && toRate < 4) ? <FaStarHalfAlt  className={`${(toRate>=3.5 && toRate < 4)  ? `fill-[#FF6633] visible`:`fill-[#BFBFBF] hidden `}  hover:fill-[#FF6633] cursor-pointer`}/>
         :<FaStar onClick={()=>handleRate(4)}  className={` ${toRate>=4  ? `fill-[#FF6633]`:`fill-[#BFBFBF]`}  hover:fill-[#FF6633] cursor-pointer`} />}
        
        {(toRate>=4.5 && toRate < 5) ? <FaStarHalfAlt  className={`${(toRate>=4.5 && toRate < 5)  ? `fill-[#FF6633] visible`:`fill-[#BFBFBF] hidden `}  hover:fill-[#FF6633] cursor-pointer`}/>
         :<FaStar onClick={()=>handleRate(5)}  className={` ${toRate>=5  ? `fill-[#FF6633]`:`fill-[#BFBFBF]`}  hover:fill-[#FF6633] cursor-pointer`} />}

        </div>
  )
}

export default FiveStars