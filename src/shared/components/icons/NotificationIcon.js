import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function NotificationIcon({size = 23, color = '#fff' ,...props}) {
    return <Ionicons name="notifications" size={size} color={color} {...props}/>
}