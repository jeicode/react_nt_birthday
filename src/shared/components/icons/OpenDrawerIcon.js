import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function OpenDrawerIcon({size = 23, color = '#fff', style}) {
    const navigation = useNavigation()
    return (
        <Ionicons
            onPress={() => navigation.openDrawer()}
            name="menu"
            size={size} 
            color={color}
            style={style} 
        />
    )
}