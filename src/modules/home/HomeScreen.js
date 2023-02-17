import React, { useEffect, useState } from 'react'
import ListBirthday from 'src/modules/birthday/components/ListBirthday'


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
            <ListBirthday navigation={navigation} reload={reload} setReload={setReload} />
        </>
    )
}

