import React, { createContext, useCallback } from 'react'
import { data } from './my-little-pony-cat.json'
import useFetchData from '../../hooks/useFetchData'

const PonyDataContext = createContext()

const PonyDataContextProvider = (props) => {
    // let [loading, response, error] = useFetchData(
    //     // 'https://jsonplaceholder.typicode.com/posts/',
    //     // 'https://ponyweb.ml/v1/character/all?limit=10',
    // )

    let [loading, response, error] = useFetchData(
        'https://jsonplaceholder.typicode.com/posts/',
        // 'https://ponyweb.ml/v1/character/all?limit=10',
    )

    // const loading = false
    // const error = null

    //console.log(data)
    console.log('provider')
    return (
        // remember it is ponyData:response.data
        <PonyDataContext.Provider
            value={{ ponyData: response, loading, error }}
        >
            {props.children}
        </PonyDataContext.Provider>
    )
}

export { PonyDataContextProvider, PonyDataContext }
