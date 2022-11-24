import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import AdminMenu from './AdminMenu';
import HostMenu from './HostMenu';
import UserMenu from './UserMenu';

const Sidebar = ({ role, loading, }) => {

    console.log(role)

    const { user, logout } = useContext(AuthContext)
    const [isActive, setActive] = useState(false)


    return (
        <div className='w-64'>
            <div class="flex flex-col w-64 h-screen py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700">


                <Link to={'/dashboard'} class="flex flex-col items-center mt-6 -mx-2">
                    <img class="object-cover w-24 h-24 mx-2 rounded-full" src={user?.photoURL
                    } alt="avatar" />
                    <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">{user?.displayName}</h4>
                    <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">{user?.email}</p>
                </Link>

                <div class="flex flex-col justify-between flex-1 mt-6">
                    <nav>

                        {
                            role && role !=='requested'?(
                                role==='admin'?<AdminMenu/>:<HostMenu/>

                            ):<UserMenu/>
                        }


                       

                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;