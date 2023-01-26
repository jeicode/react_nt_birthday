import React from 'react'
import { View, Text, Button} from 'react-native'
import styles from '../../../shared/styles'


import {auth} from '../../../firebase/config'
import {signOut} from 'firebase/auth'


export default function HomeScreen() {

    return (
        <View>
            <Text style={styles.colorPrimary}>HomeScreen</Text>
            <LogOut />
        </View>
    )
}


function LogOut() {
    const logOut = () => {
        signOut(auth).then(res => console.log("logout ", res))
    }

    return (
        <View>
            <Button title="LogOut" onPress={logOut} />
        </View>
    )
}
