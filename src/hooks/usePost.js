import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const usePost = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const addpost = async (formData) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/post/createPost', {
            method: 'POST',
            headers: {'Content-Type': 'multipart/form-data'},
            body: formData
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
          
        }
        if (response.ok) {
            // save the user to local storage
            //localStorage.setItem('user', JSON.stringify(json))
            //localStorage.setItem('email', email)
            // update the auth context
            dispatch({type: 'LOGIN', payload: json})

            // update loading state
            setIsLoading(false)
        }
    }

    const showpost = async (formData) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/post/posts', {
            method: 'GET'
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
          
        }
        if (response.ok) {
            // save the user to local storage
            //localStorage.setItem('user', JSON.stringify(json))
            //localStorage.setItem('email', email)
            // update the auth context
            dispatch({type: 'LOGIN', payload: json})

            // update loading state
            setIsLoading(false)
        }
    }

    return { addpost, showpost, isLoading, error }
} 