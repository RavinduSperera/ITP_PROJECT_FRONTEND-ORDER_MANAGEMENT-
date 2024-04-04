import React from 'react'
import { Link } from 'react-router-dom';

export default function UpdateOrder() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold my-7'><b>Update your Order</b></h1>

      <form className='flex flex-col gap-4'>
        <label>Customer ID</label>
        <input type='text' placeholder='xxxxxxxxxxxx' className='border border-black p-3 rounded-lg'></input>

        <label>Purchase Amount</label>
        <input type='number' placeholder='0' className='border border-black p-3 rounded-lg'></input>

        <label>Order Status</label>
        <input type='text' placeholder='pending...' className='border border-black p-3 rounded-lg'></input>

        <label>Additional Notes</label>
        <textarea className='border border-black p-3 rounded-lg'></textarea>
        
        <label>Delivery Distance</label>
        <input type='number' placeholder='km' className='border border-black p-3 rounded-lg'></input>

        <label>Delivery Charges</label>
        <input type='number' placeholder='RS.' className='border border-black p-3 rounded-lg'></input>

        <label>Total Amount</label>
        <input type='number' placeholder='RS.' className='border border-black p-3 rounded-lg'></input>

        <div className='flex gap-4'>
          <Link to='/view-orders'>
            <button className='bg-slate-950 text-white p-3 rounded-lg uppercase hover:opacity-95'>CONFIRM</button>
          </Link>
          <Link>
            <button className='bg-slate-300 text-red-600 p-3 rounded-lg uppercase hover:opacity-95'>BACK</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

// need to give specific access to the attribute to update, not for all 
