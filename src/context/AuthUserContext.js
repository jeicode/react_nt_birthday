import { createContext, useState } from 'react'

const AuthUserContext = createContext(null)

function AuthUserContextProvider({children}) {
    const [user, setUser] = useState(undefined)

    const data = {
        user, setUser
    }
    return (
        <AuthUserContext.Provider value={data}>
            {children}
        </AuthUserContext.Provider>
    )
}


export {AuthUserContext, AuthUserContextProvider}