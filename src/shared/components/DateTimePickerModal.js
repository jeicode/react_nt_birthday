import React from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';


export default function DateTimePickerModal({ open, onChange, ...props }) {
    return <>
        {

            open && <DateTimePicker
                onChange={onChange}
                {...props}
            />
        }
        
    </>
}