import React from 'react'
import { Link } from 'react-router-dom'

export default function DeleteOrder() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl font-semibold my-7'><b>Delete Order</b></h1>

        {/* Display order details */}
      <div className='border border-black rounded-lg p-3 mb-4'>
        <p>Order ID: </p>
        <p>Customer ID: </p>
        <p>Purchase Amount: </p>
        <p>Delivery Distance: </p>
        <p>Delivery Charges: </p>
        <p>Total: </p>
        {/* Other order details */}
      </div>


        {/* Buttons for confirm deletion and cancel */}
        <div className='flex gap-4'>
        <button className='bg-red-500 text-white p-2 rounded-lg hover:bg-red-600'>Confirm Deletion</button>
        <Link to='/view-orders'>
          <button className='bg-gray-300 text-gray-700 p-2 rounded-lg hover:bg-gray-400'>Cancel</button>
        </Link>
      </div>
    </div>
  )
}

