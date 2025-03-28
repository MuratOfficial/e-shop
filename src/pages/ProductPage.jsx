import React from 'react';
import { useParams } from "react-router";

function ProductPage() {

  let {productId} = useParams();

  return (
    <div>ProductPage: {productId}</div>
  )
}

export default ProductPage