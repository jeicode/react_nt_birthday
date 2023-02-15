import React from 'react';
import { LogBox } from 'react-native'

import Main from './Main';
import { AuthUserContextProvider } from 'src/context/AuthUserContext';
import { NavigationContainer } from '@react-navigation/native'


LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native"])

export default function App() {
  return (
    <AuthUserContextProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </AuthUserContextProvider>
  );
}


