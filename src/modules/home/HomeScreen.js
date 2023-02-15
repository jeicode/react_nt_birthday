import React, { useEffect, useState } from 'react'
import { Button } from 'react-native'
import { ROUTES } from 'src/constants/routes'
import ListBirthday from 'src/modules/birthday/components/ListBirthday'
import logOut from 'src/shared/helpers/logOut'


export default function HomeScreen({ navigation }) {
    const [reload, setReload] = useState(false)
    useEffect(() => {
        navigation.addListener('focus', () => {
            setReload(true)
        }
        )
    }, [navigation.addListener])

    return (
        <>
            <Button title='Logout' onPress={logOut} />
            <ListBirthday reload={reload} setReload={setReload} />
        </>
    )
}

