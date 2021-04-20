import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PonyDataContext } from './PonyDataContextProvider'

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
                    <img src={pony.image[0]} alt={pony.name} width="100" />
                </Link>
            </div>
        )
    })

    return (
        <div>
            {loading && <div>Loading...</div>}
            {ponyList && <div>{ponyList}</div>}
            {error ? error : null}
        </div>
    )
}

export default PonyList
