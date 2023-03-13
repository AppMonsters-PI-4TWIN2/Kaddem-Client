import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useForgotPwd = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const forgotpwd = async (email) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/forgotpwd', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email })
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('email', email)

            // update the auth context
            dispatch({type: 'LOGIN', payload: json})

            // update loading state
            setIsLoading(false)
        }
    }

    return { forgotpwd, isLoading, error }
}