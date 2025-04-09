import React from 'react'

export const Array = () => {
    const products = [{id:1,name:"Tv",price:"3000"},{id:2,name:"laptop",price:"4000"},{id:3,name:"Freeze",price:"5000"},{id:4,name:"Desktop",price:"6000"}]
  return (
    <div>
    <hr/>
    <h1>task Seventh</h1>
    <h2>Products list</h2>
    {
        products.map((product)=>(
            <div key={product.id}>
            <h3>Product Name: {product.name}</h3>
            <h4>Product Price: {product.price}</h4>
            </div>
        ))
    }
    </div>
  )
}
