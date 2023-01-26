import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { Formik } from 'formik'
import FormikInput from '../../../shared/components/FormikInput'
import { loginSchema } from '../../../formsValidations/authSchemas'

const initialValues = {
    password: '',
    email: '',
}
export default function LoginForm() {
    return (
        <Formik
            validationSchema={loginSchema}
            initialValues={initialValues}
            onSubmit={values => console.log(values)}>
            {({ handleSubmit, errors }) => (
                <View style={styles.view}>
                    <FormikInput
                        errors={errors}
                        placeholder='Email'
                        placeholderTextColor='#969696'
                        name='email'/>
                    <FormikInput
                        errors={errors}
                        placeholder='Password'
                        secureTextEntry 
                        placeholderTextColor='#969696'
                        name='password'/>
                    <Button onPress={handleSubmit} type="submit" title="Log In" />
                </View>
            )}
        </Formik>
    )
}


const styles = StyleSheet.create({
    view: {
        width:'100%',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
    }
});