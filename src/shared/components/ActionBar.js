import { signOut } from 'firebase/auth';
import React, { useCallback } from 'react'
import { StyleSheet, Text, Touchable, TouchableNativeFeedback, View } from "react-native";
import { Link, useLocation } from 'react-router-native';
import { auth } from 'src/firebase/config';

export default function ActionBar() {

    const { pathname } = useLocation()
    let isBirthdayPath = pathname === '/new/birthday'
    const logOut = useCallback(() => {
        signOut(auth).then(res => console.log("logout ", res))
    }, [])


    return (
        <View style={[styles.viewFooter]}>
            <View style={styles.viewClose}>
                <Text style={styles.text} onPress={logOut}>
                    Log Out
                </Text>
            </View>

            <Link component={TouchableNativeFeedback} to={isBirthdayPath ? '/' : '/new/birthday'}
                style={[styles.viewAdd]}>
                <Text style={styles.text}>
                    {isBirthdayPath ? 'Cancel' : 'New Birthday'}
                </Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        marginBottom: 20,
    },
    viewClose: {
        backgroundColor: '#820000',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    viewAdd: {
        backgroundColor: '#1ea1f2',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    text: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
});