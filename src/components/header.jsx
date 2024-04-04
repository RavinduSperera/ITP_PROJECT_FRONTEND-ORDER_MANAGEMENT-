import React from 'react'
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-300 shadow-md'>
        <div className='flex justify-between items-center max-wi-6xl mx-auto p-3'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span>UBER</span>
                <span>shopping</span>
            </h1>
            
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type='text' placeholder='search' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <FaSearch className='text-slate-600'/>
            </form>

            <ul className='flex gap-4'>
                <Link to='/view-orders'><li>My Orders</li></Link>
                <li>Profile</li>
                <li>Sign-in</li>
            </ul>
        </div>
    </header>
  )
}
