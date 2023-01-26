import React, { useEffect, useContext } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Route, Routes, useNavigate } from 'react-router-native';
import HomeScreen from './src/modules/home/screen/HomeScreen';
import AuthUserScreen from './src/modules/auth/screens/AuthUserScreen';
import Constants from 'expo-constants'
import { AuthUserContext } from './src/context/AuthUserContext';
import {auth} from './src/firebase/config'
import globalStyles from './src/shared/styles';

export default function Main() {
    const { setUser } = useContext(AuthUserContext)
    const navigate = useNavigate()

    useEffect(() => { // check if user is autenticated
        auth.onAuthStateChanged(res => {
            // console.log("USER IS LOGED???? ", res?.uid);
            setUser(res)
            if (res) navigate('/')
            else navigate('/auth/user')
        })
    }, [])

    return (
        <>
            <StatusBar style="light" backgroundColor='#15212b' />
            <ScrollView contentContainerStyle={[styles.container]}>
                <Routes>
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