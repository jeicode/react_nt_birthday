import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';


import 'firebase/firestore';
import BirthdayItem from './BirthdayItem';
import globalStyles from 'src/shared/styles';

export default function ListBirthday(props) {
    const { user } = props;
    const listBirthday = [1,2,3,4,5,6,7,8,9]

    return (
        <ScrollView contentContainerStyle={[styles.container, globalStyles.inspect]}>
            <View style={styles.scrollView}>
                { listBirthday.map((b, index) => <BirthdayItem key={index}/> )}
            </View>
        
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    scrollView: {
        marginBottom: 50,
        width: '100%'
    },
});