import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getRole } from '../api/user';

import Sidebar from '../components/Dashboard/Sidebar';
import { AuthContext } from '../contexts/AuthProvider';
import Spinner from '../components/Spinner/Spinner';

const DashBoardLayout = () => {


    const { user } = useContext(AuthContext)
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getRole(user?.email)
            .then(data => {
                console.log(data)
                setRole(data)
                console.log(role)
                setLoading(false)

            })

    }, [user?.email,role])

    return (
        <div className='md:flex  relative min-h-screen' >
            {
                loading ? <Spinner/> :
                    <>
                        <Sidebar role={role} />
                        <div className='flex-1 p-5'>
                            <Outlet />
                        </div>
                    </>
            }

        </div>
    );
};

export default DashBoardLayout;