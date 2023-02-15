import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import BirthdayItem from './BirthdayItem';
import useBirthdays from 'src/hooks/useBirthdays';
import Loader from 'src/shared/components/Loader';
import { FlatList } from 'react-native-gesture-handler';

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
                data={listBirthday}
                renderItem={(b) => <BirthdayItem key={b.id} birthday={b.item} setIsloading={setIsloading} />}
            />
        }
    </>
}

const styles = StyleSheet.create({
    scrollView: {
        paddingBottom: 50,
        width: '100%'
    },
});