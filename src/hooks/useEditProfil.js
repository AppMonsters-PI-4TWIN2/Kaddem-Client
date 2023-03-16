import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
//import { useHistory } from 'react-router-dom';

export const useEditProfil = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    //const history = useHistory();


    const editProfil = async (email,firstName,lastName,aboutMe,avatar) => {
        setIsLoading(true)
        setError(null)
        const token = localStorage.getItem('token');
        const response = await fetch('/api/user/updateuser', {
            method: 'PUT',
            headers: { Authorization: `Bearer ${token}` ,
                'Ma-Cle-Secrete': process.env.SECRET,'Content-Type': 'application/json' },
            body: JSON.stringify({ email,firstName,lastName,aboutMe,avatar })
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // save the user to local storage
            // localStorage.setItem('user', JSON.stringify(json))
            // history.push('/');
            // update the auth context
            // update loading state
            setIsLoading(false)
        }
    }

    return { editProfil, isLoading, error }
}