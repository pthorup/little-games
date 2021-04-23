import React, { useContext } from 'react'
import { PonyDataContext } from './PonyDataContextProvider'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Images = styled.div`
    flex: 1;
    line-height: 0;
    -webkit-column-count: 4;
    -webkit-column-gap: 8px;
    -moz-column-count: 4;
    -moz-column-gap: 8px;
    column-count: 4;
    column-gap: 8px;

    .Favourites-image {
        margin-top: 8px;
        width: 100%;
    }
`

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
                    <img
                        src={pony.image[0]}
                        alt={pony.name}
                        className="Favourites-image"
                    />
                </Link>
            </div>
        )
    })
    return (
        <div>
            {loading && <div>Loading...</div>}
            {ponyList.length > 0 ? (
                <Images>{ponyList}</Images>
            ) : (
                <div>
                    You have no favourite ponies. Go the Categories section and
                    search for some.
                </div>
            )}
            {error ? error : null}
        </div>
    )
}

export default Favourites
