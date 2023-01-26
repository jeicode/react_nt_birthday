import React from 'react'
import { View, Button} from 'react-native'

import {signOut} from 'firebase/auth'
import {auth} from 'src/firebase/config'
import ListBirthday from 'src/modules/birthday/components/ListBirthday'


export default function HomeScreen() {

    return (
        <View>
            <ListBirthday/>
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
