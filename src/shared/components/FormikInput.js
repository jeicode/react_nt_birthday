import React from 'react'
import { useField } from 'formik'
import { TextInput, Text, StyleSheet } from 'react-native'

export default function FormikInput({ name, ...props }) {

    const [field, meta, helpers] = useField(name)
    return (
        <>
            <TextInput
                placeholder='Email'
                style={[styles.input, (meta.error) && styles.error]}
                placeholderTextColor='#969696'
                onChangeText={value => {
                    helpers.setValue(value)
                }}
                value={field.value}
                {...props}
            />
            {(meta.error)&& <Text style={styles.txtError}>{meta.error}</Text> }
        </>
    )
}


const styles = StyleSheet.create({
    error: {
        borderColor: '#ED4756',
        borderWidth:1
    },
    txtError:{
        marginTop: -12,
        marginBottom: 12,
        marginLeft:10,
        color: '#ED4756'
    },
    input: {
        height: 50,
        color: '#fff',
        width: 260,
        marginBottom: 25,
        backgroundColor: '#1e3040',
        paddingHorizontal: 30,
        borderRadius: 50,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#1e3040',
    },
})