import React from 'react'

function Price({price, className}) {
  return (
    <span className={className}>{price} ₸</span>
  )
}

export default Price