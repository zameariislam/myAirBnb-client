import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../components/Dashboard/Sidebar';

const DashBoardLayout = () => {
    return (
        <div className='md:flex  relative min-h-screen' >
            <Sidebar/>
            <div className='flex-1 p-5'>
                <Outlet/>
            </div>
        </div>
    );
};

export default DashBoardLayout;