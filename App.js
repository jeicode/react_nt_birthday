import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Auth from './src/components/Auth';
import { AuthContextProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.background}>
        <AuthContextProvider>
          <Auth />
        </AuthContextProvider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#15212b',
    height: '100%',
  },
});
