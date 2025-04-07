import React from 'react'
import Breadcrumb from '../ui/Breadcrumb'
import { Outlet, useParams } from 'react-router'

function BreadcrumbLayout() {

    const links = [{
        title:"Главная",
        link:"/"
      }, {
        title:"Каталог",
        link:"/catalogs"
      }]

      const params = useParams();

      



  return (
    <>
    <div className={'px-32 pt-8 ' + `${params.productId ? "bg-[#F3F2F1]" : " "} `}><Breadcrumb links={links} /></div>
    
    <Outlet/>
    </>
  )
}

export default BreadcrumbLayout