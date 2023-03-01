import { createContext, useReducer } from 'react'

export const HomeContext = createContext()

export const HomeReducer = (state, action) => {

}

export const HomeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(HomeReducer, {
        workouts: null
    })

    return (
        <HomeContext.Provider value={{...state, dispatch}}>
            { children }
        </HomeContext.Provider>
    )
}