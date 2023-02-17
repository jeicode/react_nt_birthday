

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ROUTES } from 'src/constants/routes'
import ConfigurationScreen from './ConfigurationScreen'
import screenOptionsStack from 'src/shared/screenOptionsStack'



/**
 *  definimos las rutas que va tener acceso nuestro stack del Home
 */
const Stack = createNativeStackNavigator()

export default function ConfigurationStack({ navigation }) {
    return (
        <Stack.Navigator 
            initialRouteName={ROUTES.CONFIGURATION}
            screenOptions={screenOptionsStack}>
            <Stack.Screen 
                name={ROUTES.CONFIGURATION} 
                component={ConfigurationScreen} 
                options={{ 
                    headerTitleAlign: 'center',
                    title: 'Configuration' 
                }} />
        </Stack.Navigator>
    )
}