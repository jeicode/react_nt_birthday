

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import globalStyles from 'src/shared/styles'
import NotificationScreen from './NotificationScreen'

/**
 *  definimos las rutas que va tener acceso nuestro stack del Home
 */
const Stack = createNativeStackNavigator()

export default function NotificationStack() {
    return (
        <Stack.Navigator 
            initialRouteName="notifications" 
            screenOptions={{
                headerStyle: globalStyles.backgroundColor,
                headerTitleStyle: globalStyles.textLigth,
                contentStyle: globalStyles.backgroundColor
            }}>
            <Stack.Screen name='notifications' component={NotificationScreen} options={{ title: 'Notifications' }} />
        </Stack.Navigator>
    )
}