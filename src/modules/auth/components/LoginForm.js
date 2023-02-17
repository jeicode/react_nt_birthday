import React, {useState} from 'react'
import { View, StyleSheet, Button, Text} from 'react-native'
import { Formik } from 'formik'
import FormikInput from '../../../shared/components/FormikInput'
import { loginSchema } from '../../../formsValidations/authSchemas'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase/config'

const initialValues = {
    password: '',
    email: '',
}
export default function LoginForm() {
    const [otherErrors, setOtherErrors] = useState(undefined);

    const login = ({email, password}) => {
        signInWithEmailAndPassword(auth,email, password).catch( ({...err}) => {
            setOtherErrors(err?.code)
        })
    }
    
    return (
        <Formik
            validationSchema={loginSchema}
            initialValues={initialValues}
            onSubmit={values => login(values) }>
            {({ handleSubmit }) => (
                <View style={[styles.view]}>
                    <FormikInput
                        placeholder='Email'
                        placeholderTextColor='#969696'
                        name='email'/>
                    <FormikInput
                        placeholder='Password'
                        secureTextEntry 
                        placeholderTextColor='#969696'
                        name='password'/>
                    <Button onPress={handleSubmit} type="submit" title="Log In" />
                    { otherErrors && <Text style={styles.otherErrors}> {otherErrors} </Text> }
                </View>
            )}
        </Formik>
    )
}


const styles = StyleSheet.create({
    view: {
        width:'100%',
        alignItems: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
    },
    otherErrors: {
        color:'red',
        marginTop:4,
        fontSize:12
    }
});