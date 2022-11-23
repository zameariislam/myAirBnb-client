import React, { useContext } from 'react';
import { getImageUrl } from '../../api/imageUpload';
import { hostRequest } from '../../api/user';
import { AuthContext } from '../../contexts/AuthProvider';
import BecomeHostForm from '../Form/BecomeHostForm';

const BecomeAHost = () => {

    const { user } = useContext(AuthContext)


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
                    email:user?.email



                }
                hostRequest(hostData)
                .then(data=>console.log(data))

            })









    }

    return <BecomeHostForm handleSubmit={handleSubmit} />
};

export default BecomeAHost;