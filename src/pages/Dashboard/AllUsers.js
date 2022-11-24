
import React, { useContext, useEffect, useState } from 'react';

import { getAllUers, makeHost } from '../../api/user';
import Spinner from '../../components/Spinner/Spinner';
import { AuthContext } from '../../contexts/AuthProvider';

const AllUsers = () => {

    const { user } = useContext(AuthContext)
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [accepted, setAccepted] = useState(false)



    useEffect(() => {
        getUsers()
        setLoading(false)


    }, [])

    const getUsers = () => {
        setLoading(true)
        getAllUers()
            .then(data => {
                setUsers(data)


            })

    }
    console.log(users)

    const handleSubmit = (user) => {
      
        makeHost(user)
        .then(data=>console.log(data))
        getUsers()
    }



    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>

                        <th>Email</th>
                        <th>ROLE</th>
                        <th>ACTION</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        loading ? <Spinner /> :
                            users?.map((user, index) => (

                                <tr key={index}>

                                    <td>
                                        <div className="flex items-center space-x-3">

                                            <div>
                                                <h1 className="font-bold">{user?.email}</h1>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {
                                            user?.role ? user.role : 'User'
                                        }

                                    </td>
                                    <td>
                                        {
                                            user?.role && user.role === 'requested' ? <span onClick={()=>handleSubmit(user)}>{accepted ? 'Approve request' :
                                                'pending request'}</span> : ''
                                        }

                                    </td>


                                </tr>
                            ))

                    }






                </tbody>



            </table>
        </div>
    );
};

export default AllUsers;