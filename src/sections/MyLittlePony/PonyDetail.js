import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PonyDataContext } from './PonyDataContextProvider'

const PonyDetail = (props) => {
    const { ponyData, loading, error } = useContext(PonyDataContext)

    const { ponyId } = useParams()
    const ponyIdInt = parseInt(ponyId)

    const { id, image, name, residence, occupation, kind, url } = ponyData.find(
        (item) => item.id === ponyIdInt,
    )
    const [favourited, setFavourited] = useState([])

    useEffect(() => {
        const found = props.favourites.includes(id)
        found ? setFavourited(true) : setFavourited(false)
        console.log('useeffect - pony detail')
    }, [id, props.favourites])

    return (
        <div>
            {loading && <div>Loading...</div>}
            {ponyData && (
                <div>
                    <div>
                        {image.map((image, index) => (
                            <img
                                src={image}
                                key={index}
                                alt={name}
                                width="100"
                            />
                        ))}
                    </div>
                    <div>
                        <p>Name: {name ? name : 'Unknown'} </p>
                        <p>Residence: {residence ? residence : 'Unknown'} </p>
                        <p>
                            Occupation: {occupation ? occupation : 'Unknown'}{' '}
                        </p>
                        <p>Kind: {kind.join(', ')} </p>
                        <p>
                            <a href={url} target="_blank" rel="noreferrer">
                                Read more
                            </a>
                        </p>
                        <button
                            style={
                                favourited
                                    ? { backgroundColor: 'red' }
                                    : { backgroundColor: 'grey' }
                            }
                            onClick={() => props.onFavouriteClick(id)}
                        >
                            Heart me
                        </button>
                    </div>
                </div>
            )}

            {error ? error : null}
        </div>
    )
}

export default PonyDetail
