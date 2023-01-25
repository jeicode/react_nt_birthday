import React, { useState } from 'react'

const AuthUserContext = React.createContext(null)

function AuthUserContextProvider({children}) {
    const [user, setUser] = useState(null)

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