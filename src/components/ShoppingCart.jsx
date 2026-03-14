import React, { useState } from 'react'
import Products from './Shopping-Compo/Products'
import Invoice from './Shopping-Compo/Invoice'

const ShoppingCart = ({ products, setProducts }) => {

    const [visibleProducts, setvisibleProducts] = useState([])

    return (
        <div className='flex flex-col lg:flex-row
                        w-full max-w-7xl 
                        h-auto lg:h-[85vh] 
                        rounded-lg bg-white 
                        gap-3 mx-auto'>

            <Products products={products} setvisibleProducts={setvisibleProducts} />

            <Invoice products={visibleProducts} />

        </div>
    )
}

export default ShoppingCart