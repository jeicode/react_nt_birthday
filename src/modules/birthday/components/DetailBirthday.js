import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import useBirthdayone from 'src/hooks/useBirthdayone';
import { COLORS } from 'src/constants/colors';
import { formatDate } from 'src/shared/helpers/formatDate';
import { getAgePerson } from 'src/shared/helpers';

export default function DetailBirthday({ route }) {
    const birthday = useBirthdayone({ id: route?.['params']?.id })
    console.log('%cDetailBirthday.js line:10 objectbirthday', 'color: #007acc;', birthday);
    return (
        <View style={[styles.container]}>
            <Text style={styles.title}>{`${birthday?.name} ${birthday?.lastname}`}</Text>
            <View>
                <Text style={styles.textBold}>
                    Date birth:
                </Text>
                <Text style={styles.normalText}>
                    { formatDate({seconds: birthday?.birthDate?.seconds})}
                </Text>

                <Text style={styles.textBold}>
                    Age:
                </Text>
                <Text style={styles.normalText}>
                    { getAgePerson({seconds: birthday?.birthDate?.seconds}) }
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        borderColor: '#276BE3',
        height: 12,
        borderWidth: 1,
        marginHorizontal: 50,
        marginVertical: 100,
        borderRadius: 20
    },
    title: {
        marginTop: 18,
        color: COLORS.LIGTH,
        fontSize: 20
    },
    textBold: {
        padding: 10,
        color: COLORS.LIGTH

    },
    normalText: {
        backgroundColor: 'white',
        color: 'black'

    }
})