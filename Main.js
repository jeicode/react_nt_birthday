import React, { useEffect, useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import Constants from 'expo-constants'
import { AuthUserContext } from './src/context/AuthUserContext';
import { auth } from './src/firebase/config'
import { StatusBar } from 'expo-status-bar';
import BottomTabsNavigator from 'src/navigation/BottomTabsNavigator';
import AuthUserScreen from 'src/modules/auth/screens/AuthUserScreen';
import DrawerNavigator from 'src/navigation/DrawerNavigator';



export default function Main() {
    const { setUser, user } = useContext(AuthUserContext)
    useEffect(() => { // check if user is autenticated
        auth.onAuthStateChanged(res => setUser(res))
    }, [])

    if (user === undefined) return null
    return (
        <>
            <StatusBar style="light" backgroundColor='#15212b' />
            { user ? <DrawerNavigator/> : <AuthUserScreen />}
            
        </>
    )



}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#15212b',
        height: '100%',
        paddingTop: Constants.statusBarHeight
    },

});