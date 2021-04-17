import React from 'react'
import useFetchData from '../../hooks/useFetchData'

const MyLittlePonyCategory = () => {
    let [loading, response, error] = useFetchData(
        'https://jsonplaceholder.typicode.com/posts/2',
    )

    console.log(response)

    return (
        <div>
            {loading && <div>Loading...</div>}
            {response && <div>{response.title}</div>}
            {error ? error : null}
        </div>
    )
}

export default MyLittlePonyCategory
