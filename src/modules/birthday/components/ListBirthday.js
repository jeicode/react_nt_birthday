import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import BirthdayItem from './BirthdayItem';
import useBirthdays from 'src/hooks/useBirthdays';
import Loader from 'src/shared/components/Loader';

export default function ListBirthday(props) {

    const { listBirthday, pastBirthdays, setIsloading, isLoading } = useBirthdays()

    return <>
        {isLoading ? <Loader /> :
            <ScrollView contentContainerStyle={[styles.scrollView]}>
                {listBirthday.map((b) => <BirthdayItem key={b.id} birthday={b} setIsloading={setIsloading} />)}
                {pastBirthdays.map(b => <BirthdayItem is_past={true} key={b.id} birthday={b} setIsloading={setIsloading} />)}
            </ScrollView>
        }
    </>
}

const styles = StyleSheet.create({
    scrollView: {
        paddingBottom: 50,
        width: '100%'
    },
});