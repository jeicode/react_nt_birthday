import React, { useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const urlLOgo = 'https://raw.githubusercontent.com/xAgustin93/birthday-react-native-cli/master/src/assets/logo.png'

export default function Auth() {
    const { loginIsActive, setLoginIsActive } = useContext(AuthContext)
    return (
        <View style={styles.view}>
            <Image style={styles.logo} source={{ uri: urlLOgo }} />
            {loginIsActive ? <LoginForm /> : <RegisterForm />}

            <View style={[styles.bottomBtn, ]}>
                <TouchableOpacity onPress={() => setLoginIsActive(oldVal => !oldVal)}>
                    <Text style={styles.bottomBtnText}>{loginIsActive ? 'Register' : 'Login'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    check:{
        borderColor: 'green',
        borderWidth: '2px'
    },
    view: {
        flex: 1,
        alignItems: 'center',
        height: '100%',
    },
    logo: {
        width: '80%',
        height: 240,
        marginTop: 50,
        marginBottom: 50,
    },
    bottomBtn:{
        flex:1,
        alignContent: 'flex-end',
        alignItems:'flex-end',
        marginBottom:10,
        flexDirection: 'row'
    },
    bottomBtnText:{
        color: '#fff',
        fontSize: 18
    }
});
