import React, { useEffect, useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import Constants from 'expo-constants'
import { AuthUserContext } from './src/context/AuthUserContext';
import { auth } from './src/firebase/config'
import BottomTabs from 'src/navigation/BottomTabs';
import { StatusBar } from 'expo-status-bar';



export default function Main() {
    const { setUser, user } = useContext(AuthUserContext)
    useEffect(() => { // check if user is autenticated
        auth.onAuthStateChanged(res => {
            console.log("USER IS LOGED???? ", res?.uid);
            setUser(res)
        })
    }, [])

    if (!user) return <Text>NO ESTAS LOGUEADO</Text>
    return (
        <>
            <StatusBar style="light" backgroundColor='#15212b' />
            <BottomTabs />
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