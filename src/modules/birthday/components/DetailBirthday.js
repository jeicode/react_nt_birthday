


import { View, Text } from 'react-native'
import React from 'react'

export default function DetailBirthday({route}) {

    console.log('%cDetailBirthday.js line:10 id', 'color: #007acc;', route?.['params']?.id);

    return (
        <View>
            <Text>DetailBirthday</Text>
        </View>
    )
}