import React from 'react'

function Price({price, className}) {
  return (
    <p className={className}>{price} ₸</p>
  )
}

export default Price