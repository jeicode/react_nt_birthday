import React, { useContext, useEffect } from 'react'
import { View, Text, Button} from 'react-native'
import styles from '../../../shared/styles'


import firebase from '../../../firebase/config'
import {getAuth, signOut} from 'firebase/auth'


export default function HomeScreen() {

    return (
        <View>
            <Text style={styles.colorPrimary}>HomeScreen</Text>
            <LogOut />
        </View>
    )
}


function LogOut() {
    const auth = getAuth(firebase);
    const logOut = () => {
        signOut(auth).then(res => console.log("logout ", res))
    }

    return (
        <View>
            <Button title="LogOut" onPress={logOut} />
        </View>
    )
}
