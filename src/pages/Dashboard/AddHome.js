
import { format } from 'date-fns/esm';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { getImageUrl } from '../../api/imageUpload';
import { addHome } from '../../api/services';
import AddHomeForm from '../../components/Form/AddHomeForm';
import { AuthContext } from '../../contexts/AuthProvider';


const AddHome = () => {

    const { user } = useContext(AuthContext)

    const [arrival, setArrival] = useState(new Date())
    const [departure, setDeparture] = useState(new Date(arrival.getTime() + 24 * 60 * 60 * 1000))

    const handleSubmit = (e) => {
        e.preventDefault()


        const location = e.target.location.value
        const title = e.target.title.value
        const from = format(arrival, 'P')
        const to = format(departure, 'P')
        const price = e.target.price.value
        const totalguest = e.target.totalguest.value
        const bedrooms = e.target.bedrooms.value
        const bathrooms = e.target.bathrooms.value
        const image = e.target.image.files[0]
        const description = e.target.description.value

        getImageUrl(image)
            .then(data => {

                const homeData = {
                    location,
                    title,
                    from,
                    to,
                    price,
                    totalguest,
                    bedrooms,
                    bathrooms,
                    description,
                    image: data,
                    host: {
                        name: user?.displayName,
                        hostPhoto: user?.photoURL,
                        email: user?.email
                    }





                }
               
                addHome(homeData)
                    .then(data => {
                        toast.success('home is succesfulley added')
                        console.log(data)})
                        .catch(err=>toast.err(err.message))


            })



    }

    return (
        <AddHomeForm handleSubmit={handleSubmit}

            arrival={arrival}
            setArrival={setArrival}
            departure={departure}
            setDeparture={setDeparture}



        />

    );
};

export default AddHome;