import React, { useState } from 'react'
import data from "../components/bookdata.json"
const Products = () => {
    const[product,setProduct] = useState(data)
    console.log(product.books)
  return (
    <div className='allbooks'>{product.books.map((el) => (
            <div className='border'>
            <div className='product'>
                <img className='imagesize' src={el.image}></img>
                <h1>{el.title}</h1>
                <p>{el.author}</p>
                <h5 className='price'>{el.price}</h5>
                <button className='btn'>Buy</button>
            </div>

            </div>
        
        
    )) }</div>
    
  )
}

export default Products