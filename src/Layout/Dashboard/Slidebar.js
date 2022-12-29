import React from 'react';
import { Link } from 'react-router-dom';

const Slidebar = () => {
    return (
        <div className='col-span-2 py-4 px-2 bg-emerald-200  rounded-2xl ml-2'>
            <h1 className='text-2xl font-semibold'>My Dashboard</h1>

            <ul>
                <Link to='add-blog'>
                    <li className='mt-4 bg-emerald-300  p-3 rounded-lg font-semibold text-lg'>
                        Add Blog
                    </li>
                </Link>
                <Link to='/dashboard'>
                    <li className='mt-4 bg-emerald-300  p-3 rounded-lg font-semibold text-lg'>
                        Product List
                    </li>
                </Link>
                <Link to='/'>
                    <li className='mt-4 bg-emerald-300  p-3 rounded-lg font-semibold text-lg'>
                        Back to Home
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default Slidebar;
