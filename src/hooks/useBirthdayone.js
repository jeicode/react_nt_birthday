

import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from 'src/firebase/config';
import { AuthUserContext } from 'src/context/AuthUserContext';

export default function useBirthdayone({id}) {
    const [birthday, setBirthday] = useState(undefined);
    const {user} = useContext(AuthUserContext)
    useEffect(() => {
        if (id){
            const docRef = doc(db,`birthday_${user.uid}`, id);
            getDoc(docRef).then( docSnap => {
                if (docSnap.exists()){       
                    setBirthday(docSnap.data())         
                } 
            }).catch(err => console.log(err));
        }

    }, [])
    return birthday
}
