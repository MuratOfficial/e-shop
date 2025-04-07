import React from 'react'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <main className='w-full min-h-screen bg-[#FBF8EC]'>
      <Navbar/>
      <Outlet/>
      

      <Footer/>
      </main>
  )
}

export default MainLayout