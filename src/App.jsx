import { useState } from 'react'
import Button from './components/ui/Button'
import Billboard from './components/Billboard'
import { CiHeart } from "react-icons/ci";
import './App.css'
import FiveStars from './components/ui/FiveStars';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar'
import MainGridCategory from './components/MainGridCategory';
import TwoBanner from './components/TwoBanner';
import Map from './components/Map';
import BlogsGrid from './components/BlogsGrid';
import Footer from './components/Footer';



function App() {

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
      
      img:"assets\\image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product3"
    },
    {
      priceOriginal: 50.55,
      
      img:"assets\\image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product4"
    },
    {
      priceOriginal: 50.55,
      
      img:"assets\\image.png",
      price:48.58899,
      title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      id: "product5"
    },
    {
      priceOriginal: 50.55,
      
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



  return (

   
    <main className='w-full min-h-screen bg-[#FBF8EC]'>
    <Navbar/>
    
    
          <Billboard/>
              <div className='flex flex-col gap-12 py-4 px-32 '>
                  <MainGridCategory title="Акции" link="https://google.com" linkName="Все акции" products={products.slice(0, 4)}/>
                  <MainGridCategory title="Новинки" link="https://google.com" linkName="Все новинки" products={products.slice(0, 4)}/>
                  <MainGridCategory title="Покупали раньше" link="https://google.com" linkName="Все покупки" products={products.slice(0, 4)}/>
              </div>
              <TwoBanner/>
              <Map/>
              <BlogsGrid/>

          
    <Footer/>
    </main>
    
    
   

  
    

  )
}

export default App
