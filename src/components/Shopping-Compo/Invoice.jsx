import React from 'react'

const Invoice = ({ products }) => {

    const totalQty = products.reduce((sum, tq) => sum + tq.quantity, 0)
    const total = products.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const gst = 0.09 * total
    const sgst = 0.09 * total

    const totalTax = gst + sgst

    return (
        <div className='w-full lg:w-1/3 flex flex-col justify-between p-4 lg:p-8 gap-4'>

            <div className='flex flex-col gap-3 p-5 lg:p-8 rounded-lg shadow-lg border'>

                <h2 className='text-lg lg:text-xl font-bold'>Products Invoice</h2>

                <p><b>No of Products :</b> {products.length}</p>
                <p><b>Quantity :</b> {totalQty}</p>
                <p><b>Total Price :</b> $ {total.toFixed(2)}</p>

                <hr />

                <h3 className='text-lg lg:text-xl font-semibold'>Tax Details</h3>

                <p><b>CGST (9%) :</b> ${gst.toFixed(2)}</p>
                <p><b>SGST (9%) :</b> ${sgst.toFixed(2)}</p>

                <hr />

                <h3><b>Total Tax :</b> ${totalTax.toFixed(2)}</h3>

                <h2 className='text-lg lg:text-xl font-bold'>
                    <b>Final Amount :</b> ${(total + totalTax).toFixed(2)}
                </h2>

            </div>

            <button
                className='w-full bg-black py-3 text-white rounded-xl hover:bg-gray-800 transition'
                onClick={() => {
                    alert("Your Response Submitted..!!")
                }}
            >
               Make Payment
            </button>

        </div>
    )
}

export default Invoice