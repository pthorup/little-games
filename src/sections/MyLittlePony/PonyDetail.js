import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const PonyDetail = ({ ponies }) => {
    // let [loading, response, error] = useFetchData(
    //     'https://jsonplaceholder.typicode.com/posts/2',
    // )

    const { ponyId, ponyCat } = useParams()
    const ponyIdInt = parseInt(ponyId)
    const { image, name, residence, occupation, kind, url } = ponies.find(
        (item) => item.id === ponyIdInt,
    )

    return (
        <div>
            <Link to={`/my-little-pony/categories/${ponyCat}`}>
                Back to {ponyCat}
            </Link>
            <div>
                {image.map((image, index) => (
                    <img src={image} key={index} alt={name} width="100" />
                ))}
            </div>
            <div>
                <p>Name: {name} </p>
                <p>Residence: {residence} </p>
                <p>Occupation: {occupation} </p>
                <p>Kind: {kind[0]} </p>
                <p>
                    <a href={url} target="_blank" rel="noreferrer">
                        Read more
                    </a>
                </p>
            </div>

            {/* {loading && <div>Loading...</div>}
            {response && <div>{response.title}</div>}
            {error ? error : null} */}

            {/* <PonyListContext.Consumer>
                {data => (
                    
                )}
            </PonyListContext.Consumer> */}
        </div>
    )
}

export default PonyDetail
