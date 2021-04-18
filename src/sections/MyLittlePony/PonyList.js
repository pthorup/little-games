import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PonyList = ({ ponies }) => {
    // let [loading, response, error] = useFetchData(
    //     'https://jsonplaceholder.typicode.com/posts/',
    // )

    const { ponyCat } = useParams()
    const ponyList = ponies.map((item, index) => (
        <div key={index}>
            <Link to={`/my-little-pony/categories/${ponyCat}/${item.id}`}>
                <img src={item.image} alt={item.name} width="100" />
            </Link>
        </div>
    ))

    return (
        <div>
            {/* {loading && <div>Loading...</div>}
            {response && <div>{response.title}</div>}
            {error ? error : null} */}

            {ponyList}
        </div>
    )
}

export default PonyList
