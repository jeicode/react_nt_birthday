import React, { useContext } from 'react'
import { View } from 'react-native'
import { Outlet } from 'react-router-native'
import { AuthUserContext } from 'src/context/AuthUserContext'

import ActionBar from 'src/shared/components/ActionBar'


export default function HomeScreen() {
    const {user} = useContext(AuthUserContext)
    if (!user) return null
    return (
        <>
            <View style={{height:'100%'}}>
                <Outlet />
            </View>
            <ActionBar />
        </>
    )
}

