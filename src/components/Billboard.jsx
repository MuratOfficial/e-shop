import React from 'react'

function Billboard() {

  const billboards = [
    "assets\\slider.png"

  ]
  return (
    <section className='w-full overflow-hidden'>
      {billboards.map((x, k)=>(
        <img src={x} key={k} className=' object-cover w-full '/>
      ))}

    </section>
  )
}

export default Billboard