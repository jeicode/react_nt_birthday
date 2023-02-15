import { View, StyleSheet, Button } from 'react-native'
import React, { useCallback, useContext, useState } from 'react'
import { Formik } from 'formik'

import DateTimePickerModal from 'src/shared/components/DateTimePickerModal';
import FormikInput from "src/shared/components/FormikInput"
import { birthdayFormSchema } from 'src/formsValidations/birthdaySchemas';
import { addDoc, collection } from 'firebase/firestore';
import { db } from 'src/firebase/config';
import { AuthUserContext } from 'src/context/AuthUserContext';

const initialValues = {
    name: "",
    lastname: "",
    birthDate: ""
}
export default function BirthdayFormScreen({navigation}) {
    const currentDate = new Date()
    const [datePickerIsOpen, setDatePickerIsOpen] = useState(false)
    const { user } = useContext(AuthUserContext)    
    const createBirthday = useCallback(async (values) => {
        let brd = new Date(values.birthDate)
        brd.setYear(2000)
        try {
            await addDoc(collection(db, 'birthday_' + user.uid), {birthdayDate:brd, ...values})
            navigation.navigate('home')
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }, [])

    return (
        <>
            <Formik
                validationSchema={birthdayFormSchema}
                initialValues={initialValues}
                onSubmit={values => createBirthday(values)}
            >
                {({ handleSubmit, setFieldValue, values }) => (

                    <View style={styles.container}>
                        <FormikInput
                            sele
                            placeholder='Name'
                            placeholderTextColor='#969696'
                            name='name' />
                        <FormikInput
                            placeholder='Lastname'
                            placeholderTextColor='#969696'
                            name='lastname' />
                        <FormikInput
                            placeholder='Select Birt Date'
                            placeholderTextColor='#969696'
                            name='birthDate'
                            timestamp={true}
                            type='datePicker'
                            onPress={() => setDatePickerIsOpen(true)}
                        />
                        <Button onPress={handleSubmit} title="Create Birthday" />
                        <DateTimePickerModal
                            open={datePickerIsOpen}
                            mode="date"
                            value={values.birthDate ? values.birthDate : currentDate}
                            maximumDate={currentDate}
                            onChange={({ nativeEvent }) => {
                                const selectedDate = new Date(nativeEvent.timestamp)
                                setDatePickerIsOpen(false);
                                setFieldValue("birthDate", selectedDate)
                            }}
                        />
                    </View>
                )}
            </Formik>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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
    datepicker: {
        justifyContent: 'center',
    },
    addButton: {
        fontSize: 18,
        color: '#fff',
    },
});