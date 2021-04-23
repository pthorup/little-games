import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PonyDataContext } from './PonyDataContextProvider'
import styled from 'styled-components'

const StyledPonList = styled.div`
    line-height: 0;

    -webkit-column-count: 5;
    -webkit-column-gap: 8px;
    -moz-column-count: 5;
    -moz-column-gap: 8px;
    column-count: 5;
    column-gap: 8px;

    .PonyList-image {
        margin-top: 8px;
        width: 100%;
    }
`

const PonyList = () => {
    const { ponyData, loading, error } = useContext(PonyDataContext)

    const { ponyCat } = useParams()

    const ponyFiltered = ponyData.filter(
        (pony) =>
            pony.kind !== undefined &&
            pony.image !== undefined &&
            pony.kind.includes(ponyCat),
    )

    const ponyList = ponyFiltered.map((pony) => {
        return (
            <div key={pony.id}>
                <Link to={`/my-little-pony/categories/${ponyCat}/${pony.id}`}>
                    <img
                        className="PonyList-image"
                        src={pony.image[0]}
                        alt={pony.name}
                    />
                </Link>
            </div>
        )
    })

    return (
        <div>
            {loading && <div>Loading...</div>}
            {ponyList && <StyledPonList>{ponyList}</StyledPonList>}
            {error ? error : null}
        </div>
    )
}

export default PonyList
