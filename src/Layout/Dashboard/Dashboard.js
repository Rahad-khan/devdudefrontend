import React from 'react';
import { Outlet } from 'react-router-dom';
import Slidebar from '../../components/Dashboard/Slidebar';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-12 h-screen gap-4'>
            <Slidebar />
            <div className='col-span-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
