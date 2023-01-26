import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Birthday(props) {


    return (
        <TouchableOpacity
            style={[
                styles.card,
                styles.current
            ]}
            onPress={() => {}}>
            <Text style={styles.userName}>
                David Culian
            </Text>
            <Text style={{ color: '#fff' }}>Cumpleaños pasado</Text>
        </TouchableOpacity>
    );
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
    actual: {
        backgroundColor: '#559204',
    },
    current: {
        backgroundColor: '#1ae1f2',
    },
    pasat: {
        backgroundColor: '#820000',
    },
    userName: {
        color: '#fff',
        fontSize: 16,
    },
    textCurrent: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});