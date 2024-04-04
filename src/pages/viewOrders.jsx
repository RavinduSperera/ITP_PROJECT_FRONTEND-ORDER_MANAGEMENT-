import React, { useState } from 'react';

export default function ViewOrders() {
  // State to manage orders and search query
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle updating an order
  const updateOrder = (orderId) => {
    // Implement update logic here
    console.log("Update order with ID:", orderId);
  };

  // Function to handle deleting an order
  const deleteOrder = (orderId) => {
    // Implement delete logic here
    console.log("Delete order with ID:", orderId);
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filtered orders based on search query
  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold my-7'>View Orders</h1>

      {/* Search bar */}
      <input
        type='text'
        placeholder='Search by Order ID'
        value={searchQuery}
        onChange={handleSearchChange}
        className='border border-black p-3 rounded-lg mb-4'
      />

      {/* Display filtered orders as a vertical list */}
      <div>
        {filteredOrders.map(order => (
          <div key={order.id} className='border p-3 mb-4'>
            <p>Order ID: {order.id}</p>
            <p>Customer ID: {order.customerId}</p>
            <p>Purchase Amount: {order.purchaseAmount}</p>
            <p>Order Status: {order.status}</p>
            <p>Additional Notes: {order.notes}</p>
            <p>Delivery Distance: {order.deliveryDistance} km</p>
            <p>Delivery Charges: {order.deliveryCharges} RS.</p>
            <p>Total Amount: {order.totalAmount} RS.</p>

            {/* Buttons for update and delete */}
            <div className='flex gap-4'>
              <button onClick={() => updateOrder(order.id)} className='bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600'>Update</button>
              <button onClick={() => deleteOrder(order.id)} className='bg-red-500 text-white p-2 rounded-lg hover:bg-red-600'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

