import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loader({size = 'large'}) {
    return (
        <View style={[styles.container]}>
            <Text style={styles.text}>Please wait...</Text>
            <ActivityIndicator  size={size} />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    text:{
        textAlign: 'center',
        color:'#fff'
    }
})