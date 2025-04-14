import React from 'react'

function AboutPage() {
  return (
    <section className='px-32 py-12 w-full flex relative overflow-x-hidden gap-32 flex-col min-h-screen items-start  ' >
      <div className='  w-full flex flex-col bg-no-repeat items-start gap-4 bg-contain bg-center pb-24 pt-12' style={{backgroundImage:`url(/assets/bg-about.svg)`}}>
      <h2 className='relative pr-8 text-7xl font-extrabold text-[#414141]' >
      О компании
      </h2>
      <p className=' w-2/5 text-[#FF6633] font-semibold text-2xl text-left'>Мы непрерывно развиваемся и работаем над совершенствованием сервиса, заботимся о наших клиентах, стремимся к лучшему будущему.</p>
      
      </div>
      
      <div className='flex flex-row gap-12 mt-8 text-zinc-700 items-center justify-center w-fit'>
        <div className='flex flex-row gap-2 items-start justify-start'>
          <img src='/assets/check.svg' className='w-8 '/>
          <div className='flex flex-col gap-2 text-left justify-start items-start'>
            <p className='text-lg font-normal'>Мы занимаемся розничной торговлей</p>
            <p className='text-2xl font-extrabold'>Более 20 лет.</p>
          </div>
        </div>
        <div className='flex flex-row gap-2 items-start justify-start w-fit'>
          <img src='/assets/check.svg' className='w-8 '/>
          <div className='flex flex-col gap-2 text-left justify-start items-start'>
            <p className='text-lg font-normal'>Основная миссия компании</p>
            <p className='text-2xl font-extrabold'>Максимальное качество товаров и услуг по доступной цене.</p>
          </div>
        </div>
        <div className='flex flex-row gap-2 items-start justify-start w-fit'>
          <img src='/assets/check.svg' className='w-8 '/>
          <div className='flex flex-col gap-2 text-left justify-start items-start'>
            <p className='text-lg font-normal'>Отличительная черта нашей сети</p>
            <p className='text-2xl font-extrabold'>Здоровая и полезная продукция местного производства внаших магазинах.</p>
          </div>
        </div>
        
        </div>  


        <div className='flex flex-row justify-center gap-8 items-center w-full'>
          <img src="/assets/logo2.svg" alt="logo" className='w-20' />
          <div className='px-8 py-6 rounded-lg bg-green-100 font-bold text-xl text-green-600'>
              <p>Спасибо за то, что вы с нами. Северяночка, везет всегда!</p>
          </div>
        </div>    



    </section>
  )
}

export default AboutPage