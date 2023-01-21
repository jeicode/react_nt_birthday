import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function RegisterForm() {
    const setFormData = (data) => {

    }

    const register = () => {

    }

    return (
        <>
            <TextInput
                style={[styles.input]}
                placeholder="Correo electronico"
                placeholderTextColor="#969696"
                onChange={(e) => setFormData( {})}
            />
            <TextInput
                style={[styles.input]}
                placeholder="Contraseña"
                placeholderTextColor="#969696"
                secureTextEntry={true}
                onChange={(e) =>
                    setFormData({})
                }
            />
            <TextInput
                style={[styles.input]}
                placeholder="Repetir contraseña"
                placeholderTextColor="#969696"
                secureTextEntry={true}
                onChange={(e) =>
                    setFormData({})
                }
            />
            <TouchableOpacity onPress={register}>
                <Text style={styles.btnText}>Registrate</Text>
            </TouchableOpacity>

        </>
    );
}

function defaultValue() {
    return {
        email: '',
        password: '',
        repeatPassword: '',
    };
}

const styles = StyleSheet.create({
    btnText: {
        color: '#fff',
        fontSize: 18,
    },
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
    error: {
        borderColor: '#940c0c',
    },
});