
import React from 'react'

import { createNativeStackNavigator  } from '@react-navigation/native-stack'
import BirthdayFormScreen from 'src/modules/birthday/screens/BirthdayFormScreen'
import screenOptionsStack from 'src/shared/screenOptionsStack'

const Stack = createNativeStackNavigator()

export default function BirthdayFormStack() {
    return (
        <Stack.Navigator 
            initialRouteName="birthdayForm" 
            screenOptions={screenOptionsStack}>
            <Stack.Screen 
                name='birthdayForm' 
                component={BirthdayFormScreen} 
                options={{ 
                    title: 'Create Birthday' 
                }} 
            />
        </Stack.Navigator>
    )
}