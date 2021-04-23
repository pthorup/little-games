import React, { createContext } from 'react'
// import { data } from './my-little-pony-cat.json'
import useFetchData from '../../hooks/useFetchData'

const PonyDataContext = createContext()

const PonyDataContextProvider = (props) => {
    let [loading, response, error] = useFetchData(
        'https://ponyweb.ml/v1/character/all?limit=600',
    )

    return (
        <PonyDataContext.Provider
            value={{ ponyData: response.data, loading, error }}
        >
            {props.children}
        </PonyDataContext.Provider>
    )
}

export { PonyDataContextProvider, PonyDataContext }
