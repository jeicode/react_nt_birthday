import { Formik } from 'formik';
import React,{ useState } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native';
import FormikInput from '../../../shared/components/FormikInput'
import {registerSchema} from '../../../formsValidations/authSchemas'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import {auth} from '../../../firebase/config'
const initialValues = {
    email: '',
    password: '',
    repeatPassword: ''
}
export default function RegisterForm() {
    const [otherErrors, setOtherErrors] = useState(undefined);

    const registerUser = async({email, password}) => {
        createUserWithEmailAndPassword(auth,email,password).catch( ({...error})  => {
            setOtherErrors(error?.code)
            console.log("REGISTER USER ERROR ", error?.code);
        })

    }
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={values => registerUser(values)}>
                {({ handleSubmit }) => (
                    <View style={styles.view}>
                        <FormikInput
                            placeholder='Email'
                            placeholderTextColor='#969696'
                            name='email' />
                        <FormikInput
                            placeholder='Password'
                            secureTextEntry
                            placeholderTextColor='#969696'
                            name='password' />
                        <FormikInput
                            placeholder='Repeat Password'
                            secureTextEntry
                            placeholderTextColor='#969696'
                            name='repeatPassword' />
                        <Button onPress={handleSubmit} type="submit" title="Register" />
                        { otherErrors && <Text style={styles.otherErrors}> {otherErrors} </Text> }
                    </View>
                    
                )}
            </Formik>

        </>
    );
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
    otherErrors: {
        color:'red',
        marginTop:4,
        fontSize:12
    }
});