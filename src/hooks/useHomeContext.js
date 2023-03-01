import { HomeContext } from '../context/HomeContext'
import { useContext } from 'react'

export const useHomeContext = () => {
    const context = useContext(HomeContext)

    if (!context) {
        throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
    }

    return context
}