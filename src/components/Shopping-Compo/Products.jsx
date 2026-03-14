import React, { useEffect, useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import Pagination from '../Pagination';

const Products = ({ products, setvisibleProducts }) => {

    const [page, setPage] = useState(0);
    const itemsPerPage = 5;
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;

    const visibleProduct = products.slice(start, end);

    useEffect(() => {
        setvisibleProducts(visibleProduct);
    }, [page, products])

    return (
        <div className='w-full lg:w-2/3 flex flex-col gap-3 lg:p-8'>

            <img
                src="logo-cartInvoice.png"
                alt="CartInvoice Logo"
                className="w-full max-w-[300px] h-auto object-contain"
            />
            <div className='flex flex-col gap-5 overflow-visible lg:overflow-auto border-b'>

                {visibleProduct.map((product, index) => {
                    return (

                        <div
                            key={index}
                            className='flex flex-col sm:flex-row 
                                       gap-4 sm:gap-6 
                                       items-center 
                                       justify-between 
                                       border-b pb-5 px-2 sm:px-6'
                        >

                            <img
                                src={product.image}
                                alt="Product"
                                className='h-[90px] w-[90px] lg:h-[120px] lg:w-[110px] rounded-md'
                            />

                            <h1 className='text-base lg:text-lg text-center sm:text-left flex-1'>
                                {product.title}
                            </h1>

                            <button className='flex border rounded-full px-3 py-1 gap-4 items-center justify-center'>

                                <FaMinus
                                    onClick={() => {
                                        const updatedProducts = [...products];

                                        if (updatedProducts[index].quantity > 1) {
                                            updatedProducts[index].quantity -= 1;
                                        }

                                        setProducts(updatedProducts);
                                    }}
                                />

                                {product.quantity}

                                <FaPlus
                                    onClick={() => {
                                        const updatedProducts = [...products];
                                        updatedProducts[index].quantity += 1;
                                        setProducts(updatedProducts);
                                    }}
                                />

                            </button>

                            <p className='text-lg lg:text-xl font-semibold'>
                                ${product.price}
                            </p>

                        </div>
                    )
                })}

            </div>
            <div>
                <Pagination
                    page={page}
                    setPage={setPage}
                    totalItems={products.length}
                    itemsPerPage={itemsPerPage}
                />
            </div>

        </div>
    )
}

export default Products