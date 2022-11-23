import React, { useContext, useEffect, useState } from 'react';
import { getAllBookingsByEmail } from '../../api/bookings';
import { AuthContext } from '../../contexts/AuthProvider';
import Spinner from '../Spinner/Spinner';

const Mybookings = () => {

    const { user } = useContext(AuthContext)
    const [mybookings, setMyBookings] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(() => {

        getAllBookingsByEmail(user?.email)
            .then(data => {

                setMyBookings(data)
                setLoading(false)
            })
            .catch(err=> {
                console.log(err.message)
                setLoading(false)
            })
    }, [user?.email])





    return (
        
            loading ? <Spinner/> :
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon

                            </td>
                            <td>Purple</td>
                            <td>Purple</td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">cancel</button>
                            </th>
                        </tr>






                    </tbody>



                </table>
            </div>
        
       
    );
};

export default Mybookings;