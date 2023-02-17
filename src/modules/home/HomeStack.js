

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from 'src/modules/home/HomeScreen'
import DetailBirthday from 'src/modules/birthday/components/DetailBirthday'
import { ROUTES } from 'src/constants/routes'
import screenOptionsStack from 'src/shared/screenOptionsStack'
import { COLORS } from 'src/constants/colors'
/**
 *  definimos las rutas que va tener acceso nuestro stack del Home
 */
const Stack = createNativeStackNavigator()

export default function HomeStack() {
    return (
        <Stack.Navigator 
            initialRouteName={ROUTES.HOME}>
            <Stack.Screen 
                name={ROUTES.HOME} 
                component={HomeScreen} 
                options={{
                    headerTitle: 'Birthday app',
                    ...screenOptionsStack
                }}
            />
            <Stack.Screen 
                name={ROUTES.DETAIL_BIRTHDAY} 
                component={DetailBirthday} 
                options={{ 
                    title: 'Detail Birthday' ,
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTintColor: COLORS.LIGTH,
                    headerStyle: {
                        backgroundColor: COLORS.PRIMARY
                    },
                    headerTitle: 'Detail birthday',
                    contentStyle: {
                        backgroundColor: COLORS.PRIMARY
                    }
                }} 
            />
        </Stack.Navigator>
    )
}