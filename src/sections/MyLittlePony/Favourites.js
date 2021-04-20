import React, { useContext } from 'react'
import { PonyDataContext } from './PonyDataContextProvider'
import { Link } from 'react-router-dom'

const Favourites = (props) => {
    const { ponyData, loading, error } = useContext(PonyDataContext)

    // Filter pony data to only include favourite pony ids
    const ponyFiltered = ponyData.filter((pony) =>
        props.favourites.includes(pony.id),
    )

    const ponyList = ponyFiltered.map((pony) => {
        return (
            <div key={pony.id}>
                <Link
                    to={`/my-little-pony/categories/${pony.kind[0]}/${pony.id}`}
                >
                    <img src={pony.image[0]} alt={pony.name} width="100" />
                </Link>
            </div>
        )
    })

    return (
        <div>
            {loading && <div>Loading...</div>}
            {ponyList.length > 0 ? (
                <div>{ponyList}</div>
            ) : (
                <div>Nothing found.</div>
            )}
            {error ? error : null}
        </div>
    )
}

export default Favourites
