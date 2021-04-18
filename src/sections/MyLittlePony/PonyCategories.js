import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const PonyCategories = () => {
    const categories = useRef([
        'Alicorn',
        'Unicorn',
        'Earth',
        'Pegasus',
        'Dragon',
    ])

    return (
        <div>
            <p>Links of charaters here</p>
            {categories.current.map((category, index) => (
                <div key={index}>
                    <Link to={`/my-little-pony/categories/${category}`}>
                        {category}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default PonyCategories
