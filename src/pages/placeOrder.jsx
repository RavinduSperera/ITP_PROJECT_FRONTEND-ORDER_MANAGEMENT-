import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PlaceOrder() {
  // State to manage order details
  const [orderDetails, setOrderDetails] = useState({
    customerId: '',
    purchaseAmount: '',
    orderStatus: '',
    additionalNotes: '',
    deliveryDistance: '',
    deliveryCharges: '',
    totalAmount: ''
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold my-7'><b>Make your Order</b></h1>

      <form className='flex flex-col gap-4'>
        <label>Customer ID</label>
        <input
          type='text'
          name='customerId'
          placeholder='xxxxxxxxxxxx'
          className='border border-black p-3 rounded-lg'
          value={orderDetails.customerId}
          onChange={handleInputChange}
        ></input>

        <label>Purchase Amount</label>
        <input
          type='number'
          name='purchaseAmount'
          placeholder='0'
          className='border border-black p-3 rounded-lg'
          value={orderDetails.purchaseAmount}
          onChange={handleInputChange}
        ></input>

        <label>Order Status</label>
        <input
          type='text'
          name='orderStatus'
          placeholder='pending...'
          className='border border-black p-3 rounded-lg'
          value={orderDetails.orderStatus}
          onChange={handleInputChange}
        ></input>

        <label>Additional Notes</label>
        <textarea
          name='additionalNotes'
          className='border border-black p-3 rounded-lg'
          value={orderDetails.additionalNotes}
          onChange={handleInputChange}
        ></textarea>
        
        <label>Delivery Distance</label>
        <input
          type='number'
          name='deliveryDistance'
          placeholder='km'
          className='border border-black p-3 rounded-lg'
          value={orderDetails.deliveryDistance}
          onChange={handleInputChange}
        ></input>

        <label>Delivery Charges</label>
        <input
          type='number'
          name='deliveryCharges'
          placeholder='RS.'
          className='border border-black p-3 rounded-lg'
          value={orderDetails.deliveryCharges}
          onChange={handleInputChange}
        ></input>

        <label>Total Amount</label>
        <input
          type='number'
          name='totalAmount'
          placeholder='RS.'
          className='border border-black p-3 rounded-lg'
          value={orderDetails.totalAmount}
          onChange={handleInputChange}
        ></input>

        <div className='flex gap-4'>
          {/* Pass orderDetails as state via Link */}
          <Link to={{ pathname: '/view-orders', state: { orderDetails }}}>
            <button className='bg-slate-950 text-white p-3 rounded-lg uppercase hover:opacity-95'>PLACE ORDER</button>
          </Link>
          <Link>
            <button className='bg-slate-300 text-red-600 p-3 rounded-lg uppercase hover:opacity-95'>CANCEL</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

