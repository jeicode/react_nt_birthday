

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from 'src/modules/home/HomeScreen'
import DetailBirthday from 'src/modules/birthday/components/DetailBirthday'
import globalStyles from 'src/shared/styles'


/**
 *  definimos las rutas que va tener acceso nuestro stack del Home
 */
const Stack = createNativeStackNavigator()

export default function HomeStack() {
    return (
        <Stack.Navigator 
            initialRouteName="home" 
            screenOptions={{
                headerStyle: globalStyles.backgroundColor,
                headerTitleStyle: globalStyles.textLigth,
                contentStyle: globalStyles.backgroundColor
            }}>
            <Stack.Screen name='home' component={HomeScreen} options={{ title: 'Home' }} />
            <Stack.Screen name='detailBirthday' component={DetailBirthday} options={{ title: 'Detail Birthday' }} />
        </Stack.Navigator>
    )
}