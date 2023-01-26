import React, { useEffect, useContext } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Route, Routes, useNavigate } from 'react-router-native';
import HomeScreen from './src/modules/home/screens/HomeScreen';
import AuthUserScreen from './src/modules/auth/screens/AuthUserScreen';
import Constants from 'expo-constants'
import { AuthUserContext } from './src/context/AuthUserContext';
import { getAuth } from 'firebase/auth';
import firebase from './src/firebase/config'

export default function Main() {
    const { setUser } = useContext(AuthUserContext)
    const navigate = useNavigate()

    useEffect(() => { // check if user is autenticated
        getAuth(firebase).onAuthStateChanged(res => {
            console.log("USER IS LOGED???? ", res?.uid);
            setUser(res)
            if (res) navigate('/')
            else navigate('/auth/user')
        })
    }, [])

    return (
        <>
            <StatusBar style="light" backgroundColor='#15212b' />
            <ScrollView style={[styles.container]}>

                <Routes >
                    <Route path='/' element={<HomeScreen />} />
                    <Route path='/auth/user' element={<AuthUserScreen />} />

                </Routes>

            </ScrollView>

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