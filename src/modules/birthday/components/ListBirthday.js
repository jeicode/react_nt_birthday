import React  from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import BirthdayItem from './BirthdayItem';
import useBirthdays from 'src/hooks/useBirthdays';

export default function ListBirthday(props) {

    const {listBirthday, pastBirthdays, setGetBirthdays } =  useBirthdays()

    return (
        <ScrollView contentContainerStyle={[styles.scrollView]}>
            {listBirthday.map((b) => <BirthdayItem key={b.id} birthday={b} setGetBirthdays={setGetBirthdays} />)}
            {pastBirthdays.map(b => <BirthdayItem is_past={true} key={b.id} birthday={b} setGetBirthdays={setGetBirthdays} />)}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        paddingBottom: 50,
        width: '100%'
    },
});