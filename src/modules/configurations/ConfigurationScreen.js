import { View, Text, Button } from 'react-native'
import React from 'react'
import logOut from 'src/shared/helpers/logOut'

export default function ConfigurationScreen() {
    return (
        <View>
            <Button title='Logout' onPress={logOut} />
        </View>
    )
}