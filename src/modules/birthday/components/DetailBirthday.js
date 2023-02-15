


import { View, Text } from 'react-native'
import React from 'react'

export default function DetailBirthday({route}) {

    const { id } = route.params;
    console.log('%cDetailBirthday.js line:10 id', 'color: #007acc;', id);

    return (
        <View>
            <Text>DetailBirthday</Text>
        </View>
    )
}