import React from 'react'
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-950 shadow-md'>
        <div className='flex justify-between items-center max-wi-6xl mx-auto p-3'>
            
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap text-white'>
                <span>UBER</span>
                <span>shopping</span>
            </h1>
            
            <form className='bg-zinc-900 p-3 rounded-lg flex items-center'>
                <input type='text' placeholder='search' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <FaSearch className='text-neutral-400'/>
            </form>

            <ul className='flex gap-4 text-white'>
                <Link to='/' className=' hover:text-gray-400'><li>Place</li></Link>
                <Link to='/view-orders' className=' hover:text-gray-400'><li>View</li></Link>
                <Link to='/update-order' className=' hover:text-gray-400'><li>Update</li></Link>
                <Link to='/delete-order' className=' hover:text-gray-400'><li>Delete</li></Link>
            </ul>
        </div>
    </header>
  )
}
