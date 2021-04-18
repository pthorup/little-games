import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { data } from './my-little-pony-cat.json'
import { Link, useParams } from 'react-router-dom'

const PonyList = (props) => {
    let [loading, response, error] = useFetchData(
        'https://jsonplaceholder.typicode.com/posts/',
    )

    const { ponyCat } = useParams()
    console.log(ponyCat)

    return (
        <div>
            {/* {loading && <div>Loading...</div>}
            {response && <div>{response.title}</div>}
            {error ? error : null} */}
            <div>
                {data.map((item, index) => (
                    <div key={index}>
                        <Link
                            to={`/my-little-pony/categories/${ponyCat}/${item.id}`}
                        >
                            <img src={item.image} alt={item.name} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PonyList
