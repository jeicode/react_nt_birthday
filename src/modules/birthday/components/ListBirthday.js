import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import BirthdayItem from './BirthdayItem';
import useBirthdays from 'src/hooks/useBirthdays';
import Loader from 'src/shared/components/Loader';
import { FlatList } from 'react-native-gesture-handler';
import { Link} from '@react-navigation/native';
import { COLORS } from 'src/constants/colors';

export default function ListBirthday({ reload, setReload }) {
    const { listBirthday, setIsloading, isLoading } = useBirthdays()

    useEffect(() => {
        if (reload) {
            setIsloading(true)
            setReload(false)
        }
    }, [reload])
    return <>
        {isLoading ? <Loader /> :
            <FlatList
                ListEmptyComponent={<EmpthyList />}
                data={listBirthday}
                renderItem={(b) => <BirthdayItem key={b.id} birthday={b.item} setIsloading={setIsloading} />}
            />
        }
    </>
}


function EmpthyList(){
    return (
        <View style={styles.containerEmpthy}>
            <Text style={styles.text}>Not birthdays yet?</Text>
            <Text style={styles.text}>Come on, let's go create the first one</Text>
            <Link style={styles.link} to={{screen: 'createBirthdayTab'}}>Create my first Birthday</Link>
        </View>
    )
} 
const styles = StyleSheet.create({
    scrollView: {
        paddingBottom: 50,
        width: '100%'
    },
    containerEmpthy: {
        flex: 1,
        alignItems: 'center',
        marginTop: 23
    },  
    text: {
        color: COLORS.LIGTH
    },
    link: {
        color: '#308DFA',
        marginTop: 15,
        fontSize: 20
    }
});