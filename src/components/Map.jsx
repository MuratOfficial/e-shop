import React from 'react'
import Button from './ui/Button'
import AddressCard from './cards/AddressCard'

function Map({withCalls}) {
  return (
  <div className='px-32 flex flex-col gap-8 w-full mt-12 text-[#414141] pb-8'>
    <h3 className='font-bold text-4xl w-full text-left'>Наши магазины</h3>
    <div className='w-full flex flex-col gap-8'>
      <div className='w-full flex flex-row gap-4 justify-start items-center'>
        <Button title="п.Щельяюр" width="md" className="  bg-[#F3F2F1] focus:bg-[#70C05B] hover:bg-[#70C05B] hover:text-white focus:text-white  "/>
        <Button title="д.Вертеп " width="md" className="  bg-[#F3F2F1] focus:bg-[#70C05B] hover:bg-[#70C05B] hover:text-white focus:text-white  "/>
        <Button title="с.Краснобор" width="md" className="  bg-[#F3F2F1] focus:bg-[#70C05B] hover:bg-[#70C05B] hover:text-white focus:text-white  "/>
        <Button title="п.Диюр" width="md" className="  bg-[#F3F2F1] focus:bg-[#70C05B] hover:bg-[#70C05B] hover:text-white focus:text-white  "/>

      </div>
      {withCalls && <div className='w-full flex flex-row justify-start gap-24'>
          <AddressCard phone={`+7 904 271 35 90`} title={`Восход`} address={`ул. Дорожная 10`}/>
          <AddressCard phone={`+7 904 271 35 90`} title={`Восход`} address={`ул. Дорожная 10`}/>

          <AddressCard phone={`+7 904 271 35 90`} title={`Восход`} address={`ул. Дорожная 10`}/>

          <AddressCard phone={`+7 904 271 35 90`} title={`Восход`} address={`ул. Дорожная 10`}/>

        </div>}
      
      <img src='assets/map.png' className='w-full'/>

       


    </div>
</div>
  )
}

export default Map