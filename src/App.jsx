import { useState } from 'react'
import Button from './components/ui/Button'
import Billboard from './components/Billboard'
import { CiHeart } from "react-icons/ci";
import './App.css'
import FiveStars from './components/ui/FiveStars';
import ProductCard from './components/ProductCard';

const products = [
  {
    priceOriginal: 50.55,
    discount:50,
    img:"src\\assets\\image.png",
    price:48.58899,
    title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
  },
  {
    priceOriginal: 50.55,
    discount:50,
    img:"src\\assets\\image.png",
    price:48.58899,
    title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
  },
  {
    priceOriginal: 50.55,
    discount:50,
    img:"src\\assets\\image.png",
    price:48.58899,
    title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
  },
  {
    priceOriginal: 50.55,
    discount:50,
    img:"src\\assets\\image.png",
    price:48.58899,
    title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
  },
  {
    priceOriginal: 50.55,
    discount:50,
    img:"src\\assets\\image.png",
    price:48.58899,
    title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
  },
  {
    priceOriginal: 50.55,
    
    img:"src\\assets\\image.png",
    price:48.58899,
    title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
  }
]

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
   
    {/* <Button  />
    <CiHeart size={30} className=' hover:fill-[#FF6633] cursor-pointer' />
    <FiveStars/> */}
    <div className='grid grid-cols-5 gap-4'>
      {
        products.map(x=>(<ProductCard price={x.price} priceOriginal={x.priceOriginal} discount={x.discount} title={x.title} img={x.img}/>
          
        ))
      }
    </div>


  
    
    </>
  )
}

export default App
