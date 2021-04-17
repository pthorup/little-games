import React, { useRef } from 'react'
import MyLittlePonyCategory from './MyLittlePonyCategory'

const MyLittlePony = () => {
    const categories = useRef([
        'Alicorn',
        'Unicorn',
        'Earth',
        'Pegasus',
        'Dragon',
    ])

    return (
        <div>
            {/* {categories.current.map((category, index) => (
                <a href>{category}</a>
            ))} */}
            {/* <MyLittlePonyCategory key={index} category={category} /> */}
            <MyLittlePonyCategory category="Alicorn" />
        </div>
    )
}

export default MyLittlePony
