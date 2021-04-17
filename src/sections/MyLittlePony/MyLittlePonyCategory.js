import React, { useEffect } from 'react'
import PonyData from './my-little-pony-cat.json'

const MyLittlePonyCategory = ({ category }) => {
    const [pony]
    useEffect(() => {
        const getPonies = async () => {
            //fetc data here
        }
        getPonies()
        console.log(PonyData.data)
    }, [])

    return <div> {category}</div>
}

export default MyLittlePonyCategory
