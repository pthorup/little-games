import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { data } from './my-little-pony-cat.json'
import { useParams } from 'react-router-dom'

const PonyDetail = () => {
    let [loading, response, error] = useFetchData(
        'https://jsonplaceholder.typicode.com/posts/2',
    )

    const images = data[0].image
    const name = data[0].name
    const params = useParams()
    console.log(params)
    return (
        <div>
            {/* {loading && <div>Loading...</div>}
            {response && <div>{response.title}</div>}
            {error ? error : null} */}
            <div>
                {images.map((image, index) => (
                    <img src={image} key={index} alt={name} />
                ))}
            </div>
            <div>
                <p>Name: {name} </p>
                <p>Residence: {data[0].residence} </p>
                <p>Occupation: {data[0].occupation} </p>
                <p>Kind: {data[0].kind[0]} </p>
                <p>
                    <a href={data[0].url} target="_blank" rel="noreferrer">
                        Read more
                    </a>
                </p>
            </div>
        </div>
    )
}

export default PonyDetail
