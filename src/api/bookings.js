
//  Save a booking 
export const saveBooking = async (bookingData) => {
    const res = await fetch('http://localhost:8000/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',


        },
        body: JSON.stringify(bookingData)

    })
    const data = await res.json()
    return data




}

// getting all booking  for user


export const getAllBookingsByEmail = async (email) => {
    const res = await fetch(`http://localhost:8000/bookings?email=${email}`)
    const data = await res.json()
    return data


}


// get all bookings for admin 

export const getAllBookingsAdmin = async () => {
    const res = await fetch(`http://localhost:8000/bookings`)
    const data = await res.json()
    return data


}







