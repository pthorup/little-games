import { useEffect, useReducer } from 'react'
import axios from 'axios'

const useFetchData = (url) => {
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case 'LOADING':
                    return {
                        ...state,
                        loading: true,
                    }
                case 'RESOLVED':
                    return {
                        ...state,
                        loading: false,
                        response: action.response,
                        error: null,
                    }
                case 'ERROR':
                    return {
                        ...state,
                        loading: false,
                        response: null,
                        error: action.error,
                    }
                default:
                    return state
            }
        },
        {
            loading: true,
            response: {},
            error: '',
        },
    )

    useEffect(() => {
        dispatch({ type: 'LOADING' })
        axios
            .get(url)
            .then((response) => {
                dispatch({ type: 'RESOLVED', response: response.data })
                console.log('Fetched data')
            })
            .catch((error) => {
                dispatch({ type: 'ERROR', error })
            })
    }, [url])
    return [state.loading, state.response, state.error]
}

export default useFetchData
