import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLoginGoogle = () => {
    const [errorr, setErrorr] = useState(null)
    const [isLoadingg, setIsLoadingg] = useState(null)
    const { dispatch } = useAuthContext()

    const loginGoogle = async (email, googleId) => {
        setIsLoadingg(true)
        setErrorr(null)

        const response = await fetch('/api/user/loginGoogle', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, googleId })
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoadingg(false)
            setErrorr(json.error)
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            dispatch({type: 'LOGIN', payload: json})

            // update loading state
            setIsLoadingg(false)
        }
    }

    return { loginGoogle, isLoadingg, errorr }
}