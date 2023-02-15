import { Text, TouchableOpacity, StyleSheet, View, Alert } from 'react-native'
import React, { useContext } from 'react'
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from 'src/firebase/config';
import { AuthUserContext } from 'src/context/AuthUserContext';
import globalStyles from 'src/shared/styles';

export default function BirthdayItem({ birthday, setIsloading}) {
    const {user} = useContext(AuthUserContext)
    return (
        <TouchableOpacity
            style={[
                styles.card,
                birthday.is_past && styles.past,
                birthday.remaining_days == 0 && styles.today,
                birthday.remaining_days >= 1 && styles.normal
            ]}
            onPress={() => alertDelete({birthday, user, setIsloading}) }>
            <Text style={styles.userName}>
                {`${birthday.name} ${birthday.lastname}`}
            </Text>

            {birthday.is_past ?
                <Text style={globalStyles.textLigth}>Past Birthday</Text> :
                <InfoDays remaining_days={birthday.remaining_days} />}
        </TouchableOpacity>
    );
}


function alertDelete({birthday, user, setIsloading}) {
    return Alert.alert(
        'Delete Birthday',
        `Are you sure delete Birthday of ${birthday.name} ${birthday.lastname}?`, 
        [
            {
                text:'Cancel',
                style: 'cancel'
            },
            {
                text: 'Delete',
                onPress:  () => {
                    deleteDoc(doc(db, `birthday_${user.uid}`, birthday.id)).then( () => {
                        setIsloading(true)
                    }).catch( res =>console.log("res ", res))
                }

            },
    ])

}


function InfoDays({ remaining_days }){
    let descBirthday = ""
    if (remaining_days === 0) descBirthday = 'Today is the Birthday 🥳'
    else if (remaining_days === 1) descBirthday = `Remain ${remaining_days} Day`
    else descBirthday = `Remain ${remaining_days} Days`

    return (
        <View style={styles.textDays}>
            <Text>{descBirthday}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        alignItems: 'center',
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 15,
    },
    today: {
        backgroundColor: '#559204',
    },
    normal: {
        backgroundColor: '#1ae1f2',
    },
    past: {
        backgroundColor: '#820000',
    },
    userName: {
        color: '#fff',
        fontSize: 16,
    },
    textDays: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
});