import React, { useEffect, useContext } from 'react'
import { AuthUserContext } from './src/context/AuthUserContext';
import { auth } from './src/firebase/config'
import { StatusBar } from 'expo-status-bar';
import AuthUserScreen from 'src/modules/auth/screens/AuthUserScreen';
import DrawerNavigator from 'src/navigation/DrawerNavigator';


export default function Main() {
    const { setUser, user } = useContext(AuthUserContext)
    useEffect(() => auth.onAuthStateChanged(res => setUser(res)), [])
    if (user === undefined) return null
    return (
        <>
            <StatusBar style="light" backgroundColor='#15212b' />
            { user ? <DrawerNavigator/> : <AuthUserScreen />}
            
        </>
    )
}
