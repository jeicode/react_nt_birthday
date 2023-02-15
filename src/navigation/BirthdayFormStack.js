
import React from 'react'

import { createNativeStackNavigator  } from '@react-navigation/native-stack'
import globalStyles from 'src/shared/styles'
import BirthdayFormScreen from 'src/modules/birthday/screens/BirthdayFormScreen'

const Stack = createNativeStackNavigator()

export default function BirthdayFormStack() {
    return (
        <Stack.Navigator 
            initialRouteName="birthdayForm" 
            screenOptions={{
                headerStyle: globalStyles.backgroundColor,
                headerTitleStyle: globalStyles.textLigth,
                contentStyle: globalStyles.backgroundColor
            }}>
            <Stack.Screen 
                name='birthdayForm' 
                component={BirthdayFormScreen} 
                options={{ title: 'Create Birthday' }} 
            />
        </Stack.Navigator>
    )
}