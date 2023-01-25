import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import { Navigate } from 'react-router-native'
import { AuthUserContext } from '../../../context/AuthUserContext'
import styles from '../../../shared/styles'

export default function HomeScreen() {
    const {user} = useContext(AuthUserContext)
    if (!user) Navigate({to:'/auth/user'})
    return (
        <View>
            <Text style={styles.colorPrimary}>HomeScreen</Text>
        </View>
    )
}
