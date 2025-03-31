import React from 'react'
import Breadcrumb from '../components/ui/Breadcrumb'
import CatalogCard from '../components/CatalogCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
      img:"src/assets/ctlg/img.png",
      big: true

    },
    {
      title:"Хлеб", 
      href: "/catalogs/bread",
      img:"src/assets/ctlg/img (1).png",
      big: false

    },
    {
      title:"Фрукты и овощи", 
      href: "/catalogs/veg",
      img:"src/assets/ctlg/img (2).png",
      big: false

    },
    {
      title:"Замароженые продукты", 
      href: "/catalogs/frozen",
      img:"src/assets/ctlg/img (3).png",
      big: false

    },

    {
      title:"Напитки", 
      href: "/catalogs/drinks",
      img:"src/assets/ctlg/img (4).png",
      big: false

    },
    {
      title:"Кондитерские изделия", 
      href: "/catalogs/candis",
      img:"src/assets/ctlg/img (5).png",
      big: false

    },
    {
      title:"Чай, кофе", 
      href: "/catalogs/tea",
      img:"src/assets/ctlg/img (6).png",
      big: false

    },
    {
      title:"Бакалея", 
      href: "/catalogs/groceries",
      img:"src/assets/ctlg/img (7).png",
      big: false

    },
    {
      title:"Здоровеое питание", 
      href: "/catalogs/pp",
      img:"src/assets/ctlg/img (8).png",
      big: false

    },
    {
      title:"Зоотовары", 
      href: "/catalogs/zoo",
      img:"src/assets/ctlg/img (9).png",
      big: true

    },
    {
      title:"Детское питание", 
      href: "/catalogs/child",
      img:"src/assets/ctlg/img (10).png",
      big:false

    },
    {
      title:"Мясо, птица, колбаса", 
      href: "/catalogs/eat",
      img:"src/assets/ctlg/img (11).png",
      big: true

    },
    {
      title:"Непродовальственные товарыы", 
      href: "/catalogs/non-groceries",
      img:"src/assets/ctlg/img (12).png",
      big:false

    },

  ]

  return (
    <>
    <Navbar/>
    <section className=' px-32 py-8 w-full flex gap-8 flex-col min-h-screen items-start bg-[#FBF8EC]'>
      <Breadcrumb links={links}/>
      <h2 className='text-5xl font-extrabold text-[#414141]'>
        Каталог

      </h2>

      <div className=' mt-6 grid grid-cols-4 gap-4'>
        {catalogs.map((x)=>(
          <CatalogCard title={x.title} href={x.href} img={x.img} big={x.big}/>
        ))}
      </div>


    </section>
    <Footer/>

    </>
  )
}

export default CatalogsPage