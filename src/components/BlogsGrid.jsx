import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import BlogCard from './BlogCard'

function BlogsGrid() {

    const blogs = [
        {
            date:"05.03.2021",
            title:"Режим использования масок и перчаток на территории магазинов",
            descShort: `Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.`,
            imgSrc: "src\\assets\\blogs\\blog1.png"
        },
        {
            date:"05.03.2021",
            title:"Весеннее настроение для каждой",
            descShort: `8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.`,
            imgSrc: "src\\assets\\blogs\\blog2.png"
        },
        {
            date:"05.03.2021",
            title:"ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
            descShort: `Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!`,
            imgSrc: "src\\assets\\blogs\\blog3.png"
        },

    ]

  return (
    <div className='px-32 flex flex-col gap-8 w-full mt-12 text-[#414141] pb-12'>
    

    <div className='w-full flex flex-row justify-between'>
            <h3 className='font-bold text-4xl w-full text-left'>Статьи</h3>
                    
                    <a href="#" className='flex flex-row gap-4 mr-4 justify-end items-center hover:text-[#70C05B] transition-all delay-100 duration-300 w-full'>Все статьи<FaChevronRight size={14}/> </a>
            </div>
    <div className='w-full grid grid-cols-3 gap-8'>
        {
            blogs.map((x, index)=>(
                <BlogCard key={index} imgSrc={x.imgSrc} title={x.title} descShort={x.descShort} date={x.date} />
            ))
        }
      

       


    </div>
</div>
  )
}

export default BlogsGrid