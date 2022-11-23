import React, { useContext, useState } from 'react'
import { Tab } from '@headlessui/react'
import ReviewHouse from '../components/checkout/ReviewHouse'
import WhosComing from '../components/checkout/WhosComing'
import Payment from '../components/checkout/Payment'
import HomeCard from '../components/Card/HomeCard'

import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../contexts/AuthProvider'
import { saveBooking } from '../api/bookings'
import toast from 'react-hot-toast'

const Checkout = () => {

  const { user } = useContext(AuthContext)
 const[selectedIndex,setSelectedIndex] =useState(0)

  const homeData = {
    _id: '60ehjhedhjdj3434',
    location: 'Dhaka,Bangladesh',
    from: 23 / 11 / 2022,
    to: 24 / 11 / 2022,
    host: {
      name: 'john Doe',
      email: 'johndoe@gmail.com'

    },
    price: 98,
    total_guest: 4,
    bathroom: 2,
    ratings: 4,
    reviewa: 64



  }

  const [booking, setBooking] = useState({
    homeId: homeData._id,
    hostEmail: homeData?.host?.email,
    message: '',
    totalPrice: parseFloat(homeData.price) + 31,
    guestEmail: user?.email



  })

  const handleBooking = () => {
    console.log(booking)
    saveBooking(booking)
    .then(data=>{
      toast.success('Booking Successfully completed')

      
      console.log(data)})
    .catch(err=>{
      toast.error('Booking is Failed')
      console.log(err?.message)})

  }


  return <div className='container  mx-auto flex  justify-around '>
    <div>
      <Tab.Group
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
      defaultIndex={1}
      >
        <Tab.List>
          <Tab>1.Review house rules</Tab>
          <Tab>2.Whos's coming</Tab>
          <Tab>3.Confirm and pay</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <ReviewHouse />

          </Tab.Panel>
          <Tab.Panel>
            <WhosComing setBooking={setBooking} booking={booking} />

          </Tab.Panel>
          <Tab.Panel>
            <Payment handleBooking={handleBooking} />


          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>


    <div>
      <HomeCard />
      <div className='p-4  w-full h-full rounded shadow-lg'>
        <h1 className='text-gray-900 text-3xl title-font font-medium mb-2'>
          $35/ <span className='font-thin'>night</span>
        </h1>
        <div className='flex gap-1 mb-2'>
          <StarIcon className='h4 w-4 text-green-500' />{' '}
          <span>4.8 (10 reviews)</span>
        </div>

        <p>Dates</p>
        <div className='flex justify-between items-center p-2 border mt-1 mb-2'>
          <div>13/11/2022</div>
          <div>
            <ArrowRightIcon className='h5 w-5' />
          </div>
          <div>15/11/2022</div>
        </div>

        <div className='flex border-t border-gray-200 py-2'>
          <span className='text-gray-500'>$34 x  nights</span>
          <span className='ml-auto text-gray-900'>$</span>
        </div>
        <div className='flex border-t border-gray-200 py-2'>
          <span className='text-gray-500'>Cleaning Fee</span>
          <span className='ml-auto text-gray-900'>$10</span>
        </div>
        <div className='flex border-t border-gray-200 py-2'>
          <span className='text-gray-500'>Service Fee</span>
          <span className='ml-auto text-gray-900'>$21</span>
        </div>
        <div className='flex border-t border-b mb-6 border-gray-200 py-2'>
          <span className='text-gray-900 font-bold'>Total</span>
          <span className='ml-auto text-gray-900'>$</span>
        </div>


      </div>
    </div>






  </div>
}

export default Checkout