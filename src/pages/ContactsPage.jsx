import React from 'react'
import Map from '../components/Map'

function ContactsPage() {
  return (
    <div className='flex flex-col w-full '>


      <Map withCalls={true}/>
    </div>
  )
}

export default ContactsPage