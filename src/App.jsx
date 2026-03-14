import React, { useEffect, useState } from 'react'
import ShoppingCart from './components/ShoppingCart'
import axios from 'axios'
const App = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {

        const updated = data.map((item) => ({
          ...item,
          quantity: 1
        }));

        setProducts(updated);
      });

  }, []);

console.log(products)

  return (
    <div className="flex items-center justify-center h-auto lg:h-screen bg-black">
      <ShoppingCart products={products} setProducts={setProducts}/>
    </div>
  )
}

export default App