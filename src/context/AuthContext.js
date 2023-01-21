import React, { useState } from 'react'

const AuthContext = React.createContext(null)

function AuthContextProvider({children}) {
    const [loginIsActive, setLoginIsActive] = useState(true)

    const data = {
        loginIsActive, setLoginIsActive
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}


export {AuthContext, AuthContextProvider}