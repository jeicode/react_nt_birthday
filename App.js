import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { AuthUserContextProvider } from './src/context/AuthUserContext';
import HomeScreen from './src/modules/home/screens/HomeScreen';
import AuthUserScreen from './src/modules/auth/screens/AuthUserScreen';
import Constants from 'expo-constants';
import globalStyles from './src/shared/styles';

export default function App() {

  return (
    <>
      <StatusBar style="light" backgroundColor='#15212b' />
      <ScrollView style={[styles.container]}>

        <NativeRouter>
          <AuthUserContextProvider>
            <Routes >

              <Route path='/' element={<HomeScreen />} />
              <Route path='/auth/user' element={<AuthUserScreen />} />

            </Routes>

          </AuthUserContextProvider>

        </NativeRouter>

      </ScrollView>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#15212b',
    height: '100%',
    paddingTop: Constants.statusBarHeight
  },

});
