

export const hostRequest = async (hostData) => {

    const res = await fetch(`http://localhost:8000/user/${hostData?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',


        },
        body: JSON.stringify(hostData)

    })
    const data = await res.json()
    return data




}