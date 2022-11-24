import React, { useContext, useEffect, useState } from 'react';
import { getImageUrl } from '../../api/imageUpload';
import { getRole, hostRequest } from '../../api/user';
import { AuthContext } from '../../contexts/AuthProvider';
import BecomeHostForm from '../../components/Form/BecomeHostForm';

const BecomeAHost = () => {

    const { user } = useContext(AuthContext)
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getRole(user?.email)
            .then(data => {
                console.log(data)
                setRole(data)
                setLoading(false)

            })

    }, [user?.email])


    const handleSubmit = (e) => {
        e.preventDefault()
        const location = e.target.location.value
        const image = e.target.image.files[0]
        getImageUrl(image)
            .then(data => {

                const hostData = {
                    location,
                    documentImg: data,
                    role: 'requested',
                    email: user?.email



                }
                hostRequest(hostData)
                    .then(data => console.log(data))

            })



    }

    return (<div>
        {
            role ? <div className='h-screen text-gray-700 flex flex-col justify-center' >Request has been sent ,wait for admin appoval</div>
                :
                <BecomeHostForm handleSubmit={handleSubmit} />
        }


    </div>)

};

export default BecomeAHost;