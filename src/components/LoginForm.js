import React, { useContext } from 'react'
import {TextInput, TouchableOpacity, Text, View, StyleSheet} from 'react-native'
import { AuthContext } from '../context/AuthContext'

export default function LoginForm() {

    const {setLoginIsActive} = useContext(AuthContext)
    const onChange = (e, tet ) => {

    }

    const login = () =>{}
    return (
        <>
            <TextInput
                style={[styles.input, styles.error]}
                placeholder="Correo electronico"
                placeholderTextColor="#969696"
                onChange={(e) => onChange(e, 'email')}
            />
            <TextInput
                style={[styles.input, styles.error]}
                placeholder="Contraseña"
                placeholderTextColor="#969696"
                secureTextEntry={true}
                onChange={(e) => onChange(e, 'password')}
            />
            <TouchableOpacity onPress={login}>
                <Text style={styles.btnText}>Iniciar sesión</Text>
            </TouchableOpacity>

        </>
    );
}

function defaultValue() {
    return {
        email: '',
        password: '',
    };
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        color: '#fff',
        width: '80%',
        marginBottom: 25,
        backgroundColor: '#1e3040',
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#1e3040',
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
    },
    error: {
        borderColor: '#940c0c',
    },
});