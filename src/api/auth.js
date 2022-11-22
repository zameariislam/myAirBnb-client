export const setAuthToken = (user) => {

    const currentUser = {
        email: user.email
    }

    // save user in db and get Token 

    fetch(`http://localhost:8000/user/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },

        body: JSON.stringify(currentUser)

    })
        .then(res => res.json())
        .then(data => {
            // save  token to local storage 
            localStorage.setItem('airbnb-token', data.token)

        })
        .catch(err => console.log(err.message))


}