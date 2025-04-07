import React from 'react'
import Breadcrumb from '../components/ui/Breadcrumb'
import CatalogCard from '../components/cards/CatalogCard'

function CatalogsPage() {



  const links = [{
    title:"Главная",
    link:"/"
  }, {
    title:"Каталог",
    link:"/catalogs"
  }]

  const catalogs = [
    {
      title:"Молоко, сыр, яйца", 
      href: "/catalogs/milk-cheese",
      img:"/assets/ctlg/img.png",
      big: true

    },
    {
      title:"Хлеб", 
      href: "/catalogs/bread",
      img:"/assets/ctlg/img (1).png",
      big: false

    },
    {
      title:"Фрукты и овощи", 
      href: "/catalogs/veg",
      img:"/assets/ctlg/img (2).png",
      big: false

    },
    {
      title:"Замароженые продукты", 
      href: "/catalogs/frozen",
      img:"/assets/ctlg/img (3).png",
      big: false

    },

    {
      title:"Напитки", 
      href: "/catalogs/drinks",
      img:"/assets/ctlg/img (4).png",
      big: false

    },
    {
      title:"Кондитерские изделия", 
      href: "/catalogs/candis",
      img:"/assets/ctlg/img (5).png",
      big: false

    },
    {
      title:"Чай, кофе", 
      href: "/catalogs/tea",
      img:"/assets/ctlg/img (6).png",
      big: false

    },
    {
      title:"Бакалея", 
      href: "/catalogs/groceries",
      img:"/assets/ctlg/img (7).png",
      big: false

    },
    {
      title:"Здоровеое питание", 
      href: "/catalogs/pp",
      img:"/assets/ctlg/img (8).png",
      big: false

    },
    {
      title:"Зоотовары", 
      href: "/catalogs/zoo",
      img:"/assets/ctlg/img (9).png",
      big: true

    },
    {
      title:"Детское питание", 
      href: "/catalogs/child",
      img:"/assets/ctlg/img (10).png",
      big:false

    },
    {
      title:"Мясо, птица, колбаса", 
      href: "/catalogs/eat",
      img:"/assets/ctlg/img (11).png",
      big: true

    },
    {
      title:"Непродовальственные товарыы", 
      href: "/catalogs/non-groceries",
      img:"/assets/ctlg/img (12).png",
      big:false

    },

  ]

  return (
    <>

    <section className=' px-32 py-6 w-full flex gap-8 flex-col min-h-screen items-start bg-[#FBF8EC]'>
      
      <h2 className='text-5xl font-extrabold text-[#414141]'>
        Каталог

      </h2>

      <div className=' mt-6 grid grid-cols-4 gap-4'>
        {catalogs.map((x, n)=>(
          <CatalogCard title={x.title} key={n} href={x.href} img={x.img} big={x.big}/>
        ))}
      </div>


    </section>

    </>
  )
}

export default CatalogsPage