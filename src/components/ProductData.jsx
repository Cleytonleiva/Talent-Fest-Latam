import React from 'react'
import { AiOutlineShareAlt } from "react-icons/ai";

export const ProductData = ({product}) => {
  return (
    <div className='w-[450px] ml-[5%]'>
        <p className='text-xs ml-[55%]'>Código del producto: {product.productId}</p>
        <p className='text-sm'>{product.brand}</p>
        <p className='text-xl inline-block mr-[20%]' >{product.name}</p> <AiOutlineShareAlt style={{color:'gray', display:'inline'}} />

    </div>
  )
}