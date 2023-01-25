import React, { useEffect, useState, useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';


import firebase from '../../../firebase/config';
import { getAuth } from 'firebase/auth'
import { AuthUserContext } from '../../../context/AuthUserContext';


const urlLOgo = 'https://raw.githubusercontent.com/xAgustin93/birthday-react-native-cli/master/src/assets/logo.png'

export default function Auth() {
    const { setUser } = useContext(AuthUserContext);
    const [loginIsActive, setLoginIsActive] = useState(true)

    useEffect(() => {
        const { currentUser } = getAuth(firebase)
        setUser(currentUser)
    }, [])
    return (
        <>
            <View style={[styles.view]}>
                <Image style={styles.logo} source={{ uri: urlLOgo }} />
                {loginIsActive ? <LoginForm /> : <RegisterForm />}
            </View>
            <View style={[styles.switchBtn]}>
                <TouchableOpacity onPress={() => setLoginIsActive(oldVal => !oldVal)}>
                    <Text style={styles.bottomBtnText}>
                        { loginIsActive ? "Don't have an account?": 'You have an account?' }</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        height: '100%',
    },
    logo: {
        width: '80%',
        height: 240,
        marginBottom: 50,
    },
    switchBtn: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 20,
        flexDirection: 'row',
    },
    bottomBtnText: {
        color: '#00a4e3',
        fontSize: 18
    }
});
